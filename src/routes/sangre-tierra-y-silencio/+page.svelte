<script>
  import { onMount, onDestroy } from 'svelte';
  import { readerModeActive } from '$lib/stores';

  let showReferences = false;
  let atBottom = false;

  function toggleReferences() {
    showReferences = !showReferences;
  }

  function toggleReaderMode() {
    $readerModeActive = !$readerModeActive;
  }

  function handleScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5) {
      atBottom = true;
    } else {
      atBottom = false; // Reset if not at bottom
    }
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<div class="min-h-screen transition-all duration-500 {$readerModeActive ? 'pt-12 bg-[#FAF9F6] text-gray-800' : 'pt-32 md:pt-40 bg-[var(--color-paper)]'}">

  <main class="{$readerModeActive ? 'max-w-2xl mx-auto py-12 px-8' : 'bg-[var(--color-paper)]'}">
    <div class="{$readerModeActive ? '' : 'container mx-auto px-4 py-8'}">
      <p class="text-xs font-bold text-center text-[#D24843] mb-2 font-['Jost']">Feminismos</p>
      <h1 class="{$readerModeActive ? 'text-3xl font-serif text-center mb-8' : 'text-4xl font-bold mb-4 font-[\'Advent_Pro\'] uppercase text-center mx-auto max-w-3xl'}">
        Cuando la sangre toca la tierra: el doble vínculo de la mujer
      </h1>
      <p class="text-sm text-center font-['Jost'] mb-2">Por Florencia Leiva Silva</p>
      
      {#if $readerModeActive}
        <p class="text-xs text-center font-sans text-gray-500 mb-8 italic">8 min de lectura</p>
      {/if}

      {#if !$readerModeActive}
        <p class="text-xs text-center font-['Jost'] mb-4">Enero, 2025</p>
        
        <div class="relative max-w-4xl mx-auto overflow-hidden shadow-lg mb-8">
          <img src="/Carrieee.jpg" alt="Cuando la sangre toca la tierra" class="w-full h-auto" />
          <div class="absolute bottom-3 right-4 text-[9px] md:text-[10px] text-white/70 font-['Jost'] uppercase tracking-[0.2em] bg-black/30 px-3 py-1 backdrop-blur-sm">
            Carrie, Brian de Palma, 1976
          </div>
        </div>

        <div class="max-w-prose mx-auto mb-12 text-[#D24843] flex justify-end">
          <p class="text-sm text-right font-['Jost'] italic leading-relaxed font-bold max-w-md">
            The suffering of women is the true story of the universe
            <br>
            <span class="text-xs not-italic mt-2 block font-bold">Ariana Reines</span>
          </p>
        </div>
      {/if}

      <div class="{$readerModeActive ? 'text-xl leading-loose font-serif text-justify' : 'text-lg leading-relaxed mb-4 text-justify font-[\'Jost\'] mx-auto max-w-prose'}">
        <h2 class="text-xl font-bold mb-6 text-left" style="font-family: 'Advent_Pro', sans-serif;">Introducción: La Venus de Willendorf</h2>
        
        <p class="mb-4">La matriz es el órgano interno de reproducción de las hembras de los animales vivíparos en el que se desarrolla el feto. Es también el molde o la entidad principal, generadora de otras. En minería, la matriz es la roca en cuyo interior se ha formado un mineral. En este sentido, como nos alumbra Gabriela Mistral, la matriz original es la fuente que “todo lo toma, todo lo carga / el lomo santo de la Tierra” (156), que atraviesa disciplinas, culturas, el tiempo y el espacio. No es baladí que tantas culturas hayan instalado el imaginario de la madre-tierra para hablar de la naturaleza. Ya en los años 70 Françoise d’Eaubonne (1974) y Vandana Shiva con Maria Mies (1988) ya plasmaron la imagen especular entre la degradación de la condición de la mujer y de la tierra.</p>
        
        <p class="mb-4">Propongo entonces explorar este supuesto clásico del ecofeminismo desde la menstruación entendida como un fenómeno social. Originalmente alineada con el ritmo lunar, la mujer sangraba directamente sobre el terruño, el barro, la arcilla de manera “socialmente sincronizada”. Sin embargo, especialmente desde la vorágine del progreso gatillada por la revolución industrial, estas dos entidades alguna vez en comunión comienzan a tomar distancia.</p>
        
        <p class="mb-4">La concepción moderna de la menstruación delinea “problemas” que en apariencia se “resuelven” por obra y gracia de los productos higiénicos comerciales. Asimismo, el tachado de sus flujos naturales, junto con su ingreso en el sistema capital del trabajo desestabiliza el sistema de cohesión entre mujer y naturaleza, profundizando también, inadvertidamente, el problema de la crisis medioambiental. Avanzo así, desde esta genealogía clásica, y me pregunto si es que es posible alinear el doble vínculo de la menstruación con el modelo de las tres ecologías planteado por Felix Guattari con el fin de tensionar la relación entre humanidades ambientales y feminismo.</p>
        
        <p class="mb-4">Expongo resumidamente el sistema que Guattari (1990) denomina como “ecosofía”. El autor da inicio a sus reflexiones con una descripción del actual desequilibrio ecológico a modo de crítica ante la inoperancia del aparato político y ejecutivo frente al problema ambiental en su complejidad (Guattari 8). Ante esto, se propone un modelo de pensamiento de colaboración entre tres registros ecológicos para reorientar la solución a este problema: medio ambiente, relaciones sociales y subjetividad humana (mental). Utilizamos entonces el modelo de Guattari con el fin de repensar tanto el estadio actual de la crisis ambiental de la tierra como la situación de la mujer en la sociedad actual más allá de la eco-crítica clásica.</p>
        
        <p class="mb-4">En primer lugar, la tendencia observada por Schroeder (1976) en “Higiene femenina, moda y la emancipación de la mujer americana”, es que las sociedades tribales poseían actitudes psicológicas en torno a la menstruación ligadas al cosmos y a la cultura, no solo al espacio privado. Un ejemplo de esto es la imagen que presenta el antropólogo Chris Knight en su revisión histórica de la menstruación (Fig. 1). En los tallados de roca en el río Yule podemos ver la imbricación entre la menstruación y un sentido de colectividad. El ciclo completo de la mujer era entendido desde un imaginario colectivo perteneciente a los circuitos artísticos y venerado por su conexión directa con la fertilidad y la abundancia de las tribus. En este sentido, Knight ilustra el carácter lingüístico de la menstruación, la cual denomina como “el primer verbo” o señal social, que anunciaba solidaridad femenina, regulación de la economía sexual y cohesión social, constituyendo así su propio lenguaje.</p>
        
        <p class="mb-4">En la cara opuesta de esto, Schroeder anuncia que las sociedades no tribales, desde la conformación de lo que conocemos como civilización, han construido un discurso de vergüenza y culpa en torno al ciclo femenino, que “ha sido encubierto por el silencio, por el eufemismo, por el misterio y por los vestidos largos” (103), relegandolo al mandato del espacio privado. Dado el imperativo de mantener el secreto, desde los inicios de la comercialización de productos sanitarios en 1933, las industrias químicas han desarrollado más y más materiales sintéticos que las compañías manufactureras han incorporado en sus productos. Según el artículo “How tampons and pads became so unsustainable” de National Geographic, una sola persona utiliza un promedio de entre 5-15 mil tampones/toallas higiénicas a lo largo de su vida, productos que tras un solo uso terminan en vertederos como desecho plástico (Borunda 2019).</p>
      </div>

      {#if !$readerModeActive}
      <div class="my-8 mx-auto max-w-md text-center">
        <img src="/flo.jpg" alt="Tallados de roca en el río Yule" class="w-full h-auto" />
        <p class="text-sm mt-2 font-['Jost']">
          Fig. 1: Tallados de roca en el río Yule, Pilbara, Australia Occidental. Arte rupestre de indígenas australianos que ilustran imágenes de figuras femeninas danzando en una unión de flujos menstruales.
        </p>
      </div>
      {/if}

      <div class="{$readerModeActive ? 'text-xl leading-loose font-serif text-justify' : 'text-lg leading-relaxed mb-4 text-justify font-[\'Jost\'] mx-auto max-w-prose'}">
        <p class="mb-4">Las compañías multinacionales como lo es, por ejemplo, Procter & Gamble (P&G), aglomeran el mayor porcentaje de ventas del cuidado menstrual. Además del monopolio comercial, estas corporaciones potencian sus ventas por medio de campañas de marketing orientadas a vender el ideal de la mujer productiva, eficiente y limpia. Este procedimiento es el que denomino como el doble vínculo de la independencia. Por un lado, las empresas buscan promover un ideal de mujer emancipada. Mientras que por otro lado, lo que subyace tras esta retórica es lo que podríamos pensar como un mecanismo de biopoder; uno en el que las mujeres censuran sus propios ritmos hormonales para ajustarse a un ideal de productividad masculino. Lo anterior, presupone que la menstruación debe ser un proceso doloroso, incómodo y sucio, ante el cual las marcas de higiene buscan vender la solución. Es paradigmático el caso del anuncio de la marca de productos higiénicos Tampax en que la famosa tenista Serena Williams es retratada dándole la espalda a una personificación de la madre naturaleza.</p>
      </div>

      {#if !$readerModeActive}
      <div class="my-8 mx-auto max-w-md text-center">
        <img src="/Williams.jpg" alt="Publicidad Tampax Serena Williams" class="w-full h-auto" />
        <p class="text-sm mt-2 font-['Jost']">
          Fig. 2: publicidad de tampones con la tenista Serena Williams como rostro de Tampax Pearl (2009-2010).
        </p>
      </div>
      {/if}

      <div class="{$readerModeActive ? 'text-xl leading-loose font-serif text-justify' : 'text-lg leading-relaxed mb-4 text-justify font-[\'Jost\'] mx-auto max-w-prose'}">
        <p class="mb-4">A partir de lo anterior es que las mujeres caemos en la vorágine de los ritmos endocrinos masculinos desde temprana edad. La organización moderna del tiempo productivo se estructura sobre un ritmo lineal y homogéneo de 24 horas, que presupone estabilidad energética y rendimiento continuo. Sin embargo, el cuerpo femenino introduce una temporalidad distinta: una economía cíclica de aproximadamente 28 días, con variaciones hormonales que inciden en los niveles de energía, concentración y recuperación. Al invisibilizar esta diferencia temporal, las mujeres se ven impulsadas a inscribir su experiencia corporal en un régimen de productividad diseñado sin considerar dicha ciclicidad, lo que produce una tensión entre el ritmo biológico y el ritmo económico.</p>
        
        <p class="mb-4">La anulación de nuestro ciclo nos otorga una sensación de igualdad frente al hombre, un falso diálogo que cercena nuestro ritmo de recuperación en lo que Schroeder denomina como “la nueva libertad”. Esta voluntad de poder que distancia a la mujer de sus ciclos sexuales naturales, su convergencia con el ritmo lunar originario termina por carcomer nuestra energía vital por intentar ajustarnos a un esquema de éxito diseñado desde el ideal masculino del progreso indefinido. De este modo, no solo nos enfrentamos a una insatisfacción emocional o de índole espiritual dada nuestra desconexión de la matriz original, sino que además nos volvemos crecientemente más propensas a enfermedades hormonales producto de factores como el estrés crónico, estilos de vida poco saludables, y la exposición a disruptores endocrinos que se suman al legado androcéntrico de la medicina (Canevari, 2018; Del Río Pedraza, 2022).</p>
        
        <p class="mb-4">Por supuesto, el fenómeno de la mujer que entra en las dinámicas de productividad tiene su origen mucho antes de la creación del tampón o la toalla higiénica. En este sentido, desde el imaginario colectivo hemos ignorado que detrás de la narrativa simplificada en torno a la emancipación de la mujer que se inserta en la fuerza laboral se esconde un doble vínculo pernicioso. Es conocido el caso de las 129 trabajadoras de la fábrica de textiles en Nueva York que mueren producto de un incendio provocado por malas condiciones laborales y de seguridad a principios del siglo XX (“Triangle Shirtwaist Factory Fire”). Este caso, conmemorado el 8 de marzo en el Día Internacional de la Mujer, deja en evidencia el agravio que el desarrollo industrial deja detrás de sí, tanto en el nivel de la contaminación por las fábricas como en el nivel del bienestar social. Otro ejemplo es el caso de Las chicas del radio (Fig. 3). Se trata de un grupo de mujeres que padecen una serie de efectos secundarios producto del envenenamiento por el radio presente en la pintura que utilizaban para confeccionar relojes luminiscentes (Macho-Stadler, 2020). Estos casos históricos dan cuenta de la paradoja que presenta la entrada de la mujer a la fuerza del trabajo, que disfrazada de emancipación, esconde detrás mecanismos orientados a la maquinaria masculina del capital, el progreso e incluso la guerra. Las secuelas mortales de estas mujeres nos recuerdan tanto los perjuicios de la ambición ciega de los dueños de las fábricas como también del problema del uso indiscriminado de químicos con efectos desconocidos en la salud.</p>
      </div>

      {#if !$readerModeActive}
      <div class="my-8 mx-auto max-w-md text-center">
        <img src="/floflo.jpg" alt="Las chicas del radio" class="w-full h-auto" />
        <p class="text-sm mt-2 font-['Jost']">
          Fig 3: Registro fotográfico de los efectos secundarios del envenenamiento por radiación de las Chicas del radio en la fábrica de relojes United States Radium Corporation (1917).
        </p>
      </div>
      {/if}

      <div class="{$readerModeActive ? 'text-xl leading-loose font-serif text-justify' : 'text-lg leading-relaxed mb-4 text-justify font-[\'Jost\'] mx-auto max-w-prose'}">
        <p class="mb-4">Ya instalados el dispositivo de la ecosofía de Guattari y el desarrollo histórico de la menstruación, evidencio la manera en que el problema aquí planteado puede ser pensado en torno a los tres registros ecológicos. Primero, es evidente el problema ambiental que suscita el aumento exponencial del plástico en los productos de higiene y su eventual desecho en vertederos. En segundo lugar, en el nivel del problema social, identificamos que a la histórica tradición de vergüenza en torno a la menstruación se le añade una segunda dimensión de negación del ciclo femenino en pos del circuito del trabajo. Este sistema a su vez perpetúa el esquema del capitalismo por medio de la comercialización de estos productos desechables en favor de la industria. Por último, en el nivel de la subjetividad, la urgencia por ingresar en el paradigma de éxito moldeado a la medida del hombre, las mujeres suscriben al ritmo de la hiperproductividad y a la utilización de estos productos que dañan tanto su cuerpo como su entorno natural.</p>
        
        <h2 class="text-xl font-bold mt-12 mb-6 text-left" style="font-family: 'Advent_Pro', sans-serif;">Conclusión: El nacimiento de Venus</h2>
        
        <p class="mb-4">Si bien muchas sociedades previas a la instauración de las sociedades organizadas ya acarreaban un estigma en torno a la menstruación (percibida como un fenómeno peligroso, sucio o cargado socialmente por su carácter desconocido para los hombres, muchas veces causa de ostracismo o aislamientos forzados), los casos registrados por los autores citados nos alumbran un mundo posible. Si bien solo contadas culturas honraban colectivamente este momento en la vida de la mujer, estas nos demuestran la posibilidad. Nos recuerdan que no es suficiente la igualdad. Que no es suficiente luchar por una micro-dosis de descanso en un esquema que está diseñado para un cuerpo que no es el nuestro.</p>
        
        <p class="mb-4">A pesar de que el problema que aquí expongo se arrastra desde los inicios de la configuración de la civilización, tomamos la propuesta de la ecosofía de Guattari como una invitación a pensar una nueva configuración de los tres registros ecológicos. Me queda la esperanza en una nueva forma de pensarnos, inscritas en este mundo, diferentes de los hombres, un nuevo ritmo, que no busque ocultar nuestra diferencia bajo la premisa de que los productos sanitarios son la manera de igualar en condiciones a la mujer y permitirnos acceder al espacio del hombre.</p>
        
        <p class="mb-4">Desde esta premisa, escuchamos hoy a mujeres reclamando nuevamente su conexión con la tierra. Es creciente el movimiento de mujeres que se rehúsan a participar de la destrucción de su medio ambiente y se descartan del uso de productos higiénicos comerciales. Nos encontramos en un estado en el que comprendemos que sanar a la mujer es sanar a la tierra. A partir de esto, vamos dejando atrás el histórico anquilosamiento de los ciclos naturales femeninos y retornamos poco a poco a sistemas inspirados en tribus indígenas, pero también en voces cercanas como las de Rosabetty Muñoz, Elvira Hernández, Cecilia Vicuña, y por supuesto Mistral haciendo un llamado a retornar a la madre-tierra original. Cuando en su poema “La tierra”, ya en el año 1924 la poeta vaticinaba: “y la madre que estaba rota / tú la verás volver entera” (Mistral 156), asistíamos a la inauguración de un relato alternativo a la catástrofe hacia la cual se orienta el imaginario de la crisis ambiental. Una promesa desde nuestro propio territorio para recalibrar el desbalance histórico.</p>
      </div>

      {#if !$readerModeActive}
      <p class="text-xs text-center font-['Jost'] mt-12 mb-8 text-gray-500 uppercase tracking-widest">Compartir en:
        <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fviaje-webpage.vercel.app%2Fsangre-tierra-y-silencio&text=Cuando%20la%20sangre%20toca%20la%20tierra%3A%20el%20doble%20v%C3%ADnculo%20de%20la%20mujer" target="_blank" class="text-gray-800 hover:text-black hover:underline mx-1">X</a> /
        <a href="https://api.whatsapp.com/send?text=Cuando%20la%20sangre%20toca%20la%20tierra%3A%20el%20doble%20v%C3%ADnculo%20de%20la%20mujer%20https%3A%2F%2Fviaje-webpage.vercel.app%2Fsangre-tierra-y-silencio" target="_blank" class="text-gray-800 hover:text-black hover:underline mx-1">WhatsApp</a> /
        <a href="https://www.instagram.com/" target="_blank" class="text-gray-800 hover:text-black hover:underline mx-1">Instagram</a>
      </p>

      <div class="flex justify-center mt-16 mb-12">
        <button
          onclick={toggleReferences}
          class="px-8 py-3 border border-gray-300 text-gray-500 font-['Jost'] text-[10px] md:text-xs uppercase tracking-[0.25em] hover:bg-black hover:text-white hover:border-black transition-all duration-300 rounded-sm"
        >
          {showReferences ? 'Ocultar obras citadas' : 'Obras citadas'}
        </button>
      </div>

      {#if showReferences}
      <div class="mx-auto max-w-prose text-justify font-['Jost'] text-base text-gray-600 mb-24 animate-in fade-in duration-500">
        <p class="mb-1">Bachofen, Johann Jakob. El matriarcado: Una investigación sobre la ginecocracia en el mundo antiguo según su naturaleza religiosa y jurídica. Traducido por María del Mar Llinares García, Lectulandia, 2016.</p>
        <p class="mb-1">Borunda, Alejandra. “How Tampons and Pads Became So Unsustainable.” National Geographic, 2019.</p>
        <p class="mb-1">Canevari, Cecilia. “La expoliación capitalista de los cuerpos: mujeres y medicina.” Americanía. Revista de Estudios Latinoamericanos, no. 17, 2018, pp. 101–122.</p>
        <p class="mb-1">Del Río Pedraza, Carmen. “La medicalización del malestar en la mujer. Una valoración crítica.” Revista de la Asociación Española de Neuropsiquiatría, vol. 42, no. 141, 2022, pp. 55–73. https://doi.org/10.4321/S0211-57352022000100004</p>
        <p class="mb-1">Gershon, Livia. “The Secret History of Menstruation.” JSTOR Daily, 2018.</p>
        <p class="mb-1">Guattari, Félix. Las tres ecologías. Pre-Textos, 1990.</p>
        <p class="mb-1">Knight, Chris. Blood Relations: Menstruation and the Origins of Culture. Yale University Press, 1991.</p>
        <p class="mb-1">Macho-Stadler, Marta. “Las chicas del radio y los riesgos de la radiación.” National Geographic España, 2020.</p>
        <p class="mb-1">Mistral, Gabriela. Obra reunida. Tomo II: Poesía. Ediciones Biblioteca Nacional, 2019.</p>
        <p class="mb-1">“Nueva investigación revela los impactos nocivos de los agrotóxicos en la salud reproductiva de mujeres y niñas en América Latina.” Center for Reproductive Rights, 26 Nov. 2025, https://reproductiverights.org/news/nueva-investigacion-revela-los-impactos-nocivos-de-los-agrotoxicos-en-la-salud-reproductiva-de-mujeres-y-ninas-en-america-latina.</p>
        <p class="mb-1">Schroeder, Fred E. H. “Feminine Hygiene, Fashion and the Emancipation of American Women.” American Studies, vol. 17, no. 2, 1976, pp. 101–110.</p>
        <p class="mb-1">“Triangle Shirtwaist Factory Fire.” Encyclopædia Britannica, Britannica, 2026, https://www.britannica.com/event/Triangle-shirtwaist-factory-fire.</p>
      </div>
      {/if}
      {/if}
    </div>
  </main>

  <!-- Reader Mode Toggle Button -->
  <button
    onclick={toggleReaderMode}
    class="fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
    class:bg-black={!$readerModeActive}
    class:text-white={!$readerModeActive}
    class:bg-gray-200={$readerModeActive}
    class:text-gray-800={$readerModeActive}
    aria-label="Toggle Reader Mode"
  >
    {#if $readerModeActive}
      <!-- Exit Reader Mode Icon (X) -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    {:else}
      <!-- Enter Reader Mode Icon (Book/Eye) -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    {/if}
  </button>
</div>

<style>
  @keyframes bounce-letters {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }

  .bounce {
    animation: bounce-letters 1.5s ease;
  }
</style>