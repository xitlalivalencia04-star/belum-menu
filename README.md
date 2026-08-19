# BELUM · Menú digital

Sitio web del menú, pensado para abrirse desde un código QR en el celular.
No necesita registro, no necesita base de datos, no necesita servidor.
Son archivos estáticos: se suben y ya funciona.

---

## Cómo está organizado

```
belum-menu/
├── index.html                 ← portada, barra, pie (textos de la marca)
└── assets/
    ├── css/styles.css         ← colores y diseño
    ├── js/menu-data.js        ← 👈 TODO EL MENÚ VIVE AQUÍ
    ├── js/app.js              ← buscador, filtros, modal (no lo toques)
    └── img/                   ← fotografías y recursos gráficos
```

**Regla simple:** para actualizar el menú solo tocas `assets/js/menu-data.js`.

---

## 1. Cambiar un precio

Abre `assets/js/menu-data.js`, busca el producto y edita el número:

```js
{ nombre: "Americano", precio: "$65", img: "assets/img/americano.webp" },
```

Guarda el archivo, súbelo, y listo. No hay que tocar nada más.

En los productos con dos tamaños:

```js
{ nombre: "Plátano", img: null,
  precios: [{ label: "Ch 16 oz", precio: "$60" }, { label: "Gde 32 oz", precio: "$90" }] },
```

## 2. Cambiar un nombre o una descripción

```js
{ nombre: "Chilaquiles Verdes",
  desc: "Crujientes totopos bañados en nuestra deliciosa salsa verde...",
  precio: "$140", img: "assets/img/chilaquiles-verdes.webp" },
```

## 3. Agregar un platillo

Copia un bloque `{ ... }` completo, pégalo debajo y edítalo.
Recuerda la coma al final de cada bloque, menos en el último de la lista.

## 4. Borrar un platillo

Borra su bloque `{ ... }` completo, incluida la coma.

## 5. Agregar una fotografía (después de tu sesión de fotos)

Esto ya está preparado. Solo dos pasos:

1. Guarda la foto en `assets/img/` con un nombre sin espacios ni acentos,
   por ejemplo `avocado-toast.webp` (o `.jpg`, también funciona).
2. En `menu-data.js`, cambia `img: null` por la ruta:

```js
// antes
{ nombre: "Avocado toast", desc: "...", precio: "$170", img: null },

// después
{ nombre: "Avocado toast", desc: "...", precio: "$170", img: "assets/img/avocado-toast.webp" },
```

La tarjeta cambia sola: pasa del diseño sin foto al diseño con foto.
No hay que tocar el CSS ni el HTML.

**Para las fotos nuevas:** que sean horizontales (proporción 4:3 o similar),
mínimo 900 px de ancho, y guárdalas en WebP o JPG a menos de 200 KB
para que el menú siga cargando rápido en datos móviles.

Si quieres una segunda foto que aparezca dentro del modal:

```js
img: "assets/img/enchiladas-suizas.webp",
galeria: ["assets/img/enchiladas-suizas-2.webp"]
```

## 6. Quitar una fotografía

Pon `img: null`. La tarjeta vuelve al diseño botánico sin verse incompleta.

## 7. Cambiar dirección, horario, Instagram o el texto de la portada

Eso está en `index.html`, en los bloques marcados con
`<!-- PORTADA -->` y `<!-- PIE -->`.

## 8. Etiquetas

Solo se usa `"Nuevo"`, y únicamente donde el menú original lo marca:

```js
{ nombre: "Club Sandwich", etiquetas: ["Nuevo"], ... }
```

Para quitarla, borra `etiquetas: ["Nuevo"],`.

---

## Cómo publicarlo y generar el QR

### Opción A — Netlify Drop (lo más rápido, gratis, sin cuenta técnica)

1. Entra a **https://app.netlify.com/drop**
2. Arrastra la carpeta `belum-menu` completa a la ventana.
3. En segundos te da un enlace tipo `https://algo-random.netlify.app`.
4. Crea una cuenta gratis para conservarlo y en *Site settings → Change site name*
   ponle algo como `belum-menu` → `https://belum-menu.netlify.app`.
5. Para actualizar después: vuelves a arrastrar la carpeta. El enlace no cambia.

### Opción B — GitHub Pages

1. Crea un repositorio público llamado `belum-menu`.
2. Sube todos los archivos (con `index.html` en la raíz).
3. *Settings → Pages → Branch: main / root → Save*.
4. Queda en `https://tuusuario.github.io/belum-menu/`.

### Opción C — dominio propio

Si Belum tiene dominio, súbelo por FTP a la carpeta pública del hosting,
o apunta el dominio al sitio de Netlify (*Domain settings → Add custom domain*).
Ideal: `menu.belum.mx`.

### Generar el QR

Con el enlace ya listo:

- **https://qr.io** o **https://www.qrcode-monkey.com** (permiten personalizar color)
- Ponle el verde de la marca: **#5D7A4A**
- **Descárgalo en SVG o PDF**, no en PNG — el SVG se puede imprimir en cualquier
  tamaño sin que se pixelee (mesas, ventana, mostrador).
- Antes de mandar a imprimir: pruébalo desde 3 celulares distintos y a la
  distancia real a la que estará en la mesa.

**Consejo:** usa un QR dinámico solo si vas a cambiar de dominio.
Si el enlace de Netlify va a ser el definitivo, un QR estático es mejor:
no caduca ni depende de que un servicio externo siga existiendo.

---

## Cómo probarlo en tu computadora

Abre `index.html` con doble clic. Funciona todo.

Si quieres verlo tal cual se verá en el celular:
clic derecho → *Inspeccionar* → icono de celular (arriba a la izquierda del panel).

---

## Notas técnicas

- El logo es **SVG vectorial** (`logo-belum.svg`): se ve perfectamente nítido
  en cualquier tamaño, en pantalla retina y también impreso.
- Las fotografías están a su resolución máxima (1181 px de ancho, la que
  permite el original) en WebP de alta calidad.
- Pesa ~4 MB completo, pero la primera pantalla solo carga el logo y el patrón.
- Las imágenes cargan en diferido (`lazy loading`): solo se descargan las que
  el cliente alcanza a ver.
- Tipografías: Cormorant Garamond y Nunito Sans (Google Fonts).
  Nunito Sans es la del menú original; Cormorant Garamond viene incrustada
  en tu propio PDF y sustituye a The Seasons, que no tiene versión web libre.
- Colores tomados del PDF: verde `#5D7A4A`, crema `#EFEDE0`, salvia `#A9BC94`.
- Funciona sin conexión a Google Fonts (usa Georgia y la tipografía del sistema
  como respaldo), aunque se ve mejor con conexión.
