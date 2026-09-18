# Spec 003 — Marcas Representadas

**Sección:** Marcas representadas (trust bar)
**Estado:** Listo para plan/implementación
**Depende de:** `constitution.md` (ver excepción de marquesina en Sección 3)

---

## 1. Objetivo

Reforzar la credibilidad institucional de VeneCars Motors mostrando que es distribuidor autorizado de marcas reales (Venucia, ZXAuto), mediante una marquesina de desplazamiento continuo y suave — un patrón visual común en sitios de concesionarias y B2B para comunicar "respaldo de marca" sin ocupar mucho espacio vertical.

---

## 2. Alcance

Incluye: contenedor de ancho completo, pista de logos en loop infinito, comportamiento de pausa (hover/focus/reduced-motion), fade en los bordes laterales.

No incluye: enlaces a páginas oficiales de cada marca (los logos son decorativos, no interactivos, salvo que el cliente pida lo contrario a futuro).

---

## 3. Criterios de aceptación (EARS)

1. **CUANDO** la página carga esta sección, **EL sistema DEBE** mostrar un encabezado corto (ej. "Distribuidor autorizado de") seguido de una pista horizontal con los logos de Venucia y ZXAuto.
2. **SIEMPRE**, la pista de logos **DEBE** desplazarse de forma continua y automática de derecha a izquierda (o izquierda a derecha), en loop infinito y sin saltos visibles entre repeticiones.
3. **CUANDO** solo existen 2 marcas, **EL sistema DEBE** repetir el conjunto de logos las veces necesarias (mínimo 4 repeticiones del par) para que la pista se sienta visualmente poblada y continua, no espaciada o vacía.
4. **CUANDO** el usuario pasa el cursor sobre la marquesina (desktop) o la enfoca por teclado, **EL sistema DEBE** pausar la animación (`animation-play-state: paused`).
5. **CUANDO** el sistema operativo/navegador del usuario tiene activada la preferencia `prefers-reduced-motion: reduce`, **EL sistema DEBE** detener la animación por completo y mostrar los logos en una fila estática.
6. **SIEMPRE**, los bordes izquierdo y derecho del contenedor **DEBEN** aplicar un degradado (mask/gradient) hacia el color de fondo de la sección, para que los logos entren/salgan de forma visualmente suave, no con un corte abrupto.
7. **SIEMPRE**, la velocidad de desplazamiento **DEBE** ser lenta y legible (referencia: un ciclo completo dura entre 20-30 segundos, ajustable en `plan.md` según el ancho final de la pista).
8. **SIEMPRE**, esta sección **NO DEBE** contener video, GIF, ni sonido — únicamente transformación CSS sobre imágenes SVG estáticas de los logos.
9. **CUANDO** el ancho de pantalla es menor a 768px, **EL sistema DEBE** mantener el mismo comportamiento de marquesina (no se colapsa a lista estática, ya que el movimiento horizontal funciona igual en mobile).

---

## 4. Restricciones (heredadas de `constitution.md`)

- Esta es la única excepción de movimiento automático permitida en todo el sitio — no debe interpretarse como apertura a otros carruseles automáticos.
- Implementación vía Tailwind + un `@keyframes` custom definido en `tailwind.config.ts` (justificado como caso de animación específica, según Sección 5 de la constitución) — no se requiere librería externa salvo que el agente determine que simplifica significativamente el mantenimiento (ej. `react-fast-marquee`), en cuyo caso debe documentarse la decisión en `plan.md`.
- Logos en formato SVG (ya definidos en la convención de assets: `src/assets/images/brands/`).
- Fondo de la sección: blanco o gris claro (`brand-white` / `brand-gray-light`), para que el degradado de los bordes sea consistente.

---

## 5. Fuera de alcance

- Marcas adicionales más allá de Venucia y ZXAuto (se agregan fácilmente a futuro si el cliente suma representaciones).
- Interactividad en los logos (links, tooltips) — son puramente decorativos en esta fase.

---

## 6. Notas para el agente

- Estructurar los logos como un array simple (`BrandLogo[]`) en `types.ts`, para poder agregar marcas nuevas sin tocar el componente.
- Verificar que la duplicación de logos para el loop no cause problemas de accesibilidad (usar `aria-hidden="true"` en las repeticiones duplicadas y dejar solo el primer set legible para lectores de pantalla, con un `aria-label` general en el contenedor como "Marcas representadas: Venucia, ZXAuto").
