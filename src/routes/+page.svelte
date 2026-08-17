<!-- Trigger Vercel deploy: 2026-03-11 v11 -->
<script>
  import { onMount } from 'svelte';
  import TabbedContent from '$lib/components/TabbedContent.svelte';

  let quoteEl;
  let quoteVisible = $state(false);

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          quoteVisible = true;
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (quoteEl) observer.observe(quoteEl);
    return () => observer.disconnect();
  });
</script>

<svelte:head>
  <title>Revista Viaje</title>
</svelte:head>

<section class="min-h-screen flex flex-col justify-center relative bg-[#e5e5e5] text-[var(--color-ink)] kindle-screen">
  <div class="absolute inset-0 opacity-[0.04] pointer-events-none" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22micro%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23micro)%22/%3E%3C/svg%3E');"></div>

  <div class="relative z-30 mx-auto max-w-5xl px-[var(--spacing-editorial)] md:px-8 lg:px-12 pt-28 pb-16 md:pt-32 md:pb-20">

    <!-- Main Title -->
    <h1 class="flex justify-center relative z-50">
      <img src="/isologotiponegro.svg" alt="Revista Viaje" class="h-56 sm:h-64 md:h-72 lg:h-80 w-auto max-w-full" />
    </h1>
    <div class="mt-4 text-center text-xs md:text-sm text-[var(--color-ink)] leading-relaxed relative z-40">
      <span class="uppercase" style="font-family: 'Inter', sans-serif; font-weight: 400; letter-spacing: 2px;">
        Revista de Ensayo y Creación
      </span>
    </div>

    <!-- CTA Button -->
    <div class="mt-10 md:mt-12 flex justify-center relative z-30">
      <a
        href="/convocatoria"
        class="group inline-flex items-center gap-3 px-8 py-4 border border-[var(--color-ink)] bg-transparent
               hover:bg-[var(--color-ink)] hover:text-white transition-all duration-200"
      >
        <span class="text-xs uppercase" style="font-family: 'Inter', sans-serif; font-weight: 400; letter-spacing: 2px;">
          Convocatoria abierta
        </span>
      </a>
    </div>
  </div>
</section>


<div class="bg-[var(--color-paper)] py-16 md:py-24 relative z-20 quote-reveal" class:is-visible={quoteVisible} bind:this={quoteEl}>
  <div class="px-[var(--spacing-editorial)] md:px-12 text-center max-w-3xl mx-auto">
    <blockquote class="text-lg md:text-xl leading-relaxed text-[var(--color-ink)] font-light text-justify" style="font-family: 'Inter', sans-serif; font-weight: 300; font-size: 1.25rem;">
      "Me gusta pensar que quienes escriben ensayo tienen el pulso malo de los viajeros, mal estibados, empujados siempre a trasbordar y recomenzar sus maletas. Viaja Martí, viaja Mistral, viaja Benjamin, viaja Paz. Hubo y hay tal vez una noche: los focos iluminan el andén con aquella luz anaranjada de los sitios que no existen más que para los otros. El andén es igual a otros andenes; sin embargo, tan distinto en la nitidez con que los ojos del extranjero intentan atraparlo."
    </blockquote>
    <p class="mt-8 text-xs uppercase text-[var(--color-ink)] opacity-60" style="font-family: 'Inter', sans-serif; font-weight: 400; letter-spacing: 2px;">
      Guadalupe Santa Cruz — El espesor de las palabras
    </p>
  </div>
</div>

<main>
  <TabbedContent />
</main>

<style>
  .kindle-screen { position: relative; }

  .quote-reveal {
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 0.9s ease, transform 0.9s ease;
  }
  .quote-reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
  .kindle-marker {
    background-color: var(--color-ink);
    color: var(--color-paper);
    padding: 0.2em 0.4em;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
    display: inline;
  }
</style>
