/* ============================================================
   BELUM · Menú digital — lógica de la página
   No necesitas editar este archivo para actualizar el menú.
   Todo el contenido vive en menu-data.js
   ============================================================ */
(function () {
  "use strict";

  var ICONO = {
    lupa:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
    equis:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    flecha: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
    abajo:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>',
    hoja:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M4 20c0-8 5-14 15-15 1 10-4 15-11 15H4z"/><path d="M4 20c4-4 7-6 11-7.5"/></svg>',
    pin:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.4"/></svg>',
    reloj:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'
  };

  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  function esc(t) {
    return String(t == null ? "" : t)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function normaliza(t) {
    return String(t || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  /* ---------- índice plano de productos (para búsqueda y modal) ---------- */
  var INDICE = {};
  BELUM.secciones.forEach(function (sec, si) {
    (sec.grupos || []).forEach(function (gru, gi) {
      (gru.items || []).forEach(function (it, ii) {
        var clave = "p" + si + "-" + gi + "-" + ii;
        it._clave = clave;
        it._seccion = sec;
        it._grupo = gru;
        it._busca = normaliza([sec.titulo, gru.titulo, it.nombre, it.desc, (it.etiquetas || []).join(" ")].join(" "));
        INDICE[clave] = it;
      });
    });
  });

  /* =========================== PLANTILLAS =========================== */

  function precioHTML(it) {
    if (it.precio) return '<span class="tarjeta__precio">' + esc(it.precio) + "</span>";
    return "";
  }
  function preciosHTML(it, clase) {
    if (!it.precios || !it.precios.length) return "";
    return '<div class="' + clase + '">' + it.precios.map(function (p) {
      return '<span class="precio-pill">' + esc(p.label) + " <b>" + esc(p.precio) + "</b></span>";
    }).join("") + "</div>";
  }
  function etiquetasHTML(it) {
    if (!it.etiquetas || !it.etiquetas.length) return "";
    return '<div class="etiquetas">' + it.etiquetas.map(function (e) {
      return '<span class="etiqueta">' + esc(e) + "</span>";
    }).join("") + "</div>";
  }

  function tarjetaHTML(it) {
    var conFoto = !!it.img;
    var partes = [];

    partes.push('<button class="tarjeta ' + (conFoto ? "tarjeta--confoto" : "tarjeta--sinfoto") +
      '" type="button" data-clave="' + it._clave + '" data-busca="' + esc(it._busca) + '">');

    if (conFoto) {
      partes.push('<div class="tarjeta__medio">' +
        etiquetasHTML(it) +
        '<img class="tarjeta__foto" src="' + esc(it.img) + '" alt="' + esc(it.nombre) + '" loading="lazy" decoding="async">' +
        "</div>");
    } else {
      partes.push('<span class="tarjeta__inicial" aria-hidden="true">' + esc(it.nombre.trim().charAt(0)) + "</span>");
    }

    partes.push('<div class="tarjeta__cuerpo">');
    if (!conFoto && it.etiquetas && it.etiquetas.length) partes.push(etiquetasHTML(it));
    partes.push('<div class="tarjeta__linea"><h3 class="tarjeta__nombre">' + esc(it.nombre) + "</h3>" + precioHTML(it) + "</div>");
    if (it.desc) partes.push('<p class="tarjeta__desc">' + esc(it.desc) + "</p>");
    partes.push(preciosHTML(it, "tarjeta__precios"));
    partes.push("</div></button>");

    return partes.join("");
  }

  function extrasHTML(ex) {
    if (!ex) return "";
    return '<aside class="extras"><h4 class="extras__titulo">' + esc(ex.titulo) + "</h4><ul class=\"extras__lista\">" +
      ex.items.map(function (i) {
        return "<li><span>" + esc(i.nombre) + "</span><b>" + esc(i.precio) + "</b></li>";
      }).join("") + "</ul></aside>";
  }

  function seccionHTML(sec) {
    var h = ['<section class="seccion" id="' + sec.id + '" data-filtro="' + sec.filtro + '">'];

    h.push('<header class="seccion__cabeza">');
    if (sec.ilustracion) {
      h.push('<img class="seccion__hoja" src="' + esc(sec.ilustracion) + '" alt="" aria-hidden="true" loading="lazy" decoding="async">');
    }
    h.push('<span class="seccion__kicker">' + esc(sec.kicker) + "</span>");
    h.push('<h2 class="seccion__titulo">' + esc(sec.titulo) + "</h2>");
    if (sec.nota) h.push('<p class="seccion__nota">' + esc(sec.nota) + "</p>");
    h.push("</header>");

    (sec.grupos || []).forEach(function (gru) {
      h.push('<div class="grupo">');
      if (gru.titulo) h.push('<h3 class="grupo__titulo">' + esc(gru.titulo) + "</h3>");

      // Los productos con fotografía van primero y en tarjeta grande.
      var conFoto = gru.items.filter(function (i) { return !!i.img; });
      var sinFoto = gru.items.filter(function (i) { return !i.img; });

      if (conFoto.length) {
        h.push('<div class="rejilla rejilla--destacados">' + conFoto.map(tarjetaHTML).join("") + "</div>");
      }
      if (sinFoto.length) {
        h.push('<div class="rejilla rejilla--' + (gru.layout || "completo") + '">' + sinFoto.map(tarjetaHTML).join("") + "</div>");
      }
      h.push("</div>");
    });

    h.push(extrasHTML(sec.extras));
    h.push("</section>");
    return h.join("");
  }

  /* =========================== RENDER =========================== */

  var menu    = $("#menu");
  var tira    = $("#tira");
  var filtros = $("#filtros");

  menu.innerHTML = BELUM.secciones.map(seccionHTML).join("") +
    '<div class="aviso" id="vacio" hidden>' +
      '<img class="aviso__hoja" src="assets/img/hoja-ginkgo.webp" alt="" aria-hidden="true">' +
      "<h3>Sin resultados</h3><p>No encontramos nada con ese nombre. Prueba con otra palabra.</p>" +
      '<button type="button" id="limpiar-todo">Ver el menú completo</button></div>';

  tira.innerHTML = BELUM.secciones.map(function (s) {
    return '<button class="chip" type="button" data-ir="' + s.id + '" data-filtro="' + s.filtro + '">' + esc(s.chip || s.titulo) + "</button>";
  }).join("");

  filtros.innerHTML = BELUM.filtros.map(function (f, i) {
    return '<button class="filtro' + (i === 0 ? " activo" : "") + '" type="button" data-f="' + f.id + '">' + esc(f.label) + "</button>";
  }).join("");

  var secciones = $$(".seccion");
  var chips     = $$(".chip", tira);
  var tarjetas  = $$(".tarjeta");
  var vacio     = $("#vacio");
  var cuenta    = $("#cuenta");

  /* =========================== ESTADO =========================== */

  var filtroActivo = "todo";
  var consulta = "";

  function aplicar() {
    var q = normaliza(consulta.trim());
    var totalVisible = 0;

    secciones.forEach(function (sec) {
      var pasaFiltro = (filtroActivo === "todo" || sec.dataset.filtro === filtroActivo);
      var visiblesEnSeccion = 0;

      $$(".tarjeta", sec).forEach(function (t) {
        var coincide = !q || t.dataset.busca.indexOf(q) !== -1;
        var mostrar = pasaFiltro && coincide;
        t.hidden = !mostrar;
        if (mostrar) visiblesEnSeccion++;
      });

      // rejillas y grupos vacíos
      $$(".rejilla", sec).forEach(function (r) {
        r.hidden = $$(".tarjeta", r).every(function (t) { return t.hidden; });
      });
      $$(".grupo", sec).forEach(function (g) {
        var vivos = $$(".tarjeta", g).filter(function (t) { return !t.hidden; }).length;
        g.hidden = vivos === 0;
      });

      // los extras solo tienen sentido si la sección muestra algo y no hay búsqueda
      var ex = $(".extras", sec);
      if (ex) ex.hidden = (visiblesEnSeccion === 0) || !!q;

      sec.hidden = visiblesEnSeccion === 0;
      totalVisible += visiblesEnSeccion;
    });

    // chips visibles según filtro
    chips.forEach(function (c) {
      var sec = document.getElementById(c.dataset.ir);
      c.hidden = sec.hidden;
    });

    vacio.hidden = totalVisible > 0;

    if (q) {
      cuenta.hidden = false;
      cuenta.textContent = totalVisible === 1 ? "1 producto encontrado" : totalVisible + " productos encontrados";
    } else {
      cuenta.hidden = true;
    }

    revelar();
  }

  /* =========================== BUSCADOR =========================== */

  var input   = $("#buscar");
  var limpiar = $("#limpiar");

  input.addEventListener("input", function () {
    consulta = input.value;
    limpiar.classList.toggle("visible", consulta.length > 0);
    aplicar();
  });
  limpiar.addEventListener("click", function () {
    input.value = ""; consulta = "";
    limpiar.classList.remove("visible");
    aplicar(); input.focus();
  });
  input.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { input.value = ""; consulta = ""; limpiar.classList.remove("visible"); aplicar(); }
  });

  /* =========================== FILTROS =========================== */

  filtros.addEventListener("click", function (e) {
    var b = e.target.closest(".filtro");
    if (!b) return;
    filtroActivo = b.dataset.f;
    $$(".filtro", filtros).forEach(function (x) { x.classList.toggle("activo", x === b); });
    aplicar();
    var primera = secciones.filter(function (s) { return !s.hidden; })[0];
    if (primera) irA(primera.id);
  });

  /* =========================== NAVEGACIÓN =========================== */

  function suave() {
    try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"; }
    catch (e) { return "auto"; }
  }
  function alto() {
    return $(".barra").offsetHeight + $(".tira").offsetHeight;
  }
  function irA(id) {
    var el = document.getElementById(id);
    if (!el) return;
    var y = el.getBoundingClientRect().top + window.pageYOffset - alto() - 6;
    window.scrollTo({ top: y, behavior: suave() });
  }

  tira.addEventListener("click", function (e) {
    var c = e.target.closest(".chip");
    if (!c) return;
    irA(c.dataset.ir);
  });

  $$("[data-ir-menu]").forEach(function (b) {
    b.addEventListener("click", function (e) {
      e.preventDefault();
      var primera = secciones.filter(function (s) { return !s.hidden; })[0];
      irA(primera ? primera.id : BELUM.secciones[0].id);
    });
  });

  /* --- chip activo según scroll --- */
  var activa = null;
  function marcaActiva() {
    var y = window.pageYOffset + alto() + 40;
    var actual = null;
    secciones.forEach(function (s) {
      if (!s.hidden && s.offsetTop <= y) actual = s.id;
    });
    if (actual === activa) return;
    activa = actual;
    chips.forEach(function (c) {
      var on = c.dataset.ir === actual;
      c.classList.toggle("activo", on);
      if (on) {
        var t = $("#tira");
        var izq = c.offsetLeft - t.clientWidth / 2 + c.clientWidth / 2;
        if (typeof t.scrollTo === "function") t.scrollTo({ left: izq, behavior: "smooth" });
        else t.scrollLeft = izq;
      }
    });
  }

  /* =========================== REVELADO =========================== */

  var observador = null;
  if ("IntersectionObserver" in window) {
    observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("dentro"); observador.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: .04 });
  }
  function revelar() {
    if (!observador) { tarjetas.forEach(function (t) { t.classList.add("dentro"); }); return; }
    tarjetas.forEach(function (t) {
      if (!t.hidden && !t.classList.contains("dentro")) observador.observe(t);
    });
  }

  /* =========================== MODAL =========================== */

  var modal = $("#modal");
  var panel = $("#modal-panel");
  var ultimoFoco = null;

  function abrirModal(clave) {
    var it = INDICE[clave];
    if (!it) return;
    ultimoFoco = document.activeElement;

    var m = [];
    var fotos = [it.img].concat(it.galeria || []).filter(Boolean);

    if (fotos.length > 1) {
      m.push('<div class="modal__medio modal__medio--doble">' + fotos.slice(0, 2).map(function (f) {
        return '<img src="' + esc(f) + '" alt="' + esc(it.nombre) + '">';
      }).join("") + "</div>");
    } else if (fotos.length === 1) {
      m.push('<div class="modal__medio"><img src="' + esc(fotos[0]) + '" alt="' + esc(it.nombre) + '"></div>');
    } else {
      var largo = it.nombre.trim().length;
      var tam = largo > 42 ? "xs" : largo > 26 ? "sm" : largo > 14 ? "md" : "lg";
      m.push('<div class="modal__sinfoto modal__sinfoto--' + tam + '"><span aria-hidden="true">' + esc(it.nombre.trim()) + "</span></div>");
    }

    m.push('<div class="modal__cuerpo">');
    m.push('<p class="modal__kicker">' + esc(it._seccion.titulo) + " · " + esc(it._grupo.titulo) + "</p>");
    if (fotos.length) {
      m.push('<h2 class="modal__nombre" id="modal-titulo">' + esc(it.nombre) + "</h2>");
    } else {
      // el nombre ya se muestra grande en el panel verde de arriba
      m.push('<h2 class="solo-lectores" id="modal-titulo">' + esc(it.nombre) + "</h2>");
    }
    if (it.etiquetas && it.etiquetas.length) m.push(etiquetasHTML(it));
    if (it.desc) m.push('<p class="modal__desc">' + esc(it.desc) + "</p>");
    if (it.precio) m.push('<p class="modal__precio">' + esc(it.precio) + "</p>");
    m.push(preciosHTML(it, "modal__precios"));

    var meta = [];
    if (it._seccion.nota) meta.push("<div>" + ICONO.hoja + "<span>" + esc(it._seccion.nota) + "</span></div>");
    if (!fotos.length) meta.push("<div>" + ICONO.hoja + "<span>Aún no tenemos fotografía de este producto.</span></div>");
    if (meta.length) m.push('<div class="modal__meta">' + meta.join("") + "</div>");

    m.push("</div>");

    panel.innerHTML = '<div class="modal__asa" aria-hidden="true"></div>' +
      '<button class="modal__cerrar" type="button" data-cerrar aria-label="Cerrar">' + ICONO.equis + "</button>" +
      m.join("");

    modal.classList.add("abierto");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("sin-scroll");
    panel.scrollTop = 0;
    $(".modal__cerrar", panel).focus();
  }

  function cerrarModal() {
    modal.classList.remove("abierto");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("sin-scroll");
    if (ultimoFoco) ultimoFoco.focus();
  }

  menu.addEventListener("click", function (e) {
    var t = e.target.closest(".tarjeta");
    if (t) { abrirModal(t.dataset.clave); return; }
    if (e.target.closest("#limpiar-todo")) {
      input.value = ""; consulta = ""; limpiar.classList.remove("visible");
      filtroActivo = "todo";
      $$(".filtro", filtros).forEach(function (x, i) { x.classList.toggle("activo", i === 0); });
      aplicar();
    }
  });

  modal.addEventListener("click", function (e) {
    if (e.target.closest("[data-cerrar]") || e.target.classList.contains("modal__fondo")) cerrarModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("abierto")) cerrarModal();
  });

  /* =========================== VOLVER ARRIBA =========================== */

  var arriba = $("#arriba");
  arriba.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: suave() });
  });

  var tic = false;
  function alScroll() {
    if (tic) return;
    tic = true;
    requestAnimationFrame(function () {
      arriba.classList.toggle("visible", window.pageYOffset > 700);
      marcaActiva();
      tic = false;
    });
  }
  window.addEventListener("scroll", alScroll, { passive: true });
  window.addEventListener("resize", function () { activa = null; marcaActiva(); }, { passive: true });

  /* =========================== ARRANQUE =========================== */
  aplicar();
  marcaActiva();
})();
