<script>
  import { onMount } from 'svelte';
  import { ConvexHttpClient } from "convex/browser";
  import { api } from "../../../convex/_generated/api";
  
  let showReferences = $state(false);
  let essay = $state(null);
  let audioUrl = $state(null);
  let isSeeding = $state(false);

  const slug = "sangre-tierra-y-silencio";
  const CONVEX_URL = "https://aromatic-aardvark-340.convex.cloud";
  const convex = new ConvexHttpClient(CONVEX_URL);

  async function loadEssay() {
    try {
      const result = await convex.query(api.notes.getEssayBySlug, { slug });
      if (result) {
        essay = result;
        audioUrl = essay.audioUrl || null;
      }
    } catch (e) {
      console.error("Error loading essay:", e);
    }
  }

  async function runSeed() {
    if (isSeeding) return;
    isSeeding = true;
    try {
      await convex.mutation(api.notes.seedRun);
      await loadEssay();
    } catch (e) {
      console.error("Error seeding essay:", e);
    } finally {
      isSeeding = false;
    }
  }

  function toggleReferences() {
    showReferences = !showReferences;
  }

  onMount(() => {
    loadEssay();
  });
</script>

<div class="min-h-screen pt-32 md:pt-40 bg-[var(--color-paper)]">
  <main>
    <div class="container mx-auto px-4 py-8">
      <h1
        class="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 text-center mx-auto max-w-4xl leading-tight"
        style="font-family: 'Cormorant Garamond', serif; font-style: italic;"
      >
        Cuando la sangre toca la tierra
      </h1>

      <p class="text-sm text-center font-['Jost'] mb-2">Por Florencia Leiva Silva</p>
      <p class="text-xs text-center font-['Jost'] mb-8">Enero, 2025</p>
      
      <!-- Audio Player Section -->
      {#if !essay && !isSeeding}
        <div class="max-w-prose mx-auto mb-8 border-y border-gray-100 py-4 flex justify-center">
          <button 
            onclick={runSeed}
            class="text-[10px] uppercase tracking-widest text-red-500 hover:text-red-700 font-bold"
          >
            [ Sincronizar contenido ]
          </button>
        </div>
      {:else if isSeeding}
        <div class="max-w-prose mx-auto mb-8 border-y border-gray-100 py-4 flex justify-center">
          <span class="text-[10px] uppercase tracking-widest text-gray-400 animate-pulse">Sincronizando...</span>
        </div>
      {:else if audioUrl}
        <div class="max-w-prose mx-auto mb-8 flex items-center gap-4 border-y border-gray-100 py-4 min-h-[64px]">
          <div class="flex items-center gap-4 w-full">
            <span class="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Escuchar:</span>
            <audio controls src={audioUrl} class="h-8 flex-grow opacity-70 grayscale"></audio>
          </div>
        </div>
      {/if}

      <div class="max-w-prose mx-auto mb-12 text-[#9C9C9C] flex justify-end">
        <p class="text-sm text-right font-['Jost'] italic leading-relaxed font-bold max-w-md">
          The suffering of women is the true story of the universe
          <br>
          <span class="text-xs not-italic mt-2 block font-bold">Ariana Reines</span>
        </p>
      </div>

      <div class="text-lg leading-relaxed mb-4 text-justify font-['Jost'] mx-auto max-w-prose font-light">
        <h2 class="text-xl font-bold mb-6 text-left" style="font-family: 'Advent_Pro', sans-serif;">La Venus de Willendorf</h2>
        
        <p class="mb-6">La matriz es el órgano interno de reproducción de las hembras de los animales vivíparos en el que se desarrolla el feto. Es también el molde o la entidad principal, generadora de otras. En minería, la matriz es la roca en cuyo interior se ha formado un mineral. En este sentido, como nos alumbra Gabriela Mistral, la matriz original es la fuente que “todo lo toma, todo lo carga / el lomo santo de la Tierra”, que atraviesa disciplinas, culturas, el tiempo y el espacio. No es baladí que tantas culturas hayan instalado el imaginario de la madre-tierra para hablar de la naturaleza. Ya en los años 70 Françoise d’Eaubonne y Vandana Shiva con Maria Mies plasmaron la imagen especular entre la degradación de la condición de la mujer y de la tierra.</p>
        
        <p class="mb-6">Propongo entonces explorar este supuesto clásico del ecofeminismo desde la menstruación entendida como un fenómeno social. Originalmente alineada con el ritmo lunar, la mujer sangraba directamente sobre el terruño, el barro, la arcilla de manera “socialmente sincronizada”. Sin embargo, especialmente desde la vorágine del progreso gatillada por la revolución industrial, estas dos entidades alguna vez en comunión comienzan a tomar distancia.</p>
        
        <p class="mb-6">La concepción moderna de la menstruación delinea “problemas” que en apariencia se “resuelven” por obra y gracia de los productos higiénicos comerciales. Asimismo, el tachado de sus flujos naturales, junto con su ingreso en el sistema capital del trabajo desestabiliza el sistema de cohesión entre mujer, cuerpos que menstruan y naturaleza, profundizando también, inadvertidamente, el problema de la crisis medioambiental. Avanzo así, desde esta genealogía clásica, y me pregunto si es que es posible alinear el doble vínculo de la menstruación con el modelo de las tres ecologías planteado por Felix Guattari con el fin de tensionar la relación entre humanidades ambientales y feminismo.</p>
        
        <p class="mb-6">Expongo resumidamente el sistema que Guattari denomina como “ecosofía”. El autor da inicio a sus reflexiones con una descripción del actual desequilibrio ecológico a modo de crítica ante la inoperancia del aparato político y ejecutivo frente al problema ambiental en su complejidad. Ante esto, se propone un modelo de pensamiento de colaboración entre tres registros ecológicos para reorientar la solución a este problema: medio ambiente, relaciones sociales y subjetividad humana (mental). A partir del modelo de Guattari, propongo una relectura de la crisis ecológica actual y de las configuraciones contemporáneas de género, ampliando los límites de la ecocrítica clásica.</p>
        
        <p class="mb-6">En primer lugar, la tendencia observada por Schroeder en “Higiene femenina, moda y la emancipación de la mujer americana”, es que las sociedades tribales poseían actitudes psicológicas en torno a la menstruación ligadas al cosmos y a la cultura, no solo al espacio privado. Un ejemplo de esto es la imagen que presenta el antropólogo Chris Knight en su revisión histórica de la menstruación. En los tallados de roca en el río Yule podemos ver la imbricación entre la menstruación y un sentido de colectividad. El ciclo completo de la mujer era entendido desde un imaginario colectivo perteneciente a los circuitos artísticos y venerado por su conexión directa con la fertilidad y la abundancia de las tribus. En este sentido, Knight ilustra el carácter lingüístico de la menstruación, la cual denomina como “el primer verbo” o señal social, que anunciaba solidaridad femenina, regulación de la economía sexual y cohesión social, constituyendo así su propio lenguaje.</p>
        
        <p class="mb-6">En la cara opuesta de esto, Schroeder anuncia que las sociedades no tribales, desde la conformación de lo que conocemos como civilización, han construido un discurso de vergüenza y culpa en torno al ciclo femenino, que “ha sido encubierto por el silencio, por el eufemismo, por el misterio y por los vestidos largos”, relegándolo al mandato del espacio privado. Dado el imperativo de mantener el secreto, desde los inicios de la comercialización de productos sanitarios en 1933, las industrias químicas han desarrollado más y más materiales sintéticos que las compañías manufactureras han incorporado en sus productos. Según el artículo “How tampons and pads became so unsustainable” de National Geographic, una sola persona utiliza un promedio de entre 5-15 mil tampones/toallas higiénicas a lo largo de su vida, productos que tras un solo uso terminan en vertederos como desecho plástico.</p>

        <p class="mb-6">Las compañías multinacionales como lo es, por ejemplo, Procter & Gamble (P&G), aglomeran el mayor porcentaje de ventas del cuidado menstrual. Además del monopolio comercial, estas corporaciones potencian sus ventas por medio de campañas de marketing orientadas a vender el ideal de la mujer productiva, eficiente y limpia. Este procedimiento es el que denomino como el doble vínculo de la independencia. Por un lado, las empresas buscan promover un ideal de mujer emancipada. Mientras que por otro lado, lo que subyace tras esta retórica es lo que podríamos pensar como un mecanismo de biopoder; uno en el que las mujeres censuran sus propios ritmos hormonales para ajustarse a un ideal de productividad masculino. Lo anterior, presupone que la menstruación debe ser un proceso doloroso, incómodo y sucio, ante el cual las marcas de higiene buscan vender la solución. Es paradigmático el caso del anuncio de la marca de productos higiénicos Tampax en que la famosa tenista Serena Williams es retratada dándole la espalda a una personificación de la madre naturaleza.</p>

        <p class="mb-6">A partir de lo anterior es que, quienes menstruamos, caemos en la vorágine de los ritmos endocrinos masculinos desde temprana edad. La organización moderna del tiempo productivo se estructura sobre un ritmo lineal y homogéneo de 24 horas, que presupone estabilidad energética y rendimiento continuo. Sin embargo, el cuerpo que puede menstruar introduce una temporalidad distinta: una economía cíclica de aproximadamente 28 días, con variaciones hormonales que inciden en los niveles de energía, concentración y recuperación. Al invisibilizar esta diferencia temporal, estos cuerpos se ven impulsados a inscribir su experiencia corporal en un régimen de productividad diseñado sin considerar dicha ciclicidad, lo que produce una tensión entre el ritmo biológico y el ritmo económico.</p>
        
        <p class="mb-6">La anulación de nuestro ciclo nos otorga una sensación de igualdad frente al hombre cis, un falso diálogo que cercena nuestro ritmo de recuperación en lo que Schroeder denomina como “la nueva libertad”. Esta voluntad de poder que distancia a la mujer menstruante de sus ciclos sexuales naturales, su convergencia con el ritmo lunar originario termina por carcomer nuestra energía vital por intentar ajustarnos a un esquema de éxito diseñado desde el ideal masculino del progreso indefinido. De este modo, no solo nos enfrentamos a una insatisfacción emocional o de índole espiritual dada nuestra desconexión de la matriz original, sino que además nos volvemos crecientemente más propensas a enfermedades hormonales producto de factores como el estrés crónico, estilos de vida poco saludables, y la exposición a disruptores endocrinos que se suman al legado androcéntrico de la medicina.</p>
        
        <p class="mb-6">Por supuesto, el fenómeno de la mujer que entra en las dinámicas de productividad tiene su origen mucho antes de la creación del tampón o la toalla higiénica. En este sentido, desde el imaginario colectivo hemos ignorado que detrás de la narrativa simplificada en torno a la emancipación de la mujer que se inserta en la fuerza laboral se esconde un doble vínculo pernicioso. Es conocido el caso de las 129 trabajadoras de la fábrica de textiles en Nueva York que mueren producto de un incendio provocado por malas condiciones laborales y de seguridad a principios del siglo XX (“Triangle Shirtwaist Factory Fire”). Este caso, conmemorado el 8 de marzo en el Día Internacional de la Mujer, deja en evidencia el agravio que el desarrollo industrial deja detrás de sí, tanto en el nivel de la contaminación por las fábricas como en el nivel del bienestar social. Otro ejemplo es el caso de Las chicas del radio. Se trata de un grupo de mujeres que padecen una serie de efectos secundarios producto del envenenamiento por el radio presente en la pintura que utilizaban para confeccionar relojes luminiscentes. Estos casos históricos dan cuenta de la paradoja que presenta la entrada de la mujer a la fuerza del trabajo, que disfrazada de emancipación, esconde detrás mecanismos orientados a la maquinaria masculina del capital, el progreso e incluso la guerra. Las secuelas mortales de estas mujeres nos recuerdan tanto los perjuicios de la ambición ciega de los dueños de las fábricas como también del problema del uso indiscriminado de químicos con efectos desconocidos en la salud.</p>

        <p class="mb-6">Ya instalados el dispositivo de la ecosofía de Guattari y el desarrollo histórico de la menstruación, evidencio la manera en que el problema aquí planteado puede ser pensado en torno a los tres registros ecológicos. Primero, es evidente el problema ambiental que suscita el aumento exponencial del plástico en los productos de higiene y su eventual desecho en vertederos. En segundo lugar, en el nivel del problema social, identifico que a la histórica tradición de vergüenza en torno a la menstruación se le añade una segunda dimensión de negación del ciclo femenino en pos del circuito del trabajo. Este sistema a su vez perpetúa el esquema del capitalismo por medio de la comercialización de estos productos desechables en favor de la industria. Por último, en el nivel del problema subjetividad, la urgencia por ingresar en el paradigma de éxito moldeado a la medida del hombre, los cuerpos menstruantes suscriben al ritmo de la hiperproductividad y a la utilización de estos productos que dañan tanto su cuerpo como su entorno natural.</p>
        
        <h2 class="text-xl font-bold mt-12 mb-6 text-left" style="font-family: 'Advent_Pro', sans-serif;">El nacimiento de Venus</h2>
        
        <p class="mb-6">Si bien muchas sociedades previas a la instauración de las sociedades organizadas ya acarreaban un estigma en torno a la menstruación (percibida como un fenómeno peligroso, sucio o cargado socialmente por su carácter desconocido para los hombres, muchas veces causa de ostracismo o aislamientos forzados), los casos registrados por los autores citados nos alumbran un mundo posible. Si bien solo contadas culturas honraban colectivamente este momento en la vida de la mujer, estas nos demuestran la posibilidad. Nos recuerdan que no es suficiente la igualdad. Que no es suficiente luchar por una micro-dosis de descanso en un esquema que está diseñado para un cuerpo que no es el nuestro.</p>
        
        <p class="mb-6">A pesar de que el problema que aquí expongo se arrastra desde los inicios de la configuración de la civilización, tomo la propuesta de la ecosofía de Guattari como una invitación a pensar una nueva configuración de los tres registros ecológicos. Me queda la esperanza en una nueva forma de pensarnos, inscritas en este mundo, diferentes de los hombres, un nuevo ritmo, que no busque ocultar nuestra diferencia bajo la premisa de que los productos sanitarios son la manera de igualar en condiciones a la mujer y los cuerpos que menstruan y permitirnos acceder al espacio del Hombre.</p>
        
        <p class="mb-6">Desde esta premisa, escuchamos hoy a mujeres cis reclamando nuevamente su conexión con la tierra. Es creciente el movimiento de quienes se rehúsan a participar de la destrucción de su medio ambiente y se descartan del uso de productos higiénicos comerciales. Nos encontramos en un estado en el que comprendemos que sanarnos es sanar a la tierra. A partir de esto, vamos dejando atrás el histórico anquilosamiento de los ciclos naturales femeninos y retornamos poco a poco a sistemas inspirados en tribus indígenas, pero también en voces cercanas como las de Rosabetty Muñoz, Elvira Hernández, Cecilia Vicuña, y por supuesto Mistral haciendo un llamado a retornar a la madre-tierra original. Cuando en su poema “La tierra”, ya en el año 1924 la poeta vaticinaba: “y la madre que estaba rota / tú la verás volver entera”, asistíamos a la inauguración de un relato alternativo a la catástrofe hacia la cual se orienta el imaginario de la crisis ambiental. Una promesa desde nuestro propio territorio para recalibrar el desbalance histórico.</p>

        <p class="text-xs text-center font-['Jost'] mt-12 mb-8 text-gray-500 uppercase tracking-widest">Compartir en:
          <a href="https://api.whatsapp.com/send?text=Cuando%20la%20sangre%20toca%20la%20tierra%3A%20el%20doble%20v%C3%ADnculo%20de%20la%20mujer%20https%3A%2F%2Frevistaviaje.cl%2Fsangre-tierra-y-silencio" target="_blank" class="text-gray-800 hover:text-black hover:underline mx-1">WhatsApp</a>
        </p>

        <!-- Referencias -->
        <div class="mt-16 pt-8 border-t border-gray-100">
          <div class="flex justify-center mt-16 mb-12">
            <button
              onclick={toggleReferences}
              class="px-8 py-3 border border-gray-300 text-gray-500 font-['Jost'] text-[10px] md:text-xs uppercase tracking-[0.25em] hover:bg-black hover:text-white hover:border-black transition-all duration-300 rounded-sm"
            >
              Obras citadas
            </button>
          </div>

          {#if showReferences}
            <div class="mx-auto max-w-prose text-justify font-['Jost'] text-base text-gray-600 mb-24 animate-in fade-in duration-500">
              <p class="mb-1">Bachofen, Johann Jakob. El matriarcado: Una investigación sobre la ginecocracia en el mundo antiguo según su naturaleza religiosa y jurídica. Traducido por María del Mar Llinares García, Lectulandia, 2016.</p>
              <p class="mb-1">Borunda, Alejandra. “How Tampons and Pads Became So Unsustainable.” National Geographic, 2019.</p>
              <p class="mb-1">Canevari, Cecilia. “La expoliación capitalista de los cuerpos: mujeres y medicina.” Americanía. Revista de Estudios Latinoamericanos, no. 17, 2018, pp. 101–122.</p>
              <p class="mb-1">Del Río Pedraza, Carmen. “La medicalización del malestar en la mujer. Una valoración crítica.” Revista de la Asociación Española de Neuropsiquiatría, vol. 42, no. 141, 2022, pp. 55–73.</p>
              <p class="mb-1">Gershon, Livia. “The Secret History of Menstruation.” JSTOR Daily, 2018.</p>
              <p class="mb-1">Guattari, Félix. Las tres ecologías. Pre-Textos, 1990.</p>
              <p class="mb-1">Knight, Chris. Blood Relations: Menstruation and the Origins of Culture. Yale University Press, 1991.</p>
              <p class="mb-1">Macho-Stadler, Mayoría. “Las chicas del radio y los riesgos de la radiación.” National Geographic España, 2020.</p>
              <p class="mb-1">Mistral, Gabriela. Obra reunida. Tomo II: Poesía. Ediciones Biblioteca Nacional, 2019.</p>
              <p class="mb-1">“Nueva investigación revela los impactos nocivos de los agrotóxicos en la salud reproductiva de mujeres y niñas en América Latina.” Center for Reproductive Rights, 26 Nov. 2025.</p>
              <p class="mb-1">Schroeder, Fred E. H. “Feminine Hygiene, Fashion and the Emancipation of American Women.” American Studies, vol. 17, no. 2, 1976, pp. 101–110.</p>
              <p class="mb-1">“Triangle Shirtwaist Factory Fire.” Encyclopædia Britannica, Britannica, 2026.</p>
            </div>
          {/if}
        </div>

      </div>
    </div>
  </main>
</div>
