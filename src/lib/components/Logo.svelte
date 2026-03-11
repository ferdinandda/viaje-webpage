<script>
  let { useLightNav = false, customClass = 'text-xl md:text-2xl' } = $props();
</script>

<a
  href="/"
  class="group flex items-center font-semibold tracking-tight"
  style="font-family: 'Stoke', serif;"
>
  <span class="{customClass} {useLightNav ? 'text-[#D4A5A2]' : 'text-[var(--color-ink)]'} transition-colors">
    [viaje]
  </span>
</a>
