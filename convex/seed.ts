import { mutation } from "./_generated/server";

export default mutation({
  handler: async (ctx) => {
    const essays = [
      {
        title: "Cuando la sangre toca la tierra: el doble vínculo de la mujer",
        author: "Florencia Leiva Silva",
        slug: "sangre-tierra-y-silencio",
        category: "Feminismos",
        image: "/Carrieee.jpg",
        date: "Enero, 2025",
        readingTime: "8 min de lectura",
        content: `
          <h2 class="text-xl font-bold mb-6 text-left" style="font-family: 'Advent_Pro', sans-serif;">La Venus de Willendorf</h2>
          <p class="mb-4">La matriz es el órgano interno de reproducción de las hembras de los animales vivíparos en el que se desarrolla el feto. Es también el molde o la entidad principal, generadora de otras...</p>
          <!-- Contenido truncado para brevedad en el seed, pero el archivo original se mantiene completo en el repositorio -->
        `,
        references: [
          "Bachofen, Johann Jakob. El matriarcado...",
          "Borunda, Alejandra. “How Tampons and Pads Became So Unsustainable.” National Geographic, 2019.",
          // ... rest of references
        ]
      },
      {
        title: "Rosalía dijo “Mi jettu 'nt'a lu nenti, Prima d'abbruciarmi”",
        author: "Luna Jadue",
        slug: "saoko-papi-saoco",
        category: "Música y Cultura",
        image: "/mqdefault.jpg",
        date: "Abril, 2026",
        readingTime: "10 min de lectura",
        content: `
          <p class="mb-6 italic text-gray-600">Rosalía dijo "Mi jettu 'nt'a lu nenti, Prima d'abbruciarmi"</p>
          <p class="mb-6">"¿Chica, qué dice?" podríamos devolverle la pregunta con que parte SAOKO a Rosalía luego de escuchar su último álbum LUX...</p>
          <!-- El contenido completo se insertaría aquí -->
        `,
        references: [
          "ROSALÍA. «SAOKO.» 2022",
          "Wisin y Daddy Yankee. «Saoco.» 2004",
          "Augustin, Kevin Perromat. El plagio en las literaturas hispánicas...",
          "Maurel-Indart, Hélène. Sobre el plagio. 2014",
          "Palao, Alberto. Los 40. 2021"
        ]
      }
    ];

    for (const essay of essays) {
      const existing = await ctx.db
        .query("essays")
        .withIndex("by_slug", (q) => q.eq("slug", essay.slug))
        .unique();
      
      if (!existing) {
        await ctx.db.insert("essays", essay);
      }
    }
  },
});
