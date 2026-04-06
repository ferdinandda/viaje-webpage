<script>
  const url = 'https://revistaviaje.cl/this-is-what-it-feels-like-to-die';
  const title = 'this is what it feels like to die (Deathbloom)';

  async function shareInstagram() {
    await navigator.clipboard.writeText(url);
    window.location.href = 'instagram://story-camera';
    setTimeout(() => {
      alert('Link copiado — pegalo en tu historia de Instagram');
    }, 500);
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
      <p class="text-sm text-center font-['Jost'] mb-2 text-white">Por <a href="https://www.youtube.com/@wabyeliott" target="_blank" class="hover:underline">Waby Eliott</a></p>
      <p class="text-xs text-center font-['Jost'] mb-8 text-gray-500">Junio, 2025</p>

      <div class="max-w-4xl mx-auto mb-12 aspect-video">
        <video
          src="https://aq2ekfsk89rrskw6.public.blob.vercel-storage.com/videos/waby.mp4"
          controls
          class="w-full h-full"
        ></video>
      </div>

      <div class="max-w-2xl mx-auto mt-4 mb-12 text-gray-400 font-['Jost'] text-xs leading-relaxed space-y-3 text-justify">
        <p>thanks to georgina for gifting me the title deathbloom, thanks to maddie and laura and paul for being the choir, thanks to fica film fest for showing it in the barn, thanks to gabby for the sub-subtitle: "a ponderation of death". thanks to family and friends and all in between.</p>
        <p>the aerial acrobats are the incredible Sylphes Aerial Ballet</p>
        <p>The audio clip of Vietnamese Zen Master Thich Nhat Hanh is used by kind permission of the Plum Village Community of Engaged Buddhism. To learn more about Thich Nhat Hanh, and to support the ongoing peace work of his monastics, visit <a href="https://thichnhathanhfoundation.org/" target="_blank" class="underline hover:text-gray-200">thichnhathanhfoundation.org</a></p>
      </div>

      <p class="text-xs text-center font-['Jost'] mt-12 mb-8 text-gray-500 uppercase tracking-widest">Compartir en:
        <a href="https://api.whatsapp.com/send?text=this%20is%20what%20it%20feels%20like%20to%20die%20(Deathbloom)%20https%3A%2F%2Frevistaviaje.cl%2Fthis-is-what-it-feels-like-to-die" target="_blank" class="text-gray-300 hover:text-white hover:underline mx-1">WhatsApp</a>
      </p>
    </div>
  </main>
</div>
