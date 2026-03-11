<script>
  import { articles } from '$lib/articles.js';
  // Use the latest 3 articles (or fewer if not enough)
  let tabs = articles.slice(0, 3);
</script>

<div class="p-4 max-w-7xl mx-auto">
  <h2 class="text-5xl md:text-7xl text-center mb-16 text-[var(--color-ink)] leading-none uppercase tracking-tight" style="font-family: 'Bebas Neue', sans-serif;">Últimas Publicaciones</h2>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {#each tabs as tab}
      <a
        href={tab.href}
        class="group block bg-[#f0f0f0] transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col border border-gray-300"
      >
        <!-- Image Container -->
        <div class="relative h-64 overflow-hidden">
          <img 
            src={tab.img} 
            alt="Image for {tab.title.replace(/<[^>]*>?/gm, '')}" 
            class="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105 color-eink-filter" 
          />
        </div>
...
<style>
  .color-eink-filter {
    filter: sepia(0.1) saturate(0.7) contrast(1.1) brightness(1.05);
    /* Subtle dithering overlay simulated by a pseudo-element if possible, 
       but here we use CSS filters for the e-ink look */
  }
  
  /* Adding a real dithering pattern overlay */
  .relative::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 2 2%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Crect width=%221%22 height=%221%22 fill=%22rgba(0,0,0,0.05)%22/%3E%3C/svg%3E');
    background-size: 2px 2px;
    pointer-events: none;
    opacity: 0.4;
  }
</style>
        
        <!-- Content Container -->
        <div class="p-8 flex flex-col flex-grow justify-between text-center">
          <div>
            <h3 class="text-2xl font-normal uppercase text-[var(--color-ink)] leading-[1.1] tracking-tight mb-4" style="font-family: 'Bebas Neue', sans-serif;">
              {@html tab.title}
            </h3>
            <div class="w-8 h-px bg-[var(--color-ink)] mx-auto mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <p class="text-[var(--color-ink-muted)] text-xs uppercase tracking-widest mt-auto" style="font-family: 'Stoke Light', serif;">
            {tab.author}
          </p>
        </div>
      </a>
    {/each}
  </div>
</div>
