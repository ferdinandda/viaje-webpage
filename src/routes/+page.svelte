<!-- Trigger Vercel deploy: 2026-02-19 v10 -->
<script>
  import { onMount, tick } from 'svelte';
  import TabbedContent from '$lib/components/TabbedContent.svelte';

  let mounted = $state(false);
  let floorRef = $state();
  
  let elementRefs = $state(new Array(10).fill(null));
  let translations = $state(new Array(10).fill(0));
  let rotations = $state(new Array(10).fill(0));
  let horizontalOffsets = $state(new Array(10).fill(0));
  let maxScrolls = $state(new Array(10).fill(0));
  let isLanded = $state(new Array(10).fill(false));
  
  const characters = ["[", "v", "i", "a", "j", "e", "]"];
  let floorTop = 0;
  let elementsInitialY = new Array(10).fill(0);

  const elementProps = new Array(10).fill(0).map((_, i) => ({
    drift: (Math.random() - 0.5) * 250,
    rotMult: (Math.random() - 0.5) * 40,
  }));

  async function calculatePositions() {
    if (!floorRef) return;
    const floorRect = floorRef.getBoundingClientRect();
    floorTop = floorRect.top + window.scrollY;
    
    elementRefs.forEach((ref, i) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        elementsInitialY[i] = rect.top + window.scrollY - translations[i];
      }
    });
  }

  function handleScroll() {
    const sY = window.scrollY;
    const headerHeight = window.innerWidth < 768 ? 80 : 96;
    
    elementRefs.forEach((ref, i) => {
      if (!ref || isLanded[i]) return;
      
      const props = elementProps[i];
      const collisionDistance = sY + headerHeight - elementsInitialY[i];
      let pushAmount = Math.max(0, collisionDistance);
      
      if (pushAmount > maxScrolls[i]) {
        maxScrolls[i] = pushAmount;
      }
      
      const currentPush = maxScrolls[i];
      const rect = ref.getBoundingClientRect();
      const height = rect.height;
      const distToFloor = floorTop - elementsInitialY[i] - height;
      
      if (currentPush >= distToFloor) {
        isLanded[i] = true;
        translations[i] = distToFloor;
        rotations[i] = props.rotMult;
        horizontalOffsets[i] = props.drift;
      } else {
        const ratio = currentPush / distToFloor;
        translations[i] = currentPush;
        rotations[i] = props.rotMult * (currentPush > 0 ? ratio : 0);
        horizontalOffsets[i] = props.drift * (currentPush > 0 ? ratio : 0);
      }
    });
  }

  onMount(async () => {
    mounted = true;
    await tick();
    await calculatePositions();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculatePositions);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculatePositions);
    };
  });
</script>

<svelte:head>
  <title>Revista Viaje</title>
  <meta name="description" content="Pensamos los territorios de Chile y la literatura como fuentes de experiencia. Entendemos la escritura y la lectura como prácticas que intervienen en la manera en que habitamos el mundo." />
</svelte:head>

<section class="min-h-screen flex flex-col justify-center relative bg-[#e5e5e5] text-[var(--color-ink)] kindle-screen">
  <div class="absolute inset-0 opacity-[0.04] pointer-events-none" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22micro%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23micro)%22/%3E%3C/svg%3E');"></div>

  <div class="relative z-30 mx-auto max-w-5xl px-[var(--spacing-editorial)] md:px-8 lg:px-12 pt-48 pb-32 md:pt-60 md:pb-40">
    
    <!-- Main Title -->
    <h1 class="text-center relative z-50" style="opacity: {mounted ? '1' : '0'}">
      <span class="block text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-semibold tracking-tight leading-[0.9] whitespace-nowrap" style="font-family: 'Stoke', serif;">
        {#each characters as char, i}
          <span 
            class="inline-block relative"
            style="transform: translate({horizontalOffsets[i]}px, {translations[i]}px) rotate({rotations[i]}deg); will-change: transform;"
          >
            <span 
              bind:this={elementRefs[i]}
              class="inline-block {isLanded[i] ? 'animate-bounce-hit' : ''}"
              style="color: var(--color-ink);"
            >
              {char}
            </span>
          </span>
        {/each}
      </span>
    </h1>
    <br>
    <div
      class="mt-4 text-center text-base md:text-lg text-[var(--color-ink)] leading-relaxed relative z-40"
      style="opacity: {mounted ? '1' : '0'}; transform: translate({horizontalOffsets[7]}px, {translations[7]}px) rotate({rotations[7]}deg); will-change: transform;"
    >
      <span 
        bind:this={elementRefs[7]}
        class="inline-block {isLanded[7] ? 'animate-bounce-hit' : ''}"
        style="font-family: 'Stoke', serif;"
      >
        Revista de Ensayo y Creación
      </span>
    </div>

    <!-- CTA Button -->
    <div
      class="mt-12 md:mt-16 flex justify-center relative z-30"
      style="opacity: {mounted ? '1' : '0'}; transform: translate({horizontalOffsets[8]}px, {translations[8]}px) rotate({rotations[8]}deg); will-change: transform;"
    >
      <div class={isLanded[8] ? 'animate-bounce-hit' : ''}>
        <a
          bind:this={elementRefs[8]}
          href="/convocatoria"
          class="group inline-flex items-center gap-3 px-8 py-4 border border-[var(--color-ink)] bg-transparent
                 hover:bg-[var(--color-ink)] hover:text-white transition-all duration-200"
        >
          <span class="text-sm uppercase tracking-widest" style="font-family: 'Jost', sans-serif;">
            Convocatoria abierta
          </span>
        </a>
      </div>
    </div>

    <div 
      class="mt-32 md:mt-40 mx-auto max-w-2xl text-center text-sm md:text-base leading-relaxed transition-all duration-700 delay-200 ease-out relative z-20"
      style="font-family: 'Jost', sans-serif; opacity: {mounted ? '1' : '0'}; transform: translate({horizontalOffsets[9]}px, {translations[9]}px) rotate({rotations[9]}deg); will-change: transform;"
    >
      <div bind:this={elementRefs[9]} class={isLanded[9] ? 'animate-bounce-hit' : ''}>
        <span class="kindle-marker">
          Revista Viaje es un medio digital nacido en Chile que busca reunir escrituras sobre el mundo que habitamos <span class="line-through">y otros mundos posibles.</span>
        </span>
      </div>
    </div>
  </div>
</section>

<div bind:this={floorRef} class="bg-[#1C1C1C] py-32 md:py-48 transition-colors duration-500 relative z-20">
  <div class="px-[var(--spacing-editorial)] md:px-12 text-center max-w-4xl mx-auto">
    <blockquote class="text-xl md:text-2xl leading-relaxed text-[#e5e5e5] font-light text-justify" style="font-family: 'Jost', sans-serif;">
      “Me gusta pensar que quienes escriben ensayo tienen el pulso malo de los viajeros, mal estibados, empujados siempre a trasbordar y recomenzar sus maletas. Viaja Martí, viaja Mistral, viaja Benjamin, viaja Paz. Hubo y hay tal vez una noche: los focos iluminan el andén con aquella luz anaranjada de los sitios que no existen más que para los otros. El andén es igual a otros andenes; sin embargo, tan distinto en la nitidez con que los ojos del extranjero intentan atraparlo.”
    </blockquote>
    <p class="mt-8 text-sm uppercase tracking-widest text-[#b3b3b3]" style="font-family: 'Stoke', serif;">
      [Guadalupe Santa Cruz, El espesor de las palabras]
    </p>
  </div>
</div>

<main class="pt-12 bg-[#e5e5e5] pb-24 kindle-screen">
  <TabbedContent />
</main>

<style>
  .kindle-screen { position: relative; }
  .kindle-marker {
    background-color: var(--color-ink);
    color: var(--color-paper);
    padding: 0.2em 0.4em;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
    display: inline;
  }
  .kindle-screen-dark { position: relative; }

  @keyframes bounce-hit {
    0% { transform: translateY(0); }
    20% { transform: translateY(-60px); }
    40% { transform: translateY(0); }
    60% { transform: translateY(-20px); }
    80% { transform: translateY(0); }
    90% { transform: translateY(-5px); }
    100% { transform: translateY(0); }
  }

  .animate-bounce-hit {
    animation: bounce-hit 0.7s ease-out both;
  }
</style>
