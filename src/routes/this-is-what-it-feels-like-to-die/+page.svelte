<script>
  const url = 'https://revistaviaje.cl/this-is-what-it-feels-like-to-die';
  const title = 'this is what it feels like to die (Deathbloom)';

  async function shareInstagram() {
    if (navigator.share) {
      await navigator.share({ title, url });
    } else {
      await navigator.clipboard.writeText(url);
      alert('Link copiado al portapapeles');
    }
  }
</script>

<div class="min-h-screen pt-32 md:pt-40 bg-black">
  <main class="bg-black">
    <div class="container mx-auto px-4 py-8">
      <h1
        class="text-5xl md:text-6xl lg:text-7xl font-normal mb-6 uppercase text-center mx-auto max-w-5xl tracking-tight leading-none text-white"
        style="font-family: 'Bebas Neue', sans-serif;"
      >
        this is what it feels like to die (Deathbloom)
      </h1>
      <p class="text-sm text-center font-['Jost'] mb-8 text-white">Por <a href="https://www.youtube.com/@wabyeliott" target="_blank" class="hover:underline">Waby Eliott</a></p>

      <div class="max-w-4xl mx-auto mb-12 aspect-video">
        <video
          src="https://aq2ekfsk89rrskw6.public.blob.vercel-storage.com/videos/waby.mp4"
          controls
          class="w-full h-full"
        ></video>
      </div>

      <p class="text-xs text-center font-['Jost'] mt-12 mb-8 text-gray-500 uppercase tracking-widest">Compartir en:
        <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Frevistaviaje.cl%2Fthis-is-what-it-feels-like-to-die&text=this%20is%20what%20it%20feels%20like%20to%20die%20(Deathbloom)" target="_blank" class="text-gray-300 hover:text-white hover:underline mx-1">X</a> /
        <a href="https://api.whatsapp.com/send?text=this%20is%20what%20it%20feels%20like%20to%20die%20(Deathbloom)%20https%3A%2F%2Frevistaviaje.cl%2Fthis-is-what-it-feels-like-to-die" target="_blank" class="text-gray-300 hover:text-white hover:underline mx-1">WhatsApp</a> /
        <button onclick={shareInstagram} class="text-gray-300 hover:text-white hover:underline mx-1 cursor-pointer">Instagram</button>
      </p>
    </div>
  </main>
</div>
