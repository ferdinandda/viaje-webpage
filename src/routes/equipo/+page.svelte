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
      descripcion: '',
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

<div class="bg-[#1C1C1C] pt-32 pb-32 md:pt-40 md:pb-40">
  <div class="px-[var(--spacing-editorial)] md:px-12 text-center max-w-4xl mx-auto">
    <div class="stamp-wrap mx-auto">
      <div class="stamp-inner">

        <!-- Logo -->
        <div class="flex justify-center mb-8">
          <img src="/2negro.png" alt="Viaje" class="h-20 w-auto object-contain" />
        </div>

        <!-- Texto editorial -->
        <blockquote class="stamp-quote">
          <p>La única ley que rige el ensayo, dice Adorno, es la herejía. Conjurar esta escritura exige arriesgar verdades, asumir incertidumbres. Ir y venir entre experiencias y conceptos. La forma, en su rebeldía, no admite prescripciones. Pero suele dejarse guiar por una voz que se hace cargo de algo, por un pensamiento que responde ante su propia congregación. Esas son las escrituras que Viaje convoca.</p>
        </blockquote>

        <div class="stamp-divider"></div>

        <!-- COMITÉ EDITORIAL -->
        <p class="stamp-section-label">Comité Editorial</p>
        <div class="stamp-member-list">
          {#each comite as miembro}
            <div class="stamp-member">
              <span class="stamp-member-name">{miembro.nombre}</span>
              {#if miembro.locacion_ano}
                <span class="stamp-member-loc">{miembro.locacion_ano}</span>
              {/if}
            </div>
          {/each}
        </div>

        <div class="stamp-divider"></div>

        <!-- DISEÑO -->
        <p class="stamp-section-label">Diseño</p>
        <div class="stamp-member-list">
          {#each diseno as miembro}
            <div class="stamp-member">
              <span class="stamp-member-name">{miembro.nombre}</span>
              {#if miembro.locacion_ano}
                <span class="stamp-member-loc">{miembro.locacion_ano}</span>
              {/if}
            </div>
          {/each}
        </div>

        <div class="stamp-divider"></div>

        <!-- WEB -->
        <p class="stamp-section-label">Diseño y Creación Web</p>
        <div class="stamp-member-list">
          <div class="stamp-member">
            <span class="stamp-member-name">PanzónLab</span>
          </div>
        </div>

      </div>
    </div>
  </div>
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

  .stamp-quote {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 400;
    font-size: 0.95rem;
    line-height: 1.7;
    color: #6B5B4E;
    text-align: justify;
    margin: 0;
  }

  .stamp-divider {
    width: 40px;
    height: 1px;
    background: rgba(107, 91, 78, 0.3);
    margin: 2rem auto;
  }

  .stamp-section-label {
    font-family: 'Jost', sans-serif;
    font-size: 0.55rem;
    font-weight: 500;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #9C8F82;
    margin-bottom: 1.25rem;
  }

  .stamp-member-list {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }

  .stamp-member {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.1rem;
  }

  .stamp-member-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.2rem;
    font-weight: 400;
    color: #3a2e27;
    line-height: 1.2;
  }

  .stamp-member-loc {
    font-family: 'Jost', sans-serif;
    font-size: 0.65rem;
    font-style: italic;
    color: #9C8F82;
  }
</style>
