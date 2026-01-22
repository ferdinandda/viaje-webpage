<script>
  import { onMount } from 'svelte';

  let mounted = $state(false);

  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Revista Viaje — Estudios Literarios y Culturales</title>
  <meta name="description" content="Pensamos en las [des]articulaciones del ensayo a través del movimiento de la mano que escribe" />
</svelte:head>

<!-- Hero Section -->
<section class="min-h-screen flex flex-col justify-center relative overflow-hidden">
  <!-- Decorative bracket elements -->
  <div class="absolute top-20 left-8 md:left-16 text-[20rem] md:text-[28rem] font-[var(--font-display)] text-[var(--color-rule-light)] select-none pointer-events-none opacity-50 leading-none -translate-y-1/4">
    [
  </div>
  <div class="absolute bottom-0 right-8 md:right-16 text-[20rem] md:text-[28rem] font-[var(--font-display)] text-[var(--color-rule-light)] select-none pointer-events-none opacity-50 leading-none translate-y-1/4">
    ]
  </div>

  <div class="relative z-10 mx-auto max-w-5xl px-[var(--spacing-editorial)] md:px-8 lg:px-12 py-32 md:py-40">
    <!-- Overline -->
    <div
      class="mb-8 md:mb-12 transition-all duration-700 ease-out
             {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}"
    >
      <span class="inline-block font-[var(--font-body)] text-xs md:text-sm uppercase tracking-[0.3em] text-[var(--color-ink-muted)]">
        Revista de Estudios Literarios y Culturales
      </span>
      <div class="mt-4 w-16 h-px bg-[var(--color-terracotta)]"></div>
    </div>

    <!-- Main Title -->
    <h1
      class="transition-all duration-700 delay-100 ease-out
             {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
    >
      <span class="block font-[var(--font-display)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight leading-[0.9]">
        <span class="text-[var(--color-ink)]">Revista</span>
      </span>
      <span class="block font-[var(--font-display)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight leading-[0.9] mt-2">
        <span class="text-[var(--color-terracotta)]">[</span><span class="text-[var(--color-ink)]">Viaje</span><span class="text-[var(--color-terracotta)]">]</span>
      </span>
    </h1>

    <!-- Subtitle -->
    <p
      class="mt-12 md:mt-16 max-w-2xl font-[var(--font-display)] text-xl sm:text-2xl md:text-3xl leading-relaxed text-[var(--color-ink-light)] italic
             transition-all duration-700 delay-200 ease-out
             {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
    >
      Pensamos en las <span class="text-[var(--color-ink)] not-italic font-medium">[des]articulaciones</span> del ensayo a través del movimiento de la mano que escribe
    </p>

    <!-- CTA Button -->
    <div
      class="mt-12 md:mt-16 transition-all duration-700 delay-300 ease-out
             {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
    >
      <a
        href="/convocatoria"
        class="group inline-flex items-center gap-3 px-8 py-4 border-2 border-[var(--color-ink)] bg-transparent
               hover:bg-[var(--color-ink)] transition-all duration-300"
      >
        <span class="font-[var(--font-body)] text-sm uppercase tracking-widest text-[var(--color-ink)] group-hover:text-[var(--color-cream)] transition-colors">
          Convocatoria 2026
        </span>
        <svg class="w-4 h-4 text-[var(--color-ink)] group-hover:text-[var(--color-cream)] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div
    class="absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ease-out
           {mounted ? 'opacity-100' : 'opacity-0'}"
  >
    <div class="flex flex-col items-center gap-2 text-[var(--color-ink-muted)]">
      <span class="font-[var(--font-body)] text-xs uppercase tracking-widest">Explorar</span>
      <div class="w-px h-8 bg-[var(--color-rule)] animate-pulse"></div>
    </div>
  </div>
</section>

<!-- About Section Preview -->
<section class="py-24 md:py-32 bg-[var(--color-paper)] border-y border-[var(--color-rule)]">
  <div class="mx-auto max-w-5xl px-[var(--spacing-editorial)] md:px-8 lg:px-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
      <div>
        <span class="font-[var(--font-body)] text-xs uppercase tracking-[0.2em] text-[var(--color-ink-muted)]">
          Sobre la revista
        </span>
        <h2 class="mt-4 font-[var(--font-display)] text-3xl md:text-4xl font-semibold leading-tight text-[var(--color-ink)]">
          Un espacio para el pensamiento crítico
        </h2>
        <p class="mt-6 font-[var(--font-body)] text-lg leading-relaxed text-[var(--color-ink-light)]">
          Revista Viaje emerge como una publicación dedicada a la reflexión sobre literatura, cultura y pensamiento contemporáneo desde Chile y Latinoamérica.
        </p>
      </div>
      <div class="flex justify-center md:justify-end">
        <div class="relative">
          <!-- Decorative frame -->
          <div class="absolute -inset-4 border border-[var(--color-rule)]"></div>
          <div class="absolute -inset-8 border border-[var(--color-rule-light)]"></div>
          <div class="relative bg-[var(--color-cream)] p-8 md:p-12">
            <blockquote class="font-[var(--font-display)] text-xl md:text-2xl italic text-[var(--color-ink-light)] leading-relaxed">
              "El ensayo es el género del <span class="text-[var(--color-terracotta)]">pensamiento en movimiento</span>"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Recent/Featured Section -->
<section class="py-24 md:py-32">
  <div class="mx-auto max-w-5xl px-[var(--spacing-editorial)] md:px-8 lg:px-12">
    <div class="flex items-baseline justify-between border-b border-[var(--color-rule)] pb-6">
      <h2 class="font-[var(--font-display)] text-2xl md:text-3xl font-semibold text-[var(--color-ink)]">
        Próximamente
      </h2>
      <span class="font-[var(--font-body)] text-xs uppercase tracking-widest text-[var(--color-ink-muted)]">
        Vol. 1 · 2026
      </span>
    </div>

    <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each ['Ensayos', 'Entrevistas', 'Crítica'] as section}
        <div class="group cursor-pointer">
          <div class="aspect-[4/5] bg-[var(--color-paper)] border border-[var(--color-rule)] flex items-center justify-center
                      group-hover:border-[var(--color-terracotta)] transition-colors duration-300">
            <span class="font-[var(--font-display)] text-6xl text-[var(--color-rule)] group-hover:text-[var(--color-terracotta)] transition-colors">
              [
            </span>
          </div>
          <h3 class="mt-4 font-[var(--font-display)] text-xl font-medium text-[var(--color-ink)] group-hover:text-[var(--color-terracotta)] transition-colors">
            {section}
          </h3>
          <p class="mt-2 font-[var(--font-body)] text-sm text-[var(--color-ink-muted)]">
            Contenido en preparación
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="py-24 md:py-32 bg-[var(--color-ink)]">
  <div class="mx-auto max-w-3xl px-[var(--spacing-editorial)] md:px-8 lg:px-12 text-center">
    <span class="font-[var(--font-body)] text-xs uppercase tracking-[0.3em] text-[var(--color-ink-muted)]">
      Convocatoria abierta
    </span>
    <h2 class="mt-6 font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[var(--color-cream)]">
      Invitamos a investigadores y ensayistas a participar
    </h2>
    <p class="mt-6 font-[var(--font-body)] text-lg text-[var(--color-ink-muted)] max-w-xl mx-auto">
      Abrimos nuestra primera convocatoria para el volumen inaugural de Revista Viaje.
    </p>
    <a
      href="/convocatoria"
      class="inline-flex items-center gap-3 mt-10 px-10 py-4 bg-[var(--color-terracotta)] hover:bg-[var(--color-terracotta-dark)] transition-colors"
    >
      <span class="font-[var(--font-body)] text-sm uppercase tracking-widest text-[var(--color-cream)]">
        Ver convocatoria
      </span>
      <svg class="w-4 h-4 text-[var(--color-cream)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  </div>
</section>
