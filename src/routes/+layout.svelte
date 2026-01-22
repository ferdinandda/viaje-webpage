<script>
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css';

  let { children } = $props();
</script>

<svelte:head>
  <title>Revista Viaje</title>
</svelte:head>

<div class="min-h-screen flex flex-col">
  <Navigation />

  <main class="flex-1">
    {@render children()}
  </main>

  <Footer />
</div>
