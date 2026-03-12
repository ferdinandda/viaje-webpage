<script>
  import { onMount } from 'svelte';
  import { readerModeActive } from '$lib/stores';
  import { useQuery, useMutation } from "convex-svelte";
  import { api } from "../../convex/_generated/api";

  let showReferences = false;
  let atBottom = false;
  let isGeneratingAudio = false;

  // Fetch the essay by slug
  const essayQuery = useQuery(api.essays.getBySlug, { slug: "sangre-tierra-y-silencio" });
  const updateAudioUrl = useMutation(api.essays.updateAudioUrl);

  async function generateAudio() {
    if (!essay || isGeneratingAudio) return;
    
    isGeneratingAudio = true;
    try {
      const response = await fetch('/api/generate-audio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: essay.content,
          essayId: essay._id,
          slug: essay.slug
        })
      });

      const data = await response.json();
      if (data.audioUrl) {
        // Guardar la URL en Convex
        await updateAudioUrl({ id: essay._id, audioUrl: data.audioUrl });
      } else if (data.error) {
        alert("Error: " + data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Error generando el audio.");
    } finally {
      isGeneratingAudio = false;
    }
  }

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
      atBottom = false;
    }
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  $: essay = $essayQuery.data;
</script>

<div class="min-h-screen transition-all duration-500 {$readerModeActive ? 'pt-12 bg-[#FAF9F6] text-gray-800' : 'pt-32 md:pt-40 bg-[var(--color-paper)]'}">

  {#if $essayQuery.isLoading}
    <div class="flex justify-center items-center h-64">
      <p class="font-['Jost'] animate-pulse">Cargando ensayo...</p>
    </div>
  {:else if essay}
    <main class="{$readerModeActive ? 'max-w-2xl mx-auto py-12 px-8' : 'bg-[var(--color-paper)]'}">
      <div class="{$readerModeActive ? '' : 'container mx-auto px-4 py-8'}">
        <p class="text-xs font-bold text-center text-[#9C9C9C] mb-2 font-['Jost']">{essay.category}</p>
        <h1 
          class="{$readerModeActive ? 'text-3xl font-serif text-center mb-8' : 'text-5xl md:text-6xl lg:text-7xl font-normal mb-6 uppercase text-center mx-auto max-w-5xl tracking-tight leading-none'}"
          style="font-family: 'Bebas Neue', sans-serif;"
        >
          {essay.title}
        </h1>
        <p class="text-sm text-center font-['Jost'] mb-2">Por {essay.author}</p>
        
        {#if $readerModeActive}
          <p class="text-xs text-center font-sans text-gray-500 mb-8 italic">{essay.readingTime}</p>
        {/if}

        <div class="flex flex-col items-center gap-4 mb-8">
          {#if essay.audioUrl}
            <div class="w-full max-w-md bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100">
              <p class="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-['Jost'] text-center">Escuchar ensayo</p>
              <audio controls src={essay.audioUrl} class="w-full h-8"></audio>
            </div>
          {:else}
            <button 
              onclick={generateAudio}
              disabled={isGeneratingAudio}
              class="text-[10px] uppercase tracking-[0.2em] px-6 py-2 border border-gray-300 hover:bg-black hover:text-white transition-all disabled:opacity-50"
            >
              {isGeneratingAudio ? 'Generando audio...' : 'Generar versión en audio (ElevenLabs)'}
            </button>
          {/if}
        </div>

        {#if !$readerModeActive}
          <p class="text-xs text-center font-['Jost'] mb-4">{essay.date}</p>
          
          <div class="relative max-w-4xl mx-auto overflow-hidden shadow-lg mb-8 eink-image-container">
            <img src={essay.image} alt={essay.title} class="w-full h-auto color-eink-filter" />
            <div class="absolute bottom-3 right-4 text-[9px] md:text-[10px] text-white/70 font-['Jost'] uppercase tracking-[0.2em] bg-black/30 px-3 py-1 backdrop-blur-sm">
              Carrie, Brian de Palma, 1976
            </div>
          </div>

          <div class="max-w-prose mx-auto mb-12 text-[#9C9C9C] flex justify-end">
            <p class="text-sm text-right font-['Jost'] italic leading-relaxed font-bold max-w-md">
              The suffering of women is the true story of the universe
              <br>
              <span class="text-xs not-italic mt-2 block font-bold">Ariana Reines</span>
            </p>
          </div>
        {/if}

        <div class="{$readerModeActive ? 'text-xl leading-loose font-serif text-justify' : 'text-lg leading-relaxed mb-4 text-justify font-[\'Jost\'] mx-auto max-w-prose'}">
          {@html essay.content}
        </div>

        {#if !$readerModeActive}
        <p class="text-xs text-center font-['Jost'] mt-12 mb-8 text-gray-500 uppercase tracking-widest">Compartir en:
          <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fviaje-webpage.vercel.app%2Fsangre-tierra-y-silencio&text={encodeURIComponent(essay.title)}" target="_blank" class="text-gray-800 hover:text-black hover:underline mx-1">X</a> /
          <a href="https://api.whatsapp.com/send?text={encodeURIComponent(essay.title)}%20https%3A%2F%2Fviaje-webpage.vercel.app%2Fsangre-tierra-y-silencio" target="_blank" class="text-gray-800 hover:text-black hover:underline mx-1">WhatsApp</a> /
          <a href="https://www.instagram.com/" target="_blank" class="text-gray-800 hover:text-black hover:underline mx-1">Instagram</a>
        </p>

        <div class="flex justify-center mt-16 mb-12">
          <button
            onclick={toggleReferences}
            class="px-8 py-3 border border-gray-300 text-gray-500 font-['Jost'] text-[10px] md:text-xs uppercase tracking-[0.25em] hover:bg-black hover:text-white hover:border-black transition-all duration-300 rounded-sm"
          >
            Obras citadas
          </button>
        </div>

        {#if showReferences && essay.references}
        <div class="mx-auto max-w-prose text-justify font-['Jost'] text-base text-gray-600 mb-24 animate-in fade-in duration-500">
          {#each essay.references as ref}
            <p class="mb-1">{ref}</p>
          {/each}
        </div>
        {/if}
        {/if}
      </div>
    </main>
  {:else}
    <div class="flex justify-center items-center h-64">
      <p class="font-['Jost'] text-red-500">No se encontró el ensayo.</p>
    </div>
  {/if}

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
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    {/if}
  </button>
</div>

<style>
  .color-eink-filter {
    filter: sepia(0.15) saturate(0.6) contrast(1.1) brightness(1.02);
  }

  .eink-image-container {
    position: relative;
  }

  .eink-image-container::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.95%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E');
    pointer-events: none;
    opacity: 0.1;
    z-index: 5;
  }
</style>