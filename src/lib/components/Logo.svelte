<script>
  export let useLightNav = false;
  export let customClass = 'text-xl md:text-2xl';
</script>

<a
  href="/"
  class="group flex items-center font-semibold tracking-tight"
  style="font-family: 'Stoke', serif;"
>
  <span class="{customClass} {useLightNav ? 'text-[#D24843]' : 'text-[var(--color-ink)]'} transition-colors">
    [viaje]
  </span>
</a>
