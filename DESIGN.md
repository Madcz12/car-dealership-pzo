# VeneCars Motors — Design System & Guidelines

> **Register:** `brand` (Restrained & Committed Corporate Automotive Identity)  
> **Reference:** Impeccable Design Standard (`.agents/skills/impeccable/SKILL.md`)  
> **Status:** Active  
> **Stack:** React 18, TypeScript, Tailwind CSS, Lucide Icons

---

## 1. Physical Scene & Design Personality

- **Physical Scene:** Un cliente ejecutivo o familiar en Puerto Ordaz revisando opciones de vehículos desde su smartphone en la oficina o su hogar, buscando certeza de garantía, confianza institucional y agilidad para cotizar por WhatsApp.
- **Color Strategy:** **Committed** — La identidad descansa en la solidez del Azul Marino Profundo institucional (`brand-navy`), el balance de Neutros Tintados limpios (`brand-white`, `brand-gray`), y un acento Rojo Deportivo (`brand-accent`) reservado exclusivamente para CTAs de alta conversión y badges oficiales.

---

## 2. Color Palette & Tokens

### Semantic Color Roles

| Token Role | Tailwind Class | Hex / OKLCH Value | Semantic Purpose |
|---|---|---|---|
| **Primary Brand (Deep Navy)** | `bg-brand-navy` / `text-brand-navy` | `#0B2447` / `oklch(0.24 0.07 260)` | Titulares, header, tarjetas destacadas, solidez de marca. |
| **Primary Dark** | `bg-brand-navy-dark` | `#07072E` | Footer institucional y fondos de alto contraste. |
| **Primary Light** | `bg-brand-navy-light` | `#14146E` | Hover de elementos navales e interacción secundaria. |
| **Accent Action (Red)** | `bg-brand-accent` / `text-brand-accent` | `#C0272D` / `oklch(0.52 0.22 28)` | Botones de cotización principales, badges 0km, tags de alerta. |
| **Accent Hover** | `bg-brand-accent-hover` | `#A01F25` | Hover en botones de acento. |
| **Surface Base (White)** | `bg-brand-white` | `#FFFFFF` | Fondo principal de lectura. |
| **Surface Alt (Light Gray)** | `bg-brand-gray-light` | `#F8FAFC` | Alternancia rítmica de secciones. |
| **Surface Neutral** | `bg-brand-gray-surface` | `#F3F4F6` | Contenedores de tarjetas y cajas de formulario. |
| **Border / Divider** | `border-brand-gray` | `#E5E7EB` | Separadores y bordes de tarjeta limpios. |
| **Body Ink (Dark)** | `text-brand-dark` | `#111111` | Texto principal de párrafos y especificaciones técnicas. |
| **Muted Ink (Slate)** | `text-brand-gray-dark` | `#6B7280` / `#9CA3AF` | Metadatos, subtítulos y pies de imagen. |
| **Channel WhatsApp** | `bg-brand-whatsapp` | `#25D366` | Botón flotante y enlaces directos de chat. |

### Contrast & Accessibility Rules
- **Texto en Body:** Contraste obligatorio $\ge 4.5:1$ contra el fondo (usar `text-brand-dark` o `text-brand-navy`, nunca grises deslavados).
- **Titulares y Textos Grandes ($\ge 18\text{px}$):** Contraste $\ge 3:1$.
- **Botón de Acento (`brand-accent`):** Texto blanco puro (`#FFFFFF`) con contraste $> 4.8:1$.
- **Cero texto gris sobre fondos de color:** En fondos `brand-navy`, usar `text-white/90` o `text-white/75`.

---

## 3. Typography Hierarchy

| Rol | Familia | Peso | Tamaño (Tailwind) | Tracking & Reglas |
|---|---|---|---|---|
| **Hero Display H1** | `Manrope` | Extrabold (800) | `text-3xl sm:text-5xl lg:text-6xl` | `tracking-tight` ($\ge -0.04\text{em}$), `leading-tight`, `text-wrap: balance` |
| **Section Headings H2** | `Manrope` | Bold (700) | `text-2xl sm:text-3xl lg:text-4xl` | `tracking-tight`, `text-brand-navy`, `text-wrap: balance` |
| **Card / Item H3** | `Manrope` | SemiBold (600) | `text-lg sm:text-xl` | `tracking-normal`, `text-brand-navy` |
| **Body Large** | `Inter` | Regular (400) | `text-base sm:text-lg` | `leading-relaxed`, max-width `65-75ch` |
| **Body Standard** | `Inter` | Regular (400) / Medium (500) | `text-sm sm:text-base` | `leading-normal`, `text-brand-dark` |
| **Badge / Label Kicker** | `Manrope` / `Inter` | SemiBold (600) | `text-xs` | `uppercase`, `tracking-wider`, padding `px-3 py-1` |
| **Display Accents (Specs)** | `Teko` / `Orbitron` | Bold / Medium | `text-xl sm:text-2xl` | Uso puntual exclusivo para cifras numéricas destacadas |

### Typographic Guardrails
- **Ceiling:** Encabezados nunca deben exceder `6rem` (~96px).
- **Tracking floor:** Nunca usar letter-spacing menor a `-0.04em`.
- **Text wrap:** `text-wrap: balance` en todos los encabezados `h1`, `h2` y `h3` para evitar líneas huérfanas.

---

## 4. Layout, Spacing & Container Hierarchy

- **Global Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- **Section Vertical Rhythm:** Alternar entre `py-16` (mobile) y `py-20` / `py-24` (desktop).
- **Grid Layouts:**
  - Catálogo de vehículos: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8`.
  - Servicios (4 columnas): `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`.
  - Bento Grid (¿Por qué elegirnos?): Asimetría balanceada con `col-span-1` / `col-span-2`.
- **Semantic Z-Index Scale:**
  - Base content: `z-0`
  - Sticky Header: `z-40`
  - Mobile Nav Drawer: `z-45`
  - Floating WhatsApp: `z-50`
  - Modal Backdrop: `z-60`
  - Toast / Notifications: `z-80`

---

## 5. Component Craft & Micro-Interactions

### Botones (`Button.tsx`)
- **Accent:** `bg-brand-accent hover:bg-brand-accent-hover text-white font-medium shadow-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-accent`.
- **Primary / Navy:** `bg-brand-navy hover:bg-brand-navy-light text-white transition-all duration-200`.
- **Outline / Ghost:** Borde `border-brand-navy/20 hover:bg-brand-navy/5 text-brand-navy`.
- **Border Radius:** `rounded-lg` (8px) a `rounded-xl` (12px). Botones de píldora `rounded-full` reservados para filtros o badges.

### Tarjetas de Vehículos y Servicios
- Fondo `bg-white` con borde `border border-brand-gray/80` o sombra sutil `shadow-sm hover:shadow-md`.
- **Border Radius:** Máximo `rounded-xl` (12px) a `rounded-2xl` (16px).
- **Hover:** Transición en el contenedor (`translate-y-[-2px]` o elevación de sombra). **PROHIBIDO escalar/rotar imágenes internas en hover (`group-hover:scale-105`)**.

### Header Sticky & Navegación
- Transición suave de elevación al hacer scroll (`window.scrollY > 20`).
- Blur controlado: `backdrop-blur-md bg-brand-black/95 border-b border-white/10`.
- Menú mobile con drawer animado en altura/opacidad y bloqueo de scroll en el `body`.

---

## 6. Motion & Animation Principles

- **Intencional y sobrio:** Animaciones con curvas exponenciales `ease-out` (duración 200–300ms).
- **Sin autoplay ruidoso:** Prohibidos carruseles que giran solos o parallax agresivo.
- **Accesibilidad:** Soporte estricto para `@media (prefers-reduced-motion: reduce)` con transiciones instantáneas o crossfades simples.

---

## 7. Absolute Bans & Anti-AI Slop Guardrails

1. ❌ **No Side-Stripe Borders:** Prohibido usar `border-l-4` o líneas laterales de color como adorno en tarjetas.
2. ❌ **No Gradient Text:** Prohibido `bg-clip-text text-transparent bg-gradient-to-r`. Todo texto debe ser color sólido.
3. ❌ **No Glassmorphism indiscriminado:** Nada de desenfoques o efectos frosted glass en tarjetas de contenido estándar.
4. ❌ **No Hero Metric Templates:** Evitar el cliché de "número gigante + gradiente + label minúsculo" repetitivo.
5. ❌ **No repetitivo Eyebrow Kicker:** No colocar `01. SOBRE NOSOTROS`, `02. SERVICIOS` sistemáticamente en cada sección. Usar ritmo editorial variado.
6. ❌ **No Over-Rounding:** Tarjetas limitadas a 12–16px de radio. Prohibido `rounded-[32px]` o `rounded-[40px]`.
7. ❌ **No Ghost-Cards:** Prohibido combinar borde de 1px con sombras difusas amplias ($> 16\text{px}$). Elegir borde limpio o elevación contenida.
8. ❌ **No Video/GIF above-the-fold:** Cumplimiento total de la constitución de VeneCars.
