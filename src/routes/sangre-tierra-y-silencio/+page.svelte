<script>
  import { onMount } from 'svelte';

  let mounted = $state(false);

  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Sangre, tierra y silencio — Revista Viaje</title>
</svelte:head>

<article class="bg-[var(--color-cream)]">
  <!-- Hero Section -->
  <header class="pt-28 md:pt-36 pb-12 md:pb-16">
    <div class="mx-auto max-w-4xl px-[var(--spacing-editorial)] md:px-8 lg:px-12">
      <!-- Breadcrumb -->
      <nav
        class="mb-8 transition-all duration-500 ease-out
               {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}"
      >
        <a href="/" class="font-[var(--font-body)] text-xs uppercase tracking-[0.15em] text-[var(--color-ink-muted)] hover:text-[var(--color-terracotta)] transition-colors">
          ← Volver al inicio
        </a>
      </nav>

      <!-- Category -->
      <span
        class="block font-[var(--font-body)] text-xs uppercase tracking-[0.2em] text-[var(--color-terracotta)] mb-4
               transition-all duration-500 delay-75 ease-out
               {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}"
      >
        Ensayo
      </span>

      <!-- Title -->
      <h1
        class="font-[var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--color-ink)] leading-[1.1] tracking-tight
               transition-all duration-500 delay-100 ease-out
               {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}"
      >
        Sangre, tierra y silencio
      </h1>

      <!-- Subtitle -->
      <p
        class="mt-3 md:mt-4 font-[var(--font-display)] text-xl md:text-2xl text-[var(--color-ink-light)] italic
               transition-all duration-500 delay-150 ease-out
               {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}"
      >
        el doble vínculo de la experiencia femenina
      </p>

      <!-- Author -->
      <p
        class="mt-6 font-[var(--font-body)] text-sm text-[var(--color-ink-muted)] uppercase tracking-wide
               transition-all duration-500 delay-200 ease-out
               {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}"
      >
        por Florencia Leiva Silva
      </p>

      <!-- Divider -->
      <div
        class="mt-8 w-16 h-px bg-[var(--color-terracotta)]
               transition-all duration-500 delay-250 ease-out
               {mounted ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}"
        style="transform-origin: left;"
      ></div>
    </div>
  </header>

  <!-- Featured Image -->
  <figure
    class="mx-auto max-w-5xl px-[var(--spacing-editorial)] md:px-8 lg:px-12 mb-12 md:mb-16
           transition-all duration-700 delay-300 ease-out
           {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
  >
    <div class="relative overflow-hidden bg-[var(--color-paper)]">
      <img
        src="/my-image.jpg"
        alt="Sangre, tierra y silencio"
        class="w-full h-auto"
      />
    </div>
  </figure>

  <!-- Content -->
  <div
    class="mx-auto max-w-3xl px-[var(--spacing-editorial)] md:px-8 lg:px-12 pb-20 md:pb-28
           transition-all duration-700 delay-400 ease-out
           {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
  >
    <div class="prose-editorial">
      <p class="font-[var(--font-display)] text-lg md:text-xl leading-relaxed text-[var(--color-ink)]">
        La matriz es el órgano interno de reproducción de las hembras de los animales vivíparos en el que se desarrolla el feto. Es también el molde o la entidad principal, generadora de otras. En minería, la matriz es la roca en cuyo interior se ha formado un mineral.
      </p>

      <p class="mt-6 font-[var(--font-display)] text-lg md:text-xl leading-relaxed text-[var(--color-ink)]">
        En este sentido, como nos alumbra Mistral, la matriz original es la fuente que <em>"todo lo toma, todo lo carga / el lomo santo de la Tierra"</em> (156). No es baladí que tantas culturas hayan instalado el imaginario de la madre-tierra para hablar de la naturaleza.
      </p>

      <p class="mt-6 font-[var(--font-display)] text-lg md:text-xl leading-relaxed text-[var(--color-ink)]">
        De alguna manera, el accidentado camino que ha recorrido la mujer a lo largo de la historia sigue una curva análoga al de la tierra.
      </p>
    </div>
  </div>
</article>
