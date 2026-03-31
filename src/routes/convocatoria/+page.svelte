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


  <!-- Main Content -->
  <div class="px-8 max-w-2xl mx-auto pt-32 pb-24 flex-grow">

    <!-- Header -->
    <div class="mb-8 text-[var(--color-ink)]">
      <p class="text-[10px] uppercase tracking-[0.5em] opacity-50 mb-3">Revista Viaje</p>
      <h1 class="text-6xl md:text-8xl font-bold uppercase leading-none" style="font-family: 'Bebas Neue', sans-serif;">Convocatoria</h1>
    </div>

    <!-- Intro text -->
    <div class="mb-8 text-[var(--color-ink)] text-justify leading-normal text-sm md:text-base" style="font-family: 'Jost', sans-serif;">
      <p class="mb-3">Leemos el ensayo como un lugar que oscila entre la experiencia y el concepto. Peculiar confinium donde una voz se hace cargo de algo, donde el pensamiento responde ante el mundo.</p>
      <p class="mb-3">Ensayar a través de la escritura es, casi siempre, arriesgar verdades que se saben provisionales. <s>O algo así escribe Adorno.</s></p>
      <p>Viaje publica un ensayo mensual. La convocatoria está abierta todo el año. No imponemos tema. Nos interesa la escritura que no cierra pregunta alguna.</p>
    </div>

    <!-- Specs -->
    <dl class="text-[var(--color-ink)] mb-8 border-t border-[var(--color-ink)]/20">
      {#each [
        ['Publicación', 'Mensual'],
        ['Convocatoria', 'Abierta todo el año'],
        ['Temática', 'Libre'],
        ['Extensión', 'Mínimo 5 páginas, máximo 10'],
        ['Formato', 'Word, EB Garamond 12, Espaciado 1.5, Página tamaño carta'],
        ['Originalidad', 'Texto inédito'],
        ['Derechos', 'Se mantienen con el autor'],
        ['Nombre del archivo', 'TítuloDelEnsayo_ApellidoAutor'],
        ['Notificación', 'Respondemos en máximo seis semanas'],
        ['Envío', 'Viajerevista@gmail.com'],
      ] as [label, value]}
        <div class="flex items-baseline gap-4 py-2 border-b border-[var(--color-ink)]/10">
          <dt class="text-[10px] uppercase tracking-[0.3em] opacity-50 w-32 shrink-0">{label}</dt>
          <dd class="text-sm">{value}</dd>
        </div>
      {/each}
    </dl>

    <!-- CTA -->
    <button
      onclick={toggleOverlay}
      class="focus:outline-none transition-transform hover:scale-110 active:scale-95"
      aria-label="Interactuar"
    >
      <img src="/secundario.png" alt="" class="w-24 h-auto drop-shadow-md animate-wiggle" />
    </button>

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

  @keyframes wiggle {
    0%, 100% { transform: rotate(0deg) translateY(0); }
    20% { transform: rotate(-6deg) translateY(-4px); }
    40% { transform: rotate(6deg) translateY(-4px); }
    60% { transform: rotate(-4deg) translateY(-2px); }
    80% { transform: rotate(4deg) translateY(-2px); }
  }

  .animate-wiggle {
    animation: wiggle 2s ease-in-out infinite;
    transform-origin: bottom center;
  }

  .animate-mega-reveal {
    animation: megaReveal 3.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
    transform-origin: center;
  }
  .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
  .animate-fade-in-delayed { animation: fadeIn 2s ease-out 1s forwards; opacity: 0; }

</style>
