# Spec 005 — Servicios (tarjetas de acceso rápido)

**Sección:** Servicios
**Estado:** Listo para plan/implementación
**Depende de:** `constitution.md`
**Referencia visual:** Sección "Specials" de Lexus of Las Vegas (3 tarjetas con imagen de fondo + botón) — adaptada a 4 tarjetas para VeneCars.

---

## 1. Objetivo

Comunicar de forma visual e inmediata los 4 pilares del negocio (venta 0km, consignación, taller y repuestos), usando tarjetas con fotografía real como fondo en vez de íconos abstractos, para reforzar que VeneCars es un ecosistema completo y no solo un vendedor de autos.

---

## 2. Alcance

Incluye: grid de 4 tarjetas con imagen de fondo, título y botón, comportamiento responsive, estados de hover.

No incluye: contenido detallado de cada servicio (eso vive en sus propias páginas/secciones si se desarrollan a futuro — en el prototipo, cada botón navega o hace scroll a una sección relacionada cuando exista, o abre WhatsApp como fallback).

---

## 3. Criterios de aceptación (EARS)

1. **CUANDO** la página carga esta sección, **EL sistema DEBE** mostrar 4 tarjetas de igual tamaño, cada una con: imagen de fondo a pantalla completa dentro de la tarjeta, overlay oscuro semitransparente (para legibilidad del texto), título corto en la parte inferior, y un botón con borde (estilo "outline") tipo "Ver ahora".
2. **SIEMPRE**, las 4 tarjetas **DEBEN** representar, en este orden: (1) Venta 0km, (2) Consignación, (3) Taller y servicio técnico, (4) Repuestos.
3. **CUANDO** el usuario pasa el cursor sobre una tarjeta (desktop), **EL sistema DEBE** aplicar una transición sutil (ej. leve zoom de la imagen de fondo, máx. 400ms, o aclarado del overlay) — sin efectos abruptos.
4. **CUANDO** el ancho de pantalla es igual o mayor a 1024px, **EL sistema DEBE** mostrar las 4 tarjetas en una sola fila.
5. **CUANDO** el ancho de pantalla está entre 768px y 1023px, **EL sistema DEBE** mostrar las tarjetas en grid de 2x2.
6. **CUANDO** el ancho de pantalla es menor a 768px, **EL sistema DEBE** apilar las tarjetas en una sola columna, manteniendo proporción de imagen legible (no recortes que corten el punto focal de la foto).
7. **CUANDO** el usuario hace clic en el botón de una tarjeta, **EL sistema DEBE** desplazar el scroll a la sección relacionada si existe en la página (ej. "Venta 0km" → `004-catalogo`), o abrir WhatsApp con un mensaje contextual si la sección aún no existe como página propia (ej. "Repuestos" → WhatsApp con mensaje "Hola, quiero consultar disponibilidad de repuestos").
8. **SIEMPRE**, el contraste entre el título/botón y la imagen de fondo **DEBE** cumplir mínimo AA de accesibilidad mediante el overlay oscuro.

---

## 4. Restricciones (heredadas de `constitution.md`)

- Sin GIF ni video como fondo de tarjeta — solo fotografía estática.
- Overlay y botones deben usar la paleta de marca (negro/gris oscuro para overlay, blanco para texto, rojo como acento en el botón o borde si se decide destacar alguna tarjeta).
- Imágenes optimizadas (WebP), con `alt` descriptivo por tarjeta.
- Nombrar el componente de tarjeta de forma reutilizable (ej. `QuickAccessCard.tsx`) ya que su estructura es idéntica entre las 4, solo cambian imagen/título/destino.

---

## 5. Fuera de alcance

- Páginas dedicadas por servicio (ej. una página completa de "Taller") — en esta fase, cada tarjeta lleva a una sección de la misma landing o a WhatsApp.
- Formulario específico por tipo de servicio.

---

## 6. Notas para el agente

- Usar fotografías reales cuando el cliente las proporcione; mientras tanto, usar placeholders de alta calidad claramente marcados como `TODO` (ej. foto genérica de taller, de estante de repuestos).
- Estructurar los datos de las 4 tarjetas como un array tipado (`ServiceCard[]`) en `types.ts`, no hardcodeados en JSX — mismo criterio que en `002-hero` para los slides.
