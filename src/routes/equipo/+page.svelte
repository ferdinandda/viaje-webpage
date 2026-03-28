<script>
  const equipo = [
    {
      nombre: 'Fernanda Moreno Gutiérrez',
      rol: '',
      locacion_ano: '(Santiago, 2000)',
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
      nombre: 'Sofía Quevedo',
      rol: '',
      locacion_ano: '(Rancagua, 2001)',
      descripcion: 'Estudió Literatura Hispánica en la Universidad de Chile, diplomada en Literaturas del mundo. Actualmente cursa el Magister en Escritura Creativa en la Universidad Alberto Hurtado.',
      inicial: 'SQ'
    },
    {
      nombre: 'Javiera Zumelzu',
      rol: 'Diseño Publicaciones de Instagram',
      locacion_ano: '(Iquique, 1999)',
      descripcion: 'Estudió Diseño Gráfico con Mención en Sistemas de Identidad Visual en DUOC UC, Diseño Editorial en la Universidad Diego Portales; y cursó el Workshop of Branding, Design & Advertising en la School of Visual Arts, Nueva York.',
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
      <h2 class="text-xs md:text-sm font-normal mb-10 text-[var(--color-paper)] opacity-60 uppercase tracking-[0.4em]" style="font-family: 'Stoke', serif;">Nota editorial</h2>
      <blockquote class="text-xl md:text-2xl leading-relaxed text-[var(--color-paper)] font-light text-justify opacity-80" style="font-family: 'Jost', sans-serif;">
        <span class="editorial-strike">Este proyecto comienza a cuajar durante el verano del 2026 en el desierto de Atacama. Es posible, sin embargo, que se haya estado gestando ya en 2025, cuando nos conocimos en Valparaíso.</span> Sin tener del todo claro el lugar que ocupamos en la academia, buscamos dar lugar a un tipo de escritura que asume la incertidumbre como condición, pero sin perder de vista el lugar desde el que se enuncia. Nos interesa esa dislocación en el modo de ser y estar que toda composición ensayística implica. Por ello, la revista se propone como una apertura para quienes entienden el acto creativo como un modo [siempre inestable] de estar en el mundo.
      </blockquote>
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


    </div>
  </section>
</div>

<style>
  .editorial-strike {
    text-decoration: line-through;
    text-decoration-color: #ffffff;
    text-decoration-thickness: 1px;
  }
</style>
