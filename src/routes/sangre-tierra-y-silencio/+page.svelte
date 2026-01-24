<script>
  import { onMount, onDestroy } from 'svelte';

  let showReferences = false;
  let atBottom = false;

  function toggleReferences() {
    showReferences = !showReferences;
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

<div class="pt-20 md:pt-24">
  <section class="bg-black h-16 w-full"></section>

  <main class="bg-white">
    <div class="container mx-auto px-4 py-8">
      <p class="text-xs font-bold text-center text-[#8B0000] mb-2 font-['Jost']">Feminismos</p>
      <h1 class="text-4xl font-bold mb-4 font-['Advent_Pro'] uppercase text-center mx-auto max-w-3xl">Sangre, tierra y silencio: el doble vínculo de la experiencia femenina</h1>
      <p class="text-sm text-center font-['Jost'] mb-2">Por Florencia Leiva Silva</p>
      <p class="text-xs text-center font-['Jost'] mb-4">Enero, 2025</p>
      <img src="/Carrieee.jpg" alt="Image related to Sangre, tierra y silencio" class="w-full h-auto mb-4" />
      <p class="text-xs text-center font-['Jost'] mb-8">Compartir en:
        <a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Flocalhost%3A5173%2Fsangre-tierra-y-silencio&text=Sangre%2C%20tierra%20y%20silencio%3A%20el%20doble%20v%C3%ADnculo%20de%20la%20experiencia%20femenina" target="_blank" class="text-blue-600 hover:underline">X</a> /
        <a href="https://www.instagram.com/" target="_blank" class="text-pink-600 hover:underline">Instagram</a>
      </p>
      <p class="text-lg leading-relaxed mb-4 text-justify font-['Jost'] mx-auto max-w-prose">La matriz es el órgano interno de reproducción de las hembras de los animales vivíparos en el que
se desarrolla el feto. Es también el molde o la entidad principal, generadora de otras. En minería,
la matriz es la roca en cuyo interior se ha formado un mineral. En este sentido, como nos alumbra
Mistral, la matriz original es la fuente que “todo lo toma, todo lo carga / el lomo santo de la
Tierra” (156). No es baladí que tantas culturas hayan instalado el imaginario de la madre-tierra
para hablar de la naturaleza. De alguna manera, el accidentado camino que ha recorrido la mujer
a lo largo de la historia sigue una curva análoga al de la tierra. Originalmente alineada con el
ritmo lunar, la mujer sangraba directamente sobre la tierra. Sin embargo, especialmente desde la
vorágine del progreso gatillada por la revolución industrial, estas dos entidades alguna vez en
comunión comienzan a tomar distancia. A modo de ilustración de este problema, proponemos el
caso del desarrollo de la experiencia vital de la menstruación a lo largo de la historia como una
materialización del doble vínculo que levantan los mecanismos de progreso y modernización. Por
un lado, la concepción moderna de la menstruación delinea “problemas” que en apariencia se
resuelven gracias a los productos higiénicos comerciales. Por otro lado, el tachado de sus flujos
naturales, junto con su ingreso en el sistema capital del trabajo desestabiliza el sistema de
cohesión entre mujer y naturaleza, profundizando también el problema de la crisis
medioambiental. Así, con el fin de explorar el supuesto de que existe una imagen especular entre
la degradación de la condición de la mujer y la de la tierra, surge la siguiente pregunta
orientadora: ¿Es posible alinear el doble vínculo de la menstruación con el modelo de las tres
ecologías planteado por Felix Guattari?</p>
        <p class="text-lg leading-relaxed mb-4 text-justify font-['Jost'] mx-auto max-w-prose">Para entrar en el análisis del problema, es clave plantear el sistema que Guattari (1990)
denomina como “ecosofía”. El autor da inicio a sus reflexiones con una descripción del problema
contemporáneo del desequilibrio ecológico, sumado a la crítica de que “las formaciones políticas
y las instancias ejecutivas se muestran totalmente incapaces de aprehender esta problemática en
el conjunto de sus implicaciones” (Guattari 8). Ante esto, se propone un modelo de pensamiento
de colaboración entre tres registros ecológicos para reorientar la solución a este problema: el del
medio ambiente, el de las relaciones sociales y el de la subjetividad humana (mental). Entonces, a
la base de este trabajo está la idea de que el desarrollo de los procesos en torno a la menstruación
pueden ser integrados bajo el modelo de Guattari con el fin de repensar tanto el estadio actual de
la crisis ambiental de la tierra como la situación de la mujer en la sociedad actual.</p>
        <p class="text-lg leading-relaxed mb-4 text-justify font-['Jost'] mx-auto max-w-prose">A modo de contexto, cabe destacar que la
concepción social de la menstruación ha
atravesado una serie de cambios a lo largo de
la historia. La tendencia observada por el
estudioso Fred E.H. Schroeder en su texto
“Higiene femenina, moda y la emancipación
de la mujer americana”, es que las
sociedades tribales poseían actitudes
psicológicas en torno a la menstruación muy
ligadas al cosmos y a la cultura (Gershon 2018). Un ejemplo de esto es la imagen que presenta el
antropólogo Chris Knight en su revisión histórica de la menstruación (Fig. 1). En estos tallados
podemos ver claramente la manera en que la cultura concebía el proceso de la menstruación
desde un imaginario colectivo perteneciente a los circuitos artísticos y venerado por su conexión
con la fertilidad y la abundancia de las tribus. No así, detalla Schroeder, las sociedades no tribales
desde la conformación de lo que conocemos como civilización han construido un discurso de la
vergüenza y la culpa en torno al ciclo femenino, relegandolo al espacio privado y al mandato del
silencio</p>
      <div class="my-8 mx-auto max-w-md text-center">
        <img src="/flo.jpg" alt="Tallados de roca en el río Yule" class="w-full h-auto" />
        <p class="text-sm mt-2 font-['Jost']">
          Fig. 1: Tallados de roca en el río Yule, Pilbara, Australia Occidental. Arte rupestre de indígenas australianos que ilustran imágenes de figuras femeninas danzando en una unión de flujos menstruales.
        </p>
      </div>
      <p class="text-lg leading-relaxed mb-4 text-justify font-['Jost'] mx-auto max-w-prose">Con esto damos paso al despliegue del vínculo explícito que identificamos entre el
ejemplo concreto de la menstruación y el problema medioambiental. Según el artículo “How
tampons and pads became so unsustainable” de National Geographic, una sola persona utiliza un
promedio de entre 5-15 mil tampones/toallas higiénicas a lo largo de su vida, productos que tras
un solo uso terminan en vertederos como desecho plástico (Borunda 2019). Desde los inicios de
la comercialización de productos sanitarios en 1933, las industrias químicas han desarrollado más
y más materiales sintéticos que las compañías manufactureras han incorporado en sus productos.
Estas a su vez han aumentado sus ventas por medio de campañas de marketing orientadas a
vender el ideal de la mujer productiva, eficiente y limpia. Este sistema es el que identificamos
como el doble vínculo de la independencia. Pues, mientras que la mujer puede caer en el vicio de
alinearse con los ritmos masculinos para dialogar socialmente con el hombre en igualdad de
condiciones, esta voluntad de poder es precisamente aquello que distancia a la mujer de sus ciclos
sexuales naturales, su convergencia con el ritmo lunar y eventualmente es aquello que carcome su
energía vital por intentar ajustarse a un esquema de éxito diseñado por el ideal masculino del
progreso indefinido. Esto deja a las mujeres frente a un escenario de degradación de su integridad
y una desconexión de su matriz original.</p>
      <div class="my-8 mx-auto max-w-md text-center">
        <img src="/floflo.jpg" alt="Las chicas del radio" class="w-full h-auto" />
        <p class="text-sm mt-2 font-['Jost']">
          Fig 2: Registro fotográfico de los efectos secundarios del envenenamiento por radiación de las Chicas del radio en la fábrica de relojes United States Radium Corporation (1917).
        </p>
      </div>
      <p class="text-lg leading-relaxed mb-4 text-justify font-['Jost'] mx-auto max-w-prose">Por supuesto, el fenómeno de la
mujer que entra en las dinámicas
de productividad tiene su origen
mucho antes de la creación del
tampón o la toalla higiénica. En
este sentido, desde el imaginario colectivo hemos ignorado que detrás de la narrativa simplificada
en torno a la emancipación de la mujer que se inserta en la fuerza laboral se esconde un doble
vínculo pernicioso. Respecto de esto, es paradigmático el caso de las 120 trabajadoras de la
fábrica de textiles que mueren tras una huelga por los derechos laborales a principios del siglo
XX. Este caso deja en evidencia el agravio que el desarrollo industrial deja detrás de sí, tanto en
el nivel de la contaminación por las fábricas como en el nivel del bienestar social. Otro ejemplo
es el caso de Las chicas del radio (Fig. 2). Se trata de un grupo de mujeres que padecen una serie
de efectos secundarios producto del envenenamiento por el radio presente en la pintura que
utilizaban para confeccionar relojes luminiscentes (Macho-Stadler 2020). Este caso da cuenta
tanto de los perjuicios de la ambición ciega de los dueños de las fábricas como también del
problema del uso indiscriminado de químicos con efectos desconocidos en la salud.</p>
      <p class="text-lg leading-relaxed mb-4 text-justify font-['Jost'] mx-auto max-w-prose">Una vez instalado el dispositivo de la ecosofía de Guattari junto al desarrollo histórico de
la menstruación, es posible evidenciar la manera en que el problema aquí planteado puede ser
pensado en torno a los tres registros ecológicos. Primero, es evidente el problema ambiental que
suscita el aumento exponencial del plástico en los productos de higiene y su eventual desecho en
vertederos. En segundo lugar, en el nivel del problema social, identificamos que a la histórica
tradición de vergüenza en torno a la menstruación se le añade una segunda dimensión de
negación del ciclo femenino en pos del circuito del trabajo. Este sistema a su vez perpetúa el
esquema del capitalismo por medio de la comercialización de estos productos desechables en
favor de la industria. Por último, en el nivel de la subjetividad, la urgencia por ingresar en el
paradigma de éxito moldeado a la medida del hombre, las mujeres suscriben al ritmo de la
hiperproductividad y a la utilización de estos productos que dañan tanto su cuerpo como su
entorno natural.</p>
      <p class="text-lg leading-relaxed mb-4 text-justify font-['Jost'] mx-auto max-w-prose">Finalmente, a modo de recapitulación, cabe recordar en primer lugar que en el nivel social
la norma histórica ha sido la instalación del imperativo de la vergüenza y el silencio en torno a la
menstruación y solo contadas culturas honraban colectivamente este momento en la vida de la
mujer. Actualmente, el ideal del progreso y la hiperproductividad han impulsado a la mujer a
ocultar su diferencia bajo la premisa de que los productos sanitarios son la manera de igualar en
condiciones a la mujer y permitirle acceder al espacio del hombre sin sacrificar su productividad.
Lo que encontramos al otro lado de este movimiento de emancipación es a una mujer escindida
por la negación del dolor, la sangre y el cambio energético y hormonal. Es por esto que la mujer
ha tomado distancia de su conexión con la tierra y en paralelo, la naturaleza ha seguido la curva
de degradación facilitada por el modelo de consumo y producción actual.</p>
      <p class="text-lg leading-relaxed mb-4 text-justify font-['Jost'] mx-auto max-w-prose">A pesar de que el problema aquí desarrollado es uno que se arrastra
desde los inicios de la configuración de la civilización, tomamos la propuesta de la ecosofía de
Guattari como una invitación a pensar una nueva configuración de los tres registros ecológicos.
Gracias al análisis que facilita el modelo, podemos asimilar los lineamientos del problema y dar
cuenta del entramado entre mujer y tierra. Desde esta premisa, evidenciamos hoy a mujeres
reclamando nuevamente su conexión con la tierra. Escuchamos a voces como la de Mistral
haciendo un llamado a retornar a la madre-tierra original. Cuando en su poema “La tierra”, del
poemario Ternura (1924), el sujeto poético vaticina: “y la madre que estaba rota / tú la verás
volver entera.” (Mistral 156), asistimos a la inauguración de un relato alternativo a la catástrofe
hacia la cual se orienta el imaginario de la crisis ambiental. En la misma línea, es creciente el
movimiento de mujeres que se rehúsan a participar de la destrucción de su medio ambiente y se
descartan del uso de productos higiénicos comerciales. Nos encontramos en un estado en el que
comprendemos que sanar a la mujer es sanar a la tierra. A partir de esto, comienza a quedar atrás
el histórico anquilosamiento de los ciclos naturales femeninos y retornamos poco a poco a
sistemas inspirados en tribus indígenas como modelos de experiencia de la menstruación para
recalibrar el desbalance ecológico.</p>

      <button
        on:click={toggleReferences}
        class="text-xl font-bold mb-4 text-center mt-12 font-['Advent_Pro'] text-gray-600 w-full"
        class:bounce={atBottom}
      >
        Referencias bibliográficas
      </button>
      {#if showReferences}
      <div class="mx-auto max-w-prose text-justify font-['Jost'] text-base text-gray-600">
        <p class="mb-1">Borunda, Alejandra. “How tampons and pads became so unsustainable”. National Geographic, 2019.</p>
        <p class="mb-1">Gershon, Livia. “The secret history of menstruation”. JSTOR Daily, 2018.</p>
        <p class="mb-1">Guattari, Félix. Las tres ecologías. V alencia: Pre-textos, 1990. Impreso.</p>
        <p class="mb-1">Knight, C. Blood relations: Menstruation and the origins of Culture. London & New Haven: Y ale University Press, 1991. Digital.</p>
        <p class="mb-1">Mistral, Gabriela. Obra reunida. Tomo II. Poesía. Santiago de Chile: Ediciones Biblioteca Nacional, 2019.</p>
        <p class="mb-1">Macho-Stadler, Marta. “Las chicas del radio y los riesgos de la radiación”. National Geographic España, 2020.</p>
      </div>
      {/if}
    </div>
  </main>
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
