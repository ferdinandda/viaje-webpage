<script>
  import { articles } from '$lib/articles.js';
  // Use the latest 3 articles (or fewer if not enough)
  let tabs = articles.slice(0, 3);
</script>

<div class="p-4 max-w-7xl mx-auto">
  <h2 class="text-3xl md:text-5xl text-center mb-16 text-[var(--color-ink)] leading-none" style="font-family: 'Stoke', serif;">Últimas Publicaciones</h2>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {#each tabs as tab}
      <a
        href={tab.href}
        class="group block bg-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col border border-gray-200"
      >
        <!-- Image Container -->
        <div class="relative h-64 overflow-hidden">
          <img 
            src={tab.img} 
            alt="Image for {tab.title.replace(/<[^>]*>?/gm, '')}" 
            class="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" 
          />
        </div>
        
        <!-- Content Container -->
        <div class="p-8 flex flex-col flex-grow justify-between text-center">
          <div>
            <h3 class="font-bold text-lg uppercase text-[var(--color-ink)] leading-tight tracking-wide mb-4" style="font-family: 'Jost', sans-serif;">
              {@html tab.title}
            </h3>
            <div class="w-8 h-px bg-[#D24843] mx-auto mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <p class="text-[var(--color-ink-muted)] text-sm mt-auto" style="font-family: 'Stoke Light', serif;">
            {tab.author}
          </p>
        </div>
      </a>
    {/each}
  </div>
</div>
