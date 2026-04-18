<script>
  import { articles } from '$lib/articles.js';
  import ArticleCard from '$lib/components/ArticleCard.svelte';
  let tabs = articles;
</script>

<div class="p-8 pt-32 md:pt-40">
  <h2 class="text-2xl md:text-3xl text-center mb-16 text-[var(--color-ink)] leading-none uppercase tracking-tight font-bold" style="font-family: 'Jost', sans-serif;">Ensayos</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {#each tabs as tab}
      <ArticleCard article={tab} />
    {/each}
  </div>
</div>
