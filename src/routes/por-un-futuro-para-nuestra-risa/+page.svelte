<script>
  import ReadingControls from '$lib/components/ReadingControls.svelte';

  let showReferences = $state(false);
  let nightMode = $state(false);
  function toggleReferences() {
    showReferences = !showReferences;
  }
</script>

<svelte:head>
  <title>Por un futuro para nuestra risa — Hugo Herrera Pardo | Revista Viaje</title>
</svelte:head>

<div class="min-h-screen bg-[var(--color-paper)] transition-colors duration-300 {nightMode ? 'reading-dark' : ''}">
  <main>
    <div class="relative w-full h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)] mt-20 md:mt-24 overflow-hidden">
      <img src="/cristian-castillo-s1rIwjxsjFQ-unsplash.jpg" alt="" class="absolute inset-0 w-full h-full object-cover blur-sm scale-110" />
      <div class="absolute inset-0 bg-black/45"></div>
      <div class="relative z-10 flex items-center justify-center h-full px-6">
        <div class="flex flex-col items-center">
          <h1
            class="text-3xl md:text-5xl lg:text-6xl font-normal text-center max-w-4xl leading-tight text-white"
            style="font-family: 'Cormorant Garamond', serif; font-style: italic;"
          >
            Por un futuro para nuestra risa
          </h1>
          <p class="text-xs text-center uppercase tracking-[2px] text-white mt-6" style="font-family: 'Inter', sans-serif; font-weight: 500;">
            Por Hugo Herrera Pardo
          </p>
          <p class="text-[11px] text-center uppercase tracking-[2px] text-white/70 mt-1" style="font-family: 'Inter', sans-serif; font-weight: 500;">
            Abril, 2026
          </p>
        </div>
      </div>
    </div>

    <ReadingControls bind:nightMode />

    <div class="container mx-auto px-4 py-8">

      <div class="max-w-prose mx-auto text-lg leading-relaxed text-justify mb-16" style="font-family: 'Jost', sans-serif; font-weight: 300;">

        <!-- Epígrafes -->
        <div class="mb-12 text-right text-sm italic text-gray-600 space-y-2">
          <p>Sergio Guerra. La (re)vuelta del carnaval. Valparaíso: Agua derramada, 2025.</p>
          <p>“¿Qué es un país?”</p>
          <p class="not-italic">—Alejandra González Celis</p>
        </div>

        <p class="mb-6">Tras terminar de leer <em>La (re)vuelta del carnaval</em> de Sergio Guerra una reflexión me queda rondando: es este un artefacto que nos permite pensar las temporalidades y la profundidad de sus diversos estratos. Y es que se trata de un ensayo que, a lo largo de sus páginas, nos hace pensar sobre los modos de pervivencia para aquello que, por estar atravesado por una serie de negaciones, obstrucciones y prohibiciones, se manifiesta como latencia en busca de sus fugas y devenires.</p>

        <p class="mb-6">“La multiplicidad de lo carnavalesco” —nos dice el autor— “mantuvo su fuerza de manera subterránea, sobreviviendo en el humor popular, en las pequeñas fiestas, en la alegría de vivir, en los giros humorísticos del habla, en las artes y literaturas que lo reivindicaron, en las invocaciones dionisiacas, ritos y fiestas programadas en el calendario, fiestas a la bandera, al conejo de pascua, al árbol de navidad, a la primavera, a la Cochinchina, entre otras” (98).</p>

        <p class="mb-6">La historia del propio libro carga esos modos en que se van trabando distintos tiempos y sobre esa superficie quedan huellas, vestigios que se van adhiriendo y aglutinando. En su tránsito fue inicialmente una tesis de licenciatura sobre el vínculo entre las protestas de 2011 y el carnaval, para luego agregarle a ese estrato la relación entre la revuelta de 2019 y las formas carnavalescas, en una tesis de magíster que obtuvo, en 2023, una mención honrosa en los premios Mejores Obras Literarias del Ministerio de las Culturas, las Artes y el Patrimonio, en la categoría investigación en humanidades. En los últimos años Sergio siguió trabajando en su escritura hasta la publicación del libro, a fines de 2025.</p>

        <p class="mb-6">Es decir que, tanto en su objeto de atención (el carnaval como retorno de lo reprimido, lo neocarnavalesco como un lenguaje de la imaginación popular desplegada en las calles) como en el mismo proceso de gestación creativa y reflexiva del libro, se encuentran impregnadas preguntas que nos hacen pensar sobre cómo se da esa relación entre lo que viene desde antes con lo que aparece de manera posterior; cómo dar cuenta de aquello que aún habiendo tenido en años recientes episodios de eclosión, continúa desplegándose subrepticiamente; cómo se desplazan y se condensan las relaciones entre pasado, presente y porvenir; cómo escribir esas modulaciones, hacia dónde reorientarlas, qué tonos adoptar en su escritura, cómo resolver el montaje del libro en tanto artefacto, entre otras preguntas.</p>

        <p class="mb-6">Una de las maneras mediante las cuales el libro produce esta sobrepoblación de capas temporales tiene que ver con los epígrafes y las citas que recorren sus páginas. En ellas se entrecruzan o se crispan desde referencias ya clásicas en el estudio del fenómeno del carnaval, como Mijail Bajtín o Edmund Burke o del fenómenos de las revueltas, como Furio Jesi, hasta referencias de teoría política más recientes y también textos de contingencia para el caso de la revuelta chilena de 2019 (Zeto Bórquez, Rodrigo Karmy o Lucy Oporto, entre otras y otros), con los que el autor dialoga o polemiza. Es decir que el libro exhibe su naturaleza de palimpsesto, forma expresiva de su propio proceso, pero también del proceso histórico que el mismo texto atiende en sus páginas.</p>

        <p class="mb-6">Pienso que se puede decir de <em>La (re)vuelta del carnaval</em> algo similar a lo que en él se dice del libro del Flavio Dalmazzo <em>El lenguaje es un arma de largo alcance</em>, publicado en 2020 y que reúne un conjunto de frases o versos que el autor recogió desde los muros de Valparaíso y Santiago entre el 18 de octubre de 2019 y el 18 de febrero de 2020 (el hito de cierre de la operación es el borrado del frontis del Centro Cultural Gabriela Mistral llevado a cabo el 19 de febrero de 2020).</p>

        <p class="mb-6">Dice Sergio Guerra sobre este libro que su sentido “está no tan solo en el trabajo de memoria, sino también, y no menos importante, en la invención de un lector. Este lector ha sido conjurado a leer la revuelta, su pensamiento, sus desbordes y presencias estéticas, como un poema. Se desprende una teoría para leer la revuelta que consiste en pensarla como una presencia radical de lenguaje capaz de tocar los bordes del sentido” (82). El libro de Sergio también es un libro que espera inventar un lector.</p>

        <p class="mb-6">Tal vez por ello, probablemente, este —es decir, ahora— no sea su tiempo, pues se trata de una lectura de las protestas sociales cuya clave se sostiene en la alegría de vivir y que irrumpe en un momento de retorno fuerte de un paradigma securitario, un tiempo en el que se impone el “estado de emergencia” como técnica del ejercicio del poder estatal. (En todo caso, sería interesante pensar en términos simbólicos la relación entre el carnaval como retorno de lo reprimido y la zanja construida en el marco del “Plan Escudo Fronterizo”).</p>

        <p class="mb-6">No obstante, el ejercicio de crítica que Sergio propone en <em>La (re)vuelta del carnaval</em> apuesta por la actividad crítica como arma de largo alcance, tal vez su tiempo no termine siendo el ahora, pero el libro seguirá estando allí, en estado de latencia o de condensación, confluyendo con las próximas reorientaciones de las fuerzas sociales en los años siguientes, haciéndose cuerpo con el pensamiento del carnaval.</p>

        <p class="mb-6">En este sentido, esta función de la crítica me recuerda el ejercicio que hiciera Hernán Vidal a fines de la década de los setenta, en su texto “La Declaración de principios de la Junta Militar Chilena como sistema literario: la lucha antifascista y el cuerpo humano” (1978) en el que examina el sistema de metáforas de dicha declaración para fustigar la visión totalizadora que allí se presenta de la historia nacional. Dice Hernán Vidal en su texto que la función de dicho ejercicio crítico es “fundamentar una conciencia y una sensibilidad del modo en que los chilenos que adhieren al movimiento popular se pensarán y se sentirán a sí mismos y a sus connacionales, en el momento de enfrentar las tareas políticas que tienen por delante. Por la razón misma de esta función social, es de importancia que la crítica literaria chilena contribuya a esa labor, captando y meditando sobre las tendencias actuales de esa elaboración” (107).</p>

        <p class="mb-6">El ensayo de Sergio, sostengo, presenta similaridades con aquella función, pues en el contexto de la revuelta, en donde se entrecruza la cultura de masas, el arte público y la resistencia política, piensa al carnaval como un dispositivo que canaliza manifestaciones y discursos sensoriales, como el derecho a la fiesta y el deseo de unificación erótica. “Si el cuerpo aparece, entonces la vida social está orientada a satisfacer todos sus apetitos; los deseos desatados exhiben la vitalidad públicamente” (18). Ambos modos de la crítica ponen su foco en la vitalidad de los procesos sociales y apuestan avistar y comprometerse en sus posibilidades de reorientación.</p>

        <p class="mb-6"><em>La (re)vuelta del carnaval</em> propone las convulsiones entre cuaresma y carnaval como un esquema del funcionamiento de la política. En dicha dinámica se reconocen los usos políticos que se han llegado a hacer del carnaval, como una instancia manejable, administrable, en la que la liberación de tensiones puede llegar a convertirse en un <em>pharmakon</em>, un veneno-remedio.</p>

        <p class="mb-6">En relación a esto, y para finalizar, quisiera detenerme en la metáfora que aparece en el texto para tratar este problema, la metáfora de la olla a presión o también imaginada como válvula de escape. Según Furio Jesi, la metáfora de la válvula de escape no puede afectar la estructura socio-económica, es decir que, en último término, se trata de una explosión de las fuerzas sociales que se habían mantenido reprimidas que no derivan, la mayoría de las veces, a cambios profundos.</p>

        <p class="mb-6">El libro de Sergio nos conduce con vitalismo a la imaginación popular, a su pensamiento, como una zona imprescindible si queremos reflexionar en serio, pero con alegría, sobre el ejercicio político y sobre las presiones ejercidas desde ese estrato. Uno de los libros de la literatura chilena al que le guardo más cariño, <em>Las aventuras de El Salustio y El Trúbico</em>, publicado por Alfonso Alcalde en la colección minilibros de Editorial Quimantú en —a propósito de la aglutinación de diferentes temporalidades— el significativo año de 1973. El último relato de la colección se titula “Cuando El Salustio y El Trúbico demuestran sus conocimientos científico-electrónicos y arreglan una olla a presión, dejando la escoba correspondiente”.</p>

        <p class="mb-6">En la narración, los dos maestros chasquillas se proponen dejar atrás los trabajos de arreglar “paraguas dado vuelta y las bacinicas agujereadas” para dedicarse a trabajos en el rubro de la electrónica. De este modo, son contratados por una señora a la que se le estropeó la olla a presión justo cuando había invitado a un matrimonio amigo a comer. El título del relato sintetiza el nudo de la narración; los esfuerzos de ambos maestros chasquillas son en vano y la olla a presión termina explotando. El hecho genial del cuento no pasa, por tanto, por el anuncio de su desenlace, sino que se sitúa en la disyuntiva que se presenta de o bajar la comida del techo o subir a los comensales con sillas, mesa y cubiertos incluidos. El Salustio y El Trúbico optan por esta segunda opción, haciendo de la comida una experiencia que los comensales califican como increíble. “En mi vida había asistido a una fiesta tan singular”, dice el marido, “quien también estaba cabeza abajo”.</p>

        <p class="mb-6">Terminada la comida y ante la necesidad de bajar del techo a la dueña de casa y el matrimonio amigo, los compadres tienen el siguiente diálogo:</p>

        <!-- Diálogo -->
        <div class="my-8 space-y-2 border-l-2 border-gray-200 pl-6 italic text-gray-700">
          <p>—No nos queda más remedio que aplicar las leyes del movimiento continuo pa´sacarlos de su órbita</p>
          <p>—¿Usted dice contraer las presiones pa´ir en aumento de la demanda de la atmósfera de los polos?</p>
          <p>—Claro, pa´que se produzca el desacople de los extremos.</p>
          <p>—¿De derecha o de izquierda?</p>
          <p>—Tenimos que hacer pasar el eje por la mitad de la casa.</p>
          <p>—¿Pa´qué? —preguntó El Salustio, aumentando la curiosidad de los presentes.</p>
          <p>—Pa´que se produzca la succión altisonante de la combustión y la vieja salga como peo por la ventana.</p>
        </div>

        <p class="mb-6">Unas líneas más adelante de este diálogo se nos dice que de las visitas nunca más se supo, hasta unos meses después. A fin de cuentas, y en esto creo que se asemejan tanto la narración de Alfonso Alcalde como el libro de Sergio Guerra, en la imaginación popular siempre se pueden encontrar estrategias para lidiar con las presiones.</p>

        <!-- Referencias -->
        <div class="mt-16 pt-8 border-t border-gray-200">
          <div class="flex justify-center mt-16 mb-12">
            <button
              onclick={toggleReferences}
              class="px-8 py-3 border border-gray-300 text-gray-500 font-['Inter'] text-[10px] md:text-xs uppercase tracking-[0.25em] hover:bg-black hover:text-white hover:border-black transition-all duration-300 rounded-sm"
            >
              Bibliografía
            </button>
          </div>
          
          {#if showReferences}
            <div class="mx-auto max-w-prose text-justify font-['Jost'] text-base text-gray-600 mb-24 animate-in fade-in duration-500">
              <p class="mb-1">Guerra, Sergio. <em>La (re)vuelta del carnaval.</em> Valparaíso: Agua derramada, 2025.</p>
              <p class="mb-1">Vidal, Hernán. “La Declaración de principios de la Junta Militar Chilena como sistema literario: la lucha antifascista y el cuerpo humano”. 1978.</p>
              <p class="mb-1">Alcalde, Alfonso. <em>Las aventuras de El Salustio y El Trúbico.</em> Santiago: Quimantú, 1973.</p>
              <p class="mb-1">Dalmazzo, Flavio. <em>El lenguaje es un arma de largo alcance.</em> 2020.</p>
            </div>
          {/if}
        </div>

      </div>
    </div>
  </main>
</div>
