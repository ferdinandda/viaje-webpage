<script>
  import { articles } from '$lib/articles.js';
  import ArticleCard from './ArticleCard.svelte';
  // Use the latest 3 articles (or fewer if not enough)
  let tabs = articles.slice(0, 3);
</script>

<div class="p-4 max-w-7xl mx-auto">
  <h2 class="text-5xl md:text-7xl text-center mb-16 text-[var(--color-ink)] leading-none uppercase tracking-tight" style="font-family: 'Bebas Neue', sans-serif;">Últimas Publicaciones</h2>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {#each tabs as tab}
      <ArticleCard article={tab} />
    {/each}
  </div>
</div>

<style>
</style>
