# Spec 005 — Servicios (v2: bento cards estilo Dalton Corporación)

**Sección:** Servicios
**Estado:** Listo para plan/implementación (versión 2 — reemplaza el formato "specials" tipo Lexus con fondo oscuro y foto de fondo)
**Depende de:** `constitution.md`
**Referencia visual:** daltoncorporacion.com.mx — cards de divisiones de negocio (fondo gris claro, logo/título/párrafo + imagen + botón píldora con flecha circular).

> **Historial:** v1 usaba tarjetas con fotografía de fondo a pantalla completa + overlay oscuro (estilo "specials" de Lexus). **v2 (esta versión)** cambia a un lenguaje de card clara tipo bento, con contenido tipográfico a un lado y la imagen conteniéndose dentro del card en vez de ser el fondo completo.

---

## 1. Objetivo

Presentar los 4 pilares del negocio (Venta 0km, Consignación, Taller, Repuestos) con un acabado más editorial y "premium-corporativo" — texto legible sobre fondo claro en vez de depender de overlays sobre fotografía, replicando el lenguaje visual de tarjeta que usa Dalton Corporación para sus divisiones de negocio.

---

## 2. Alcance

Incluye: encabezado de sección, 4 cards en layout bento asimétrico, botón "Conoce más" con ícono de flecha circular, comportamiento de hover y entrada al hacer scroll.

No incluye: contenido detallado por servicio (cada card sigue navegando a su sección relacionada o WhatsApp, igual que en v1).

---

## 3. Estructura visual de cada card (nivel de detalle técnico)

**Contenedor de la card:**
- `border-radius`: 24-32px (`rounded-3xl` en Tailwind).
- Fondo: gris muy claro, NO blanco puro — usar un tono como `bg-brand-gray-light` (o definir `brand-surface: #F1F1F2` si no existe aún en `tailwind.config.ts`).
- Padding interno: 32-40px (`p-8` a `p-10`).
- `overflow: hidden` obligatorio (para que la imagen interna respete el borde redondeado al escalar en hover).

**Bloque de contenido (dentro de la card):**
- Eyebrow/etiqueta corta en rojo de acento, mayúsculas, pequeña (ya existente en v1: "CONCESIONARIO OFICIAL", "VENTA GARANTIZADA", "SERVICIO TÉCNICO", "POSTVENTA OFICIAL" — se reutilizan tal cual).
- Título en negro, bold, tamaño grande (`text-2xl` a `text-3xl` según el tamaño de la card).
- Párrafo descriptivo corto (1-2 líneas), gris medio (`text-brand-dark/70`).
- Botón "Conoce más": estructura de **dos elementos**, no uno solo:
  1. Texto del label (ej. "Conoce más"), tipografía media, negro.
  2. Ícono circular separado a la derecha del texto (`rounded-full`, ~32-36px de diámetro, fondo blanco o gris, con un ícono de flecha diagonal `↗` — en Lucide: `ArrowUpRight`).

**Bloque de imagen (dentro de la card):**
- Fotografía o ilustración del servicio, posicionada para "sangrar" hacia un borde del card (derecha o inferior), nunca centrada de forma aislada.
- Debe quedar contenida por el `overflow-hidden` del contenedor padre — nunca se sale del `border-radius`.

---

## 4. Criterios de aceptación (EARS)

1. **CUANDO** la página carga esta sección, **EL sistema DEBE** mostrar el encabezado con el mismo patrón ya usado en el resto del sitio (etiqueta roja + título negro + subtítulo).
2. **SIEMPRE**, la sección **DEBE** mostrar 4 cards, una por pilar de negocio, con la estructura visual descrita en la Sección 3.
3. **CUANDO** se renderiza el grid en desktop (≥1024px), **EL sistema DEBE** usar un layout bento asimétrico: la primera card (Venta 0km) ocupa el ancho completo; Consignación y Taller forman una fila de 2 columnas iguales; Repuestos ocupa el ancho completo al cierre.
4. **CUANDO** el ancho de pantalla es menor a 1024px, **EL sistema DEBE** apilar las 4 cards en una sola columna, cada una a ancho completo, sin perder la estructura interna (eyebrow + título + párrafo + botón + imagen).
5. **CUANDO** el usuario pasa el cursor sobre una card (desktop), **EL sistema DEBE** aplicar: elevación sutil de la card (`translateY(-4px)` a `-6px` + incremento de `box-shadow`), y un escalado leve de la imagen interna (`scale(1.05)`), ambos con transición `duration-300 ease-out`.
6. **CUANDO** el usuario pasa el cursor sobre el botón "Conoce más" específicamente, **EL sistema DEBE** invertir sus colores (fondo pasa a rojo de acento, ícono/texto a blanco) y desplazar el ícono de flecha diagonalmente (`translate-x-0.5 -translate-y-0.5`), con transición `duration-200`.
7. **CUANDO** cada card entra en el viewport durante el scroll, **EL sistema DEBE** animarla con un fade + slide vertical corto (`opacity 0→1`, `translateY(16px)→0`), con un retraso escalonado entre cards (~100-150ms de diferencia entre una y la siguiente) usando `Intersection Observer` (no animar de nuevo si ya fue vista).
8. **CUANDO** el usuario hace clic en la card completa o en el botón, **EL sistema DEBE** navegar/desplazar scroll o abrir WhatsApp según el destino ya definido por servicio (mismo comportamiento que v1 — no cambia).
9. **SIEMPRE**, el contraste entre el texto y el fondo gris claro de la card **DEBE** cumplir mínimo AA (texto negro/gris oscuro sobre gris claro, no gris sobre gris).

---

## 5. Restricciones (heredadas de `constitution.md`)

- Paleta: fondo de card en gris claro (nunca blanco puro ni oscuro), eyebrow y hover del botón en rojo de acento, texto principal en negro.
- Las animaciones de hover y entrada por scroll están explícitamente permitidas por la constitución ("fade/slide sutil al hacer scroll, hover leve en tarjetas") — esta sección es un buen ejemplo de aplicación correcta de esa regla, no una excepción.
- Sin autoplay ni carrusel — el layout es estático, la única interactividad es hover y scroll-reveal.
- Imágenes optimizadas (WebP), con `alt` descriptivo por servicio.

---

## 6. Fuera de alcance

- Contenido expandible dentro de la misma card (acordeón, modal) — el botón navega a otra sección o WhatsApp, no despliega contenido en el lugar.
- Video o imagen animada dentro del bloque de imagen.

---

## 7. Notas técnicas para el agente

- **Componente reutilizable:** crear/actualizar `QuickAccessCard.tsx` (o renombrar a `ServiceBentoCard.tsx` si se prefiere reflejar el cambio de estilo) con props: `eyebrow`, `title`, `description`, `image`, `ctaDestination`, y una prop `span` (`'full' | 'half'`) para controlar el ancho dentro del grid bento.
- **Grid bento en Tailwind:** usar CSS Grid con `grid-cols-1 lg:grid-cols-2`, y aplicar `lg:col-span-2` a las cards con `span='full'` (Venta 0km y Repuestos), dejando Consignación y Taller como `col-span-1` cada una.
- **Botón con ícono circular:** estructurar como `<button className="group inline-flex items-center gap-3">`, con el ícono en un `<span className="rounded-full ... group-hover:bg-brand-accent group-hover:text-white transition-colors duration-200">`, y el ícono mismo con `group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200`.
- **Scroll-reveal:** usar un hook simple (`useInView` custom o `IntersectionObserver` nativo) en vez de instalar una librería nueva de animaciones — es un efecto simple que no justifica una dependencia adicional según el criterio de la constitución sobre minimizar dependencias.
- **Reutilizar copy existente:** los 4 eyebrows, títulos y descripciones de la v1 (`CONCESIONARIO OFICIAL` / "Venta 0km", etc.) siguen siendo válidos — no es necesario reescribir el copy, solo el contenedor visual y las imágenes.
- Las imágenes actuales (placeholders de Unsplash) pueden reutilizarse, ajustando su recorte/posición para que "sangren" correctamente dentro del nuevo layout de card en vez de ser el fondo completo.
