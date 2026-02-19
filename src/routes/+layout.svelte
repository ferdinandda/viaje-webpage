<script>
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { page } from '$app/stores'; // Import page store
  import '../app.css';

  let { children } = $props();

  // Derived states to check current page
  let isHomepage = $derived($page.url.pathname === '/');
  let isPostIt = $derived($page.url.pathname === '/post-it');
  let isSangreTierraYSilencio = $derived($page.url.pathname === '/sangre-tierra-y-silencio');

  // Determine footer theme based on the page
  let footerTheme = $derived(isHomepage ? 'dark-red' : 'dark');
</script>

<svelte:head>
  <title>Revista Viaje</title>
</svelte:head>

<div class="min-h-screen flex flex-col">
  {#if !isPostIt}
    <Navigation />
  {/if}

  <main class="flex-1">
    {@render children()}
  </main>

  {#if !isPostIt}
    <Footer {footerTheme} />
  {/if}
</div>
