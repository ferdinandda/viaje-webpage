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
      nombre: 'Sofía Quevedo',
      rol: '',
      locacion_ano: '(Ciudad, Año)',
      descripcion: 'Descripción por confirmar.',
      inicial: 'SQ'
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
      descripcion: 'Estudió Literatura Hispánica en la Universidad de Chile y actualmente cursa el Magíster en Estudios Literarios y Culturales Latinoamericanos en la Pontificia Universidad Católica de Valparaíso.',
      inicial: 'AM'
    },
    {
      nombre: 'Hannah Smalley',
      rol: '',
      locacion_ano: '(Nashville, 1998)',
      descripcion: 'Estudió Castellano en Princeton y actualmente cursa el Magíster en Estudios Literarios y Culturales Latinoamericanos en la Pontificia Universidad Católica de Valparaíso.',
      inicial: 'HS'
    },
    {
      nombre: 'Javiera Zumelzu',
      rol: '',
      locacion_ano: '(Iquique, 1999)',
      descripcion: 'Estudió Diseño Gráfico con Mención en Sistemas de Identidad Visual en DUOC UC, Diseño Editorial en la Universidad Diego Portales; y cursó el Workshop of Branding, Design & Advertising en la School of Visual Arts, Nueva York.',
      inicial: 'JZ'
    }
  ];
</script>

<svelte:head>
  <title>Equipo Editorial — Revista Viaje</title>
  <meta name="description" content="Conoce al equipo editorial de Revista Viaje. Dirección, diseño y comité editorial." />
</svelte:head>

<!-- Editorial Note Section (Dark) -->
<div class="bg-[#1A1A1A] pt-32 pb-24 md:pt-40 md:pb-32 transition-colors duration-500">
  <div class="px-[var(--spacing-editorial)] md:px-12 text-center max-w-4xl mx-auto">
    <h2 class="text-2xl font-bold mb-8 text-[var(--color-paper)]" style="font-family: 'Jost', sans-serif;">Nota editorial:</h2>
    <blockquote class="text-xl md:text-2xl leading-relaxed text-[var(--color-paper)] font-light text-justify" style="font-family: 'Jost', sans-serif;">
      Este proyecto comienza a cuajar durante el verano del 2026 en el desierto de Atacama, más precisamente en la región de Tarapacá. Es posible, sin embargo, que se haya estado gestando ya en 2025, cuando nos conocimos en Valparaíso. Sin tener del todo claro el lugar que ocupamos en el mundo, buscamos dar lugar a un tipo de escritura que asume la incertidumbre como condición, pero sin perder de vista el lugar desde el que se enuncia. Nos referimos a esa dislocación en el modo de ser y estar que toda escritura ensayística implica. La revista se propone como un espacio abierto a quienes entienden la creación como un modo [siempre inestable] de estar en el mundo.
    </blockquote>
  </div>
</div>

<!-- Team List Section (Light) -->
<section class="py-24" style="font-family: 'Jost', sans-serif;">
  <div class="mx-auto max-w-5xl px-[var(--spacing-editorial)] md:px-8 lg:px-12">
    <!-- Team List -->
    <div class="mb-24">
      {#each equipo as miembro}
        {#if miembro.nombre === 'Fernanda Moreno Gutiérrez'}
          <p class="mt-12 mb-8 text-sm uppercase tracking-widest text-[#D24843] border-b border-[#D4CFC7] pb-2">COMITÉ EDITORIAL:</p>
        {/if}
        {#if miembro.nombre === 'Javiera Zumelzu'}
          <p class="mt-16 mb-8 text-sm uppercase tracking-widest text-[#D24843] border-b border-[#D4CFC7] pb-2">DISEÑO:</p>
        {/if}
        <div class="group mb-8 last:mb-0">
          <div class="mt-2">
            {#if miembro.rol}
              <p class="mt-1 text-sm uppercase tracking-widest text-[#D24843]">
                {miembro.rol}
              </p>
            {/if}
            <h3 class="text-xl font-semibold text-[var(--color-ink)] mt-1">
              {miembro.nombre}
            </h3>
            {#if miembro.locacion_ano}
              <p class="mt-1 text-sm text-[var(--color-ink-muted)]">
                {miembro.locacion_ano}
              </p>
            {/if}
            <p class="mt-3 text-sm text-[var(--color-ink)] leading-relaxed text-justify">
              {miembro.descripcion}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>