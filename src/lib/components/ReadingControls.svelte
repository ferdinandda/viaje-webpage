<script>
  let { nightMode = $bindable(false) } = $props();
</script>

<div class="flex items-center justify-center py-6 border-b border-gray-100">
  <button
    onclick={() => nightMode = !nightMode}
    class="flex items-center gap-2 text-gray-500 hover:text-[#6b0d1e] transition-colors"
    aria-pressed={nightMode}
    aria-label="Alternar modo oscuro de lectura"
  >
    {#if nightMode}
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="4" stroke-width="1.5" />
        <path stroke-linecap="round" stroke-width="1.5" d="M12 3v1.5M12 19.5V21M4.5 12H3M21 12h-1.5M6.3 6.3l1 1M16.7 16.7l1 1M6.3 17.7l1-1M16.7 7.3l1-1" />
      </svg>
    {/if}
    <span class="text-[10px] uppercase tracking-[2px]" style="font-family: 'Inter', sans-serif; font-weight: 500;">
      {nightMode ? 'Modo claro' : 'Modo oscuro'}
    </span>
  </button>
</div>
