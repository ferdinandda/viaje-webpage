<script>
  let showOverlay = $state(false);

  function toggleOverlay() {
    showOverlay = !showOverlay;
  }
</script>

<svelte:head>
  <title>Convocatoria - Revista Viaje</title>
  <meta name="description" content="Información sobre la convocatoria abierta de Revista Viaje." />
</svelte:head>

<div style="font-family: 'Jost', sans-serif;" class="bg-[#e5e5e5] min-h-screen flex flex-col relative overflow-hidden">
  
  <!-- Monito Panzón (Interactive Character) -->
  <button 
    onclick={toggleOverlay}
    class="absolute bottom-8 right-8 z-50 group focus:outline-none transition-transform hover:scale-110 active:scale-95"
    aria-label="Interactuar con el monito"
  >
    <svg width="100" height="100" viewBox="0 0 100 100" class="drop-shadow-md">
      <!-- Body (The "Panza") -->
      <circle cx="50" cy="70" r="22" fill="var(--color-ink)" />
      <!-- Head -->
      <circle cx="50" cy="40" r="14" fill="var(--color-ink)" />
      
      <!-- Static Arm -->
      <path d="M 32 45 Q 20 55 25 70" fill="none" stroke="var(--color-ink)" stroke-width="5" stroke-linecap="round" />
      
      <!-- Beckoning Arm (Animated) -->
      <g class="animate-beckon origin-[68px_45px]">
        <path d="M 68 45 Q 85 35 80 20" fill="none" stroke="var(--color-ink)" stroke-width="5" stroke-linecap="round" />
        <!-- Hand/Finger pointing -->
        <circle cx="80" cy="20" r="3" fill="var(--color-ink)" />
      </g>
      
      <!-- Legs -->
      <path d="M 40 90 L 35 98" fill="none" stroke="var(--color-ink)" stroke-width="5" stroke-linecap="round" />
      <path d="M 60 90 L 65 98" fill="none" stroke="var(--color-ink)" stroke-width="5" stroke-linecap="round" />
      
      <!-- Eyes (Blinking effect in style) -->
      <circle cx="45" cy="38" r="2" fill="white" class="animate-blink" />
      <circle cx="55" cy="38" r="2" fill="white" class="animate-blink" />
    </svg>
  </button>

  <!-- Main Content -->
  <div class="px-8 max-w-7xl mx-auto pt-32 pb-20 flex-grow text-center">
    <div class="mb-16 text-[var(--color-ink)]">
      <h1 class="text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tight" style="font-family: 'Bebas Neue', sans-serif;">Convocatoria abierta</h1>
      <div class="flex justify-center">
        <a
          href="mailto:viajerevista@gmail.com"
          class="group inline-flex items-center gap-3 px-8 py-4 border border-[var(--color-ink)] bg-transparent
                 hover:bg-[var(--color-ink)] hover:text-white transition-all duration-200"
        >
          <span class="text-sm uppercase tracking-widest" style="font-family: 'Jost', sans-serif;">
            Envíos a viajerevista@gmail.com
          </span>
        </a>
      </div>
    </div>
  </div>

  <!-- Full Screen Overlay (Secret Message) -->
  {#if showOverlay}
    <div 
      class="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-8 cursor-default animate-fade-in"
    >
      <h2 class="text-white text-5xl md:text-8xl font-bold uppercase text-center max-w-6xl leading-[0.9] animate-mega-reveal tracking-tighter">
        Get this from the depths of your fucking soul, man.
      </h2>
      
      <div class="flex flex-col items-center gap-8 mt-16 animate-fade-in-delayed">
        <a 
          href="https://www.reddit.com/r/twinpeaks/comments/1i5xz0k/david_lynch_directing_tom_sizemore_in_twin_peaks/" 
          target="_blank"
          rel="noopener noreferrer"
          class="text-white/30 hover:text-white text-[10px] uppercase tracking-widest transition-colors"
        >
          Ver referencia
        </a>

        <button 
          onclick={toggleOverlay}
          class="text-white/20 hover:text-white text-xs uppercase tracking-[0.5em] transition-colors"
        >
          [ Volver ]
        </button>
      </div>
    </div>
  {/if}

</div>

<style>
  @keyframes beckon {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(-25deg); }
  }

  @keyframes blink {
    0%, 90%, 100% { transform: scaleY(1); }
    95% { transform: scaleY(0.1); }
  }

  @keyframes megaReveal {
    0% { 
      filter: blur(50px); 
      opacity: 0; 
      transform: scale(0);
      letter-spacing: 2em;
      color: white;
    }
    10% {
      opacity: 1;
      filter: blur(20px);
    }
    100% { 
      filter: blur(0); 
      opacity: 1; 
      transform: scale(1);
      letter-spacing: -0.05em;
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .animate-beckon {
    animation: beckon 1.5s ease-in-out infinite;
  }

  .animate-blink {
    animation: blink 4s infinite;
    transform-origin: center;
  }

  .animate-mega-reveal { 
    animation: megaReveal 3.5s cubic-bezier(0.19, 1, 0.22, 1) forwards; 
    transform-origin: center;
  }
  .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
  .animate-fade-in-delayed { animation: fadeIn 2s ease-out 1s forwards; opacity: 0; }
</style>
