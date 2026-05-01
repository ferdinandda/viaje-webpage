<script>
  import { navItems } from '$lib/navItems.js';
  import Logo from '$lib/components/Logo.svelte';
  const currentYear = new Date().getFullYear();
  let { footerTheme = 'light' } = $props(); // 'light', 'dark', or 'dark-red'
</script>

<footer class="border-t border-white/10 bg-[#1C1C1C] text-[#9C9C9C]"
  style="font-family: 'Jost', sans-serif;"
>
  <div class="mx-auto max-w-7xl px-[var(--spacing-editorial)] md:px-8 lg:px-12 py-16 md:py-20">
    <!-- Logo centrado -->
    <div class="flex flex-col items-center gap-2 mb-16">
      <Logo useLightNav={true} />
      <p class="font-[var(--font-display)] text-[#9C9C9C]/70 text-base italic leading-relaxed">
        Revista de Ensayo y Creación
      </p>
    </div>

<!-- Bottom bar -->
    <div class="mt-16 pt-8 border-t border-white/10">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-[#9C9C9C]/70">
          &copy; {currentYear} Revista Viaje.
        </p>

      </div>
    </div>
  </div>
</footer>
