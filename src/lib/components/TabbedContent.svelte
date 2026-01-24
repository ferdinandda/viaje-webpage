<script>
  let publications = [
    { id: 1, title: 'Sangre, tierra y silencio', subtitle: 'el doble vínculo de la experiencia femenina', author: 'Florencia Leiva Silva', href: '/sangre-tierra-y-silencio' },
  ];
</script>

<section class="py-20 md:py-28 bg-[var(--color-cream)]">
  <div class="mx-auto max-w-5xl px-[var(--spacing-editorial)] md:px-8 lg:px-12">
    <!-- Section Header -->
    <header class="mb-12 md:mb-16">
      <span class="block font-[var(--font-body)] text-xs uppercase tracking-[0.2em] text-[var(--color-ink-muted)] mb-3">Archivo</span>
      <h2 class="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--color-ink)] tracking-tight">Últimas Publicaciones</h2>
      <div class="mt-4 w-16 h-px bg-[var(--color-terracotta)]"></div>
    </header>

    <!-- Publications Grid -->
    <div class="space-y-8">
      {#each publications as pub}
        <a
          href={pub.href}
          class="group block"
        >
          <article class="grid md:grid-cols-[0.6fr,2fr] gap-6 md:gap-8 items-start">
            <!-- Image -->
            <div class="relative overflow-hidden bg-[var(--color-paper)]">
              <img
                src="/my-image.jpg"
                alt="{pub.title}"
                class="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
              <!-- Subtle overlay on hover -->
              <div class="absolute inset-0 bg-[var(--color-ink)]/0 group-hover:bg-[var(--color-ink)]/5 transition-colors duration-300"></div>
            </div>

            <!-- Content -->
            <div class="py-2 md:py-4">
              <span class="block font-[var(--font-body)] text-xs uppercase tracking-[0.15em] text-[var(--color-terracotta)] mb-3">Ensayo</span>
              <h3 class="font-[var(--font-display)] text-2xl md:text-3xl font-semibold text-[var(--color-ink)] leading-tight tracking-tight group-hover:text-[var(--color-terracotta)] transition-colors duration-300">
                {pub.title}
              </h3>
              {#if pub.subtitle}
                <p class="mt-2 font-[var(--font-display)] text-lg md:text-xl text-[var(--color-ink-light)] italic">
                  {pub.subtitle}
                </p>
              {/if}
              <p class="mt-4 font-[var(--font-body)] text-sm text-[var(--color-ink-muted)] uppercase tracking-wide">
                {pub.author}
              </p>

              <!-- Read indicator -->
              <div class="mt-6 flex items-center gap-2 text-[var(--color-ink-muted)] group-hover:text-[var(--color-terracotta)] transition-colors duration-300">
                <span class="font-[var(--font-body)] text-xs uppercase tracking-[0.15em]">Leer ensayo</span>
                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </article>

          <!-- Divider -->
          <div class="mt-8 h-px bg-[var(--color-rule)]"></div>
        </a>
      {/each}
    </div>
  </div>
</section>
