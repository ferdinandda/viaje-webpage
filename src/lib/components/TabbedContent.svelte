<script>
  let tabs = [
    { id: 1, title: 'Título 1', author: 'Autor 1', content: 'Contenido 1...' },
    { id: 2, title: 'Título 2', author: 'Autor 2', content: 'Contenido 2...' },
    { id: 3, title: 'Título 3', author: 'Autor 3', content: 'Contenido 3...' },
    { id: 4, title: 'Título 4', author: 'Autor 4', content: 'Contenido 4...' },
    { id: 5, title: 'Título 5', author: 'Autor 5', content: 'Contenido 5...' },
    { id: 6, title: 'Título 6', author: 'Autor 6', content: 'Contenido 6...' }
  ];
</script>

<div class="p-8">
  <h2 class="text-3xl font-bold text-center mb-8">Últimas Publicaciones</h2>
  <div class="grid grid-cols-3 gap-4">
    {#each tabs as tab}
      <a
        href="/ensayos"
        class="aspect-square p-4 border"
      >
        <h3 class="font-bold">{tab.title}</h3>
        <p>{tab.author}</p>
      </a>
    {/each}
  </div>
</div>
