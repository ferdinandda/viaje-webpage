<svelte:head>
  <title>Entrevistas — Revista Viaje</title>
  <meta name="description" content="Conversaciones con pensadores, escritores e intelectuales latinoamericanos. Entrevistas originales y traducciones." />
</svelte:head>

<section class="pt-32 pb-24 md:pt-40 md:pb-32">
  <div class="mx-auto max-w-5xl px-[var(--spacing-editorial)] md:px-8 lg:px-12">
    <!-- Header -->
    <div class="border-b border-[var(--color-rule)] pb-8 mb-16">
      <span class="font-[var(--font-body)] text-xs uppercase tracking-[0.2em] text-[var(--color-ink-muted)]">
        Conversaciones
      </span>
      <h1 class="mt-4 font-[var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[var(--color-ink)]">
        Entrevistas
      </h1>
    </div>

    <!-- Intro -->
    <div class="max-w-3xl mb-16">
      <p class="font-[var(--font-display)] text-2xl md:text-3xl italic text-[var(--color-ink-light)] leading-relaxed">
        "Conversaciones con quienes <span class="text-[var(--color-terracotta)]">[re]piensan</span> la cultura contemporánea"
      </p>
      <p class="mt-8 font-[var(--font-body)] text-lg text-[var(--color-ink-light)] leading-relaxed">
        Diálogos con escritores, investigadores, artistas y pensadores que desde Chile y Latinoamérica reflexionan sobre literatura, territorio, cultura y el oficio de escribir.
      </p>
    </div>

    <!-- Subsections -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <div class="p-8 bg-[var(--color-paper)] border border-[var(--color-rule)]">
        <span class="font-[var(--font-display)] text-3xl text-[var(--color-terracotta)]">[&]</span>
        <h3 class="mt-4 font-[var(--font-display)] text-xl font-semibold text-[var(--color-ink)]">
          Entrevistas originales
        </h3>
        <p class="mt-3 font-[var(--font-body)] text-sm text-[var(--color-ink-light)] leading-relaxed">
          Conversaciones realizadas especialmente para Revista Viaje con figuras relevantes del pensamiento y la literatura contemporánea.
        </p>
      </div>
      <div class="p-8 bg-[var(--color-paper)] border border-[var(--color-rule)]">
        <span class="font-[var(--font-display)] text-3xl text-[var(--color-terracotta)]">[T]</span>
        <h3 class="mt-4 font-[var(--font-display)] text-xl font-semibold text-[var(--color-ink)]">
          Traducciones
        </h3>
        <p class="mt-3 font-[var(--font-body)] text-sm text-[var(--color-ink-light)] leading-relaxed">
          Entrevistas históricas o recientes traducidas al español por primera vez, ampliando el acceso a voces fundamentales.
        </p>
      </div>
    </div>

    <!-- Placeholder for future content -->
    <div class="p-8 border-2 border-[var(--color-ink)] bg-[var(--color-cream)]">
      <h3 class="font-[var(--font-display)] text-xl font-semibold text-[var(--color-ink)] mb-4">
        Volumen 1 · Próximamente
      </h3>
      <p class="font-[var(--font-body)] text-[var(--color-ink-light)] mb-6">
        Las entrevistas del primer volumen se publicarán próximamente. Si deseas proponer una entrevista o traducción, escríbenos.
      </p>
      <div class="flex flex-wrap gap-4">
        <a
          href="mailto:revista@revistaviaje.cl"
          class="inline-flex items-center gap-2 font-[var(--font-body)] text-sm uppercase tracking-widest text-[var(--color-terracotta)] hover:text-[var(--color-terracotta-dark)] transition-colors"
        >
          Contactar
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
