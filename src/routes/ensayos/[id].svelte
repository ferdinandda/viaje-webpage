<script>
  import { page } from '$app/stores';

  const articles = [
    { id: 1, title: 'Título 1', author: 'Autor 1', content: 'Contenido 1...' },
    { id: 2, title: 'Título 2', author: 'Autor 2', content: 'Contenido 2...' },
    { id: 3, title: 'Título 3', author: 'Autor 3', content: 'Contenido 3...' },
    { id: 4, title: 'Título 4', author: 'Autor 4', content: 'Contenido 4...' },
    { id: 5, title: 'Título 5', author: 'Autor 5', content: 'Contenido 5...' },
    { id: 6, title: 'Título 6', author: 'Autor 6', content: 'Contenido 6...' }
  ];

  const article = articles.find(a => a.id === parseInt($page.params.id));
</script>

<div class="p-8">
  <h1 class="text-2xl font-bold">{article.title}</h1>
  <p class="text-lg italic">{article.author}</p>
</div>
