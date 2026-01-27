<script>
  import { page } from '$app/stores';
  import { onMount, onDestroy } from 'svelte';
  import { navItems } from '$lib/navItems.js';
  import { articles } from '$lib/articles.js';
  import Logo from '$lib/components/Logo.svelte';
  import { readerModeActive } from '$lib/stores';

  let mobileMenuOpen = $state(false);
  let scrolled = $state(false);
  let searchOpen = $state(false);
  let searchQuery = $state('');

  let isHomepage = $derived($page.url.pathname === '/');
  let isSangreTierraYSilencio = $derived($page.url.pathname === '/sangre-tierra-y-silencio');

  let useBlackBg = $derived(isSangreTierraYSilencio || !isHomepage);
  let useLightNav = $derived(false);

  let searchResults = $derived(
    searchQuery.length < 2 
      ? [] 
      : articles.filter(article => 
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          article.author.toLowerCase().includes(searchQuery.toLowerCase())
        )
  );

  $effect(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 20;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }

  function toggleSearch() {
    searchOpen = !searchOpen;
    if (searchOpen) {
      setTimeout(() => document.getElementById('searchInput')?.focus(), 100);
    } else {
      searchQuery = '';
    }
  }
</script>

{#if !$readerModeActive}
<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out {isHomepage ? (scrolled ? 'bg-[#D24843]/70 backdrop-blur-md shadow-sm' : 'bg-transparent') : (scrolled ? 'bg-[#D24843]/70 backdrop-blur-md shadow-sm' : 'bg-[#D24843]')}"
>
    <nav class="mx-auto max-w-7xl px-[var(--spacing-editorial)] md:px-8 lg:px-12">
      
      <!-- Desktop Layout -->
      {#if isHomepage}
        <!-- Homepage Layout (Original Row) -->
        <div class="hidden md:flex items-center justify-between h-20 md:h-24">
          <Logo {useLightNav} />
          <ul class="flex items-center gap-6 lg:gap-8">
            {#each navItems as item}
              <li>
                <a
                  href={item.href}
                  style="font-family: 'Jost', sans-serif;"
                  class="relative text-sm tracking-wide uppercase transition-colors duration-300
                         {useLightNav
                           ? ($page.url.pathname === item.href ? 'text-white' : 'text-white/70 hover:text-white')
                           : ($page.url.pathname === item.href ? 'text-[var(--color-ink)]' : 'text-[var(--color-ink-light)] hover:text-[var(--color-ink)]')}"
                >
                  {item.label}
                  {#if $page.url.pathname === item.href}
                    <span class="absolute -bottom-1 left-0 right-0 h-px {useLightNav ? 'bg-white' : 'bg-[var(--color-terracotta)]'}"></span>
                  {/if}
                </a>
              </li>
            {/each}
            <!-- Search Icon Desktop Row -->
            <li>
              <button onclick={toggleSearch} class="hover:text-white transition-colors" aria-label="Search">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      {:else}
        <!-- Other Pages Layout (Stacked) -->
        <div class="hidden md:flex flex-col items-center justify-center py-6">
          <div class="mb-4">
            <Logo {useLightNav} customClass="text-5xl" />
          </div>
          <ul class="flex items-center gap-8">
            {#each navItems as item}
              <li>
                <a
                  href={item.href}
                  style="font-family: 'Jost', sans-serif;"
                  class="relative text-xs tracking-widest uppercase transition-colors duration-300
                         {useLightNav
                           ? ($page.url.pathname === item.href ? 'text-white' : 'text-white/70 hover:text-white')
                           : ($page.url.pathname === item.href ? 'text-[var(--color-ink)]' : 'text-[var(--color-ink-light)] hover:text-[var(--color-ink)]')}"
                >
                  {item.label}
                  {#if $page.url.pathname === item.href}
                    <span class="absolute -bottom-1 left-0 right-0 h-px {useLightNav ? 'bg-white' : 'bg-[var(--color-terracotta)]'}"></span>
                  {/if}
                </a>
              </li>
            {/each}
            <!-- Search Icon Desktop Stacked -->
            <li>
              <button onclick={toggleSearch} class="hover:text-white transition-colors" aria-label="Search">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      {/if}
  
      <!-- Mobile Layout (Row) -->    
      <div class="md:hidden flex items-center justify-between h-20">
      <Logo {useLightNav} customClass="text-2xl" />
      
      <div class="flex items-center gap-4">
        <!-- Search Icon Mobile -->
        <button onclick={toggleSearch} class="p-2 transition-colors" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        <!-- Mobile Menu Button -->
        <button
          onclick={toggleMobileMenu}
          class="p-2 -mr-2 transition-colors
                 {useLightNav ? 'text-white/70 hover:text-white' : 'text-[var(--color-ink-light)] hover:text-[var(--color-ink)]'}"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {#if mobileMenuOpen}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
            {:else}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
            {/if}
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    {#if mobileMenuOpen}
      <div
        class="md:hidden absolute top-full left-0 right-0 bg-black border-b border-[var(--color-rule)]
               animate-in slide-in-from-top-2 duration-200"
      >
        <ul class="py-6 px-[var(--spacing-editorial)] space-y-4">
          {#each navItems as item}
            <li>
              <a
                href={item.href}
                onclick={closeMobileMenu}
                style="font-family: 'Jost', sans-serif;"
                class="block text-base tracking-wide {($page.url.pathname === item.href ? 'text-white' : 'text-white/70 hover:text-white')}"
              >
                {item.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
  </nav>
</header>

<!-- Search Overlay -->
{#if searchOpen}
  <div class="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300">
    <!-- Translucent Backdrop -->
    <button 
      onclick={toggleSearch} 
      class="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-default"
      aria-label="Close search"
    ></button>

    <!-- Search Modal -->
    <div class="relative w-full max-w-2xl bg-white/95 backdrop-blur-md shadow-2xl p-8 md:p-12 rounded-lg transform animate-in slide-in-from-bottom-4 duration-300">
      <button 
        onclick={toggleSearch} 
        class="absolute top-4 right-4 text-gray-400 hover:text-[#D24843] transition-colors"
        aria-label="Close search"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div class="space-y-8">
        <input
          id="searchInput"
          type="text"
          bind:value={searchQuery}
          placeholder="Buscar ensayo o autor..."
          class="w-full bg-transparent border-b border-gray-200 text-2xl md:text-3xl font-['Jost'] pb-2 focus:outline-none focus:border-[#D24843] placeholder-gray-400 text-gray-800"
          autocomplete="off"
        />

        <div class="space-y-6 overflow-y-auto max-h-[40vh] pr-2 custom-scrollbar">
          {#each searchResults as result}
            <a 
              href={result.href} 
              onclick={toggleSearch}
              class="block group"
            >
              <h3 class="text-xl text-gray-800 group-hover:text-[#D24843] transition-colors font-['Jost'] font-bold leading-tight">
                {result.title}
              </h3>
              <p class="text-sm text-gray-500 font-['Stoke Light'] group-hover:text-gray-800 transition-colors mt-1">
                {result.author}
              </p>
            </a>
          {:else}
            {#if searchQuery.length >= 2}
              <p class="text-gray-400 font-['Jost'] italic">No se encontraron resultados.</p>
            {/if}
          {/each}
        </div>
      </div>
    </div>
  </div>
{/if}
{/if}
