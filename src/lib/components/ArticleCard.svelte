<script>
  /**
   * @typedef {Object} Article
   * @property {string} title
   * @property {string} author
   * @property {string} href
   * @property {string} img
   */

  /** @type {{ article: Article }} */
  let { article } = $props();
</script>

<a href={article.href} class="card-outer group">
  <div class="card-image">
    <img
      src={article.img}
      alt="Image for {article.title.replace(/<[^>]*>?/gm, '')}"
      class="color-eink-filter"
    />
  </div>
  <div class="card-content">
    <h3 class="card-title">{@html article.title}</h3>
    <p class="card-author">{article.author}</p>
  </div>
</a>

<style>
  .card-outer {
    display: flex;
    flex-direction: column;
    width: 100%;
    aspect-ratio: 1 / 1;
    background: #fff;
    box-sizing: border-box;
    padding: 10px 10px 20px 10px;
    text-decoration: none;
    overflow: hidden;
    transition: transform 0.3s;
    box-shadow: 2px 3px 10px rgba(0,0,0,0.15);
  }

  .card-outer:hover {
    transform: translateY(-3px);
    box-shadow: 4px 6px 16px rgba(0,0,0,0.2);
  }

  .card-image {
    width: 100%;
    flex: 0 0 65%;
    overflow: hidden;
  }

  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s;
    display: block;
  }

  .card-outer:hover .card-image img {
    transform: scale(1.03);
  }

  .card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    padding-top: 10px;
  }

  .card-title {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 1.35rem;
    line-height: 1.25;
    color: var(--color-ink);
    font-weight: 700;
    margin: 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .card-author {
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-ink-muted);
    margin: 0;
  }

  .color-eink-filter {
    filter: sepia(0.1) saturate(0.7) contrast(1.1) brightness(1.05);
  }
</style>
