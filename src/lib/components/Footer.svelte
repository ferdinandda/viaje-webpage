<script>
  const currentYear = new Date().getFullYear();
  let { footerTheme = 'light' } = $props(); // 'light', 'dark', or 'dark-red'
</script>

<footer class="border-t {footerTheme === 'dark'
  ? 'border-white/20 bg-black text-white'
  : (footerTheme === 'dark-red'
    ? 'border-white/20 bg-[#8B0000] text-white'
    : 'border-[var(--color-rule)] bg-[var(--color-paper)]')}">
  <div class="mx-auto max-w-7xl px-[var(--spacing-editorial)] md:px-8 lg:px-12 py-16 md:py-20">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
      <!-- Brand -->
      <div class="space-y-4">
        <a href="/" class="inline-flex items-baseline gap-0.5 font-[var(--font-display)] text-2xl font-semibold tracking-tight">
          <span class="{footerTheme.startsWith('dark') ? 'text-white/60' : 'text-[var(--color-ink-muted)]'}">[</span>
          <span class="{footerTheme.startsWith('dark') ? 'text-white' : 'text-[var(--color-ink)]'}">Viaje</span>
          <span class="{footerTheme.startsWith('dark') ? 'text-white/60' : 'text-[var(--color-ink-muted)]'}">]</span>
        </a>
        <p class="font-[var(--font-display)] {footerTheme.startsWith('dark') ? 'text-white/70' : 'text-[var(--color-ink-muted)]'} text-base italic leading-relaxed max-w-xs">
          Revista digital de ensayos
        </p>
      </div>

      <!-- Secciones -->
      <div class="space-y-4">
        <h4 class="font-[var(--font-body)] text-xs uppercase tracking-widest {footerTheme.startsWith('dark') ? 'text-white' : 'text-[var(--color-ink-muted)]'}">
          Secciones
        </h4>
        <ul class="space-y-2">
          <li><a href="/ensayos" class="{footerTheme.startsWith('dark') ? 'text-white/80' : 'text-[var(--color-ink-light)]'} hover:text-[var(--color-terracotta)] transition-colors">Ensayos</a></li>
        </ul>
      </div>

      <!-- Revista -->
      <div class="space-y-4">
        <h4 class="font-[var(--font-body)] text-xs uppercase tracking-widest {footerTheme.startsWith('dark') ? 'text-white' : 'text-[var(--color-ink-muted)]'}">
          Revista
        </h4>
        <ul class="space-y-2">
          <li><a href="/equipo" class="{footerTheme.startsWith('dark') ? 'text-white/80' : 'text-[var(--color-ink-light)]'} hover:text-[var(--color-terracotta)] transition-colors">Equipo Editorial</a></li>
          <li><a href="/convocatoria" class="{footerTheme.startsWith('dark') ? 'text-white/80' : 'text-[var(--color-ink-light)]'} hover:text-[var(--color-terracotta)] transition-colors">Convocatoria 2026</a></li>
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
        <p class="text-sm {footerTheme.startsWith('dark') ? 'text-white/70' : 'text-[var(--color-ink-muted)]'}">
          Santiago, Chile
        </p>
        <p class="text-sm {footerTheme.startsWith('dark') ? 'text-white/70' : 'text-[var(--color-ink-muted)]'}">
          Publicación trimestral
        </p>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="mt-16 pt-8 border-t {footerTheme.startsWith('dark') ? 'border-white/30' : 'border-[var(--color-rule-light)]'}">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm {footerTheme.startsWith('dark') ? 'text-white/70' : 'text-[var(--color-ink-muted)]'}">
          &copy; {currentYear} Revista Viaje. Todos los derechos reservados.
        </p>
        <p class="text-xs {footerTheme.startsWith('dark') ? 'text-white/70' : 'text-[var(--color-ink-muted)]'} font-[var(--font-display)] italic">
          ISSN 0000-0000
        </p>
      </div>
    </div>
  </div>
</footer>
