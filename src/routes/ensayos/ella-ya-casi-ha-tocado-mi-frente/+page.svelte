<script>
  import { onMount, onDestroy } from 'svelte';
  import { readerModeActive } from '$lib/stores';

  let showReferences = false;
  let atBottom = false;

  function toggleReferences() {
    showReferences = !showReferences;
  }

  function toggleReaderMode() {
    $readerModeActive = !$readerModeActive;
  }

  function handleScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5) {
      atBottom = true;
    } else {
      atBottom = false; // Reset if not at bottom
    }
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<div class="min-h-screen transition-all duration-500 {$readerModeActive ? 'pt-12 bg-[#FAF9F6] text-gray-800' : 'pt-32 md:pt-40 bg-white'}">

  <main class="{$readerModeActive ? 'max-w-2xl mx-auto py-12 px-8' : 'bg-white'}">
    <div class="{$readerModeActive ? '' : 'container mx-auto px-4 py-8'}">
      <p class="text-xs font-bold text-center text-[#D24843] mb-2 font-['Jost']">¿Amor? ¿Desamor?</p>
      <h1 class="{$readerModeActive ? 'text-3xl font-serif text-center mb-8' : 'text-4xl font-bold mb-4 font-[\'Advent_Pro\'] uppercase text-center mx-auto max-w-3xl'}">
        <!-- Título aquí -->
      </h1>
      <p class="text-sm text-center font-['Jost'] mb-2">Por Fernanda Moreno y Florencia Silva</p>
      
      {#if $readerModeActive}
        <p class="text-xs text-center font-sans text-gray-500 mb-8 italic">Tiempo de lectura estimado</p>
      {/if}

      {#if !$readerModeActive}
        <p class="text-xs text-center font-['Jost'] mb-4">Febrero, 2026</p>
        <img src="/MISTRAL.jpg" alt="Ella ya casi ha tocado mi frente" class="w-full h-auto mb-4" />
        
        <p class="text-xs text-center font-['Jost'] mb-8">Compartir en:
          <a href="#" target="_blank" class="text-blue-600 hover:underline">X</a> /
          <a href="#" target="_blank" class="text-pink-600 hover:underline">Instagram</a>
        </p>

        <div class="max-w-prose mx-auto mb-12">
          <p class="text-sm text-right font-['Jost'] italic leading-relaxed">
            en el inminente contacto que delimita la fotografía: odiosa dedicación.<br>
            <br>
				Deseamos fabular una posibilidad.
          </p>
        </div>
      {/if}

      <div class="{$readerModeActive ? 'text-xl leading-loose font-serif text-justify' : 'text-lg leading-relaxed mb-4 text-justify font-[\'Jost\'] mx-auto max-w-prose'}">
        <p class="mb-6">[Contenido del ensayo aquí...]</p>
      </div>

      {#if !$readerModeActive}
      <button
        onclick={toggleReferences}
        class="text-xl font-bold mb-4 text-center mt-12 font-['Advent_Pro'] text-gray-600 w-full"
        class:bounce={atBottom}
      >
        Referencias bibliográficas
      </button>
      {#if showReferences}
      <div class="mx-auto max-w-prose text-justify font-['Jost'] text-base text-gray-600">
        <!-- Referencias aquí -->
      </div>
      {/if}
      {/if}
    </div>
  </main>

  <!-- Reader Mode Toggle Button -->
  <button
    onclick={toggleReaderMode}
    class="fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
    class:bg-black={!$readerModeActive}
    class:text-white={!$readerModeActive}
    class:bg-gray-200={$readerModeActive}
    class:text-gray-800={$readerModeActive}
    aria-label="Toggle Reader Mode"
  >
    {#if $readerModeActive}
      <!-- Exit Reader Mode Icon (X) -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    {:else}
      <!-- Enter Reader Mode Icon (Book/Eye) -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    {/if}
  </button>
</div>

<style>
  @keyframes bounce-letters {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }

  .bounce {
    animation: bounce-letters 1.5s ease;
  }
</style>