<script>
  let tabs = [
    { id: 1, title: 'Sangre, tierra y silencio', author: 'Florencia Leiva Silva', content: 'Contenido 1...' },
  ];
</script>

<div class="p-8">
  <h2 class="text-3xl font-bold text-center mb-8">Últimas Publicaciones</h2>
  <div class="flex flex-col gap-4">
    {#each tabs as tab}
      <a
        href={tab.id === 1 ? "/sangre-tierra-y-silencio" : "/"}
        class="block"
      >
        {#if tab.id === 1}
          <img src="/my-image.jpg" alt="Image for {tab.title}" class="w-full h-auto" />
        {/if}
        <div class="p-4">
          <h3 class="font-bold text-center font-['DM Sans',_sans-serif]">{tab.title}</h3>
          <p>{tab.author}</p>
        </div>
      </a>
    {/each}
  </div>
</div>
