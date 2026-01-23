<script>
  const tabs = [
    { id: 1, title: 'Título 1', author: 'Autor 1', content: 'Contenido 1...' },
    { id: 2, title: 'Título 2', author: 'Autor 2', content: 'Contenido 2...' },
    { id: 3, title: 'Título 3', author: 'Autor 3', content: 'Contenido 3...' },
    { id: 4, title: 'Título 4', author: 'Autor 4', content: 'Contenido 4...' },
    { id: 5, title: 'Título 5', author: 'Autor 5', content: 'Contenido 5...' },
    { id: 6, title: 'Título 6', author: 'Autor 6', content: 'Contenido 6...' }
  ];
</script>

<svelte:head>
  <title>Ensayos — Revista Viaje</title>
  <meta name="description" content="Ensayos literarios, políticos, filosóficos, sociales y culturales sobre territorio, literatura y pensamiento latinoamericano." />
</svelte:head>

<section class="pt-32 pb-24 md:pt-40 md:pb-32">
  <div class="mx-auto max-w-5xl px-[var(--spacing-editorial)] md:px-8 lg:px-12">
    <h1 class="text-3xl font-bold mb-8">Ensayos</h1>
    <div class="space-y-4">
      {#each tabs as tab}
        <a href="/ensayos/{tab.id}" class="block p-4 border hover:bg-gray-100">
          <h3 class="font-bold">{tab.title}</h3>
          <p>{tab.author}</p>
        </a>
      {/each}
    </div>
  </div>
</section>
