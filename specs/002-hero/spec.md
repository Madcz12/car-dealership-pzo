# Spec 002 — Hero

**Sección:** Hero (above the fold)
**Estado:** Listo para plan/implementación
**Depende de:** `constitution.md`, `001-header`
**Referencia visual:** Lexus of Las Vegas (banner promocional de financiamiento) — ver captura adjunta en el hilo de diseño del proyecto.

> ⚠️ Este spec reemplaza la versión anterior (formato "texto + imagen + trust-signals"). Se cambió a un formato de **banner promocional tipo carrusel manual**, más cercano a lo que usan concesionarias reales para comunicar ofertas concretas.

---

## 1. Objetivo

Comunicar de forma inmediata una oferta o beneficio concreto (financiamiento, garantía, promoción de temporada) usando un formato de banner de alto impacto visual, con uno o más vehículos destacados y navegación manual entre distintas ofertas — sin recurrir a video ni GIF, y sin autoplay.

---

## 2. Alcance

Incluye: banner con fondo en gradiente de marca, bloque de texto promocional (oferta + condiciones + CTA), una o más imágenes de vehículo superpuestas con su nombre de modelo, navegación manual (flechas laterales + dots), comportamiento responsive.

No incluye: barra de marcas representadas (ver `003-marcas`), catálogo completo (ver `004-catalogo`), tarjetas de acceso rápido (ver `005-servicios`).

---

## 3. Criterios de aceptación (EARS)

1. **CUANDO** la página carga, **EL sistema DEBE** mostrar el Hero como un banner de ancho completo con fondo en gradiente (gris oscuro → negro), ocupando el área above-the-fold junto con el header.
2. **CUANDO** se renderiza el banner, **EL sistema DEBE** mostrar un bloque de texto promocional alineado a un costado (ej. izquierda en desktop) con: etiqueta de vigencia/condición (ej. "Válido hasta [fecha]"), oferta principal en texto grande (ej. "Financiamiento desde X% hasta Y meses"), condiciones en texto secundario más pequeño, y un botón CTA sólido (ej. "Ver inventario").
3. **CUANDO** se renderiza el banner, **EL sistema DEBE** mostrar una o más imágenes de vehículo superpuestas al fondo, alineadas al costado opuesto al texto, cada una con el nombre del modelo debajo (ej. "GRANDLION").
4. **SIEMPRE**, el Hero **NO DEBE** contener ningún elemento `<video>`, GIF animado, ni reproducción automática de ningún tipo.
5. **CUANDO** existe más de una oferta/slide, **EL sistema DEBE** mostrar flechas de navegación (anterior/siguiente) a los costados del banner y un indicador de puntos (dots) en la parte inferior, reflejando el slide activo.
6. **CUANDO** el usuario hace clic en una flecha o en un punto del indicador, **EL sistema DEBE** cambiar al slide correspondiente con una transición suave (fade o slide, máx. 400ms) — **NUNCA** de forma automática sin interacción del usuario.
7. **CUANDO** el usuario hace clic en el CTA del banner, **EL sistema DEBE** desplazar el scroll hasta la sección de catálogo (`004-catalogo`) o abrir WhatsApp, según el slide/oferta (definir destino por slide en `plan.md`).
8. **CUANDO** el ancho de pantalla es menor a 768px, **EL sistema DEBE** apilar el bloque de texto sobre la(s) imagen(es) de vehículo, manteniendo legibilidad del texto sobre el fondo (usar overlay/scrim si es necesario) y ocultando las flechas laterales en favor de swipe táctil + dots.
9. **SIEMPRE**, el contraste entre el texto y el fondo del banner **DEBE** cumplir mínimo AA de accesibilidad, incluso con imágenes de vehículo de por medio.

---

## 4. Restricciones (heredadas de `constitution.md`, actualizadas)

- Fondo del Hero: **gradiente gris oscuro → negro** (reemplaza la regla anterior de "fondo claro"). No usar naranja ni otros colores fuera de la paleta de marca.
- El carrusel es de **navegación manual únicamente** — cero autoplay, cero rotación automática de slides.
- Sin parallax agresivo.
- Imágenes optimizadas (WebP si es posible) para no penalizar performance/LCP — especial cuidado porque esta sección es la más pesada visualmente de toda la página.
- Paleta y tipografía conforme a Sección 3 de la constitución (rojo como acento en CTA/etiquetas, no como fondo dominante).

---

## 5. Fuera de alcance

- Contenido dinámico/CMS para gestionar las ofertas del banner (en el prototipo, los slides son estáticos, definidos en un archivo de datos tipado).
- Autoplay o temporización de slides (explícitamente descartado, no es una omisión).

---

## 6. Notas para el agente

- Estructurar los slides como un array tipado (`PromoSlide[]`) en `types.ts`, no hardcodeados en el JSX del componente — así agregar/quitar ofertas a futuro es solo editar datos.
- Usar como placeholder un mínimo de 2 slides (ej. una oferta 0km, una de servicio técnico) hasta que el cliente confirme sus promociones reales vigentes — marcar contenido de oferta como `TODO`.
- El nombre de modelo bajo cada vehículo (ej. "GRANDLION", "V-ONLINE") sí puede usarse desde ya, ya que son datos confirmados en el PRD.
