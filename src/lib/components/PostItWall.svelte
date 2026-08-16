<script>
  import { onMount } from 'svelte';
  import { fade, scale } from 'svelte/transition';
  import { ConvexHttpClient } from "convex/browser";
  import { api } from "../../../convex/_generated/api";

  let newNoteText = $state('');
  let showForm = $state(false);
  let client;
  let dbNotes = $state([]);
  let activeNoteId = $state(null); // For mobile tap interaction
  let noteDialogEl;
  let formTextareaEl;

  // Mandatory notes
  const mandatoryNote = { id: 'first-note', text: 'huevos, arroz, fideos, queso, pan, vino, tabaco', x: 42, y: 58 };
  const defaultNote = { id: 'default-4', text: 'Luna toma agua del bebedero cuando no la veo pero cuando la veo no toma', x: 30, y: 25 };

  onMount(async () => {
    try {
        const CONVEX_URL = "https://aromatic-aardvark-340.convex.cloud";
        if (CONVEX_URL) {
            client = new ConvexHttpClient(CONVEX_URL);
            // Fetch initial notes
            const result = await client.query(api.notes.list);
            dbNotes = result || [];
        }
    } catch (e) {
        console.error("Error connecting to Convex:", e);
    }
  });

  // Derived notes list
  let displayNotes = $derived.by(() => {
    let combined = [...dbNotes];

    // Moderation: Filter out specific notes requested by user
    const stringsToFilter = [
      "holiwi",
      "jacker",
      "jaquer",
      "mejor novia"
    ];

    combined = combined.filter(n => {
      const text = n.text.toLowerCase();
      return !stringsToFilter.some(s => text.includes(s));
    });

    // Deduplicate by text, keeping only the first occurrence
    const seenTexts = new Set();
    combined = combined.filter(n => {
      const key = n.text.trim().toLowerCase();
      if (seenTexts.has(key)) return false;
      seenTexts.add(key);
      return true;
    });

    const addIfNotExists = (fixedNote) => {
        if (!combined.some(n => n.text === fixedNote.text)) {
            combined.push(fixedNote);
        }
    };

    addIfNotExists(mandatoryNote);
    addIfNotExists(defaultNote);
    
    return combined;
  });

  let activeNote = $derived(displayNotes.find(n => (n.id || n._id) === activeNoteId));

  $effect(() => {
    if (activeNote && noteDialogEl) {
      noteDialogEl.focus();
    }
  });

  $effect(() => {
    if (showForm && formTextareaEl) {
      formTextareaEl.focus();
    }
  });

  function handleWindowKeydown(e) {
    if (e.key !== 'Escape') return;
    if (activeNoteId) {
      activeNoteId = null;
    } else if (showForm) {
      showForm = false;
      newNoteText = '';
    }
  }

  async function addNote() {
    if (!newNoteText.trim() || newNoteText.length < 40) return;
    
    const x = Math.floor(Math.random() * 80) + 10;
    const y = Math.floor(Math.random() * 80) + 10;
    const date = new Date().toLocaleDateString();

    try {
      if (client) {
          await client.mutation(api.notes.create, {
            text: newNoteText,
            x,
            y,
            date
          });
          // Refresh list
          const result = await client.query(api.notes.list);
          dbNotes = result || [];
      } else {
          alert("No hay conexión con la base de datos.");
      }
      newNoteText = '';
      showForm = false;
    } catch (err) {
      console.error("Error creating note:", err);
      alert("Error al guardar la nota.");
    }
  }
</script>

<svelte:window onkeydown={handleWindowKeydown} />

<section class="relative w-full h-screen overflow-hidden bg-[#e5e5e5] flex flex-col">

  <!-- Interactive Area with Silhouettes -->
  <div class="relative flex-grow w-full overflow-hidden bg-[#e5e5e5]">
    
    <!-- Background Siluetas -->
    <div
      class="absolute inset-0 z-0 pointer-events-none grayscale opacity-80 contrast-125 mt-20"
      style="background-image: url('/banner.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center;"
    ></div>
    
    <!-- Notes Loop -->
    <div class="absolute inset-0 z-10 mt-20">
      {#each displayNotes as note (note.id || note._id)}
        <button
          class="absolute cursor-pointer p-3"
          style="left: {note.x}%; top: {note.y}%; transform: translate(-50%, -50%);"
          onclick={(e) => {
            e.stopPropagation();
            activeNoteId = (note.id || note._id);
          }}
          aria-label="Ver nota"
        >
          <!-- Luz que tintinea -->
          <div class="relative w-3 h-3">
            <div class="absolute inset-0 rounded-full bg-yellow-300 animate-ping motion-reduce:animate-none opacity-60"></div>
            <div class="relative rounded-full w-3 h-3 bg-yellow-400 blur-[2px] shadow-[0_0_10px_5px_rgba(250,204,21,0.8)]"></div>
          </div>
        </button>
      {/each}
    </div>
  </div>

  <!-- Active Note Overlay (all screens) -->
  {#if activeNote}
    <div
      class="fixed inset-0 z-[100] flex items-center justify-center p-8"
      transition:fade={{duration: 150}}
    >
      <div class="absolute inset-0" onclick={() => activeNoteId = null} aria-hidden="true"></div>
      <div
        class="relative bg-white/95 backdrop-blur-md p-8 rounded-sm shadow-2xl border border-gray-200 w-full max-w-sm text-center"
        role="dialog"
        aria-modal="true"
        aria-label="Nota"
        tabindex="-1"
        bind:this={noteDialogEl}
        transition:scale={{duration: 200, start: 0.92}}
      >
        <p class="text-black text-xs font-['Jost'] leading-relaxed tracking-[0.2em] font-light">
          "{activeNote.text}"
        </p>
        <button
          onclick={() => activeNoteId = null}
          class="mt-6 text-gray-400 uppercase tracking-widest text-[10px] border-b border-transparent hover:border-gray-300 transition-colors hover:text-gray-600"
        >
          Cerrar
        </button>
      </div>
    </div>
  {/if}

  <!-- Unified Bottom Panel (Translucent Button) -->
  <div class="absolute bottom-12 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center w-full max-w-md px-4 pointer-events-none">
    <button 
      onclick={() => showForm = !showForm}
      class="bg-white/50 backdrop-blur-md border border-white/40 shadow-xl rounded-sm px-10 py-5 text-center pointer-events-auto transition-all hover:bg-white/70 hover:-translate-y-0.5 group"
    >
      <span class="text-black text-[11px] md:text-[12px] uppercase tracking-[0.25em] font-['Jost'] font-normal group-hover:opacity-70 transition-all">
        {showForm ? 'Cerrar' : 'Deja una nota'}
      </span>
    </button>
  </div>

  <!-- Minimalist Input Modal (Card Style) -->
  {#if showForm}
    <div transition:fade class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-md">
      <!-- Click outside to close -->
      <div
        class="absolute inset-0"
        onclick={() => { showForm = false; newNoteText = ''; }}
        aria-hidden="true"
      ></div>

      <div
        class="relative bg-white/95 shadow-2xl rounded-sm p-8 md:p-12 w-full max-w-lg border border-white/50"
        role="dialog"
        aria-modal="true"
        aria-labelledby="nota-modal-title"
        aria-describedby="nota-modal-desc"
        transition:scale={{duration: 300, start: 0.95}}
      >

        <h3 id="nota-modal-title" class="text-gray-900 font-['Jost'] text-sm font-light tracking-wide mb-2 text-center">Esto es solo un ejercicio:</h3>
        <p id="nota-modal-desc" class="text-gray-600 mb-4 font-['Jost'] text-[11px] md:text-xs leading-relaxed text-center px-4">
          Deja una nota sobre algo que no quieres que se pierda. Tu texto aparecerá en alguna de las siluetas y formará parte de este muro.
        </p>


        <label for="nota-textarea" class="sr-only">Escribe tu nota</label>
        <textarea
          id="nota-textarea"
          bind:value={newNoteText}
          bind:this={formTextareaEl}
          class="w-full bg-transparent border-b border-gray-200 text-black text-xl font-light text-center focus:outline-none focus:border-black resize-none h-32 placeholder-transparent font-['Jost'] leading-normal"
          maxlength="180"
        ></textarea>

        <div class="mt-4 flex justify-between px-2 text-[9px] text-gray-400 uppercase tracking-widest font-['Jost']">
          <span aria-live="polite" aria-atomic="true">{newNoteText.length}/180 caracteres</span>
          {#if newNoteText.length > 0 && newNoteText.length < 40}
             <span class="text-red-400">Muy corto</span>
          {/if}
        </div>

        <div class="mt-10 flex justify-center gap-12 items-center">
          <button 
            onclick={() => { showForm = false; newNoteText = ''; }}
            class="text-gray-400 uppercase tracking-widest text-[10px] border-b border-transparent hover:border-gray-300 transition-colors hover:text-gray-600"
          >
            Cancelar
          </button>
          <button 
            onclick={addNote}
            disabled={newNoteText.length < 40}
            class="bg-black text-white px-8 py-3 rounded-sm hover:bg-gray-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed uppercase tracking-[0.2em] text-[10px] shadow-lg"
          >
            Publicar
          </button>
        </div>
      </div>
    </div>
  {/if}

</section>