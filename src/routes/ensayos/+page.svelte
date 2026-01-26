<script>
  let tabs = [
    { id: 1, title: 'Sangre, tierra y silencio: el doble vínculo de la experiencia femenina', author: 'Florencia Leiva Silva', href: "/sangre-tierra-y-silencio", img: "/Carrieee.jpg" },
    { id: 2, title: 'El arte de la memoria: una reflexión', author: 'Juan Pérez', href: "/articulo-dos", img: "/david_lynch.jpg" },
    { id: 3, title: 'Territorios invisibles: exploraciones urbanas', author: 'Ana Gómez', href: "/articulo-tres", img: "/my-image.jpg" },
  ];
</script>

<div class="p-8 pt-24">
  <h1 class="text-3xl font-bold text-center mb-8 mt-8 font-['Advent_Pro'] uppercase">Ensayos</h1>
  <div class="flex flex-row flex-wrap justify-center gap-4">
    {#each tabs as tab}
      <a
        href={tab.href}
        class="block w-full sm:w-1/2 md:w-[32%]"
      >
        <div class="border border-gray-300">
            <img src={tab.img} alt="Image for {tab.title}" class="w-full h-64 object-cover" />
          <div class="p-4">
            <h3 class="font-bold text-center font-['Advent_Pro'] text-xl uppercase">{tab.title}</h3>
            <p class="font-['Jost'] text-center">{tab.author}</p>
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>
