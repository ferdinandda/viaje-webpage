<script>
  import { onMount } from 'svelte';
  import { articles } from '$lib/articles.js';
  import ArticleCard from '$lib/components/ArticleCard.svelte';
  import { ConvexHttpClient } from "convex/browser";
  import { api } from "../../../convex/_generated/api";

  const CONVEX_URL = "https://aromatic-aardvark-340.convex.cloud";
  const convex = new ConvexHttpClient(CONVEX_URL);

  const staticSlugs = new Set(articles.map((a) => a.href.replace(/^\//, '')));

  let dynamicArticles = $state([]);
  let tabs = $derived([...dynamicArticles, ...articles]);

  const PAGE_SIZE = 4;
  let currentPage = $state(1);
  let totalPages = $derived(Math.max(1, Math.ceil(tabs.length / PAGE_SIZE)));
  let paginatedTabs = $derived(tabs.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE));

  $effect(() => {
    if (currentPage > totalPages) currentPage = totalPages;
  });

  function goToPage(page) {
    currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onMount(async () => {
    try {
      const essays = await convex.query(api.essays.list);
      dynamicArticles = essays
        .filter((e) => !staticSlugs.has(e.slug))
        .map((e) => ({
          title: e.title,
          author: e.author,
          category: e.category || 'Ensayo',
          href: `/ensayos/${e.slug}`,
          img: e.image,
          photoCredit: e.photoCredit || null
        }));
    } catch (err) {
      console.error('Error cargando ensayos desde Convex:', err);
    }
  });
</script>

<div class="p-8 pt-32 md:pt-40 max-w-5xl mx-auto">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 relative z-10">
    {#each paginatedTabs as tab, i}
      <ArticleCard article={tab} index={tabs.length - ((currentPage - 1) * PAGE_SIZE + i)} />
    {/each}
  </div>

  {#if totalPages > 1}
    <div class="flex justify-center items-center gap-3 mt-20">
      {#each Array(totalPages) as _, p}
        <button
          onclick={() => goToPage(p + 1)}
          class="w-9 h-9 flex items-center justify-center text-xs font-['Inter'] uppercase tracking-widest border transition-colors duration-200 {currentPage === p + 1 ? 'bg-black text-white border-black' : 'border-gray-300 text-gray-500 hover:border-black hover:text-black'}"
          aria-current={currentPage === p + 1 ? 'page' : undefined}
          aria-label={`Página ${p + 1}`}
        >
          {p + 1}
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .watermark {
    position: absolute;
    width: 60%;
    max-width: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.12;
    pointer-events: none;
    z-index: 0;
  }
</style>
