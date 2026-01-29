<!-- Trigger Vercel deploy: 2026-01-28 v6 -->
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
<section class="min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#D24843] text-[var(--color-ink)]">


  <div class="relative z-10 mx-auto max-w-5xl px-[var(--spacing-editorial)] md:px-8 lg:px-12 pt-48 pb-32 md:pt-60 md:pb-40">
    <!-- Main Title -->
    <h1
      class="transition-all duration-700 delay-100 ease-out text-center
             {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
    >
      <span class="block text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-semibold tracking-tight leading-[0.9]" style="font-family: 'Stoke', serif;">
        <span class="text-[var(--color-ink)]">[</span><span class="text-[var(--color-ink)]">viaje</span><span class="text-[var(--color-ink)]">]</span>
      </span>
    </h1>
    <br>
    <p
      class="mt-4 text-center text-base md:text-lg text-[var(--color-ink)] leading-relaxed
             transition-all duration-700 delay-150 ease-out
             {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
    >
      <span style="font-family: 'Stoke', serif;">Revista de Ensayo y Creación</span>
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
        <span 
          class="text-sm uppercase tracking-widest text-[var(--color-ink)] group-hover:text-white transition-colors"
          style="font-family: 'Jost', sans-serif;"
        >
          Convocatoria abierta
        </span>
        <svg class="w-4 h-4 text-[var(--color-ink)] group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>

    <div 
      class="mt-32 md:mt-40 mx-auto max-w-2xl text-center text-sm md:text-base leading-relaxed transition-all duration-700 delay-200 ease-out
             {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
      style="font-family: 'Jost', sans-serif; color: var(--color-ink);"
    >
      <span class="marker-highlight">Revista Viaje es un medio digital nacido en Chile que busca reunir escrituras sobre</span> 
      <span class="relative inline-block text-[10px] md:text-xs opacity-60 px-1 italic">
        las materias que nos rompen las pelotas,
        <svg class="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 pointer-events-none" viewBox="0 0 100 2" preserveAspectRatio="none">
          <path d="M0,1 L10,0.8 L25,1.2 L50,0.9 L75,1.1 L100,1" stroke="currentColor" stroke-width="0.5" fill="none" stroke-linecap="round" class="opacity-90" />
        </svg>
      </span>
      <span class="marker-highlight">el mundo que habitamos u otros mundos posibles.</span>
    </div>
  </div>
</section>

<div class="py-24 px-[var(--spacing-editorial)] md:px-12 text-center max-w-4xl mx-auto">
  <blockquote class="text-xl md:text-2xl leading-relaxed text-[var(--color-ink)] font-light text-justify" style="font-family: 'Jost', sans-serif;">
    “Me gusta pensar que quienes escriben ensayo tienen el pulso malo de los viajeros, mal estibados, empujados siempre a trasbordar y recomenzar sus maletas. Viaja Martí, viaja Mistral, viaja Benjamin, viaja Paz. Hubo y hay tal vez una noche: los focos iluminan el andén con aquella luz anaranjada de los sitios que no existen más que para los otros. El andén es igual a otros andenes; sin embargo, tan distinto en la nitidez con que los ojos del extranjero intentan atraparlo.”
  </blockquote>
  <p class="mt-6 text-sm uppercase tracking-widest text-[#D24843]" style="font-family: 'Stoke', serif;">
    [Guadalupe Santa Cruz, El espesor de las palabras]
  </p>
</div>

<main class="pt-12">
  <TabbedContent />
</main>

<style>
  .marker-highlight {
    position: relative;
    z-index: 1;
    display: inline-block;
    padding: 0 0.3em;
    color: #D24843; /* Hero background color for text */
    margin: 0 2px;
  }

  .marker-highlight::before {
    content: "";
    position: absolute;
    top: 2%;
    left: -1px;
    right: -1px;
    bottom: 2%;
    background-color: var(--color-ink); /* Ink color for highlighter */
    z-index: -1;
    transform: rotate(-0.8deg) skew(-2deg);
    border-radius: 3px 15px 5px 18px / 15px 5px 18px 3px;
    pointer-events: none;
  }
</style>