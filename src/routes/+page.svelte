<!-- Trigger Vercel deploy: 2026-01-27 v5 -->
<script>
  import { onMount } from 'svelte';
  import TabbedContent from '$lib/components/TabbedContent.svelte';

  let mounted = $state(false);
  let visitCount = $state('0000000');

  onMount(async () => {
    mounted = true;
    
    // Global visit counter using countapi.xyz
    try {
      // Namespace: revistaviaje.cl, Key: visits
      const response = await fetch('https://api.countapi.xyz/hit/revistaviaje.cl/visits');
      const data = await response.json();
      if (data && data.value) {
        visitCount = data.value.toString().padStart(7, '0');
        // Update local storage backup
        localStorage.setItem('pageVisits', data.value.toString());
      } else {
        throw new Error('No data');
      }
    } catch (error) {
      // Fallback to local storage if API fails
      let stored = localStorage.getItem('pageVisits');
      let count = stored ? parseInt(stored) : 1248;
      count++;
      localStorage.setItem('pageVisits', count.toString());
      visitCount = count.toString().padStart(7, '0');
    }
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
      class="mt-32 md:mt-40 mx-auto max-w-4xl bg-black p-8 text-center text-sm md:text-base leading-relaxed transition-all duration-700 delay-200 ease-out
             {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
      style="font-family: 'Jost', sans-serif; color: #D24843;"
    >
      Revista Viaje es un medio digital chileno con publicaciones sobre <s class="line-through decoration-[1px]">las situaciones que nos tienen podridxs</s>, el mundo que habitamos <s class="line-through decoration-[1px]">y otros mundos posibles.</s>
    </div>

    <div 
      class="mt-4 text-center text-[10px] uppercase tracking-[0.2em] opacity-40 transition-all duration-700 delay-300
             {mounted ? 'opacity-40' : 'opacity-0'}"
      style="font-family: 'Jost', sans-serif;"
    >
      Visitas: {visitCount}
    </div>
  </div>



</section>
<main class="pt-24">
  <TabbedContent />
</main>
