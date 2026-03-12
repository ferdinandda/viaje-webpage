import { json } from '@sveltejs/kit';
import { ElevenLabsClient } from 'elevenlabs';
import { put } from '@vercel/blob';
import { ELEVENLABS_API_KEY } from '$env/static/private';
import { PUBLIC_CONVEX_URL } from '$env/static/public';

const client = new ElevenLabsClient({
  apiKey: ELEVENLABS_API_KEY,
});

export async function POST({ request }) {
  try {
    const { text, essayId, slug } = await request.json();

    if (!text || !essayId || !slug) {
      return json({ error: 'Faltan datos requeridos (text, essayId, slug)' }, { status: 400 });
    }

    // 1. Generar audio con ElevenLabs (usando una voz predeterminada, p.ej. "Aria")
    // Puedes cambiar el voiceId por uno que te guste de ElevenLabs
    const audio = await client.generate({
      voice: "Aria",
      text: text.replace(/<[^>]*>?/gm, ''), // Limpiar HTML para que no lea etiquetas
      model_id: "eleven_multilingual_v2"
    });

    // ElevenLabs devuelve un ReadableStream o Buffer dependiendo de la versión
    // Lo convertimos a Buffer para subirlo a Vercel Blob
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

    // 3. Actualizar Convex (usando una mutación HTTP o un cliente)
    // Para simplificar, asumimos que el cliente puede llamar a la mutación después
    // o lo hacemos aquí mismo con una petición fetch al sitio de Convex si está habilitado
    // Por ahora devolvemos la URL para que el frontend la guarde o la use
    
    return json({ audioUrl: blob.url });

  } catch (error) {
    console.error('Error generando audio:', error);
    return json({ error: error.message }, { status: 500 });
  }
}
