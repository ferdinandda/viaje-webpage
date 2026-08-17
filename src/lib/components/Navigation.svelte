<script>
  import { page } from '$app/stores';
  import { onMount, onDestroy } from 'svelte';
  import { navItems } from '$lib/navItems.js';
  import { articles } from '$lib/articles.js';
  import Logo from '$lib/components/Logo.svelte';
  import { readerModeActive } from '$lib/stores';

  let { autoHide = false } = $props();

  let mobileMenuOpen = $state(false);
  let scrollY = $state(0);
  let lastScrollY = $state(0);
  let hiddenByScroll = $state(false);
  let searchOpen = $state(false);
  let searchQuery = $state('');
  let mouseNearTop = $state(false);

  let isHomepage = $derived($page.url.pathname === '/');
  // Essay pages get a hide-on-scroll-down header so the reading hero isn't interrupted.
  let isEssayPage = $derived(
    $page.url.pathname.startsWith('/ensayos/') ||
    articles.some(article => article.href === $page.url.pathname)
  );

  let useBlackBg = $derived(!isHomepage);
  let useLightNav = $derived(false);

  let scrolled = $derived(scrollY > 20);
  // Fades from 0.7 to 0.25 opacity the further the page scrolls, instead of a fixed value.
  let scrolledOpacity = $derived(0.7 - Math.min(1, Math.max(0, (scrollY - 20) / 500)) * 0.45);

  let shouldShow = $derived(!autoHide || mouseNearTop || mobileMenuOpen || searchOpen);
  let hiddenByEssayScroll = $derived(isEssayPage && hiddenByScroll && !mobileMenuOpen && !searchOpen);

  $effect(() => {
    // Reset the scroll-hide state whenever the route changes.
    $page.url.pathname;
    hiddenByScroll = false;
    lastScrollY = 0;
  });

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
      const currentY = window.scrollY;
      if (isEssayPage) {
        if (currentY > lastScrollY && currentY > 100) {
          hiddenByScroll = true;
        } else if (currentY < lastScrollY) {
          hiddenByScroll = false;
        }
      }
      lastScrollY = currentY;
      scrollY = currentY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  $effect(() => {
    if (!autoHide) return;
    const handleMouseMove = (e) => {
        mouseNearTop = e.clientY < 100;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
  class="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out will-change-transform
         {scrolled ? 'backdrop-blur-md shadow-sm' : (isHomepage ? 'bg-transparent' : 'bg-[#e5e5e5]')}
         {(autoHide && !shouldShow) || hiddenByEssayScroll ? '-translate-y-full' : 'translate-y-0'}"
  style={scrolled ? `background-color: rgba(229, 229, 229, ${scrolledOpacity});` : ''}
>
    <nav class="mx-auto max-w-7xl px-[var(--spacing-editorial)] md:px-8 lg:px-12">
      
      <!-- Desktop Layout -->
      <div class="hidden md:flex items-center justify-between h-20 md:h-24">
        <div class="flex-1"></div>

        <!-- Navigation Links (Centered) -->
        <ul class="flex items-center gap-6 lg:gap-8 justify-center">
          {#each navItems as item}
            <li>
              <a
                href={item.href}
                style="font-family: 'Inter', sans-serif; font-weight: 400;"
                class="relative text-xs tracking-widest uppercase transition-colors duration-300
                       {useLightNav ? 'text-white' : 'text-black opacity-70 hover:opacity-100'}"
              >
                {item.label}
                {#if $page.url.pathname === item.href}
                  <span class="absolute -bottom-1 left-0 right-0 h-px {useLightNav ? 'bg-white' : 'bg-black'}"></span>
                {/if}
              </a>
            </li>
          {/each}
        </ul>

        <!-- Search + Instagram (Right aligned) -->
        <div class="flex-1 flex justify-end items-center gap-4">
          <a href="https://www.instagram.com/revistaviajecl/" target="_blank" rel="noopener noreferrer" class="text-black opacity-70 hover:opacity-100 transition-colors" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="mailto:viajerevista@gmail.com" class="text-black opacity-70 hover:opacity-100 transition-colors" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <button onclick={toggleSearch} class="text-black opacity-70 hover:opacity-100 transition-colors" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
  
      <!-- Mobile Layout -->    
      <div class="md:hidden flex items-center justify-between h-20">
        <div class="flex-1"></div>
        
        <div class="flex items-center gap-4">
          <a href="https://www.instagram.com/revistaviajecl/" target="_blank" rel="noopener noreferrer" class="p-2 text-black opacity-70" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="mailto:viajerevista@gmail.com" class="p-2 text-black opacity-70" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <button onclick={toggleSearch} class="p-2 text-black opacity-70" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <button onclick={toggleMobileMenu} class="p-2 -mr-2 text-black opacity-70" aria-label="Toggle menu">
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
        <div class="md:hidden absolute top-full left-0 right-0 bg-black border-b border-[var(--color-rule)] animate-in slide-in-from-top-2 duration-200">
          <ul class="py-6 px-[var(--spacing-editorial)] space-y-4">
            {#each navItems as item}
              <li>
                <a href={item.href} onclick={closeMobileMenu} style="font-family: 'Inter', sans-serif; font-weight: 400;" class="block text-base tracking-wide {($page.url.pathname === item.href ? 'text-white' : 'text-white/70 hover:text-white')}">
                  {item.label}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/if}
  </nav>
</header>

<!-- Search Overlay (Same as before) -->
{#if searchOpen}
  <div class="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300">
    <button onclick={toggleSearch} class="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-default" aria-label="Close search"></button>
    <div class="relative w-full max-w-2xl bg-white/95 backdrop-blur-md shadow-2xl p-8 md:p-12 rounded-lg transform animate-in slide-in-from-bottom-4 duration-300">
      <button onclick={toggleSearch} class="absolute top-4 right-4 text-gray-400 hover:text-[#D1D1D1] transition-colors" aria-label="Close search">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div class="space-y-8">
        <input id="searchInput" type="text" bind:value={searchQuery} placeholder="Buscar ensayo o autor..." class="w-full bg-transparent border-b border-gray-200 text-2xl md:text-3xl font-['Jost'] pb-2 focus:outline-none focus:border-[#D1D1D1] placeholder-gray-400 text-gray-800" autocomplete="off" />
        <div class="space-y-6 overflow-y-auto max-h-[40vh] pr-2 custom-scrollbar">
          {#each searchResults as result}
            <a href={result.href} onclick={toggleSearch} class="block group">
              <h3 class="text-xl text-gray-800 group-hover:text-[#D1D1D1] transition-colors font-['Jost'] font-bold leading-tight">{result.title}</h3>
              <p class="text-sm text-gray-500 font-['Stoke Light'] group-hover:text-gray-800 transition-colors mt-1">{result.author}</p>
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
