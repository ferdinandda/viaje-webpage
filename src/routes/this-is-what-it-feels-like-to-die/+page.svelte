<script>
  let isMailOpen = $state(false);
  const url = 'https://revistaviaje.cl/this-is-what-it-feels-like-to-die';
  const title = 'this is what it feels like to die (Deathbloom)';

  function toggleMail() {
    isMailOpen = !isMailOpen;
  }
</script>

<svelte:head>
  <title>{title} — Waby Eliott | Revista Viaje</title>
</svelte:head>

<div class="min-h-screen pt-32 md:pt-40 bg-white">
  <main>
    <div class="container mx-auto px-4 py-8 max-w-4xl">
      
      <!-- Siempre visible: Título, Autor y Video -->
      <h1
        class="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 text-center mx-auto max-w-4xl leading-tight"
        style="font-family: 'Cormorant Garamond', serif; font-style: italic;"
      >
        this is what it feels like to die (Deathbloom)
      </h1>
      <p class="text-sm text-center font-['Jost'] mb-2 text-black">
        Por <a href="https://www.youtube.com/@wabyeliott" target="_blank" class="hover:underline">Waby Eliott</a>
      </p>
      <p class="text-xs text-center font-['Jost'] mb-12 text-gray-500">Junio, 2025</p>

      <div class="max-w-4xl mx-auto mb-16 aspect-video shadow-xl rounded-sm overflow-hidden bg-black">
        <video
          src="https://aq2ekfsk89rrskw6.public.blob.vercel-storage.com/videos/waby.mp4"
          controls
          class="w-full h-full"
        ></video>
      </div>

      <!-- Botón para ver mensaje -->
      <div class="flex justify-center mb-16">
        <button
          onclick={toggleMail}
          class="px-10 py-4 border border-gray-300 text-gray-500 font-['Jost'] text-xs uppercase tracking-[0.3em] hover:bg-black hover:text-white hover:border-black transition-all duration-300 rounded-sm"
        >
          {isMailOpen ? 'Cerrar mensaje' : 'Leer mensaje'}
        </button>
      </div>

      <!-- Contenido Revelado (El mensaje) -->
      {#if isMailOpen}
        <div class="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-prose mx-auto">
          
          <div class="space-y-16 pb-24">
            <!-- English Section -->
            <div>
              <div class="mb-8 border-b border-gray-100 pb-6 space-y-1 text-sm text-gray-400 font-['Jost']">
                <p><span class="text-gray-600 font-bold mr-2">From:</span> Waby Eliott &lt;wabyeliott@gmail.com&gt;</p>
                <p><span class="text-gray-600 font-bold mr-2">Date:</span> Mon, Apr 6, 2026 at 10:25 AM</p>
                <p><span class="text-gray-600 font-bold mr-2">Subject:</span> Deathbloom</p>
                <p><span class="text-black font-bold mr-2">To:</span> Revista Viaje &lt;viajerevista@gmail.com&gt;</p>
              </div>

              <div class="text-lg leading-relaxed text-justify font-['Jost'] font-light text-gray-800">
                <p class="mb-4">the song began with the chords. this was years ago. i remember playing them to my older cousin and his partner at the time. what does this make you feel? i asked them. kind of happy, kind of sad, she said. i love that particular emotion so i was pleased with myself, but i still didn't have any idea for how to develop it. sometimes melodies just need time, and the words fall into them without any effort. i don't remember how it came to be about death and dying, but those words just grew there in the space of that melody. i had nothing else to say about death so i left it like that, repeating itself. the second half put death into the perspective of being alive, day by day. it's a survival!</p>
                <p class="mb-4">then i remembered this video that had caught my attention. it was from the buddhist thich nhat hanh. <a href="https://www.youtube.com/watch?v=CTxR-DkMHEk" target="_blank" class="underline decoration-gray-300 hover:decoration-black transition-colors">youtube.com</a>. i liked the nervousness in the young man's voice, as he searched for a way to phrase the question of existence and mortality. i liked how the room laughed through the awkwardness. the buddhist's answer was nice and to the point, so i wrote an email to his monastery, based in california, and they accepted my use of their master's words.</p>
                <p class="mb-4">meanwhile i thought about dying and being alive, and i started filming things that made me feel alive. for a whole summer i took out my phone and filmed whenever i noticed little beautiful movements and moments, textures and colours, people and expressions that i loved, that filled me with emotion. some of the images are from galicia, others from madrid, from london, trips i took to tenerife and italy... most of the clips were filmed while thinking about the song and the project, and some i already had in my hard drive. i put them all in the video project at random, and cut them up into one big messy moving collage. it didnt have to follow anything in the song, it was more about finding a rhythm and following a feeling.</p>
                <p class="mb-4">i also asked some people to sing on the song, repeating the words with their layered voices. this wasnt supposed to be a song that only i could sing. i wanted each and every person to interact with that mystery of death and life, at least for a moment during the song. the choir of voices was woven around by the voice of a young girl and the voice of an older man.</p>
                <p class="mb-4">it was a necessary song for me to make, and the video might match its power in its intimacy and attention. somebody told me they weren't sure if it was supposed to be a music video or a home video and that it confused them, but other people told me it made them cry. one time we projected it at a tiny independent film festival, in an old abandoned barn, and people could stop in and watch it for a while then continue up the hill. it had a good response and that pleased me. i feel so lucky to be able to translate my feelings into sounds and words, and to create from nothing the things i see and hear in my mind. the video and song is also an ode of gratitude for my life and and the beautiful world around me i am blessed to experience.</p>
                <p class="mb-4">one final thing, when i played the song to my cousin, she said she liked it and asked me what the title was. it's just called this is what it feels like to die, i said. hmm, i invented this thing the other day. deathbloom. you can call it deathbloom if you like, she said. i gift that title to you. i chose to keep both.</p>
                <p class="text-right text-gray-400">— waby</p>
              </div>
            </div>

            <!-- Divider -->
            <div class="h-px bg-gray-100 w-1/3 mx-auto"></div>

            <!-- Spanish Section -->
            <div>
              <div class="mb-8 border-b border-gray-100 pb-6 space-y-1 text-sm text-gray-400 font-['Jost']">
                <p><span class="text-gray-600 font-bold mr-2">De:</span> Waby Eliott &lt;wabyeliott@gmail.com&gt;</p>
                <p><span class="text-gray-600 font-bold mr-2">Fecha:</span> lunes, 6 de abril de 2026, 10:25</p>
                <p><span class="text-gray-600 font-bold mr-2">Asunto:</span> Deathbloom</p>
                <p><span class="text-black font-bold mr-2">Para:</span> Revista Viaje &lt;viajerevista@gmail.com&gt;</p>
              </div>

              <div class="text-lg leading-relaxed text-justify font-['Jost'] font-light text-gray-800">
                <p class="mb-4">la canción comenzó con los acordes. esto fue hace años. recuerdo tocarlos para mi primo mayor y su pareja. "¿qué les hace sentir esto?", les pregunté. "algo feliz, algo triste", dijo ella. me encanta esa emoción en particular, así que me sentí satisfecho conmigo mismo, pero aún no tenía idea de cómo desarrollarla. a veces las melodías solo necesitan tiempo, y las palabras caen en ellas sin ningún esfuerzo. no recuerdo cómo llegó a tratar sobre la muerte y el morir, pero esas palabras simplemente crecieron ahí, en el espacio de esa melodía. no tenía nada más que decir sobre la muerte, así que lo dejé así, repitiéndose. la segunda mitad puso la muerte en perspectiva desde el hecho de estar vivo, día a día. ¡es una supervivencia!</p>
                <p class="mb-4">luego recordé este video que había llamado mi atención. era del budista thich nhat hanh, en <a href="https://www.youtube.com/watch?v=CTxR-DkMHEk" target="_blank" class="underline decoration-gray-300 hover:decoration-black transition-colors">youtube</a>. me gustó el nerviosismo en la voz del joven, mientras buscaba una manera de formular la pregunta sobre la existencia y la mortalidad. me gustó cómo la sala se reía a través de la incomodidad. la respuesta del budista fue clara y directa, así que escribí un correo a su monasterio, con sede en california, y aceptaron que usara las palabras de su maestro.</p>
                <p class="mb-4">mientras tanto, pensé sobre morir y estar vivo, así que empecé a filmar cosas que me hacían sentir vivo. durante todo un verano saqué mi teléfono y grabé cada vez que notaba pequeños hermosos instantes y movimientos, texturas y colores, personas y expresiones que amé, que me llenaban de emoción. algunas de las imágenes son de galicia, otras de madrid, de londres, de viajes que hice a tenerife e italia… la mayoría de los clips fueron filmados mientras pensaba en la canción y el proyecto, algunos ya los tenía en mi disco duro. los reuní todos en el proyecto de video al azar y los corté en un gran caótico collage en movimiento. no tenía que seguir la canción; se trataba más de encontrar un ritmo y seguir una sensación.</p>
                <p class="mb-4">también le pedí a algunas personas que cantaran, repitiendo las palabras con sus voces superpuestas. no se suponía que fuera una canción que solo yo pudiera cantar. quería que todas y cada una de las personas interactuaran con ese misterio de la muerte y la vida, al menos por un momento durante la canción. el coro de voces fue entretejido con la voz de una niña y la voz de un hombre mayor.</p>
                <p class="mb-4">fue una canción necesaria para mí, y el video quizás iguala su fuerza en su intimidad y detalle. alguien me dijo que no estaba seguro de si se suponía que era un video musical o un video casero y que eso le confundía, otras personas me dijeron que les hizo llorar. una vez lo proyectamos en un pequeño festival de cine independiente, en un viejo granero abandonado, la gente podía detenerse a verlo un rato y luego seguir subiendo la colina. tuvo una buena recepción, eso me alegró. me siento muy afortunado de poder traducir mis sentimientos en sonidos y palabras, de crear las cosas que veo y escucho en mi mente. el video y la canción son también una oda de gratitud por mi vida y por el hermoso mundo que tengo la suerte de experimentar.</p>
                <p class="mb-4">una última cosa: cuando le mostré la canción a mi prima, dijo que le gustaba y me preguntó cuál era el título. "se llama simplemente 'this is what it feels like to die'", dije. "mmm, inventé algo el otro día: 'deathbloom'. puedes llamarlo 'deathbloom' si quieres", dijo.</p>
                <p class="text-right text-gray-400">— waby</p>
              </div>
            </div>
          </div>

          <div class="mt-12 pt-10 border-t border-gray-100 flex justify-center pb-20">
             <p class="text-xs text-center font-['Jost'] text-gray-400 uppercase tracking-widest">Compartir en:
              <a href="https://api.whatsapp.com/send?text={encodeURIComponent(title + ' ' + url)}" target="_blank" class="text-black hover:underline mx-2">WhatsApp</a>
            </p>
          </div>
        </div>
      {/if}

    </div>
  </main>
</div>
