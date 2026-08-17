<script>
  let showOverlay = $state(false);

  function toggleOverlay() {
    showOverlay = !showOverlay;
  }
</script>

<svelte:head>
  <title>Convocatoria - Revista Viaje</title>
  <meta name="description" content="Cómo proponer un ensayo a Revista Viaje: qué buscamos, quién puede escribir y cómo es el proceso editorial." />
  <link rel="preload" href="/fonts/BebasNeue-Regular.ttf" as="font" type="font/ttf" crossorigin="anonymous" />
</svelte:head>

<div style="font-family: 'Inter', sans-serif;" class="bg-[#e5e5e5] min-h-screen relative">


  <!-- Main Content -->
  <div class="px-4 sm:px-8 w-full max-w-xl mx-auto pt-24 pb-12">

    <div class="stamp-wrap w-full">
      <div class="stamp-inner">

        <!-- Header -->
        <div class="mb-5 text-[var(--color-ink)]">
          <p class="text-[10px] uppercase tracking-[0.5em] opacity-70 mb-2">Revista Viaje</p>
          <h1 class="text-5xl sm:text-6xl font-black uppercase leading-none" style="font-family: 'Bebas Neue', sans-serif;">Convocatoria</h1>
        </div>

        <!-- Intro text -->
        <div class="mb-6 text-[var(--color-ink)] text-justify leading-relaxed text-sm">
          <p>Revista Viaje es una revista digital dedicada al ensayo y la creación literaria. Publicamos ideas escritas con voz propia, capaces de abrir preguntas, establecer conexiones inesperadas e invitar a mirar el mundo desde ángulos poco explorados.</p>
        </div>

        <div class="text-[var(--color-ink)] text-sm leading-relaxed space-y-7">

          <div>
            <h2 class="text-lg font-bold mb-3 text-left" style="font-family: 'Advent_Pro', sans-serif;">¿Qué entendemos por ensayo?</h2>
            <p class="text-justify mb-3">El ensayo es, para nosotras, una forma abierta de pensamiento. No exige pertenecer a una disciplina determinada ni ajustarse a una fórmula. Puede partir de una investigación, una lectura, una experiencia, una imagen, un problema histórico, una obra artística o una pregunta que todavía no tiene respuesta.</p>
            <p class="text-justify mb-3">Buscamos textos de extensión media, generalmente de 2.500 a 5.000 palabras, que desarrollen una idea con suficiente profundidad sin perder de vista a quien está leyendo. Nos interesan especialmente aquellos ensayos que consiguen poner en relación experiencias, conceptos, disciplinas o fenómenos que habitualmente aparecen separados.</p>
            <p class="text-justify">Un ensayo puede abordar ideas complejas y recurrir a conocimientos especializados, pero no debería ser escrito únicamente para especialistas. Nos interesa una escritura que no se limite a demostrar lo que sabe, sino que se pregunte qué podemos llegar a pensar a partir de aquello que sabe.</p>
          </div>

          <div>
            <h2 class="text-lg font-bold mb-3 text-left" style="font-family: 'Advent_Pro', sans-serif;">¿Quién escribe para Revista Viaje?</h2>
            <p class="text-justify mb-3">No hay una única trayectoria que conduzca al ensayo. Muchos de nuestros autores y autoras tienen formación académica, pero no es un requisito para publicar en la revista.</p>
            <p class="text-justify mb-3">Puedes proponernos una idea si tu relación con el tema proviene de una investigación, de tu práctica profesional o artística, de una experiencia o de un interés que hayas desarrollado con profundidad.</p>
            <p class="text-justify">Nos interesa especialmente recibir propuestas de escritores y escritoras jóvenes o en formación, así como de quienes desarrollan su trabajo fuera de los grandes circuitos editoriales.</p>
          </div>

          <div>
            <h2 class="text-lg font-bold mb-3 text-left" style="font-family: 'Advent_Pro', sans-serif;">¿Cómo es el proceso editorial?</h2>
            <p class="text-justify mb-3">Si publicas con nosotras, puedes esperar trabajar varias versiones de tu texto junto a nuestro equipo editorial. La edición es un proceso de conversación y trabajo conjunto: discutiremos el argumento, la estructura y la forma del ensayo para ayudar a que la idea encuentre su mejor versión.</p>
            <p class="text-justify mb-3">Si no te sientes cómodo o cómoda recibiendo observaciones, reconsiderando decisiones y revisando tu texto en conjunto con un editor o editora, probablemente esta no sea la revista adecuada para ti.</p>
            <p class="text-justify">El proceso completo, desde la aceptación de un primer borrador hasta la publicación, suele tomar algunas semanas. Tu propuesta será asignada a una editora del equipo, quien será tu contacto principal durante todo el proceso.</p>
          </div>

          <div>
            <h2 class="text-lg font-bold mb-3 text-left" style="font-family: 'Advent_Pro', sans-serif;">¿Qué tipo de ensayo buscamos?</h2>
            <p class="text-justify mb-3">Nos interesan los textos que puedan seguir siendo leídos cuando desaparezca la coyuntura que los rodea. Por eso, más que el comentario de una noticia o la reacción inmediata frente a un debate, buscamos preguntas capaces de permanecer abiertas.</p>
            <p class="mb-2">Nos interesan particularmente los ensayos que:</p>
            <ul class="list-disc pl-5 space-y-1.5 text-justify">
              <li>desarrollan una pregunta que no se agota en una respuesta inmediata</li>
              <li>hacen dialogar distintas experiencias, saberes o tradiciones</li>
              <li>encuentran conexiones allí donde no eran evidentes</li>
              <li>son capaces de sostener una posición sin confundirla con una certeza</li>
              <li>tienen una voz reconocible, tanto en lo que piensan como en la manera en que lo escriben</li>
              <li>y consiguen ampliar el problema que abordan más allá de un único contexto local</li>
            </ul>
          </div>

          <div>
            <h2 class="text-lg font-bold mb-3 text-left" style="font-family: 'Advent_Pro', sans-serif;">Algunas cosas que no buscamos</h2>
            <p class="text-justify mb-3">No publicamos réplicas a artículos previamente publicados ni buscamos convertir la revista en un espacio de respuesta inmediata a la coyuntura. Tampoco nos interesan, en principio, las reseñas de libros entendidas como evaluación crítica de una obra.</p>
            <p class="text-justify">Esto no significa que un ensayo no pueda partir de un libro, una discusión pública, una noticia, una obra artística o un acontecimiento contemporáneo. Puede hacerlo. Lo que buscamos es que aquello funcione como punto de partida para una pregunta más amplia, y no como el objeto único del texto.</p>
          </div>

          <div class="flex justify-center pt-4">
            <button
              onclick={toggleOverlay}
              class="focus:outline-none transition-transform hover:scale-125 active:scale-95 shrink-0"
              aria-label="Interactuar"
            >
              <img src="/secundario.png" alt="" class="w-14 sm:w-16 h-auto animate-wiggle" />
            </button>
          </div>

        </div>

      </div>
    </div>

  </div>


  <!-- Full Screen Overlay (Secret Message) -->
  {#if showOverlay}
    <div
      class="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-8 cursor-default animate-fade-in"
    >
      <h2 class="text-white text-5xl md:text-8xl font-bold uppercase text-center max-w-6xl leading-[0.9] animate-mega-reveal tracking-tighter">
        Get this from the depths of your fucking soul, man.
      </h2>

      <div class="flex flex-col items-center gap-8 mt-16 animate-fade-in-delayed">
        <a
          href="https://www.reddit.com/r/twinpeaks/comments/1i5xz0k/david_lynch_directing_tom_sizemore_in_twin_peaks/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white/30 hover:text-white text-[10px] uppercase transition-colors"
          style="font-family: 'Inter', sans-serif; font-weight: 400; letter-spacing: 2px;"
        >
          Ver referencia
        </a>

        <button
          onclick={toggleOverlay}
          class="text-white/20 hover:text-white text-xs uppercase transition-colors"
          style="font-family: 'Inter', sans-serif; font-weight: 400; letter-spacing: 2px;"
        >
          [ Volver ]
        </button>
      </div>
    </div>
  {/if}

</div>

<style>
  .stamp-wrap {
    width: 560px;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
  }

  .stamp-inner {
    padding: 1.5rem;
  }

  @keyframes glowPulse {
    0%, 100% { filter: drop-shadow(0 0 0px rgba(220, 38, 38, 0.6)); }
    50% { filter: drop-shadow(0 0 10px rgba(220, 38, 38, 0.9)); }
  }

  @keyframes megaReveal {
    0% {
      filter: blur(40px);
      opacity: 0;
      transform: scale(0.8);
    }
    15% {
      opacity: 1;
      filter: blur(15px);
    }
    100% {
      filter: blur(0);
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes wiggle {
    0%, 100% { transform: rotate(0deg) translateY(0); }
    20% { transform: rotate(-6deg) translateY(-4px); }
    40% { transform: rotate(6deg) translateY(-4px); }
    60% { transform: rotate(-4deg) translateY(-2px); }
    80% { transform: rotate(4deg) translateY(-2px); }
  }

  .animate-wiggle {
    animation: wiggle 2s ease-in-out infinite, glowPulse 1.8s ease-in-out infinite;
    transform-origin: bottom center;
  }

  .animate-mega-reveal {
    animation: megaReveal 3.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
    transform-origin: center;
  }
  .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
  .animate-fade-in-delayed { animation: fadeIn 2s ease-out 1s forwards; opacity: 0; }

</style>
