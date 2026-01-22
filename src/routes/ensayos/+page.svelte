<svelte:head>
  <title>Ensayos — Revista Viaje</title>
  <meta name="description" content="Ensayos literarios, políticos, filosóficos, sociales y culturales sobre territorio, literatura y pensamiento latinoamericano." />
</svelte:head>

<section class="pt-32 pb-24 md:pt-40 md:pb-32">
  <div class="mx-auto max-w-5xl px-[var(--spacing-editorial)] md:px-8 lg:px-12">
    <!-- Header -->
    <div class="border-b border-[var(--color-rule)] pb-8 mb-16">
      <span class="font-[var(--font-body)] text-xs uppercase tracking-[0.2em] text-[var(--color-ink-muted)]">
        Sección principal
      </span>
      <h1 class="mt-4 font-[var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[var(--color-ink)]">
        Ensayos
      </h1>
    </div>

    <!-- Intro -->
    <div class="max-w-3xl mb-16">
      <p class="font-[var(--font-display)] text-2xl md:text-3xl italic text-[var(--color-ink-light)] leading-relaxed">
        "El ensayo nace del <span class="text-[var(--color-terracotta)]">[des]encuentro</span> entre la reflexión y la experiencia"
      </p>
      <p class="mt-8 font-[var(--font-body)] text-lg text-[var(--color-ink-light)] leading-relaxed">
        Publicamos ensayos literarios, políticos, filosóficos, sociales y culturales que dialogan con nuestros cuatro ejes conceptuales: territorio y geopolítica, pensamiento latinoamericano, literatura y teoría, y escritura como práctica.
      </p>
    </div>

    <!-- Types of essays -->
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
      {#each ['Literario', 'Político', 'Filosófico', 'Social', 'Cultural'] as tipo}
        <div class="p-4 bg-[var(--color-paper)] border border-[var(--color-rule)] text-center">
          <span class="font-[var(--font-body)] text-sm text-[var(--color-ink-light)]">{tipo}</span>
        </div>
      {/each}
    </div>

    <!-- Subsections -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <div class="p-8 bg-[var(--color-paper)] border border-[var(--color-rule)]">
        <span class="font-[var(--font-display)] text-3xl text-[var(--color-terracotta)]">[C]</span>
        <h3 class="mt-4 font-[var(--font-display)] text-xl font-semibold text-[var(--color-ink)]">
          Ensayo central
        </h3>
        <p class="mt-3 font-[var(--font-body)] text-sm text-[var(--color-ink-light)] leading-relaxed">
          Pieza principal de cada número. Un texto de mayor extensión y profundidad que marca el eje temático del volumen.
        </p>
      </div>
      <div class="p-8 bg-[var(--color-paper)] border border-[var(--color-rule)]">
        <span class="font-[var(--font-display)] text-3xl text-[var(--color-terracotta)]">[B]</span>
        <h3 class="mt-4 font-[var(--font-display)] text-xl font-semibold text-[var(--color-ink)]">
          Ensayos breves
        </h3>
        <p class="mt-3 font-[var(--font-body)] text-sm text-[var(--color-ink-light)] leading-relaxed">
          Reflexiones más acotadas que complementan y dialogan con el ensayo central y entre sí.
        </p>
      </div>
    </div>

    <!-- Placeholder for future content -->
    <div class="p-8 border-2 border-[var(--color-ink)] bg-[var(--color-cream)]">
      <h3 class="font-[var(--font-display)] text-xl font-semibold text-[var(--color-ink)] mb-4">
        Volumen 1 · Próximamente
      </h3>
      <p class="font-[var(--font-body)] text-[var(--color-ink-light)] mb-6">
        Los ensayos del primer volumen se publicarán tras el cierre de la convocatoria. Invitamos a investigadores, académicos y escritores a participar.
      </p>
      <div class="flex flex-wrap gap-4">
        <a
          href="/convocatoria"
          class="inline-flex items-center gap-2 font-[var(--font-body)] text-sm uppercase tracking-widest text-[var(--color-terracotta)] hover:text-[var(--color-terracotta-dark)] transition-colors"
        >
          Ver convocatoria
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
