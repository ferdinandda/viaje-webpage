<script>
  import { articles } from '$lib/articles.js';
  import ArticleCard from '$lib/components/ArticleCard.svelte';
  let tabs = articles;
</script>

<div class="p-8 pt-32 md:pt-40 max-w-5xl mx-auto">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 relative z-10">
    {#each tabs as tab, i}
      <ArticleCard article={tab} index={i + 1} />
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
