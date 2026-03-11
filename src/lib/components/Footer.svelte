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
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
      <!-- Brand -->
      <div class="flex flex-col items-start gap-4">
        <Logo useLightNav={true} />
        <p class="font-[var(--font-display)] text-[#9C9C9C]/70 text-base italic leading-relaxed">
          Revista de Ensayo y Creación
        </p>
      </div>

      <!-- Secciones -->
      <div class="flex flex-col items-start gap-4">
        <h4 class="font-bold text-xs uppercase tracking-widest text-[#9C9C9C]">
          Secciones
        </h4>
        <ul class="space-y-2">
          {#each navItems as item}
            <li><a href={item.href} class="text-[#9C9C9C]/80 hover:text-white transition-colors">{item.label}</a></li>
          {/each}
        </ul>
      </div>

<!-- Contact -->
      <div class="flex flex-col items-start gap-4">
        <h4 class="font-bold text-xs uppercase tracking-widest text-[#9C9C9C]">
          Contacto
        </h4>
        <div class="space-y-1">
          <p class="text-[#9C9C9C]/80">
            <a href="mailto:viajerevista@gmail.com" class="hover:text-white transition-colors">
              viajerevista@gmail.com
            </a>
          </p>
          <p class="text-[#9C9C9C]/80">
            <a href="https://www.instagram.com/revistaviajecl/" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">
              Instagram
            </a>
          </p>
        </div>
        <div class="space-y-1 mt-2">
          <p class="text-sm text-[#9C9C9C]/70">
            Tarapacá, Chile
          </p>
          <p class="text-sm text-[#9C9C9C]/70">
            Valparaíso, Chile
          </p>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="mt-16 pt-8 border-t border-white/10">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-[#9C9C9C]/70">
          &copy; {currentYear} Revista Viaje. Todos los derechos reservados.
        </p>

      </div>
    </div>
  </div>
</footer>
