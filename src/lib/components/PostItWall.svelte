<script>
  import { onMount } from 'svelte';
  import { fade, scale } from 'svelte/transition';

  let notes = [];
  let newNoteText = '';
  let showForm = false;

  onMount(() => {
    const savedNotes = localStorage.getItem('viaje_wall_notes');
    if (savedNotes) {
      notes = JSON.parse(savedNotes);
    } else {
        notes = [
            { id: 1, text: 'caminar sin rumbo', x: 25, y: 40 },
            { id: 2, text: 'el ruido blanco de la ciudad', x: 65, y: 55 },
            { id: 3, text: 'somos sombras que pasan', x: 45, y: 75 }
        ];
    }
  });

  function addNote() {
    if (!newNoteText.trim()) return;
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

<section class="relative w-full h-screen overflow-hidden bg-white flex flex-col items-center justify-center">
  
  <!-- Background Image: siluetas.jpg (Tiled for crowd effect) -->
  <div 
    class="absolute inset-0 z-0 bg-repeat transition-transform duration-[60s] ease-linear hover:scale-105 pointer-events-none grayscale opacity-[0.06]"
    style="background-image: url('/siluetas.jpg'); background-size: 400px auto;"
  ></div>
  
  <!-- White overlay to fade out the background slightly if needed -->
  <div class="absolute inset-0 z-0 bg-white/40 pointer-events-none mix-blend-lighten"></div>

  <!-- Subtitle / Motto -->
  <div class="absolute top-24 left-0 right-0 z-20 text-center pointer-events-none px-4">
    <p class="text-black/30 text-[10px] md:text-xs tracking-[0.2em] uppercase font-['Jost']">
      Un lugar para anotar lo que no se nos puede pasar.
    </p>
  </div>

  <!-- Interactive Area -->
  <div class="absolute inset-0 z-10 overflow-hidden">
    {#each notes as note (note.id)}
      <div 
        class="absolute group cursor-pointer p-8"
        style="left: {note.x}%; top: {note.y}%; transform: translate(-50%, -50%);"
      >
        <!-- The Trigger Area (very subtle) -->
        <div class="w-2 h-2 rounded-full bg-black/5 group-hover:bg-black/10 transition-colors duration-300 mx-auto"></div>

        <!-- The Content (Revealed on Hover) -->
        <!-- Letra muy pequeña como pidió el usuario -->
        <div class="opacity-0 group-hover:opacity-100 transition-all duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 text-center pointer-events-none z-20">
          <p class="text-black text-[9px] md:text-[10px] font-light leading-relaxed tracking-wider bg-white/60 backdrop-blur-[2px] p-2" style="font-family: 'Jost', sans-serif;">
            {note.text}
          </p>
        </div>
      </div>
    {/each}
  </div>

  <!-- Controls (Bottom) -->
  <div class="absolute bottom-12 left-0 right-0 z-50 flex justify-center pointer-events-none">
    <button 
      onclick={() => showForm = !showForm}
      class="pointer-events-auto border border-black/10 text-black/40 bg-white/30 backdrop-blur-sm px-6 py-2 hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-[0.2em] text-[9px]"
      style="font-family: 'Jost', sans-serif;"
    >
      {showForm ? 'Cerrar' : 'ANOTA'}
    </button>
  </div>

  <!-- Minimalist Input Modal (Light Theme) -->
  {#if showForm}
    <div transition:fade class="absolute inset-0 z-40 bg-white/95 flex items-center justify-center p-6">
      <div class="w-full max-w-sm text-center" transition:scale>
        <p class="text-black/30 mb-8 font-serif italic text-xs uppercase tracking-widest">Escribir pensamiento</p>
        <textarea
          bind:value={newNoteText}
          class="w-full bg-transparent border-b border-black/10 text-black text-xl font-light text-center focus:outline-none focus:border-black resize-none h-32 placeholder-black/5"
          placeholder="..."
          maxlength="140"
        ></textarea>
        
        <div class="mt-12 flex justify-center gap-4">
          <button 
            onclick={addNote}
            class="text-black uppercase tracking-widest text-[10px] border border-black/20 px-8 py-2 hover:bg-black hover:text-white transition-colors"
          >
            Publicar
          </button>
        </div>
      </div>
    </div>
  {/if}

</section>