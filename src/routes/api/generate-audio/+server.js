import { json } from '@sveltejs/kit';
import { ElevenLabsClient } from 'elevenlabs';
import { put } from '@vercel/blob';
import { env } from '$env/dynamic/private';
import { PUBLIC_CONVEX_URL } from '$env/static/public';
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../../convex/_generated/api";

export async function POST({ request }) {
  try {
    // Robust way to get the API Key in Vercel/Node environment
    const ELEVENLABS_API_KEY = (env.ELEVENLABS_API_KEY || process.env.ELEVENLABS_API_KEY)?.trim();
    
    if (!ELEVENLABS_API_KEY) {
      console.error('ELEVENLABS_API_KEY no encontrada en env o process.env');
      return json({ error: 'Configuración de servidor incompleta (API Key no encontrada)' }, { status: 500 });
    }

    const client = new ElevenLabsClient({
      apiKey: ELEVENLABS_API_KEY,
    });

    const { text, essayId, slug } = await request.json();

    if (!text || !essayId || !slug) {
      return json({ error: 'Faltan datos requeridos (text, essayId, slug)' }, { status: 400 });
    }

    // 1. Generar audio con ElevenLabs
    const cleanText = text.replace(/<[^>]*>?/gm, '');

    const audio = await client.generate({
      voice: "HJmys3t5KLr6DUWl0kSe", // Voz: Rada
      text: cleanText,
      model_id: "eleven_multilingual_v2",
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75
      }
    });

    const chunks = [];
    for await (const chunk of audio) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    // 2. Subir a Vercel Blob
    const blob = await put(`essays/${slug}.mp3`, buffer, {
      access: 'public',
      contentType: 'audio/mpeg',
    });

    // 3. Actualizar Convex
    const CONVEX_URL = PUBLIC_CONVEX_URL || "https://aromatic-aardvark-340.convex.cloud";
    const convex = new ConvexHttpClient(CONVEX_URL);
    
    try {
      if (api.notes && api.notes.updateEssayAudioUrl) {
        await convex.mutation(api.notes.updateEssayAudioUrl, { 
          id: essayId, 
          audioUrl: blob.url 
        });
      } else if (api.essays && api.essays.updateAudioUrl) {
        await convex.mutation(api.essays.updateAudioUrl, { 
          id: essayId, 
          audioUrl: blob.url 
        });
      }
    } catch (convexError) {
      console.error('Error actualizando Convex:', convexError);
    }
    
    return json({ audioUrl: blob.url, success: true });

  } catch (error) {
    console.error('Error generando audio:', error);
    return json({ error: error.message }, { status: 500 });
  }
}
