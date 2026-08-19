/* ============================================================================
   BELUM · DATOS DEL MENÚ
   ----------------------------------------------------------------------------
   Este es el ÚNICO archivo que necesitas tocar para actualizar el menú.

   PARA CAMBIAR UN PRECIO  → edita "precio": "$65"
   PARA CAMBIAR UN TEXTO   → edita "nombre" o "desc"
   PARA AGREGAR UNA FOTO   → sube el archivo a assets/img/ y escribe
                             "img": "assets/img/tu-foto.webp"
   PARA QUITAR UNA FOTO    → deja "img": null  (la tarjeta se ve igual de bien)
   PARA AGREGAR UN PLATILLO→ copia un bloque { ... } completo y edítalo
   PARA BORRAR UN PLATILLO → borra su bloque { ... } completo

   ETIQUETAS disponibles: "Nuevo"
   (solo se usan cuando el menú original las marca; no inventes etiquetas)
   ========================================================================== */

const BELUM = {

  /* Nombre, frase de portada, dirección, horario e Instagram
     NO viven aquí: están directamente en index.html (busca <!-- PORTADA --> y <!-- PIE -->) */

  /* Los 5 grupos del índice del menú original */
  filtros: [
    { id: "todo",        label: "Todo" },
    { id: "bebidas",     label: "Bebidas" },
    { id: "desayunos",   label: "Desayunos" },
    { id: "comidas",     label: "Comidas" },
    { id: "postres",     label: "Postres" },
    { id: "promociones", label: "Promos" }
  ],

  secciones: [

    /* ---------------------------------------------------------------- 01 */
    {
      id: "calientes-frias",
      filtro: "bebidas",
      kicker: "Bebidas",
      titulo: "Calientes y Frías",
      chip: "Calientes y frías",
      nota: "Pruébalo en presentación fría o caliente (16 oz).",
      ilustracion: "assets/img/cup-cafe.webp",
      grupos: [
        {
          titulo: "Con café",
          layout: "compacto",
          items: [
            { nombre: "Americano",          precio: "$65", img: "assets/img/americano.webp" },
            { nombre: "Capuchino",          precio: "$75", img: null },
            { nombre: "Capuchino moka",     precio: "$85", img: null },
            { nombre: "Capuchino vainilla", precio: "$85", img: null },
            { nombre: "Capuchino caramelo", precio: "$85", img: null }
          ]
        },
        {
          titulo: "Sin café",
          layout: "compacto",
          items: [
            { nombre: "Matcha latte",     precio: "$90",  img: null },
            { nombre: "Matcha ceremonial", precio: "$120", img: null },
            { nombre: "Chai latte",       precio: "$85",  img: null }
          ]
        },
        {
          titulo: "Lattes",
          layout: "compacto",
          items: [
            { nombre: "Latte",           precio: "$75", img: "assets/img/latte.webp" },
            { nombre: "Latte caramelo",  precio: "$85", img: null },
            { nombre: "Latte vainilla",  precio: "$85", img: null },
            { nombre: "Latte coco",      precio: "$85", img: null },
            { nombre: "Latte chocolate", precio: "$85", img: null },
            { nombre: "Latte lavanda",   precio: "$85", img: null },
            { nombre: "Latte canela",    precio: "$85", img: null }
          ]
        }
      ],
      extras: {
        titulo: "Leche vegetal y extras",
        items: [
          { nombre: "Almendra / Avena y linaza / Soya", precio: "$15" },
          { nombre: "Shot de café",                     precio: "$15" },
          { nombre: "Esencia extra",                    precio: "$15" }
        ]
      }
    },

    /* ---------------------------------------------------------------- 02 */
    {
      id: "frappes",
      filtro: "bebidas",
      kicker: "Bebidas",
      titulo: "Frappés",
      chip: "Frappés",
      nota: "16 oz.",
      ilustracion: "assets/img/frappe-choco.webp",
      grupos: [
        {
          titulo: "Sabores",
          layout: "compacto",
          items: [
            { nombre: "Caramel",       precio: "$110", img: "assets/img/frappe.webp" },
            { nombre: "Vainilla",      precio: "$110", img: null },
            { nombre: "Moka",          precio: "$110", img: null },
            { nombre: "Chocolate",     precio: "$110", img: null },
            { nombre: "Nutella",       precio: "$120", img: null },
            { nombre: "Matcha",        precio: "$130", img: null },
            { nombre: "Chai",          precio: "$130", img: null },
            { nombre: "Chai vainilla", precio: "$130", img: null }
          ]
        }
      ],
      extras: {
        titulo: "Leche vegetal y extras",
        items: [
          { nombre: "Almendra / Avena y linaza / Soya", precio: "$15" },
          { nombre: "Shot de café",                     precio: "$15" },
          { nombre: "Esencia extra",                    precio: "$15" }
        ]
      }
    },

    /* ---------------------------------------------------------------- 03 */
    {
      id: "licuados",
      filtro: "bebidas",
      kicker: "Bebidas",
      titulo: "Licuados",
      chip: "Licuados",
      nota: "Ch 16 oz · Gde 32 oz.",
      ilustracion: "assets/img/licuados-trio.webp",
      grupos: [
        {
          titulo: "Sabores",
          layout: "compacto",
          items: [
            { nombre: "Plátano",   img: "assets/img/licuado-platano.webp", precios: [{ label: "Ch 16 oz", precio: "$60" }, { label: "Gde 32 oz", precio: "$90" }] },
            { nombre: "Chocolate", img: null, precios: [{ label: "Ch 16 oz", precio: "$60" }, { label: "Gde 32 oz", precio: "$90" }] },
            { nombre: "Fresa",     img: null, precios: [{ label: "Ch 16 oz", precio: "$70" }, { label: "Gde 32 oz", precio: "$100" }] },
            { nombre: "Mango",     img: null, precios: [{ label: "Ch 16 oz", precio: "$70" }, { label: "Gde 32 oz", precio: "$100" }] },
            { nombre: "Maracuyá",  img: null, precios: [{ label: "Ch 16 oz", precio: "$70" }, { label: "Gde 32 oz", precio: "$100" }] },
            { nombre: "Frutos rojos", etiquetas: ["Nuevo"], img: null, precios: [{ label: "Ch 16 oz", precio: "$70" }, { label: "Gde 32 oz", precio: "$100" }] },
            { nombre: "Papaya",    img: null, precios: [{ label: "Ch 16 oz", precio: "$70" }, { label: "Gde 32 oz", precio: "$100" }] },
            { nombre: "Papaya, manzana y plátano", etiquetas: ["Nuevo"], img: null, precios: [{ label: "Ch 16 oz", precio: "$80" }, { label: "Gde 32 oz", precio: "$110" }] }
          ]
        }
      ],
      extras: {
        titulo: "Leche vegetal y extras",
        items: [
          { nombre: "Almendra / Avena y linaza", precio: "$15" },
          { nombre: "Proteína",                  precio: "$20" }
        ]
      }
    },

    /* ---------------------------------------------------------------- 04 */
    {
      id: "jugos-aguas",
      filtro: "bebidas",
      kicker: "Bebidas",
      titulo: "Jugos & Aguas Frescas",
      chip: "Jugos & aguas",
      nota: "Ch 16 oz · Gde 32 oz.",
      ilustracion: "assets/img/jugos-trio.webp",
      grupos: [
        {
          titulo: "Jugos",
          layout: "compacto",
          items: [
            { nombre: "Naranja", img: null, precios: [{ label: "Ch 16 oz", precio: "$70" }, { label: "Gde 32 oz", precio: "$100" }] },
            { nombre: "Piña",    img: null, precios: [{ label: "Ch 16 oz", precio: "$70" }, { label: "Gde 32 oz", precio: "$100" }] }
          ]
        },
        {
          titulo: "Jugos especiales",
          layout: "completo",
          items: [
            { nombre: "Energy",       desc: "Naranja, espinaca y manzana", img: null, precios: [{ label: "Ch 16 oz", precio: "$70" }, { label: "Gde 32 oz", precio: "$100" }] },
            { nombre: "Antioxidante", desc: "Fresa, piña y plátano",       img: null, precios: [{ label: "Ch 16 oz", precio: "$70" }, { label: "Gde 32 oz", precio: "$100" }] },
            { nombre: "Cerebro",      desc: "Manzana, coco, almendra y canela", img: null, precios: [{ label: "Ch 16 oz", precio: "$70" }, { label: "Gde 32 oz", precio: "$100" }] },
            { nombre: "Verde",        desc: "Apio, pepino, espinaca, manzana, piña y naranja", img: null, precios: [{ label: "Ch 16 oz", precio: "$70" }, { label: "Gde 32 oz", precio: "$100" }] }
          ]
        },
        {
          titulo: "Aguas frescas",
          layout: "compacto",
          ilustracion: "assets/img/aguas-par.webp",
          items: [
            { nombre: "Jamaica",      img: null, precios: [{ label: "Ch 16 oz", precio: "$50" }, { label: "Gde 32 oz", precio: "$70" }] },
            { nombre: "Limón",        img: null, precios: [{ label: "Ch 16 oz", precio: "$50" }, { label: "Gde 32 oz", precio: "$70" }] },
            { nombre: "Mango",        img: null, precios: [{ label: "Ch 16 oz", precio: "$55" }, { label: "Gde 32 oz", precio: "$75" }] },
            { nombre: "Pepino limón", img: null, precios: [{ label: "Ch 16 oz", precio: "$55" }, { label: "Gde 32 oz", precio: "$75" }] },
            { nombre: "Maracuyá",     img: null, precios: [{ label: "Ch 16 oz", precio: "$55" }, { label: "Gde 32 oz", precio: "$75" }] },
            { nombre: "Fresa limón",  img: null, precios: [{ label: "Ch 16 oz", precio: "$55" }, { label: "Gde 32 oz", precio: "$75" }] }
          ]
        }
      ]
    },

    /* ---------------------------------------------------------------- 05 */
    {
      id: "te",
      filtro: "bebidas",
      kicker: "Bebidas",
      titulo: "Té",
      chip: "Té",
      nota: "Infusiones de la casa. Todos nuestros tés al mismo precio: Caliente $45 · Frío $55.",
      ilustracion: "assets/img/te-par.webp",
      grupos: [
        {
          titulo: "Elige tu sabor",
          layout: "compacto",
          items: [
            { nombre: "Manzanilla – jengibre",       img: null, precios: [{ label: "Caliente", precio: "$45" }, { label: "Frío", precio: "$55" }] },
            { nombre: "Frutos rojos",                img: null, precios: [{ label: "Caliente", precio: "$45" }, { label: "Frío", precio: "$55" }] },
            { nombre: "Green energy",                img: null, precios: [{ label: "Caliente", precio: "$45" }, { label: "Frío", precio: "$55" }] },
            { nombre: "Té chai",                     img: null, precios: [{ label: "Caliente", precio: "$45" }, { label: "Frío", precio: "$55" }] },
            { nombre: "Cúrcuma, limón, manzanilla",  img: null, precios: [{ label: "Caliente", precio: "$45" }, { label: "Frío", precio: "$55" }] },
            { nombre: "Cúrcuma jengibre",            img: null, precios: [{ label: "Caliente", precio: "$45" }, { label: "Frío", precio: "$55" }] },
            { nombre: "Jengibre limón",              img: null, precios: [{ label: "Caliente", precio: "$45" }, { label: "Frío", precio: "$55" }] },
            { nombre: "Manzanilla, vainilla, miel",  img: null, precios: [{ label: "Caliente", precio: "$45" }, { label: "Frío", precio: "$55" }] }
          ]
        }
      ]
    },

    /* ---------------------------------------------------------------- 06 */
    {
      id: "desayunos",
      filtro: "desayunos",
      kicker: "Desayunos",
      titulo: "Desayunos",
      chip: "Desayunos",
      nota: "Todos acompañados de frijoles refritos y tortillas o pan tostado.",
      ilustracion: "assets/img/omelette.webp",
      grupos: [
        {
          titulo: "Huevos revueltos / estrellados",
          layout: "completo",
          items: [
            { nombre: "Huevos con jamón",      desc: "Huevos revueltos (3) con jamón.", precio: "$160", img: null },
            { nombre: "Huevos a la mexicana",  desc: "Huevos revueltos (3) con tomate, chile y cebolla.", precio: "$160", img: null },
            { nombre: "Huevos con machacado",  desc: "Huevos revueltos (3) con machacado.", precio: "$200", img: null }
          ]
        },
        {
          titulo: "Omelettes",
          layout: "completo",
          items: [
            { nombre: "Con jamón / mexicana / espinaca / queso panela / queso manchego", precio: "$160", img: "assets/img/omelette.webp" },
            { nombre: "Con machacado", precio: "$200", img: null }
          ]
        },
        {
          titulo: "Waffles & hotcakes",
          layout: "completo",
          items: [
            { nombre: "Dolce waffle",  desc: "Waffle acompañado de fresa, miel y un scoop de nieve de vainilla.", precio: "$175", img: null },
            { nombre: "Salato waffle", desc: "Waffle acompañado de jamón de pavo y queso gratinado.", precio: "$170", img: null },
            { nombre: "Hotcakes",      desc: "Hotcakes acompañados de miel, mantequilla y un scoop de nieve de vainilla.", precio: "$150", img: null },
            { nombre: "Hotcakes de Avena", etiquetas: ["Nuevo"], desc: "Suaves hotcakes de avena, acompañados de capas de plátano y fresa fresca, intercaladas con cremosa mantequilla de maní keto.", precio: "$200", img: "assets/img/hotcakes-avena.webp" }
          ]
        },
        {
          titulo: "Combos",
          layout: "completo",
          items: [
            { nombre: "Hotcakes de Avena + Protein Shake", etiquetas: ["Nuevo"], desc: "Suaves hotcakes de avena, acompañados de capas de plátano y fresa fresca, intercaladas con cremosa mantequilla de maní keto. Incluyendo nuestro delicioso licuado de frutos rojos con proteína.", precio: "$270", img: null }
          ]
        }
      ],
      extras: {
        titulo: "Ingredientes extras",
        items: [
          { nombre: "Jamón",          precio: "$20" },
          { nombre: "Pico de gallo",  precio: "$20" },
          { nombre: "Machacado",      precio: "$30" },
          { nombre: "Espinacas",      precio: "$20" },
          { nombre: "Queso panela",   precio: "$20" },
          { nombre: "Queso manchego", precio: "$20" },
          { nombre: "Aguacate",       precio: "$20" }
        ]
      }
    },

    /* ---------------------------------------------------------------- 07 */
    {
      id: "entradas-ensaladas",
      filtro: "comidas",
      kicker: "Comidas",
      titulo: "Entradas & Ensaladas",
      chip: "Entradas & ensaladas",
      nota: "",
      ilustracion: "assets/img/ensalada-bowl.webp",
      grupos: [
        {
          titulo: "Cremas & pastas",
          layout: "completo",
          items: [
            { nombre: "Crema de tomate", desc: "Crema de tomate con un toque de crema de leche por encima, acompañada de pan.", precio: "$125", img: "assets/img/crema-tomate.webp" },
            { nombre: "Tomate combo",    desc: "Crema de tomate, acompañada de un grilled cheese sandwich.", precio: "$150", img: null },
            { nombre: "Pasta pesto",     desc: "Deliciosa pasta servida con nuestra salsa pesto.", precio: "$140", img: null },
            { nombre: "Pasta con salsa de tomate", desc: "Deliciosa pasta servida con nuestra salsa de tomate.", precio: "$140", img: null }
          ]
        },
        {
          titulo: "Ensaladas",
          layout: "completo",
          items: [
            { nombre: "Ensalada Belum",    desc: "Mezcla de lechugas orgánicas, fresa, manzana, aderezo italiano y condimentos.", precio: "$140", img: "assets/img/ensalada-belum.webp" },
            { nombre: "Ensalada Santa Fe", desc: "Mezcla de lechugas orgánicas con pechuga de pollo, elote amarillo, frijoles enteros y pico de gallo hecho en casa. Coronada con tiritas de totopo crujiente y acompañada de aderezo Ranch cremoso.", precio: "$190", img: null }
          ]
        }
      ],
      extras: {
        titulo: "Extras",
        items: [
          { nombre: "Pollo",     precio: "$70" },
          { nombre: "Arrachera", precio: "$90" },
          { nombre: "Huevo",     precio: "$25" },
          { nombre: "Aguacate",  precio: "$40" }
        ]
      }
    },

    /* ---------------------------------------------------------------- 08 */
    {
      id: "chilaquiles-enchiladas",
      filtro: "comidas",
      kicker: "Comidas",
      titulo: "Chilaquiles y Enchiladas",
      chip: "Chilaquiles",
      nota: "Todos acompañados de deliciosos frijoles refritos.",
      ilustracion: "assets/img/chilaquiles-verdes.webp",
      grupos: [
        {
          titulo: "Chilaquiles",
          layout: "completo",
          items: [
            { nombre: "Chilaquiles Verdes", desc: "Crujientes totopos bañados en nuestra deliciosa salsa verde, con queso manchego gratinado.", precio: "$140", img: "assets/img/chilaquiles-verdes.webp" },
            { nombre: "Chilaquiles Rojos",  desc: "Crujientes totopos bañados en nuestra deliciosa salsa roja, con queso manchego gratinado.", precio: "$140", img: "assets/img/chilaquiles-rojos.webp" }
          ]
        },
        {
          titulo: "Enchiladas",
          layout: "completo",
          items: [
            { nombre: "Enchiladas Suizas", desc: "Tortillas rellenas de pollo, bañadas en una cremosa salsa verde y cubiertas con queso manchego gratinado.", precio: "$170", img: "assets/img/enchiladas-suizas.webp", galeria: ["assets/img/enchiladas-suizas-2.webp"] }
          ]
        }
      ],
      extras: {
        titulo: "Extras",
        items: [
          { nombre: "Pollo",     precio: "$70" },
          { nombre: "Arrachera", precio: "$90" },
          { nombre: "Huevo",     precio: "$25" },
          { nombre: "Aguacate",  precio: "$40" },
          { nombre: "Cambio a papas a la francesa", precio: "$25" }
        ]
      }
    },

    /* ---------------------------------------------------------------- 09 */
    {
      id: "sandwiches-baguettes",
      filtro: "comidas",
      kicker: "Comidas",
      titulo: "Sandwiches & Baguettes",
      chip: "Sandwiches",
      nota: "Todos acompañados de deliciosa ensalada con aderezo italiano.",
      ilustracion: "assets/img/club-sandwich.webp",
      grupos: [
        {
          titulo: "Sandwiches",
          layout: "completo",
          items: [
            { nombre: "Panela",         desc: "Pan multigrano al horno con queso panela, jamón de pavo, espinacas y un toque de nuestra salsa chipotle.", precio: "$160", img: null },
            { nombre: "Molletes Belum", desc: "Pan de croissant con frijoles, queso gratinado y chorizo al horno, acompañado de pico de gallo.", precio: "$150", img: "assets/img/molletes.webp" },
            { nombre: "Avocado toast",  desc: "Pan multigrano con una base de aguacate, un huevo y un toque de mezcla de semillas de la casa.", precio: "$170", img: null },
            { nombre: "Croissant",      desc: "Croissant con jamón de pavo, queso manchego y nuestra salsa chipotle, al horno.", precio: "$135", img: "assets/img/crossaint.webp", galeria: ["assets/img/crossaint-plato.webp"] },
            { nombre: "Club Sandwich",  etiquetas: ["Nuevo"], desc: "Pan multigrano tostado con pollo sazonado, jamón de pavo, manchego fundido, aguacate, tomate fresco y chipotle. Acompañado de papas a la francesa.", precio: "$180", img: "assets/img/club-sandwich.webp" }
          ]
        },
        {
          titulo: "Baguettes",
          layout: "completo",
          items: [
            { nombre: "Baguette de arrachera", desc: "Pan de baguette con frijoles refritos de base, arrachera, aguacate, chile morrón y salsa chipotle.", precio: "$210", img: null },
            { nombre: "Baguette de pollo",     desc: "Pan de baguette con frijoles refritos de base, fajitas de pollo, aguacate, chile morrón y salsa chipotle.", precio: "$190", img: "assets/img/baguette-pollo.webp" }
          ]
        }
      ],
      extras: {
        titulo: "Extras",
        items: [
          { nombre: "Pollo",     precio: "$70" },
          { nombre: "Arrachera", precio: "$90" },
          { nombre: "Huevo",     precio: "$25" },
          { nombre: "Aguacate",  precio: "$40" },
          { nombre: "Cambio a papas a la francesa", precio: "$25" }
        ]
      }
    },

    /* ---------------------------------------------------------------- 10 */
    {
      id: "postres",
      filtro: "postres",
      kicker: "Postres",
      titulo: "Postres",
      chip: "Postres",
      nota: "",
      ilustracion: "assets/img/rol-canela.webp",
      grupos: [
        {
          titulo: "Galletas de temporada",
          layout: "completo",
          items: [
            { nombre: "Galleta", desc: "Oreo · Red velvet · Chocochispas · Dulce de leche", precio: "$45", img: null }
          ]
        },
        {
          titulo: "Roles de temporada",
          layout: "completo",
          items: [
            { nombre: "Rol de canela", desc: "Zarzamora · Pistache · Original · Manzana con nuez", precio: "$100", img: "assets/img/rol-canela.webp" }
          ]
        }
      ]
    },

    /* ---------------------------------------------------------------- 11 */
    {
      id: "promociones",
      filtro: "promociones",
      kicker: "Promociones",
      titulo: "Promociones",
      chip: "Promos",
      nota: "Combos del día acompañados de agua fresca o café. De lunes a viernes.",
      ilustracion: "assets/img/chilaquiles-rojos.webp",
      grupos: [
        {
          titulo: "Lunes a viernes",
          layout: "completo",
          items: [
            { nombre: "Lunes",     desc: "Chilaquiles sencillos (verdes o rojos) + agua fresca", precio: "$140", img: "assets/img/chilaquiles-rojos.webp" },
            { nombre: "Martes",    desc: "Molletes Belum + agua fresca",  precio: "$140", img: "assets/img/molletes.webp" },
            { nombre: "Miércoles", desc: "Baguette de pollo + agua fresca", precio: "$180", img: "assets/img/baguette-pollo.webp" },
            { nombre: "Jueves",    desc: "Croissant + café americano",    precio: "$140", img: "assets/img/crossaint.webp" },
            { nombre: "Viernes",   desc: "Enchiladas Suizas + agua fresca", precio: "$160", img: "assets/img/enchiladas-suizas-2.webp" }
          ]
        }
      ]
    }

  ]
};

if (typeof module !== "undefined") module.exports = BELUM;
