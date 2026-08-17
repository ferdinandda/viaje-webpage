<script>
  import { page } from '$app/stores';
  import { ConvexHttpClient } from "convex/browser";
  import { api } from "../../../../convex/_generated/api";
  import ReadingControls from '$lib/components/ReadingControls.svelte';

  let slug = $derived($page.params.slug);
  let essay = $state(null);
  let loading = $state(true);
  let notFound = $state(false);
  let showReferences = $state(false);
  let nightMode = $state(false);

  const CONVEX_URL = "https://aromatic-aardvark-340.convex.cloud";
  const convex = new ConvexHttpClient(CONVEX_URL);

  async function loadEssay(currentSlug) {
    loading = true;
    notFound = false;
    essay = null;
    try {
      const result = await convex.query(api.essays.getBySlug, { slug: currentSlug });
      if (result) {
        essay = result;
      } else {
        notFound = true;
      }
    } catch (e) {
      console.error('Error cargando ensayo:', e);
      notFound = true;
    } finally {
      loading = false;
    }
  }

  $effect(() => {
    if (slug) loadEssay(slug);
  });

  function toggleReferences() {
    showReferences = !showReferences;
  }
</script>

<svelte:head>
  <title>{essay ? `${essay.title} — ${essay.author} | Revista Viaje` : 'Revista Viaje'}</title>
</svelte:head>

<div class="min-h-screen bg-[var(--color-paper)] transition-colors duration-300 {nightMode ? 'reading-dark' : ''}">
  <main>
    {#if loading}
      <div class="min-h-screen flex items-center justify-center">
        <span class="text-[10px] uppercase tracking-widest text-gray-400 animate-pulse">Cargando...</span>
      </div>
    {:else if notFound || !essay}
      <div class="min-h-screen flex flex-col items-center justify-center gap-4 pt-32 px-6 text-center">
        <p class="text-lg font-['Jost']">No encontramos este ensayo.</p>
        <a href="/ensayos" class="text-[10px] uppercase tracking-widest text-red-500 hover:text-red-700 font-bold">Volver a ensayos</a>
      </div>
    {:else}
      <div class="relative w-full h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)] mt-20 md:mt-24 overflow-hidden">
        <img src={essay.image} alt="" class="absolute inset-0 w-full h-full object-cover blur-sm scale-110" />
        <div class="absolute inset-0 bg-black/45"></div>
        <div class="relative z-10 flex items-center justify-center h-full px-6">
          <div class="flex flex-col items-center">
            <h1
              class="text-3xl md:text-5xl lg:text-6xl font-normal text-center max-w-4xl leading-tight text-white"
              style="font-family: 'Cormorant Garamond', serif; font-style: italic;"
            >
              {essay.title}
            </h1>
            <p class="text-xs text-center uppercase tracking-[2px] text-white mt-6" style="font-family: 'Inter', sans-serif; font-weight: 500;">
              Por {essay.author}
            </p>
            <p class="text-[11px] text-center uppercase tracking-[2px] text-white/70 mt-1" style="font-family: 'Inter', sans-serif; font-weight: 500;">
              {essay.date}
            </p>
          </div>
        </div>
      </div>

      <ReadingControls bind:nightMode />

      <div class="container mx-auto px-4 py-8">

        {#if essay.audioUrl}
          <div class="max-w-prose mx-auto mb-8 flex items-center gap-4 border-y border-gray-100 py-4 min-h-[64px]">
            <div class="flex items-center gap-4 w-full">
              <span class="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Escuchar:</span>
              <audio controls src={essay.audioUrl} class="h-8 flex-grow opacity-70 grayscale"></audio>
            </div>
          </div>
        {/if}

        {#if essay.epigraph}
          <div class="max-w-prose mx-auto mb-12 text-[#9C9C9C] flex justify-end">
            <p class="text-sm text-right font-['Jost'] italic leading-relaxed font-bold max-w-md">
              {@html essay.epigraph}
            </p>
          </div>
        {/if}

        <div class="text-lg leading-relaxed mb-4 text-justify font-['Jost'] mx-auto max-w-prose font-light">
          {@html essay.content}

          {#if essay.references && essay.references.length > 0}
            <div class="mt-16 pt-8 border-t border-gray-100">
              <div class="flex justify-center mt-16 mb-12">
                <button
                  onclick={toggleReferences}
                  class="px-8 py-3 border border-gray-300 text-gray-500 font-['Inter'] text-[10px] md:text-xs uppercase tracking-[0.25em] hover:bg-black hover:text-white hover:border-black transition-all duration-300 rounded-sm"
                >
                  Obras citadas
                </button>
              </div>

              {#if showReferences}
                <div class="mx-auto max-w-prose text-justify font-['Jost'] text-base text-gray-600 mb-24 animate-in fade-in duration-500">
                  {#each essay.references as ref}
                    <p class="mb-1">{ref}</p>
                  {/each}
                </div>
              {/if}
            </div>
          {/if}
        </div>
      </div>
    {/if}
  </main>
</div>
