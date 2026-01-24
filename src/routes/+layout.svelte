<script>
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { page } from '$app/stores'; // Import page store
  import '../app.css';

  let { children } = $props();

  // Derived states to check current page
  let isHomepage = $derived($page.url.pathname === '/');
  let isSangreTierraYSilencio = $derived($page.url.pathname === '/sangre-tierra-y-silencio');

  // Determine footer theme based on the page
  let footerTheme = $derived(isSangreTierraYSilencio ? 'dark' : (isHomepage ? 'dark-red' : 'light'));
</script>

<svelte:head>
  <title>Revista Viaje</title>
</svelte:head>

<div class="min-h-screen flex flex-col">
  <Navigation />

  <main class="flex-1">
    {@render children()}
  </main>

  <Footer {footerTheme} />
</div>
