<script>
  export let useLightNav = false;
</script>

<a
  href="/"
  class="group flex flex-col items-center gap-0.5 font-[var(--font-display)] font-semibold tracking-tight"
>
  <!-- Paper airplane icon -->
  <svg
    class="w-6 h-6 transform -rotate-15 transition-all duration-300 group-hover:rotate-0"
    viewBox="0 0 100 40"
    fill={useLightNav ? 'white' : '#000080'}
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon points="0,20 100,0 90,20 100,40" />
  </svg>

  <span class="text-xl md:text-2xl {useLightNav ? 'text-white' : 'text-[var(--color-ink)]'} transition-colors">Viaje</span>
</a>
