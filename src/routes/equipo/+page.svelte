<script>
  const equipo = [
    {
      nombre: 'Fernanda Moreno',
      rol: 'Directora Editorial',
      descripcion: 'Editora general de Revista Viaje.',
      inicial: 'FM'
    },
    {
      nombre: 'Javiera Zumelzu',
      rol: 'Diseño',
      descripcion: 'Diseñadora gráfica y editorial.',
      inicial: 'JZ'
    },
    {
      nombre: 'Comité Editorial',
      rol: 'Por confirmar',
      descripcion: 'Próximamente anunciaremos los miembros del comité editorial.',
      inicial: '?'
    }
  ];
</script>

<svelte:head>
  <title>Equipo Editorial — Revista Viaje</title>
  <meta name="description" content="Conoce al equipo editorial de Revista Viaje. Dirección, diseño y comité editorial." />
</svelte:head>

<section class="pt-32 pb-24 md:pt-40 md:pb-32">
  <div class="mx-auto max-w-5xl px-[var(--spacing-editorial)] md:px-8 lg:px-12">
    <!-- Header -->
    <div class="border-b border-[var(--color-rule)] pb-8 mb-16">
      <span class="font-[var(--font-body)] text-xs uppercase tracking-[0.2em] text-[var(--color-ink-muted)]">
        Quiénes somos
      </span>
      <h1 class="mt-4 font-[var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[var(--color-ink)]">
        Equipo Editorial
      </h1>
    </div>

    <!-- Team Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
      {#each equipo as miembro}
        <div class="group">
          <div class="aspect-square bg-[var(--color-paper)] border border-[var(--color-rule)] flex items-center justify-center
                      group-hover:border-[var(--color-terracotta)] transition-colors duration-300">
            <span class="font-[var(--font-display)] text-5xl text-[var(--color-rule)] group-hover:text-[var(--color-terracotta)] transition-colors">
              [{miembro.inicial}]
            </span>
          </div>
          <div class="mt-6">
            <h3 class="font-[var(--font-display)] text-xl font-semibold text-[var(--color-ink)]">
              {miembro.nombre}
            </h3>
            <p class="mt-1 font-[var(--font-body)] text-sm uppercase tracking-widest text-[var(--color-terracotta)]">
              {miembro.rol}
            </p>
            <p class="mt-3 font-[var(--font-body)] text-sm text-[var(--color-ink-muted)] leading-relaxed">
              {miembro.descripcion}
            </p>
          </div>
        </div>
      {/each}
    </div>

    <!-- About section -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
      <div>
        <h2 class="font-[var(--font-display)] text-2xl md:text-3xl font-semibold text-[var(--color-ink)] mb-6">
          Sobre Revista Viaje
        </h2>
        <div class="font-[var(--font-body)] text-[var(--color-ink-light)] space-y-4 leading-relaxed">
          <p>
            Revista Viaje nace como un proyecto editorial independiente dedicado a pensar los <strong class="text-[var(--color-ink)]">territorios de Chile</strong> y la <strong class="text-[var(--color-ink)]">literatura</strong> como fuentes de experiencia.
          </p>
          <p>
            Entendemos la escritura y la lectura como prácticas que intervienen en la manera en que habitamos el mundo, narramos nuestra historia y discutimos nuestro presente, pasado y futuro.
          </p>
          <p>
            Desde Chile y Latinoamérica, buscamos crear un espacio para la reflexión rigurosa y la escritura experimental, con un tono que combina lo <strong class="text-[var(--color-ink)]">literario</strong> y lo <strong class="text-[var(--color-ink)]">divulgativo</strong>.
          </p>
        </div>
      </div>

      <div class="space-y-8">
        <!-- Info cards -->
        <div class="p-6 bg-[var(--color-paper)] border border-[var(--color-rule)]">
          <h3 class="font-[var(--font-body)] text-xs uppercase tracking-widest text-[var(--color-ink-muted)] mb-4">
            Formato
          </h3>
          <ul class="font-[var(--font-body)] text-[var(--color-ink-light)] space-y-2">
            <li class="flex items-center gap-2">
              <span class="text-[var(--color-terracotta)]">—</span>
              Publicación digital
            </li>
            <li class="flex items-center gap-2">
              <span class="text-[var(--color-terracotta)]">—</span>
              Periodicidad trimestral
            </li>
            <li class="flex items-center gap-2">
              <span class="text-[var(--color-terracotta)]">—</span>
              Edición impresa bajo demanda
            </li>
          </ul>
        </div>

        <div class="p-6 bg-[var(--color-paper)] border border-[var(--color-rule)]">
          <h3 class="font-[var(--font-body)] text-xs uppercase tracking-widest text-[var(--color-ink-muted)] mb-4">
            Secciones
          </h3>
          <ul class="font-[var(--font-body)] text-[var(--color-ink-light)] space-y-2">
            <li class="flex items-center gap-2">
              <span class="text-[var(--color-terracotta)]">—</span>
              Ensayo central
            </li>
            <li class="flex items-center gap-2">
              <span class="text-[var(--color-terracotta)]">—</span>
              Ensayos breves
            </li>
            <li class="flex items-center gap-2">
              <span class="text-[var(--color-terracotta)]">—</span>
              Entrevistas y traducciones
            </li>
            <li class="flex items-center gap-2">
              <span class="text-[var(--color-terracotta)]">—</span>
              Videoensayos
            </li>
            <li class="flex items-center gap-2">
              <span class="text-[var(--color-terracotta)]">—</span>
              Reseñas de libros
            </li>
          </ul>
        </div>

        <div class="p-6 border border-[var(--color-ink)] bg-[var(--color-cream)]">
          <h3 class="font-[var(--font-body)] text-xs uppercase tracking-widest text-[var(--color-ink-muted)] mb-4">
            Contacto
          </h3>
          <a
            href="mailto:revista@revistaviaje.cl"
            class="font-[var(--font-body)] text-[var(--color-terracotta)] hover:text-[var(--color-terracotta-dark)] transition-colors"
          >
            revista@revistaviaje.cl
          </a>
          <p class="mt-2 font-[var(--font-body)] text-sm text-[var(--color-ink-muted)]">
            Santiago, Chile
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Quote section -->
<section class="py-16 bg-[var(--color-ink)]">
  <div class="mx-auto max-w-3xl px-[var(--spacing-editorial)] md:px-8 lg:px-12 text-center">
    <p class="font-[var(--font-display)] text-xl md:text-2xl text-[var(--color-cream)] italic leading-relaxed">
      "Dialogamos con las tradiciones críticas latinoamericanas y reflexionamos sobre el propio acto de escribir y leer como formas de intervención en el mundo"
    </p>
  </div>
</section>
