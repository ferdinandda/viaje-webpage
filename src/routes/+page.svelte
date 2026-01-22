<script>
  import { onMount } from 'svelte';

  let mounted = $state(false);

  onMount(() => {
    mounted = true;
  });

  const ejesConceptuales = [
    {
      numero: '01',
      titulo: 'Territorio, espacio y geopolítica cultural',
      temas: ['Chile y América Latina como espacios históricos', 'Fronteras, centros y periferias', 'Colonialismo, extractivismo, desplazamientos', 'Paisaje, ciudad, desierto, mar, cordillera']
    },
    {
      numero: '02',
      titulo: 'Pensamiento latinoamericano',
      temas: ['Tradiciones intelectuales del continente', 'Ensayo latinoamericano', 'Filosofía y crítica desde el sur', 'Estudios decoloniales']
    },
    {
      numero: '03',
      titulo: 'Literatura y teoría literaria',
      temas: ['Canon y literatura chilena', 'Historia y crítica literaria', 'Teoría del texto, autor y lector', 'Estudios culturales']
    },
    {
      numero: '04',
      titulo: 'Escritura como práctica',
      temas: ['El oficio de escribir', 'El cuerpo que escribe', 'La materialidad del texto', 'La escritura como intervención']
    }
  ];
</script>

<svelte:head>
  <title>Revista Viaje — Ensayos sobre territorio, literatura y pensamiento latinoamericano</title>
  <meta name="description" content="Pensamos los territorios de Chile y la literatura como fuentes de experiencia. Entendemos la escritura y la lectura como prácticas que intervienen en la manera en que habitamos el mundo." />
</svelte:head>

<!-- Hero Section -->
<section class="min-h-screen flex flex-col justify-center relative overflow-hidden bg-black text-white">


  <div class="relative z-10 mx-auto max-w-5xl px-[var(--spacing-editorial)] md:px-8 lg:px-12 py-32 md:py-40">
    <!-- Main Title -->
    <h1
      class="transition-all duration-700 delay-100 ease-out
             {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
    >
      <span class="block font-[var(--font-display)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight leading-[0.9]">
        <span class="text-white">Revista</span>
      </span>
      <span class="block font-[var(--font-display)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight leading-[0.9] mt-2">
        <span class="text-white">[</span><span class="text-white">Viaje</span><span class="text-white">]</span>
      </span>
    </h1>

    <!-- Mission Statement -->
    <p
      class="mt-12 md:mt-16 max-w-3xl font-[var(--font-display)] text-xl sm:text-2xl md:text-3xl leading-relaxed text-[var(--color-ink-light)]
             transition-all duration-700 delay-200 ease-out
             {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
    >
      Pensamos los <span class="text-white font-medium">territorios de Chile</span> y la <span class="text-white font-medium">literatura</span> como fuentes de experiencia. Entendemos la escritura y la lectura como prácticas que intervienen en la manera en que <span class="italic">habitamos el mundo</span>.
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
        <span class="font-[var(--font-body)] text-sm uppercase tracking-widest text-white group-hover:text-black transition-colors">
          Convocatoria abierta
        </span>
        <svg class="w-4 h-4 text-white group-hover:text-black group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <div class="flex flex-col items-center gap-2 text-gray-400">
      <span class="font-[var(--font-body)] text-xs uppercase tracking-widest">Explorar</span>
      <div class="w-px h-8 bg-[var(--color-rule)] animate-pulse"></div>
    </div>
  </div>
</section>

<!-- Ejes Conceptuales Section -->
<section class="py-24 md:py-32 bg-[var(--color-paper)] border-y border-[var(--color-rule)]">
  <div class="mx-auto max-w-6xl px-[var(--spacing-editorial)] md:px-8 lg:px-12">
    <div class="mb-16">
      <span class="font-[var(--font-body)] text-xs uppercase tracking-[0.2em] text-[var(--color-ink-muted)]">
        Líneas temáticas
      </span>
      <h2 class="mt-4 font-[var(--font-display)] text-3xl md:text-4xl font-semibold leading-tight text-[var(--color-ink)]">
        Ejes conceptuales
      </h2>
      <p class="mt-4 max-w-2xl font-[var(--font-body)] text-lg text-[var(--color-ink-light)]">
        Cuatro territorios de pensamiento que articulan nuestra propuesta editorial.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {#each ejesConceptuales as eje}
        <div class="group p-8 bg-[var(--color-cream)] border border-[var(--color-rule)] hover:border-[var(--color-terracotta)] transition-colors duration-300">
          <div class="flex items-start gap-4">
            <span class="font-[var(--font-display)] text-4xl text-[var(--color-rule)] group-hover:text-[var(--color-terracotta)] transition-colors">
              [{eje.numero}]
            </span>
            <div class="flex-1">
              <h3 class="font-[var(--font-display)] text-xl font-semibold text-[var(--color-ink)] leading-tight">
                {eje.titulo}
              </h3>
              <ul class="mt-4 space-y-1">
                {#each eje.temas as tema}
                  <li class="font-[var(--font-body)] text-sm text-[var(--color-ink-muted)] flex items-center gap-2">
                    <span class="text-[var(--color-terracotta)]">—</span>
                    {tema}
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Qué publicamos Section -->
<section class="py-24 md:py-32">
  <div class="mx-auto max-w-5xl px-[var(--spacing-editorial)] md:px-8 lg:px-12">
    <div class="mb-16">
      <span class="font-[var(--font-body)] text-xs uppercase tracking-[0.2em] text-[var(--color-ink-muted)]">
        Formatos
      </span>
      <h2 class="mt-4 font-[var(--font-display)] text-3xl md:text-4xl font-semibold leading-tight text-[var(--color-ink)]">
        Qué publicamos
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <a href="/ensayos" class="group">
        <div class="aspect-[4/5] bg-[var(--color-paper)] border border-[var(--color-rule)] flex items-center justify-center
                    group-hover:border-[var(--color-terracotta)] transition-colors duration-300">
          <span class="font-[var(--font-display)] text-6xl text-[var(--color-rule)] group-hover:text-[var(--color-terracotta)] transition-colors">
            [E]
          </span>
        </div>
        <h3 class="mt-4 font-[var(--font-display)] text-xl font-medium text-[var(--color-ink)] group-hover:text-[var(--color-terracotta)] transition-colors">
          Ensayos
        </h3>
        <p class="mt-2 font-[var(--font-body)] text-sm text-[var(--color-ink-muted)]">
          Literarios, políticos, filosóficos, sociales y culturales. 8-10 páginas.
        </p>
      </a>

      <a href="/entrevistas" class="group">
        <div class="aspect-[4/5] bg-[var(--color-paper)] border border-[var(--color-rule)] flex items-center justify-center
                    group-hover:border-[var(--color-terracotta)] transition-colors duration-300">
          <span class="font-[var(--font-display)] text-6xl text-[var(--color-rule)] group-hover:text-[var(--color-terracotta)] transition-colors">
            [&]
          </span>
        </div>
        <h3 class="mt-4 font-[var(--font-display)] text-xl font-medium text-[var(--color-ink)] group-hover:text-[var(--color-terracotta)] transition-colors">
          Entrevistas
        </h3>
        <p class="mt-2 font-[var(--font-body)] text-sm text-[var(--color-ink-muted)]">
          Conversaciones y traducciones con pensadores contemporáneos.
        </p>
      </a>


    </div>
  </div>
</section>

<!-- Público Section -->
<section class="py-24 md:py-32 bg-[var(--color-paper)] border-y border-[var(--color-rule)]">
  <div class="mx-auto max-w-5xl px-[var(--spacing-editorial)] md:px-8 lg:px-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
      <div>
        <span class="font-[var(--font-body)] text-xs uppercase tracking-[0.2em] text-[var(--color-ink-muted)]">
          Comunidad
        </span>
        <h2 class="mt-4 font-[var(--font-display)] text-3xl md:text-4xl font-semibold leading-tight text-[var(--color-ink)]">
          Para quiénes escribimos
        </h2>
        <p class="mt-6 font-[var(--font-body)] text-lg leading-relaxed text-[var(--color-ink-light)]">
          Revista Viaje dialoga con estudiantes de humanidades, docentes, investigadores, escritores, editores, y todo lector interesado en pensar críticamente desde Chile y Latinoamérica.
        </p>
        <p class="mt-4 font-[var(--font-body)] text-lg leading-relaxed text-[var(--color-ink-light)]">
          Nuestro tono es <span class="text-[var(--color-ink)] font-medium">literario</span> y <span class="text-[var(--color-ink)] font-medium">divulgativo</span>: buscamos rigor sin hermetismo.
        </p>
      </div>
      <div class="flex justify-center md:justify-end">
        <div class="relative">
          <div class="absolute -inset-4 border border-[var(--color-rule)]"></div>
          <div class="absolute -inset-8 border border-[var(--color-rule-light)]"></div>
          <div class="relative bg-[var(--color-cream)] p-8 md:p-12">
            <blockquote class="font-[var(--font-display)] text-xl md:text-2xl italic text-[var(--color-ink-light)] leading-relaxed">
              "Narramos nuestra historia y discutimos nuestro <span class="text-[var(--color-terracotta)]">presente, pasado y futuro</span>"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="py-24 md:py-32 bg-[var(--color-ink)]">
  <div class="mx-auto max-w-3xl px-[var(--spacing-editorial)] md:px-8 lg:px-12 text-center">
    <span class="font-[var(--font-body)] text-xs uppercase tracking-[0.3em] text-[var(--color-ink-muted)]">
      Convocatoria abierta · Volumen 1
    </span>
    <h2 class="mt-6 font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[var(--color-cream)]">
      Invitamos a investigadores y ensayistas a participar
    </h2>
    <p class="mt-6 font-[var(--font-body)] text-lg text-[var(--color-ink-muted)] max-w-xl mx-auto">
      Publicación trimestral. Ensayos de 8-10 páginas. Videoensayos de 3-8 minutos.
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
