<script>
  import { page } from '$app/stores';
  import { onMount, onDestroy } from 'svelte';

  let mobileMenuOpen = $state(false);
  let scrolled = $state(false);

    const navItems = [

      { href: '/', label: 'Inicio' },

      { href: '/ensayistas', label: 'Autores Cardinales' },

      { href: '/derivas-del-hoy', label: 'Derivas del Hoy' },

      { href: '/equipo', label: 'Equipo' },

      { href: '/convocatoria', label: 'Convocatoria' }

    ];

  let isHomepage = $derived($page.url.pathname === '/');
  let isSangreTierraYSilencio = $derived($page.url.pathname === '/sangre-tierra-y-silencio');

  let useLightNav = $derived((isHomepage && !scrolled) || isSangreTierraYSilencio);

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
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
         {isSangreTierraYSilencio
           ? 'bg-black'
           : (isHomepage && !scrolled
               ? 'bg-[#8B0000]'
               : 'bg-[var(--color-cream)]/95 backdrop-blur-sm border-b border-[var(--color-rule)]')}"
>
  <nav class="mx-auto max-w-7xl px-[var(--spacing-editorial)] md:px-8 lg:px-12">
    <div class="flex items-center justify-between h-20 md:h-24">
      <!-- Logo -->
      <a
        href="/"
        class="group flex items-baseline gap-0.5 font-[var(--font-display)] text-xl md:text-2xl font-semibold tracking-tight"
        onclick={closeMobileMenu}
      >
        <span class="{useLightNav ? 'text-white' : 'text-[var(--color-ink-muted)]'} transition-colors group-hover:text-[var(--color-terracotta)]">[</span>
        <span class="{useLightNav ? 'text-white' : 'text-[var(--color-ink)]'} transition-colors">Viaje</span>
        <span class="{useLightNav ? 'text-white' : 'text-[var(--color-ink-muted)]'} transition-colors group-hover:text-[var(--color-terracotta)]">]</span>
      </a>

      <!-- Desktop Navigation -->
      <ul class="hidden md:flex items-center gap-6 lg:gap-8">
        {#each navItems as item}
          <li>
            <a
              href={item.href}
              class="relative font-[var(--font-body)] text-sm tracking-wide uppercase transition-colors duration-300
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
      </ul>

      <!-- Mobile Menu Button -->
      <button
        onclick={toggleMobileMenu}
        class="md:hidden p-2 -mr-2 transition-colors
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

    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
      <div
        class="md:hidden absolute top-full left-0 right-0 {useLightNav ? 'bg-black' : 'bg-[var(--color-cream)]'} border-b border-[var(--color-rule)]
               animate-in slide-in-from-top-2 duration-200"
      >
        <ul class="py-6 px-[var(--spacing-editorial)] space-y-4">
          {#each navItems as item}
                        <li>
              <a
                href={item.href}
                onclick={closeMobileMenu}
                class="block font-[var(--font-body)] text-base tracking-wide {useLightNav
                         ? ($page.url.pathname === item.href ? 'text-white' : 'text-white/70 hover:text-white')
                         : 'text-[var(--color-ink-light)] hover:text-[var(--color-ink)] transition-colors ' + ($page.url.pathname === item.href ? 'text-[var(--color-ink)] font-medium' : '')}"
              >
                {item.label}
              </a>
            </li>          {/each}
        </ul>
      </div>
    {/if}
  </nav>
</header>
