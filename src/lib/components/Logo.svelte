<script>
  let { useLightNav = false, customClass = 'text-xl md:text-2xl' } = $props();
</script>

<a
  href="/"
  class="group flex items-center font-semibold tracking-tight"
  style="font-family: 'Stoke', serif;"
>
  <span class="{customClass} {useLightNav ? 'text-[#9C9C9C]' : 'text-[var(--color-ink)]'} transition-colors">
    [viaje]
  </span>
</a>
