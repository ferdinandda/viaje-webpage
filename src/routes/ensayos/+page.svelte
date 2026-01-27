<script>
  let tabs = [
    { id: 1, title: 'Sangre, tierra y silencio: el doble vínculo de la experiencia femenina', author: 'Florencia Leiva Silva', href: "/sangre-tierra-y-silencio", img: "/Carrieee.jpg" },
    { id: 2, title: 'El arte de la memoria: una reflexión', author: 'Juan Pérez', href: "/articulo-dos", img: "/david_lynch.jpg" },
    { id: 3, title: 'Territorios invisibles: exploraciones urbanas', author: 'Ana Gómez', href: "/articulo-tres", img: "/my-image.jpg" },
    { id: 4, title: 'Poéticas del desierto: voces olvidadas', author: 'Carlos Díaz', href: "/articulo-cuatro", img: "/Escritorio.jpg" },
    { id: 5, title: 'Cuerpos y escritura: límites de la representación', author: 'María Rojas', href: "/articulo-cinco", img: "/flo.jpg" },
    { id: 6, title: 'La ciudad fragmentada: notas de viaje', author: 'Pedro Soto', href: "/articulo-seis", img: "/floflo.jpg" },
  ];
</script>

<div class="p-8 pt-32 md:pt-40" style="font-family: 'Jost', sans-serif;">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {#each tabs as tab}
      <a
        href={tab.href}
        class="group block bg-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col border border-gray-200"
      >
        <!-- Image Container -->
        <div class="relative h-64 overflow-hidden">
          <img 
            src={tab.img} 
            alt="Image for {tab.title}" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
        </div>
        
        <!-- Content Container -->
        <div class="p-8 flex flex-col flex-grow justify-between text-center">
          <div>
            <h3 class="font-bold text-lg uppercase text-[var(--color-ink)] leading-tight tracking-wide mb-4 line-clamp-3">
              {tab.title}
            </h3>
            <div class="w-8 h-px bg-[#D24843] mx-auto mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <p class="text-[var(--color-ink-muted)] text-sm mt-auto" style="font-family: 'Stoke Light', serif;">
            {tab.author}
          </p>
        </div>
      </a>
    {/each}
  </div>
</div>
