<script>
  import { onMount } from 'svelte';
  import { fade, scale } from 'svelte/transition';

  let notes = [];
  let newNoteText = '';
  let showForm = false;

  onMount(() => {
    const savedNotes = localStorage.getItem('viaje_wall_notes');
    let userNotes = savedNotes ? JSON.parse(savedNotes) : [];
    
    // Nota obligatoria
    const mandatoryNote = { id: 'first-note', text: 'huevos, arroz, fideos, queso, pan, vino, tabaco', x: 42, y: 58 };
    
    // Otros ejemplos
    const defaultNotes = [
        { id: 'default-2', text: 'caminar sin rumbo por la ciudad', x: 75, y: 30 },
        { id: 'default-3', text: 'somos sombras que pasan sin dejar rastro', x: 20, y: 80 }
    ];

    if (userNotes.length > 0) {
        const filteredUserNotes = userNotes.filter(n => n.text !== mandatoryNote.text);
        notes = [mandatoryNote, ...filteredUserNotes];
    } else {
        notes = [mandatoryNote, ...defaultNotes];
    }
  });

  function addNote() {
    if (!newNoteText.trim() || newNoteText.length < 40) return;
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

<section class="relative w-full h-screen overflow-hidden bg-white flex flex-col">

  <!-- Interactive Area with Silhouettes -->
  <div class="relative flex-grow w-full overflow-hidden bg-white">
    
    <!-- Background Image: siluetas2.jpg (Tiled) - Darker -->
    <div 
      class="absolute inset-0 z-0 bg-repeat transition-transform duration-[120s] ease-linear hover:scale-105 pointer-events-none grayscale opacity-[0.80] contrast-125 mt-20"
      style="background-image: url('/siluetas2.jpg'); background-size: 400px auto;"
    ></div>
    
    <!-- Notes Loop -->
    <div class="absolute inset-0 z-10 overflow-hidden mt-20">
      {#each notes as note (note.id)}
        <div 
          class="absolute group cursor-pointer p-16"
          style="left: {note.x}%; top: {note.y}%; transform: translate(-50%, -50%);"
        >
          <!-- Trigger Area (Subtle highlight) -->
          <div class="w-4 h-4 rounded-full bg-black/20 group-hover:bg-transparent transition-colors duration-500 mx-auto blur-sm"></div>

        <!-- The Content (Revealed on Hover) - Organic Text (No Box) -->
        <div class="opacity-0 group-hover:opacity-100 transition-all duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 text-center pointer-events-none z-50">
          <p class="text-black text-[10px] md:text-xs font-['Jost'] leading-relaxed tracking-[0.2em] font-light drop-shadow-sm bg-white/90 backdrop-blur-[2px] p-4 rounded-sm shadow-xl border border-gray-100">
            "{note.text}"
          </p>
        </div>
      </div>
    {/each}
  </div>

  <!-- Unified Bottom Panel (Translucent Button) -->
  <div class="absolute bottom-12 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center w-full max-w-md px-4 pointer-events-none">
    <button 
      onclick={() => showForm = !showForm}
      class="bg-white/50 backdrop-blur-md border border-white/40 shadow-xl rounded-sm px-10 py-5 text-center pointer-events-auto transition-all hover:bg-white/70 hover:-translate-y-0.5 group"
    >
      <span class="text-black text-[11px] md:text-[12px] uppercase tracking-[0.25em] font-['Jost'] font-normal group-hover:opacity-70 transition-all">
        {showForm ? 'Cerrar' : 'anota lo que no se te puede pasar'}
      </span>
    </button>
  </div>

  <!-- Minimalist Input Modal (Pro) -->
  {#if showForm}
    <div transition:fade class="absolute inset-0 z-50 bg-white/95 flex items-center justify-center p-6 backdrop-blur-sm">
      <div class="w-full max-w-md text-center" transition:scale={{duration: 400, start: 0.95}}>
        <p class="text-gray-500 mb-2 font-['Jost'] text-sm tracking-wide">
          Deja una nota
        </p>
        <p class="text-gray-400 mb-10 font-['Jost'] text-[10px] uppercase tracking-widest">
          (40 - 180 caracteres)
        </p>

        <textarea
          bind:value={newNoteText}
          class="w-full bg-transparent border-b border-gray-200 text-black text-xl md:text-2xl font-light text-center focus:outline-none focus:border-black resize-none h-40 placeholder-gray-200 font-['Jost'] leading-normal"
          placeholder="Escribe aquí..."
          maxlength="180"
        ></textarea>
        
        <div class="mt-4 flex justify-between px-2 text-[9px] text-gray-400 uppercase tracking-widest font-['Jost']">
          <span>{newNoteText.length} / 180</span>
          {#if newNoteText.length > 0 && newNoteText.length < 40}
             <span class="text-red-400">Muy corto</span>
          {/if}
        </div>

        <div class="mt-12 flex justify-center">
          <button 
            onclick={addNote}
            disabled={newNoteText.length < 40}
            class="text-black border-b border-black pb-1 hover:border-gray-400 hover:text-gray-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed uppercase tracking-[0.2em] text-[10px]"
          >
            Publicar
          </button>
        </div>
      </div>
    </div>
  {/if}

</section>