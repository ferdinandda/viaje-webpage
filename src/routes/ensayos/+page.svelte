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
  let tabs = $derived([...articles, ...dynamicArticles]);

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
          photoCredit: null
        }));
    } catch (err) {
      console.error('Error cargando ensayos desde Convex:', err);
    }
  });
</script>

<div class="p-8 pt-32 md:pt-40 max-w-5xl mx-auto">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 relative z-10">
    {#each tabs as tab, i}
      <ArticleCard article={tab} index={tabs.length - i} />
    {/each}
  </div>
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
