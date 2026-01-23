<script>
  const equipo = [
    {
      nombre: 'Fernanda Moreno Gutiérrez',
      rol: 'Fundadora y Directora Editorial',
      descripcion: '(Iquique, 1999). Estudió Literatura Hispánica en la Universidad de Chile y actualmente cursa el Magíster en Estudios Literarios y Culturales Latinoamericanos en la Pontificia Universidad Católica de Valparaíso.',
      inicial: 'FM'
    },
    {
      nombre: 'Javiera Zumelzu',
      rol: 'Diseñadora de Redes',
      descripcion: '(Iquique, 1999). Estudió Diseño Gráfico con Mención en Sistemas de Identidad Visual en DUOC UC, Diseño Editorial en la Universidad Diego Portales; y cursó el Workshop of Branding, Design & Advertising en la School of Visual Arts, Nueva York.',
      inicial: 'JZ'
    },
    {
      nombre: 'Florencia Leiva Silva',
      rol: 'Editora',
      descripcion: '(Talagante, 2002). Estudió Letras en la Pontificia Universidad Católica de Chile y actualmente cursa el Magíster en Estudios Literarios y Culturales Latinoamericanos en la Pontificia Universidad Católica de Valparaíso.',
      inicial: 'FL'
    },
    {
      nombre: 'Aurora Mañas Navarrete',
      rol: 'Editora',
      descripcion: '(Valladolid, 2002). Estudió Literatura Hispánica en la Universidad de Chile y actualmente cursa el Magíster en Estudios Literarios y Culturales Latinoamericanos en la Pontificia Universidad Católica de Valparaíso.',
      inicial: 'AM'
    },
    {
      nombre: 'Hannah Smalley',
      rol: 'Editora',
      descripcion: '(Tennesse, 1998). Estudió Castellano en Princeton y actualmente cursa el Magíster en Estudios Literarios y Culturales Latinoamericanos en la Pontificia Universidad Católica de Valparaíso.',
      inicial: 'HS'
    }
  ];
</script>

<svelte:head>
  <title>Equipo Editorial — Revista Viaje</title>
  <meta name="description" content="Conoce al equipo editorial de Revista Viaje. Dirección, diseño y comité editorial." />
</svelte:head>

<section class="pt-32 pb-24 md:pt-40 md:pb-32">
  <div class="mx-auto max-w-5xl px-[var(--spacing-editorial)] md:px-8 lg:px-12">


    <!-- Team Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
      {#each equipo as miembro}
        <div class="group">
          <div class="mt-6">
            <h3 class="font-[var(--font-display)] text-xl font-semibold text-[var(--color-ink)]">
              {miembro.nombre}
            </h3>
            <p class="mt-1 font-[var(--font-body)] text-sm uppercase tracking-widest text-[#000080]">
              {miembro.rol}
            </p>
            <p class="mt-3 font-[var(--font-body)] text-sm text-[var(--color-ink-muted)] leading-relaxed">
              {miembro.descripcion}
            </p>
          </div>
        </div>
      {/each}
    </div>

    <section class="bg-[#000080] p-8">
      <p class="text-white font-[var(--font-body)]">
        El proyecto nace durante el verano de 2026 en el desierto de Atacama, más precisamente en la región de Tarapacá. Pero es posible que se haya estado gestando ya en 2025, cuando nos conocimos. Éramos cuerpos incómodos, aún sin saber cómo ganarnos la vida; acaso por eso buscamos un espacio intermedio, siempre en la escritura.
      </p>
    </section>
  </div>
</section>
