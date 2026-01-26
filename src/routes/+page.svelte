<!-- Trigger Vercel deploy: 2026-01-26 v2 -->
<script>
  import { onMount } from 'svelte';
  import TabbedContent from '$lib/components/TabbedContent.svelte';

  let mounted = $state(false);

  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Revista Viaje</title>
  <meta name="description" content="Pensamos los territorios de Chile y la literatura como fuentes de experiencia. Entendemos la escritura y la lectura como prácticas que intervienen en la manera en que habitamos el mundo." />
</svelte:head>

<!-- Hero Section -->
<section class="min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#8B0000] text-white">


  <div class="relative z-10 mx-auto max-w-5xl px-[var(--spacing-editorial)] md:px-8 lg:px-12 py-32 md:py-40">
    <!-- Main Title -->
    <h1
      class="transition-all duration-700 delay-100 ease-out text-center
             {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
    >
      <span class="block font-[var(--font-display)] text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-semibold tracking-tight leading-[0.9]">
        <span class="text-white">[</span><span class="text-white">viaje</span><span class="text-white">]</span>
      </span>
    </h1>
    <p
      class="mt-4 text-center font-[var(--font-display)] text-lg md:text-xl text-white/80
             transition-all duration-700 delay-150 ease-out
             {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
    >
      Revista de Ensayo y Creación
    </p>

    <!-- Mission Statement -->
    <p
      class="mt-12 md:mt-16 max-w-3xl mx-auto font-[var(--font-display)] text-sm sm:text-base md:text-lg leading-relaxed text-white text-center
             transition-all duration-700 delay-200 ease-out
             {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
    >
      Revista Viaje es un medio digital chileno con publicaciones mensuales sobre el mundo que habitamos
    </p>
    <p
      class="mt-2 text-center font-[var(--font-display)] text-lg md:text-xl text-white/80
             transition-all duration-700 delay-200 ease-out
             {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
    >
      <s class="line-through decoration-1">y otros mundos posibles</s>.
    </p>

    <!-- CTA Button -->
    <div
      class="mt-12 md:mt-16 flex justify-center transition-all duration-700 delay-300 ease-out
             {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
    >
      <a
        href="/convocatoria"
        class="group inline-flex items-center gap-3 px-8 py-4 border-2 border-[var(--color-ink)] bg-transparent
               hover:bg-[var(--color-ink)] transition-all duration-300"
      >
        <span class="font-[var(--font-body)] text-sm uppercase tracking-widest text-white group-hover:text-white transition-colors">
          Convocatoria abierta
        </span>
        <svg class="w-4 h-4 text-white group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </div>



</section>
<main class="pt-24">
  <TabbedContent />
</main>
