<script>
  import { articles } from '$lib/articles.js';
  import ArticleCard from './ArticleCard.svelte';

  let { essays = [] } = $props();

  const staticSlugs = new Set(articles.map((a) => a.href.replace(/^\//, '')));

  let dynamicArticles = $derived(
    essays
      .filter((e) => !staticSlugs.has(e.slug))
      .map((e) => ({
        title: e.title,
        author: e.author,
        category: e.category || 'Ensayo',
        href: `/ensayos/${e.slug}`,
        img: e.image,
        photoCredit: e.photoCredit || null
      }))
  );

  let tabs = $derived([...dynamicArticles, ...articles].slice(0, 4));
</script>

<section class="ticker-section">
  <div class="pub-label">Últimas Publicaciones</div>
  <div class="pub-grid">
    {#each tabs as tab, i}
      <ArticleCard article={tab} index={tabs.length - i} />
    {/each}
  </div>
</section>

<style>
  .ticker-section {
    padding: 100px 60px;
    background: var(--color-paper);
  }

  .pub-label {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 0.65rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 60px;
  }

  .pub-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 24px;
  }

  @media (max-width: 768px) {
    .pub-grid {
      gap: 16px;
    }
    .ticker-section {
      padding: 60px 20px;
    }
  }
</style>
