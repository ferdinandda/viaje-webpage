<script>
  const equipo = [
    {
      nombre: 'Fernanda Moreno Gutiérrez',
      rol: '',
      locacion_ano: '(Iquique, 1999)',
      descripcion: 'Estudió Literatura Hispánica en la Universidad de Chile y actualmente cursa el Magíster en Estudios Literarios y Culturales Latinoamericanos en la Pontificia Universidad Católica de Valparaíso.',
      inicial: 'FM'
    },
    {
      nombre: 'Hannah Smalley',
      rol: '',
      locacion_ano: '(Nashville, 1998)',
      descripcion: 'Estudió Castellano en Princeton y actualmente cursa el Magíster en Estudios Literarios y Culturales Latinoamericanos en la Pontificia Universidad Católica de Valparaíso.',
      inicial: 'HS'
    },
    {
      nombre: 'Florencia Leiva Silva',
      rol: '',
      locacion_ano: '(Talagante, 2001)',
      descripcion: 'Estudió Letras en la Pontificia Universidad Católica de Chile y actualmente cursa el Magíster en Estudios Literarios y Culturales Latinoamericanos en la Pontificia Universidad Católica de Valparaíso.',
      inicial: 'FL'
    },
    {
      nombre: 'Aurora Mañas Navarrete',
      rol: '',
      locacion_ano: '(Valladolid, 2002)',
      descripcion: 'Estudió Literatura Hispánica en la Universidad de Chile, es becaria ANID y actualmente cursa el Magíster en Estudios Literarios y Culturales Latinoamericanos en la Pontificia Universidad Católica de Valparaíso.',
      inicial: 'AM'
    },
    {
      nombre: 'Javiera Zumelzu',
      rol: '',
      locacion_ano: '(Iquique, 1999)',
      descripcion: 'Estudió Diseño Gráfico con mención en Sistemas de Identidad Visual en DUOC UC, Diseño Editorial en la Universidad Diego Portales, y cursó el Workshop of Branding, Design & Advertising en la School of Visual Arts, Nueva York.',
      inicial: 'JZ'
    }
  ];

  const comite = equipo.filter(m => m.nombre !== 'Javiera Zumelzu');
  const diseno = equipo.filter(m => m.nombre === 'Javiera Zumelzu');
</script>

<svelte:head>
  <title>Equipo Editorial — Revista Viaje</title>
  <meta name="description" content="Conoce al equipo editorial de Revista Viaje. Dirección, diseño y comité editorial." />
</svelte:head>

<div class="bg-[#e5e5e5]">
  <!-- Editorial Note Section (Static) -->
  <div class="bg-[#1C1C1C] pt-32 pb-24 md:pt-40 md:pb-32 transition-colors duration-500">
    <div class="px-[var(--spacing-editorial)] md:px-12 text-center max-w-4xl mx-auto">
      <div class="stamp-wrap mx-auto max-w-2xl">
        <div class="stamp-inner">
          <div class="flex justify-center mb-8">
            <img src="/2negro.png" alt="Viaje" class="h-20 w-auto object-contain" />
          </div>
          <blockquote class="text-sm md:text-base leading-relaxed text-justify" style="font-family: 'Cormorant Garamond', serif; font-weight: 400; color: #6B5B4E;">
            <p class="mb-6">La única ley que posee el ensayo, dice Adorno, es la herejía. Conjurar esta escritura consiste en arriesgar verdades, asumir incertidumbres y moverse entre experiencias y conceptos. La forma, en su rebeldía, no admite prescripción alguna de sus atribuciones, pero suele estar guiada por una voz que se hace cargo de algo, por un pensamiento que debe responder ante su congregación. Esas son las escrituras que Viaje convoca.</p>

          </blockquote>
        </div>
      </div>
    </div>
  </div>

  <!-- Team List Section -->
  <section class="pt-24 pb-0 bg-[#e5e5e5]" style="font-family: 'Jost', sans-serif;">
    <div class="mx-auto max-w-4xl px-[var(--spacing-editorial)] md:px-8 lg:px-12">
      
      <!-- COMITÉ EDITORIAL -->
      <div class="mb-32 text-center">
        <p class="mb-16 text-xs uppercase tracking-[0.3em] text-[#9C9C9C] border-b border-[#D4CFC7] pb-4 font-medium inline-block w-full" style="font-family: 'Jost', sans-serif;">COMITÉ EDITORIAL</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 text-center">
          {#each comite as miembro}
            <div class="group flex flex-col items-center">
              {#if miembro.rol}
                <p class="text-[10px] uppercase tracking-widest text-[#9C9C9C] mb-1 font-semibold" style="font-family: 'Jost', sans-serif;">{miembro.rol}</p>
              {/if}
              <h3 class="text-2xl font-normal text-[var(--color-ink)] leading-tight mb-1" style="font-family: 'Stoke', serif;">{miembro.nombre}</h3>
              {#if miembro.locacion_ano}
                <p class="text-xs text-[var(--color-ink-muted)] italic mb-4" style="font-family: 'Jost', sans-serif;">{miembro.locacion_ano}</p>
              {/if}
              <p class="text-sm md:text-base text-[var(--color-ink)] leading-relaxed opacity-80 max-w-sm text-justify" style="font-family: 'Jost', sans-serif;">
                {miembro.descripcion}
              </p>
            </div>
          {/each}
        </div>
      </div>

      <!-- DISEÑO -->
      <div class="mb-24 text-center">
        <p class="mb-16 text-xs uppercase tracking-[0.3em] text-[#9C9C9C] border-b border-[#D4CFC7] pb-4 font-medium inline-block w-full" style="font-family: 'Jost', sans-serif;">DISEÑO</p>
        <div class="flex justify-center">
          {#each diseno as miembro}
            <div class="group flex flex-col items-center max-w-sm">
              {#if miembro.rol}
                <p class="text-[11px] italic tracking-[0.2em] text-[#9C9C9C] mb-3 font-light" style="font-family: 'Jost', sans-serif;">{miembro.rol}</p>
              {/if}
              <h3 class="text-2xl font-normal text-[var(--color-ink)] leading-tight mb-1" style="font-family: 'Stoke', serif;">{miembro.nombre}</h3>
              {#if miembro.locacion_ano}
                <p class="text-xs text-[var(--color-ink-muted)] italic mb-4" style="font-family: 'Jost', sans-serif;">{miembro.locacion_ano}</p>
              {/if}
              <p class="text-sm md:text-base text-[var(--color-ink)] leading-relaxed opacity-80 text-justify" style="font-family: 'Jost', sans-serif;">
                {miembro.descripcion}
              </p>
            </div>
          {/each}
        </div>
      </div>

      <!-- WEB -->
      <div class="mb-24 text-center">
        <p class="mb-8 text-xs uppercase tracking-[0.3em] text-[#9C9C9C] border-b border-[#D4CFC7] pb-4 font-medium inline-block w-full" style="font-family: 'Jost', sans-serif;">DISEÑO Y CREACIÓN WEB</p>
        <h3 class="text-2xl font-normal text-[var(--color-ink)] leading-tight" style="font-family: 'Stoke', serif;">PanzónLab</h3>
      </div>

    </div>
  </section>
</div>

<style>
  .stamp-wrap {
    background-color: #F0EDE6;
    background-image: radial-gradient(circle, #1C1C1C 5px, transparent 5px);
    background-size: 16px 16px;
    padding: 10px;
    display: block;
    width: 560px;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
  }

  .stamp-inner {
    background: #F0EDE6;
    padding: 2.5rem;
  }
</style>
