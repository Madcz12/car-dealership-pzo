# Spec 002 — Hero

**Sección:** Hero (above the fold)
**Estado:** Listo para plan/implementación
**Depende de:** `constitution.md`, `001-header`

---

## 1. Objetivo

Comunicar en los primeros segundos de visita quién es VeneCars Motors y qué ofrece, generando confianza inmediata mediante un titular fuerte, imagen de producto de alta calidad y llamadas a la acción claras — sin recurrir a video ni GIF.

---

## 2. Alcance

Incluye: layout dividido (texto + imagen), titular, subtítulo, dos CTAs, barra de trust-signals inmediatamente debajo del hero.

No incluye: barra de marcas representadas (ver `003-marcas`), catálogo (ver `004-catalogo`).

---

## 3. Criterios de aceptación (EARS)

1. **CUANDO** la página carga, **EL sistema DEBE** mostrar el Hero en un layout dividido: bloque de texto a un lado (desktop) e imagen estática de un vehículo insignia al otro, apilados verticalmente en mobile (imagen primero o texto primero — decidir en `plan.md`, priorizando legibilidad del titular).
2. **SIEMPRE**, el Hero **NO DEBE** contener ningún elemento `<video>`, `<gif>` animado, ni imágenes en formato GIF.
3. **CUANDO** se renderiza el titular, **EL sistema DEBE** usar un mensaje tipo pregunta retórica coherente con el lenguaje de marca (ej. "¿Por qué cada vez más venezolanos eligen un VeneCars?"), en tipografía de peso fuerte según la constitución.
4. **CUANDO** el usuario hace clic en el CTA primario ("Ver catálogo"), **EL sistema DEBE** desplazar el scroll hasta la sección de catálogo (`004-catalogo`).
5. **CUANDO** el usuario hace clic en el CTA secundario ("Hablar con un asesor"), **EL sistema DEBE** abrir el enlace de WhatsApp (mismo comportamiento que en `001-header`).
6. **CUANDO** se renderiza el Hero, **EL sistema DEBE** mostrar una barra de trust-signals debajo (mínimo 3 elementos: ej. "Años en el mercado", "Garantía de fábrica", "Financiamiento a la medida"), cada uno con ícono simple + texto corto.
7. **CUANDO** el ancho de pantalla es menor a 768px, **EL sistema DEBE** reducir el tamaño del titular de forma proporcional sin romper el layout ni forzar scroll horizontal.
8. **SIEMPRE**, la imagen del vehículo **DEBE** tener fondo tipo estudio/claro (no el registro oscuro con luces de neón usado en otras piezas de marketing de Instagram).

---

## 4. Restricciones (heredadas de `constitution.md`)

- Fondo del Hero: claro (blanco o gris piedra), NO oscuro/neón.
- Sin autoplay, sin parallax agresivo.
- Imagen optimizada (WebP si es posible) para no penalizar performance/LCP.
- Paleta y tipografía conforme a Sección 3 de la constitución.

---

## 5. Fuera de alcance

- Galería o carrusel de múltiples vehículos en el Hero (eso vive en `004-catalogo`).
- Formulario de cotización embebido directamente en el Hero.

---

## 6. Notas para el agente

- Usar como placeholder de imagen un vehículo genérico de alta calidad hasta que el cliente confirme cuál modelo quiere destacar (Grandlion, V-Online, u otro) — marcar como `TODO`.
- Las cifras de la barra de trust-signals (años en el mercado, etc.) son datos reales del cliente que aún no tenemos — usar placeholders claramente marcados (ej. "[X] años en el mercado") en vez de inventar números.
