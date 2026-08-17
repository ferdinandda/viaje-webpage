<script>
  /**
   * @typedef {Object} Article
   * @property {string} title
   * @property {string} author
   * @property {string} category
   * @property {string} href
   * @property {string} img
   * @property {string} [photoCredit]
   */

  /** @type {{ article: Article, index?: number }} */
  let { article, index = 1 } = $props();

  // Editorial palette (rgb triplets), one tint per card, cycling if there are more cards than colors.
  const tints = ['107, 13, 30', '44, 62, 107', '63, 92, 63', '138, 90, 42'];
  let tint = $derived(tints[(index - 1) % tints.length]);
</script>

<article class="pub-item" style="--tint-rgb: {tint};">
  <a href={article.href} class="pub-link">
    <div class="pub-img-wrap">
      <img src={article.img} alt={article.title} class="pub-img" loading="eager" fetchpriority="high" />
      {#if article.photoCredit}
        <span class="foto-credito">© {article.photoCredit}</span>
      {/if}
    </div>
    <div class="pub-kicker">{String(index).padStart(2, '0')}</div>
    <h3>{@html article.title}</h3>
    <div class="pub-author">{article.author}</div>
  </a>
</article>

<style>
  .pub-img-wrap {
    position: relative;
    display: block;
    overflow: hidden;
    height: 210px;
    background-color: #d5d2ce;
  }

  .pub-img-wrap::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(var(--tint-rgb), 0.35);
    opacity: 0;
    transition: opacity 0.08s;
    pointer-events: none;
  }

  .pub-item:hover .pub-img-wrap::after {
    opacity: 1;
  }

  .pub-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    animation: imgFadeIn 0.4s ease-in;
  }

  @keyframes imgFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .foto-credito {
    position: absolute;
    bottom: 6px;
    right: 8px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 0.55rem;
    letter-spacing: 0.5px;
    color: rgba(255,255,255,0.75);
    pointer-events: none;
  }

  .pub-link {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    padding: 16px 0 0;
  }

  .pub-kicker {
    font-family: 'Inter', sans-serif;
    font-size: 0.65rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: #6b0d1e;
    margin-top: 14px;
  }

  .pub-item :global(h3) {
    font-family: 'Fraunces', 'Cormorant Garamond', serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    font-size: 1.5rem;
    line-height: 1.25;
    margin: 8px 0 6px;
    color: #1a1a1b;
    transition: color 0.08s;
  }

  .pub-link:hover :global(h3) {
    color: rgb(var(--tint-rgb));
  }

  .pub-author {
    font-family: 'Inter', sans-serif;
    font-size: 0.72rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: rgba(26, 26, 27, 0.75);
    margin-top: 6px;
  }

  @media (max-width: 768px) {
    .pub-link {
      padding: 16px 0 0;
    }
    .pub-item :global(h3) {
      font-size: 1.25rem;
    }
    .pub-author {
      font-size: 0.58rem;
      margin-top: 16px;
    }
  }
</style>
