<script>
  import { onMount } from 'svelte';
  import { fade, scale } from 'svelte/transition';

  let notes = [];
  let newNoteText = '';
  let showForm = false;
  let containerWidth = 0;
  let containerHeight = 0;

  // Aesthetic: Street/Crowd photography (Black & White Motion Blur)
  // Using a specific Unsplash ID for a crowd/motion blur effect
  const bgImage = "https://images.unsplash.com/photo-1496348323742-936a537f1712?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3";

  onMount(() => {
    // Load notes
    const savedNotes = localStorage.getItem('viaje_wall_notes');
    if (savedNotes) {
      notes = JSON.parse(savedNotes);
    } else {
        notes = [
            { id: 1, text: 'Todos caminamos hacia el mismo lugar.', x: 20, y: 30 },
            { id: 2, text: '¿Quién eres cuando nadie mira?', x: 60, y: 50 },
            { id: 3, text: 'El ruido de la ciudad es mi silencio.', x: 40, y: 70 }
        ];
    }
  });

  function addNote() {
    if (!newNoteText.trim()) return;

    // Random position between 10% and 90% to keep away from extreme edges
    const x = Math.floor(Math.random() * 80) + 10;
    const y = Math.floor(Math.random() * 80) + 10;

    const note = {
      id: Date.now(),
      text: newNoteText,
      x, 
      y,
      date: new Date().toLocaleDateString()
    };

    notes = [note, ...notes];
    localStorage.setItem('viaje_wall_notes', JSON.stringify(notes));
    newNoteText = '';
    showForm = false;
  }
</script>

<section class="relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center">
  
  <!-- Background Image with Overlay -->
  <div 
    class="absolute inset-0 z-0 bg-cover bg-center grayscale opacity-60 contrast-125 pointer-events-none transition-transform duration-[20s] ease-linear hover:scale-105"
    style="background-image: url('https://images.unsplash.com/photo-1496348323742-936a537f1712?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3');"
  ></div>
  
  <!-- Dark overlay to make text readable -->
  <div class="absolute inset-0 z-0 bg-black/40 pointer-events-none mix-blend-multiply"></div>

  <!-- Interactive Area -->
  <div class="absolute inset-0 z-10 overflow-hidden">
    {#each notes as note (note.id)}
      <!-- 
        Note Container 
        - Default: A subtle "ghost" light or blur
        - Hover: Expands to reveal text
      -->
      <div 
        class="absolute group cursor-pointer transition-all duration-500 ease-out p-4"
        style="left: {note.x}%; top: {note.y}%; transform: translate(-50%, -50%);"
      >
        <!-- The "Ghost" indicator (visible when not hovering) -->
        <div class="w-2 h-2 rounded-full bg-white/40 blur-[2px] group-hover:opacity-0 transition-opacity duration-300 animate-pulse mx-auto"></div>

        <!-- The Content (Revealed on Hover) -->
        <div class="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 min-w-[200px] max-w-[300px] text-center pointer-events-none group-hover:pointer-events-auto">
          <p class="text-white text-xl md:text-2xl font-light leading-snug drop-shadow-lg italic tracking-wide mix-blend-overlay group-hover:mix-blend-normal" style="font-family: 'Jost', sans-serif;">
            "{note.text}"
          </p>
          <div class="w-8 h-[1px] bg-white/30 mx-auto mt-4 transition-all duration-500 group-hover:w-full group-hover:bg-white/80"></div>
          <p class="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-2">{note.date}</p>
        </div>
      </div>
    {/each}
  </div>

  <!-- Controls (Bottom) -->
  <div class="absolute bottom-12 left-0 right-0 z-50 flex justify-center pointer-events-none">
    <button 
      onclick={() => showForm = !showForm}
      class="pointer-events-auto bg-black/20 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 uppercase tracking-[0.2em] text-xs font-light"
    >
      {showForm ? 'Cerrar' : 'Dejar huella'}
    </button>
  </div>

  <!-- Minimalist Input Modal -->
  {#if showForm}
    <div transition:fade class="absolute inset-0 z-40 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6">
      <div class="w-full max-w-lg text-center" transition:scale>
        <p class="text-white/60 mb-6 font-serif italic">Escribe tu pensamiento...</p>
        <textarea
          bind:value={newNoteText}
          class="w-full bg-transparent border-b border-white/30 text-white text-2xl md:text-3xl font-light text-center focus:outline-none focus:border-white resize-none h-40 placeholder-white/20"
          placeholder="..."
          maxlength="140"
        ></textarea>
        
        <div class="mt-8 flex justify-center gap-4">
          <button 
            onclick={addNote}
            class="text-white uppercase tracking-widest text-sm border border-white px-8 py-2 hover:bg-white hover:text-black transition-colors"
          >
            Publicar
          </button>
        </div>
      </div>
    </div>
  {/if}

</section>