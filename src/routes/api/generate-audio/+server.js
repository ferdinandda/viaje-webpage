import { json } from '@sveltejs/kit';
import { ElevenLabsClient } from 'elevenlabs';
import { put } from '@vercel/blob';
import { env } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../../convex/_generated/api";

export async function POST({ request }) {
  try {
    const ELEVENLABS_API_KEY = (env.ELEVENLABS_API_KEY || process.env.ELEVENLABS_API_KEY)?.trim();
    if (!ELEVENLABS_API_KEY) {
      return json({ error: 'API Key no configurada' }, { status: 500 });
    }

    const client = new ElevenLabsClient({ apiKey: ELEVENLABS_API_KEY });
    const { text, essayId, slug } = await request.json();

    if (!text || !essayId || !slug) {
      return json({ error: 'Faltan datos' }, { status: 400 });
    }

    // 1. Limpiar y dividir el texto en trozos de 2500 caracteres (límite plan gratuito)
    const cleanText = text.replace(/<[^>]*>?/gm, '');
    const chunks = [];
    for (let i = 0; i < cleanText.length; i += 2500) {
      chunks.push(cleanText.slice(i, i + 2500));
    }

    console.log(`Generando audio en ${chunks.length} partes...`);

    // 2. Generar audio para cada parte y acumular buffers
    const audioBuffers = [];
    for (const chunk of chunks) {
      const audioStream = await client.generate({
        voice: "HJmys3t5KLr6DUWl0kSe", // Rada
        text: chunk,
        model_id: "eleven_multilingual_v2",
        voice_settings: { stability: 0.5, similarity_boost: 0.75 }
      });

      const partChunks = [];
      for await (const part of audioStream) {
        partChunks.push(part);
      }
      audioBuffers.push(Buffer.concat(partChunks));
    }

    // 3. Unir todas las partes en un solo Buffer
    const finalBuffer = Buffer.concat(audioBuffers);

    // 4. Subir a Vercel Blob
    const blob = await put(`essays/${slug}.mp3`, finalBuffer, {
      access: 'public',
      contentType: 'audio/mpeg',
    });

    // 5. Actualizar Convex
    const CONVEX_URL = publicEnv.PUBLIC_CONVEX_URL || "https://aromatic-aardvark-340.convex.cloud";
    const convex = new ConvexHttpClient(CONVEX_URL);
    
    try {
      await convex.mutation(api.notes.updateEssayAudioUrl, { 
        id: essayId, 
        audioUrl: blob.url 
      });
    } catch (e) {
      console.error('Error Convex:', e);
    }
    
    return json({ audioUrl: blob.url, success: true });

  } catch (error) {
    console.error('Error ElevenLabs:', error);
    return json({ error: error.message }, { status: 500 });
  }
}
