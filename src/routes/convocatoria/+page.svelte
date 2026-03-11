<script>
  // Minimal script if needed
</script>

<svelte:head>
  <title>Convocatoria - Revista Viaje</title>
  <meta name="description" content="Información sobre la convocatoria abierta de Revista Viaje." />
</svelte:head>

<div style="font-family: 'Jost', sans-serif;" class="bg-[#e5e5e5] min-h-screen flex flex-col">
  
  <!-- Main Content -->
  <div class="px-8 max-w-7xl mx-auto pt-44 pb-20 flex-grow text-center">
    <div class="mb-16 text-[var(--color-ink)]">
      <h1 class="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-tight" style="font-family: 'Bebas Neue', sans-serif;">Convocatoria abierta</h1>
      <p class="text-xl md:text-2xl">
        <a href="mailto:viajerevista@gmail.com" class="hover:underline text-[#9C9C9C]">Envíos a viajerevista@gmail.com</a>
      </p>
    </div>
  </div>

  <!-- Quote Section moved to bottom -->
  <div class="bg-[#1C1C1C] w-full flex flex-col items-center justify-center py-32 md:py-48 overflow-hidden">
    <h2 class="text-white text-4xl md:text-7xl font-bold uppercase text-center max-w-4xl leading-tight animate-blur-reveal px-4">
      Get this from the depths of your fucking soul, man.
    </h2>
    <a 
      href="https://www.reddit.com/r/twinpeaks/comments/1i5xz0k/david_lynch_directing_tom_sizemore_in_twin_peaks/" 
      target="_blank"
      rel="noopener noreferrer"
      class="text-white/30 hover:text-[#9C9C9C] text-[10px] mt-12 animate-blur-reveal-delayed transition-colors uppercase tracking-widest"
    >
      Ver referencia
    </a>
  </div>

</div>

<style>
  @keyframes blurReveal {
    0% {
      filter: blur(20px);
      opacity: 0;
      transform: scale(1.1);
    }
    100% {
      filter: blur(0);
      opacity: 1;
      transform: scale(1);
    }
  }

  .animate-blur-reveal {
    animation: blurReveal 5s ease-out forwards;
  }

  .animate-blur-reveal-delayed {
    animation: blurReveal 5s ease-out 2s forwards;
    opacity: 0;
  }
</style>
