<script>
  import { onMount } from 'svelte';
  import { fade, scale } from 'svelte/transition';

  let notes = [];
  let newNoteText = '';
  let showForm = false;
  
  // Pastel colors for the post-its
  const colors = [
    'bg-[#fff740]', // Classic Yellow
    'bg-[#ff7eb9]', // Pink
    'bg-[#7afcff]', // Blue
    'bg-[#feff9c]', // Light Yellow
    'bg-[#fff740]', // Classic Yellow
  ];

  // Random rotation for organic feel
  const rotations = [
    '-rotate-2',
    'rotate-1',
    '-rotate-1',
    'rotate-2',
    'rotate-3',
    '-rotate-3'
  ];

  onMount(() => {
    // Load notes from localStorage if available
    const savedNotes = localStorage.getItem('viaje_wall_notes');
    if (savedNotes) {
      notes = JSON.parse(savedNotes);
    } else {
        // Add some initial placeholder notes
        notes = [
            { id: 1, text: '¡Bienvenidos al muro!', color: 'bg-[#fff740]', rotation: '-rotate-2', date: new Date().toLocaleDateString() },
            { id: 2, text: 'Dejen sus pensamientos aquí...', color: 'bg-[#ff7eb9]', rotation: 'rotate-1', date: new Date().toLocaleDateString() }
        ];
    }
  });

  function addNote() {
    if (!newNoteText.trim()) return;

    const note = {
      id: Date.now(),
      text: newNoteText,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: rotations[Math.floor(Math.random() * rotations.length)],
      date: new Date().toLocaleDateString()
    };

    notes = [note, ...notes];
    localStorage.setItem('viaje_wall_notes', JSON.stringify(notes));
    newNoteText = '';
    showForm = false;
  }

  function deleteNote(id) {
    notes = notes.filter(n => n.id !== id);
    localStorage.setItem('viaje_wall_notes', JSON.stringify(notes));
  }
</script>

<section class="py-24 bg-[#f0f0f0] border-t border-gray-200 relative overflow-hidden">
  <!-- Title Section -->
  <div class="max-w-6xl mx-auto px-6 mb-12 text-center relative z-10">
    <h2 class="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-ink)]" style="font-family: 'Jost', sans-serif;">
      El Muro
    </h2>
    <p class="text-lg text-[var(--color-ink-muted)] mb-8 font-light" style="font-family: 'Jost', sans-serif;">
      Deja una nota, un pensamiento o un saludo.
    </p>
    
    <button 
      onclick={() => showForm = !showForm}
      class="bg-[var(--color-ink)] text-white px-8 py-3 rounded-full hover:bg-[var(--color-terracotta)] transition-colors duration-300 shadow-lg font-medium tracking-wide text-sm uppercase"
      style="font-family: 'Jost', sans-serif;"
    >
      {showForm ? 'Cancelar' : 'Escribir una nota'}
    </button>
  </div>

  <!-- Note Input Form -->
  {#if showForm}
    <div transition:scale class="max-w-md mx-auto mb-16 px-6 relative z-20">
      <div class="bg-white p-6 rounded-lg shadow-xl border border-gray-100 transform rotate-1">
        <textarea
          bind:value={newNoteText}
          placeholder="Escribe algo aquí..."
          class="w-full h-32 p-4 mb-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-terracotta)] resize-none font-['Jost'] text-lg"
          maxlength="140"
        ></textarea>
        <div class="flex justify-between items-center text-xs text-gray-400">
            <span>{newNoteText.length}/140</span>
            <button 
            onclick={addNote}
            class="bg-[var(--color-terracotta)] text-white px-6 py-2 rounded hover:bg-[var(--color-terracotta-dark)] transition-colors"
            >
            Publicar
            </button>
        </div>
      </div>
    </div>
  {/if}

  <!-- The Wall -->
  <div class="max-w-7xl mx-auto px-6 pb-12">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
      {#each notes as note (note.id)}
        <div 
          in:scale={{ duration: 300, delay: 100 }}
          class="aspect-square relative group {note.rotation} hover:rotate-0 hover:z-10 transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          <!-- Post-it Body -->
          <div class="{note.color} w-full h-full p-6 shadow-md flex flex-col justify-between relative transform origin-top-left">
            <!-- Pin/Tape effect (optional visual detail) -->
            <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 opacity-20 bg-black blur-sm rounded-full"></div>
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-800 shadow-inner z-20 border border-white/20"></div>

            <p class="text-[var(--color-ink)] text-lg md:text-xl leading-snug font-['Stoke'] break-words text-center flex items-center justify-center flex-grow">
              "{note.text}"
            </p>
            <div class="mt-4 text-[10px] text-[var(--color-ink-muted)] text-right font-mono opacity-60 uppercase tracking-widest border-t border-black/10 pt-2">
              {note.date}
            </div>
          </div>
        </div>
      {/each}
    </div>
    
    {#if notes.length === 0}
      <div class="text-center py-20 opacity-50">
        <p>El muro está vacío. ¡Sé el primero en escribir!</p>
      </div>
    {/if}
  </div>
</section>

<style>
  /* Add specific shadows for depth */
  .aspect-square > div {
    box-shadow: 2px 4px 6px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.05);
  }
</style>