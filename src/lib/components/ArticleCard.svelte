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

  /** @type {{ article: Article }} */
  let { article } = $props();
</script>

<article class="pub-item">
  <a href={article.href} class="pub-link">
    <div class="pub-img-wrap">
      <img src={article.img} alt={article.title} class="pub-img" loading="eager" fetchpriority="high" />
      {#if article.photoCredit}
        <span class="foto-credito">© {article.photoCredit}</span>
      {/if}
    </div>
    <h3>{@html article.title}</h3>
    <div class="pub-author">{article.author}</div>
  </a>
</article>

<style>
  .pub-item {
    background: #edecea;
    box-shadow: 0 4px 18px rgba(26,26,27,0.13), 0 1px 4px rgba(26,26,27,0.08);
    transition: transform 0.3s, box-shadow 0.3s;
    padding: 10px 10px 0;
  }

  .pub-item:hover {
    transform: scale(1.03);
    box-shadow: 0 12px 36px rgba(107,13,30,0.25), 0 2px 12px rgba(107,13,30,0.15);
    position: relative;
    z-index: 2;
  }

  .pub-img-wrap {
    position: relative;
    display: block;
    overflow: hidden;
    height: 210px;
    background-color: #d5d2ce;
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
    font-family: 'Source Sans 3', sans-serif;
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
    padding: 20px 8px 24px;
  }

  .pub-item :global(h3) {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 700;
    font-style: italic;
    font-size: 1.25rem;
    line-height: 1.2;
    margin: 16px 0 6px;
    color: #1a1a1b;
    transition: color 0.3s;
  }

  .pub-link:hover :global(h3) {
    color: #6b0d1e;
  }

  .pub-author {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: rgba(26, 26, 27, 0.75);
    margin-top: 6px;
  }

  @media (max-width: 768px) {
    .pub-link {
      padding: 24px 20px;
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
