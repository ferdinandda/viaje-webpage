<script>
  import { articles } from '$lib/articles.js';
  import ArticleCard from './ArticleCard.svelte';
  let tabs = articles.slice(0, 4);
</script>

<div class="section-wrapper p-4 max-w-7xl mx-auto">
  <div class="flex justify-center mb-16">
    <h2 class="inline-block px-6 py-2 bg-black text-white text-sm uppercase tracking-[0.2em] relative z-10" style="font-family: 'Jost', sans-serif; font-weight: 300;">
      Últimas Publicaciones
    </h2>
  </div>

  <div class="flex flex-wrap justify-center gap-8 relative z-10">
    {#each tabs as tab}
      <div class="card-fixed">
        <ArticleCard article={tab} />
      </div>
    {/each}
  </div>
</div>

<style>
  .section-wrapper {
    position: relative;
    overflow: hidden;
  }

  .card-fixed {
    width: 320px;
    height: 320px;
    flex-shrink: 0;
  }
</style>
