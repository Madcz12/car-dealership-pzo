# Constitution — VeneCars Motors Landing Page

> Este documento define los principios no-negociables del proyecto. Toda especificación (`spec.md`), plan técnico (`plan.md`) y tarea de implementación DEBE respetar estas reglas. Si el agente detecta un conflicto entre una tarea y este documento, la constitución tiene prioridad y debe señalarse antes de continuar.

**Proyecto:** Landing page corporativa — VeneCars Motors
**Tipo de proyecto:** Sitio web estático/frontend (prototipo → producción)
**Referencia base:** `PRD_VeneCars_Motors_Landing.md`
**Versión:** 1.0

---

## 1. Propósito del proyecto

Construir una landing page profesional para una concesionaria de vehículos 0km (marcas Venucia y ZXAuto) ubicada en Puerto Ordaz, Venezuela, que además ofrece consignación de vehículos, servicio técnico y venta de repuestos. El sitio debe generar leads calificados vía WhatsApp/formulario y reforzar credibilidad institucional.

---

## 2. Stack técnico (no-negociable)

- **Framework:** React 18+ con TypeScript (strict mode habilitado). Componentes funcionales + Hooks — no se permiten class components.
- **Estilos:** Tailwind CSS. Prohibido escribir CSS custom salvo casos justificados (ej. animaciones muy específicas) — en esos casos, documentar el motivo en el `plan.md` de la sección correspondiente.
- **Bundler/tooling:** Vite (recomendado para este tipo de proyecto — arranque rápido, HMR, buen soporte de TS out of the box).
- **Tokens de marca:** la paleta y tipografía de la Sección 3 de este documento DEBEN definirse en `tailwind.config.ts` como colores/fuentes nombrados (ej. `brand-navy`, `brand-accent`, `brand-gray`), nunca como valores hex sueltos dentro de los componentes.
- **Responsive:** mobile-first obligatorio, usando los breakpoints por defecto de Tailwind (`sm`, `md`, `lg`, `xl`) salvo justificación en contrario. Breakpoints de referencia: mobile (<768px), tablet (768–1024px), desktop (>1024px).
- **Sin dependencias de backend** en la fase de prototipo — datos de catálogo pueden vivir en un archivo `.ts`/`.json` tipado localmente hasta que se defina una solución de CMS/backend.
- **Rendimiento:** imágenes optimizadas (WebP cuando sea posible), sin librerías innecesarias, Lighthouse score objetivo ≥ 85 en Performance y Accessibility.
- **Accesibilidad:** contraste de texto AA mínimo, navegación por teclado funcional, atributos `alt` en todas las imágenes.
- **Tipado:** interfaces/types explícitos para todas las entidades de datos (ej. `Vehicle`, `Testimonial`) en un archivo `types.ts` centralizado. Prohibido usar `any`.

---

## 3. Reglas de diseño (no-negociables — vienen directo del cliente)

- ❌ **PROHIBIDO** usar video o GIF en el Hero o en cualquier sección principal (above the fold).
- ✅ Tono de marca: **confiable y corporativo** — serio, profesional. NO usar animaciones exageradas, colores saturados dominantes, ni lenguaje visual "juvenil/energético".
- ✅ Estilo general: "profesional pero mid-profile" — evitar tanto el minimalismo de lujo extremo como el corporativismo rígido/aburrido.
- ✅ Fotografía: siempre estática, alta calidad, tratamiento de color consistente entre imágenes.
- ✅ Micro-interacciones permitidas: fade/slide sutil al hacer scroll, hover leve en tarjetas. NO carruseles automáticos, NO parallax agresivo, NO autoplay de ningún tipo.

### Paleta de color (fija — no debe alterarse sin aprobación del cliente)

| Color | Hex de referencia (ajustar con asset real del logo) | Uso |
|---|---|---|
| Azul marino (primario) | `#0B2447` (aprox.) | Titulares, header, elementos de marca |
| Blanco | `#FFFFFF` | Fondos principales |
| Gris piedra (secundario) | `#E5E7EB` (aprox.) | Fondos alternos, separadores |
| Rojo (acento — uso puntual) | `#C0272D` (aprox.) | CTAs destacados, badges. NUNCA como color dominante de una sección completa |
| Negro | `#111111` | Texto secundario, detalles |

### Tipografía

- Titulares: sans-serif de peso fuerte (ej. Manrope, Söhne o equivalente).
- Cuerpo: sans-serif neutro (ej. Inter).
- Prohibido usar fuentes decorativas/script.

---

## 4. Estructura de contenido (no-negociable en cuanto a secciones)

El sitio DEBE incluir, en este orden, las secciones definidas en el PRD:

1. Header (sticky, con CTA fijo + WhatsApp flotante)
2. Hero (sin video/gif)
3. Marcas representadas (Venucia, ZXAuto)
4. Catálogo destacado (tabs: Nuevos 0km / Consignación)
5. Servicios (4 columnas: Venta 0km, Consignación, Taller, Repuestos)
6. ¿Por qué elegirnos? (bento-grid de cifras)
7. Financiamiento (pasos + CTA)
8. Testimonios
9. Ubicación y contacto (mapa + formulario + WhatsApp)
10. Footer

Cualquier cambio en esta estructura debe reflejarse primero en `spec.md`, nunca improvisarse durante la implementación.

---

## 5. Convenciones de código

- Componentes React: `PascalCase` (ej. `VehicleCard.tsx`, `HeroSection.tsx`). Un componente por archivo.
- Carpeta sugerida: `src/components/` (componentes reutilizables) y `src/sections/` (una sección de la landing = un componente de sección, mapeado 1:1 con cada carpeta de `specs/`).
- Hooks personalizados: `useNombreDelHook.ts`, prefijo `use` obligatorio.
- Clases de Tailwind: aplicar directamente en JSX; si una combinación se repite más de 2-3 veces, extraer a un componente, no a una clase CSS custom.
- Props de cada componente deben tener su `interface` explícita (ej. `interface VehicleCardProps { ... }`), definida en el mismo archivo o en `types.ts` si es compartida.
- Comentarios en el código solo donde la lógica no sea autoexplicativa.
- Un commit lógico = una tarea de `tasks.md`. No mezclar cambios de secciones distintas en un mismo commit.
- Idioma del contenido visible: **español** (Venezuela). Idioma del código/comentarios: inglés o español, mantener consistencia.

---

## 6. Datos de negocio de referencia (para evitar alucinaciones del agente)

- Nombre comercial: **VeneCars Motors**
- Ubicación: Puerto Ordaz, Estado Bolívar, Venezuela — Av. Caroní, al lado de la estación de servicio Paseo Caroní 1.
- Servicios reales: compra, venta y consignación de vehículos; servicio técnico; venta de repuestos.
- Marcas representadas: Venucia, ZXAuto (modelos conocidos: Grandlion, V-Online).
- Canal de contacto principal: WhatsApp / Instagram (@venecarspzo).

El agente NO debe inventar datos de contacto, precios, direcciones o marcas adicionales que no estén en el PRD o confirmados por el cliente.

---

## 7. Fuera de alcance (fase actual)

- Backend/CMS funcional para gestión de inventario.
- Simulador de financiamiento funcional (solo diseño visual del flujo en esta fase).
- Pasarela de pagos.
- Multi-idioma.

Cualquier tarea que implique estos puntos debe marcarse como "fuera de alcance" y no ejecutarse sin confirmación explícita.

---

## 8. Criterio de validación general

Antes de dar por completada cualquier sección implementada, debe cumplir:

- [ ] Responsive correcto en mobile, tablet y desktop.
- [ ] Cero video/gif en Hero y secciones principales.
- [ ] Paleta y tipografía conformes a la Sección 3.
- [ ] Sin datos inventados fuera de la Sección 6.
- [ ] Accesibilidad básica (contraste, alt text, navegación por teclado).
- [ ] Sin animaciones/autoplay agresivos.

---

## 9. Prioridad de este documento

Si en algún momento una especificación (`spec.md`), un plan (`plan.md`) o una tarea entra en conflicto con esta constitución, el agente debe detenerse y señalar el conflicto explícitamente antes de continuar con la implementación. Esta constitución solo puede modificarse con confirmación explícita del responsable del proyecto — no debe alterarse automáticamente para "resolver" un conflicto de implementación.
