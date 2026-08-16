<script>
  import { articles } from '$lib/articles.js';
  import ArticleCard from './ArticleCard.svelte';
  let tabs = articles.slice(0, 4);
</script>

<section class="ticker-section">
  <div class="pub-label">Últimas Publicaciones</div>
  <div class="pub-grid">
    {#each tabs as tab}
      <ArticleCard article={tab} />
    {/each}
  </div>
</section>

<style>
  .ticker-section {
    padding: 100px 60px;
    background: var(--color-paper);
  }

  .pub-label {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 0.6rem;
    letter-spacing: 6px;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 60px;
  }

  .pub-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px 24px;
  }

  @media (max-width: 1024px) {
    .pub-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .pub-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }
    .ticker-section {
      padding: 60px 20px;
    }
  }
</style>
