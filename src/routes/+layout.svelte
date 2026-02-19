<script>
  // Deploy trigger: 2026-02-19
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { page } from '$app/stores'; // Import page store
  import '../app.css';
  import { setupConvex } from "convex-svelte";
  import { client } from "$lib/convex";

  if (client) {
    setupConvex(client);
  }

  let { children } = $props();

  // Derived states to check current page
  let isHomepage = $derived($page.url.pathname === '/');
  let isNotas = $derived($page.url.pathname === '/notas');
  let isSangreTierraYSilencio = $derived($page.url.pathname === '/sangre-tierra-y-silencio');

  // Determine footer theme based on the page
  let footerTheme = $derived(isHomepage ? 'dark-red' : 'dark');
</script>

<svelte:head>
  <title>Revista Viaje</title>
</svelte:head>

<div class="min-h-screen flex flex-col">
  <Navigation />

  <main class="flex-1">
    {@render children()}
  </main>

  {#if !isNotas}
    <Footer {footerTheme} />
  {/if}
</div>
