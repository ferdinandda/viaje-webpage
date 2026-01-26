<script>
  import { navItems } from '$lib/navItems.js';
  import Logo from '$lib/components/Logo.svelte';
  const currentYear = new Date().getFullYear();
  let { footerTheme = 'light' } = $props(); // 'light', 'dark', or 'dark-red'
</script>

<footer class="border-t {footerTheme === 'dark'
  ? 'border-white/20 bg-black text-white'
  : (footerTheme === 'dark-red'
    ? 'border-white/20 bg-[#8B0000]'
    : 'border-[var(--color-rule)] bg-[var(--color-paper)]')}">
  <div class="mx-auto max-w-7xl px-[var(--spacing-editorial)] md:px-8 lg:px-12 py-16 md:py-20">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
      <!-- Brand -->
      <div class="space-y-4">
        <Logo useLightNav={footerTheme.startsWith('dark')} />
        <p class="font-[var(--font-display)] {footerTheme.startsWith('dark') ? 'text-white/70' : 'text-[var(--color-ink-muted)]'} text-base italic leading-relaxed max-w-xs">
          Revista de Ensayo y creación
        </p>
      </div>

      <!-- Secciones -->
      <div class="space-y-4">
        <h4 class="font-[var(--font-body)] text-xs uppercase tracking-widest {footerTheme.startsWith('dark') ? 'text-white' : 'text-[var(--color-ink-muted)]'}">
          Secciones
        </h4>
        <ul class="space-y-2">
          {#each navItems as item}
            <li><a href={item.href} class="{footerTheme.startsWith('dark') ? 'text-white/80' : 'text-[var(--color-ink-light)]'} hover:text-[var(--color-terracotta)] transition-colors">{item.label}</a></li>
          {/each}
        </ul>
      </div>

<!-- Contact -->
      <div class="space-y-4">
        <h4 class="font-[var(--font-body)] text-xs uppercase tracking-widest {footerTheme.startsWith('dark') ? 'text-white' : 'text-[var(--color-ink-muted)]'}">
          Contacto
        </h4>
        <p class="{footerTheme.startsWith('dark') ? 'text-white/80' : 'text-[var(--color-ink-light)]'}">
          <a href="mailto:viajerevista@gmail.com" class="hover:text-[var(--color-terracotta)] transition-colors">
            viajerevista@gmail.com
          </a>
        </p>
        <p class="{footerTheme.startsWith('dark') ? 'text-white/80' : 'text-[var(--color-ink-light)]'}">
          <a href="https://www.instagram.com/revistaviajecl/" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--color-terracotta)] transition-colors">
            Instagram
          </a>
        </p>
        <p class="text-sm {footerTheme.startsWith('dark') ? 'text-white/70' : 'text-[var(--color-ink-muted)]'}">
          Tarapacá, Chile
        </p>
        <p class="text-sm {footerTheme.startsWith('dark') ? 'text-white/70' : 'text-[var(--color-ink-muted)]'}">
          Valparaíso, Chile
        </p>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="mt-16 pt-8 border-t {footerTheme.startsWith('dark') ? 'border-white/30' : 'border-[var(--color-rule-light)]'}">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm {footerTheme.startsWith('dark') ? 'text-white/70' : 'text-[var(--color-ink-muted)]'}">
          &copy; {currentYear} Revista Viaje. Todos los derechos reservados.
        </p>

      </div>
    </div>
  </div>
</footer>
