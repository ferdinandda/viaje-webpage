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
            { id: 1, text: 'caminar sin rumbo', x: 20, y: 30 },
            { id: 2, text: 'el ruido blanco', x: 60, y: 50 },
            { id: 3, text: 'somos sombras', x: 40, y: 70 }
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
  
  <!-- Background Image with Extreme Contrast for Silhouette Effect -->
  <div 
    class="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[60s] ease-linear hover:scale-110 pointer-events-none"
    style="background-image: url('https://images.unsplash.com/photo-1444065707204-12decac917e8?q=80&w=2073&auto=format&fit=crop'); filter: grayscale(100%) contrast(300%) brightness(150%); opacity: 0.15;"
  ></div>
  
  <!-- Interactive Area -->
  <div class="absolute inset-0 z-10 overflow-hidden">
    {#each notes as note (note.id)}
      <div 
        class="absolute group cursor-pointer p-6"
        style="left: {note.x}%; top: {note.y}%; transform: translate(-50%, -50%);"
      >
        <!-- The Trigger Area (invisible but interactive) -->
        <div class="w-8 h-8 rounded-full bg-transparent group-hover:bg-black/5 transition-colors duration-300 mx-auto border border-transparent group-hover:border-black/10"></div>

        <!-- The Content (Revealed on Hover) -->
        <div class="opacity-0 group-hover:opacity-100 transition-all duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 text-center pointer-events-none z-20">
          <p class="text-black text-[10px] md:text-xs font-light leading-relaxed tracking-wider bg-white/80 backdrop-blur-sm p-3 shadow-sm border border-black/5" style="font-family: 'Jost', sans-serif;">
            "{note.text}"
          </p>
        </div>
      </div>
    {/each}
  </div>

  <!-- Controls (Bottom) -->
  <div class="absolute bottom-12 left-0 right-0 z-50 flex justify-center pointer-events-none">
    <button 
      onclick={() => showForm = !showForm}
      class="pointer-events-auto border border-black/20 text-black/60 bg-white/50 backdrop-blur-sm px-6 py-2 hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-[0.15em] text-[10px]"
      style="font-family: 'Jost', sans-serif;"
    >
      {showForm ? 'Cerrar' : 'Dejar huella'}
    </button>
  </div>

  <!-- Minimalist Input Modal (Light Theme) -->
  {#if showForm}
    <div transition:fade class="absolute inset-0 z-40 bg-white/90 backdrop-blur-md flex items-center justify-center p-6">
      <div class="w-full max-w-md text-center" transition:scale>
        <p class="text-black/40 mb-6 font-serif italic text-sm">Escribe...</p>
        <textarea
          bind:value={newNoteText}
          class="w-full bg-transparent border-b border-black/10 text-black text-xl font-light text-center focus:outline-none focus:border-black resize-none h-32 placeholder-black/10"
          placeholder="..."
          maxlength="140"
        ></textarea>
        
        <div class="mt-8 flex justify-center gap-4">
          <button 
            onclick={addNote}
            class="text-black uppercase tracking-widest text-xs border border-black/20 px-6 py-2 hover:bg-black hover:text-white transition-colors"
          >
            Publicar
          </button>
        </div>
      </div>
    </div>
  {/if}

</section>