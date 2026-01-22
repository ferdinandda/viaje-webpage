<svelte:head>
  <title>Equipo Editorial — Revista Viaje</title>
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

    <!-- Placeholder Team Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each Array(3) as _, i}
        <div class="group">
          <div class="aspect-square bg-[var(--color-paper)] border border-[var(--color-rule)] flex items-center justify-center
                      group-hover:border-[var(--color-terracotta)] transition-colors duration-300">
            <span class="font-[var(--font-display)] text-4xl text-[var(--color-rule)] group-hover:text-[var(--color-terracotta)] transition-colors">
              [{i + 1}]
            </span>
          </div>
          <div class="mt-4">
            <h3 class="font-[var(--font-display)] text-xl font-medium text-[var(--color-ink)]">
              Por confirmar
            </h3>
            <p class="mt-1 font-[var(--font-body)] text-sm text-[var(--color-ink-muted)]">
              Rol editorial
            </p>
          </div>
        </div>
      {/each}
    </div>

    <!-- About section -->
    <div class="mt-24 max-w-2xl">
      <h2 class="font-[var(--font-display)] text-2xl font-semibold text-[var(--color-ink)] mb-6">
        Sobre nosotros
      </h2>
      <div class="font-[var(--font-body)] text-[var(--color-ink-light)] space-y-4 leading-relaxed">
        <p>
          Revista Viaje nace como un proyecto editorial independiente dedicado a la publicación de ensayos críticos sobre literatura, cultura y pensamiento contemporáneo.
        </p>
        <p>
          Desde Chile y Latinoamérica, buscamos crear un espacio para la reflexión rigurosa y la escritura experimental.
        </p>
      </div>
    </div>
  </div>
</section>
