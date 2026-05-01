<script>
  let showOverlay = $state(false);

  function toggleOverlay() {
    showOverlay = !showOverlay;
  }
</script>

<svelte:head>
  <title>Convocatoria - Revista Viaje</title>
  <meta name="description" content="Información sobre la convocatoria abierta de Revista Viaje." />
  <link rel="preload" href="/fonts/BebasNeue-Regular.ttf" as="font" type="font/ttf" crossorigin="anonymous" />
</svelte:head>

<div style="font-family: 'Jost', sans-serif;" class="bg-[#e5e5e5] min-h-screen relative">


  <!-- Main Content -->
  <div class="px-4 sm:px-8 w-full max-w-xl mx-auto pt-24 pb-12">

    <div class="stamp-wrap w-full">
      <div class="stamp-inner">

        <!-- Header -->
        <div class="mb-5 text-[var(--color-ink)]">
          <p class="text-[10px] uppercase tracking-[0.5em] opacity-70 mb-2">Revista Viaje</p>
          <div class="flex items-center gap-3">
            <h1 class="text-5xl sm:text-6xl font-black uppercase leading-none" style="font-family: 'Bebas Neue', sans-serif;">Convocatoria</h1>
            <button
              onclick={toggleOverlay}
              class="focus:outline-none transition-transform hover:scale-110 active:scale-95 shrink-0"
              aria-label="Interactuar"
            >
              <img src="/secundario.png" alt="" class="w-12 h-auto drop-shadow-md animate-wiggle" />
            </button>
          </div>
        </div>

        <!-- Intro text -->
        <div class="mb-5 text-[var(--color-ink)] text-justify leading-relaxed text-sm" style="font-family: 'Jost', sans-serif;">
          <p>La revista se publica con regularidad una vez al mes. Acepta ensayos en castellano y en otros idiomas; la convocatoria permanece abierta durante todo el año y no impone un tema específico. Los derechos de autor permanecen en manos del autor, y solo se solicita que, en caso de que el texto se publique en otro lugar, se mencione su aparición en Revista Viaje.</p>
        </div>

        <!-- Specs -->
        <table class="w-full text-[var(--color-ink)] mb-5 border-collapse text-sm">
          <tbody>
            {#each [
              ['Publicación', 'Mensual'],
              ['Convocatoria', 'Abierta todo el año'],
              ['Temática', 'Libre'],
              ['Extensión', 'Mínimo 5 páginas, máximo 10'],
              ['Formato', 'Archivo Word, tipografía EB Garamond tamaño 12, espaciado 1,5, página tamaño carta'],
              ['Originalidad', 'Texto inédito'],
              ['Derechos', 'Se mantienen con el autor'],
              ['Nombre del archivo', 'TítuloDelEnsayo_ApellidoAutor'],
              ['Notificación', 'Respondemos en un plazo máximo de seis semanas'],
              ['Envío', 'Viajerevista@gmail.com'],
            ] as [label, value]}
              <tr class="border-b border-[var(--color-ink)]/20">
                <td class="py-2 pr-4 align-top text-[10px] uppercase tracking-[0.2em] font-medium text-[var(--color-ink)] w-28 sm:w-36">{label}</td>
                <td class="py-2 align-top leading-relaxed">{value}</td>
              </tr>
            {/each}
          </tbody>
        </table>

        <!-- Otros formatos -->
        <p class="text-[var(--color-ink)] text-sm leading-relaxed" style="font-family: 'Jost', sans-serif;">
          Si deseas proponer otros formatos o formas de colaboración, puedes enviar un correo a la revista explicando tu propuesta.
        </p>

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
  .stamp-wrap {
    background-color: #F0EDE6;
    background-image: radial-gradient(circle, #1C1C1C 5px, transparent 5px);
    background-size: 16px 16px;
    padding: 10px;
    display: block;
    width: 560px;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
  }

  .stamp-inner {
    background: #F0EDE6;
    padding: 1.5rem;
  }
  @keyframes megaReveal {
    0% {
      filter: blur(40px);
      opacity: 0;
      transform: scale(0.8);
    }
    15% {
      opacity: 1;
      filter: blur(15px);
    }
    100% {
      filter: blur(0);
      opacity: 1;
      transform: scale(1);
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
