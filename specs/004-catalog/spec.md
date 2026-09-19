# Spec 004 — Catálogo de Vehículos 0km

**Sección:** Catálogo destacado
**Estado:** Listo para plan/implementación
**Depende de:** `constitution.md`, `003-brands`

> ⚠️ Ajuste de alcance respecto al PRD original: este spec cubre **únicamente vehículos 0km**. La consignación de vehículos usados ya se implementó como sección independiente (`ConsignmentSection`) y tendrá su propio spec (`006-consignacion`) en vez de vivir como tab dentro de esta sección.

---

## 1. Objetivo

Mostrar el inventario de vehículos 0km (Venucia, ZXAuto) en un formato de grid escaneable, con la información mínima necesaria para que el usuario decida si quiere más detalles vía WhatsApp — sin necesidad de una página de detalle propia en esta fase.

---

## 2. Alcance

Incluye: encabezado de sección, filtro opcional por marca, grid de tarjetas de vehículo, comportamiento responsive, CTA de contacto por vehículo.

No incluye: página de detalle individual por vehículo, comparador de modelos, simulador de financiamiento embebido (ver `constitution.md` Sección 7 — fuera de alcance general del proyecto).

---

## 3. Criterios de aceptación (EARS)

1. **CUANDO** la página carga esta sección, **EL sistema DEBE** mostrar un encabezado con: etiqueta corta en rojo (ej. "CATÁLOGO 0KM"), título en negro (ej. "Nuestros Vehículos"), y subtítulo descriptivo — siguiendo el mismo patrón visual ya usado en `005-servicios` (label + título + subtítulo centrado).
2. **CUANDO** existe más de una marca en el catálogo, **EL sistema DEBE** mostrar chips de filtro (ej. "Todos", "Venucia", "ZXAuto") sobre el grid.
3. **CUANDO** el usuario hace clic en un chip de filtro, **EL sistema DEBE** mostrar únicamente los vehículos de esa marca, sin recargar la página, y resaltar visualmente el chip activo.
4. **CUANDO** se renderiza el grid, **EL sistema DEBE** mostrar una tarjeta por vehículo con: fotografía, logo o nombre de marca, nombre del modelo, precio (ej. "$37.500" o "Desde $X"), entre 2 y 4 specs clave como chips pequeños (ej. motor, transmisión, garantía), y un botón CTA ("Ver detalles" o "Consultar disponibilidad").
5. **CUANDO** el usuario pasa el cursor sobre una tarjeta (desktop), **EL sistema DEBE** aplicar una transición sutil (leve zoom de imagen o elevación de sombra, máx. 300ms).
6. **CUANDO** el usuario hace clic en el CTA de una tarjeta, **EL sistema DEBE** abrir WhatsApp con un mensaje predefinido que incluya el nombre del modelo (ej. "Hola, quiero más información sobre el ZXAuto Grandlion").
7. **CUANDO** el ancho de pantalla es igual o mayor a 1024px, **EL sistema DEBE** mostrar el grid en 3 columnas.
8. **CUANDO** el ancho de pantalla está entre 640px y 1023px, **EL sistema DEBE** mostrar el grid en 2 columnas.
9. **CUANDO** el ancho de pantalla es menor a 640px, **EL sistema DEBE** mostrar el grid en 1 columna.
10. **CUANDO** el filtro activo no arroja resultados (caso futuro con más marcas), **EL sistema DEBE** mostrar un mensaje simple indicando que no hay vehículos en esa categoría por el momento.

---

## 4. Restricciones (heredadas de `constitution.md`)

- Sin autoplay ni carrusel dentro de las tarjetas — una imagen estática por vehículo.
- Precios en USD, formato consistente con el resto del sitio (`$X.XXX`, separador de miles con punto, como ya se usa en el material de marca existente).
- Paleta: fondo blanco/gris claro para la sección, badges/etiquetas en rojo de acento, texto principal en negro — mismo lenguaje visual que `005-servicios`.
- Imágenes optimizadas (WebP), con `alt` descriptivo (marca + modelo).
- Datos del vehículo estructurados en un archivo tipado (`Vehicle[]` en `types.ts`), consistente con el patrón ya usado en `PromoSlide` y `ServiceCard`.

---

## 5. Datos de referencia (confirmados — no inventar)

Estos dos vehículos ya están confirmados por material de marketing real del cliente y pueden usarse como datos semilla (verificar vigencia de precio/specs antes de publicar en producción):

| Campo | Vehículo 1 | Vehículo 2 |
|---|---|---|
| Marca | ZXAuto | Venucia |
| Modelo | Grandlion | V-Online |
| Tipo | Pickup 4x4 | SUV |
| Motor | Mitsubishi 2.0L Turbo | Mitsubishi 4 cil. 1.5L Turbo, 187 HP |
| Transmisión | 8 velocidades | Automática dual, 7 velocidades |
| Consumo | No confirmado — `TODO` | 7.1L / 100km |
| Tanque | No confirmado — `TODO` | 60L |
| Garantía | 3 años o 100.000 km | 3 años o 100.000 km |
| Precio | No confirmado — `TODO` | $37.500 |
| Colores disponibles | Azul, Blanco | No confirmado — `TODO` |

---

## 6. Fuera de alcance

- Página de detalle individual por vehículo (URL propia con galería, ficha técnica completa).
- Comparador lado a lado de modelos.
- Filtro por rango de precio o tipo de carrocería (posible fase 2 si el inventario crece).

---

## 7. Notas para el agente

- Usar los dos vehículos de la Sección 5 como datos semilla reales; para los campos marcados `TODO`, usar un placeholder visible (ej. "Consultar" en vez de inventar un número) en vez de completar con datos no confirmados.
- Las fotografías reales de estos vehículos no están disponibles como archivos — usar imágenes de referencia genéricas de alta calidad (pickup / SUV) como placeholder hasta que el cliente entregue las fotos oficiales, marcado como `TODO` en el código.
- El filtro por marca debe ser puramente client-side (sin llamadas a backend), ya que el catálogo completo se carga de una vez desde el archivo de datos tipado.
