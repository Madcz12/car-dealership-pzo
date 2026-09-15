# VeneCars Motors — Product Specification

> **Register:** `brand` (Corporate Landing Page / Commercial Automotive Showcase)  
> **Status:** Active  
> **Version:** 1.0  
> **Target Region:** Puerto Ordaz, Estado Bolívar, Venezuela

---

## 1. Product Overview & Vision

**VeneCars Motors** es la plataforma web institucional y catálogo comercial de la concesionaria oficial de vehículos 0km (marcas **Venucia** y **ZXAuto**) en Puerto Ordaz, Venezuela. El producto digital actúa como el principal canal de atracción, generación de leads calificados vía WhatsApp y validación de confianza para clientes interesados en:
1. Adquisición de vehículos 0km con respaldo de agencia.
2. Consignación segura y transparente de vehículos seminuevos.
3. Servicio técnico especializado y mantenimiento preventivo/correctivo.
4. Venta y cotización de repuestos originales.

---

## 2. Target Audience & User Personas

| Persona | Perfil & Necesidad | Objetivo en el sitio |
|---|---|---|
| **Comprador 0km** | Profesionales, ejecutivos y familias que buscan un vehículo nuevo con garantía y respaldo local en Guayana. | Conocer ficha técnica, galería visual de modelos (V-Online, Grandlion), opciones de financiamiento y contactar asesor. |
| **Propietario / Consignación** | Dueños de vehículos que desean vender sin riesgos de seguridad, intermediarios informales ni pérdida de tiempo. | Entender el proceso de consignación, requisitos, valoración del vehículo y agendar revisión. |
| **Cliente de Taller / Repuestos** | Clientes con vehículos Venucia, ZXAuto u otras marcas que requieren mantenimiento o repuestos genuinos. | Consultar servicios del taller, disponibilidad de repuestos y solicitar cita o presupuesto inmediato. |

---

## 3. Core Value Proposition & Tone

- **Propuesta de valor:** *"Tu próximo vehículo 0km empieza en VeneCars: respaldo oficial, transparencia en consignación y servicio técnico certificado en Puerto Ordaz."*
- **Tono y Voz de Marca:**
  - **Confiable, institucional y corporativo:** Transmite solidez, seguridad jurídica y seriedad comercial.
  - **Cercano pero respetuoso:** Lenguaje claro en español (Venezuela), sin tecnicismos excesivos ni jerga informal.
  - **Sin estridencias:** Evita el marketing agresivo o "hype" juvenil. La sofisticación viene del orden, la claridad de la información y la calidad visual.

---

## 4. Key Surfaces & Information Architecture

El sitio opera como una Single Page Application (SPA) estructurada en 10 secciones consecutivas con navegación fluida:

```
[Sticky Header + CTA Cotizar]
   │
   ├── 01. Hero Section (Propuesta de valor + badges oficiales, sin video/gif)
   ├── 02. Marcas Representadas (Venucia & ZXAuto)
   ├── 03. Catálogo Destacado (Tabs: 0km / Consignación garantizada)
   ├── 04. Consignación de Vehículos (Proceso en pasos claros + CTA de tasación)
   ├── 05. Servicios Integrales (Venta 0km, Consignación, Taller, Repuestos)
   ├── 06. ¿Por qué elegirnos? (Bento Grid de métricas, respaldo y trayectoria)
   ├── 07. Financiamiento y Asesoría (Pasos de solicitud y requisitos)
   ├── 08. Testimonios y Experiencias de Clientes
   ├── 09. Ubicación y Contacto (Mapa referencial, formulario y canal directo)
   └── 10. Footer Institucional (Datos de contacto, redes y copyright)
   │
[WhatsApp Flotante Persistente (Bottom Right)]
```

---

## 5. Success Metrics & Conversion Goals

- **Primary Conversion:** Clics en enlaces de contacto directo a WhatsApp (`wa.me`) con mensajes pre-configurados contextuales por sección.
- **Secondary Conversion:** Solicitudes enviadas mediante el formulario de cotización/consignación.
- **Engagement:** Exploración del catálogo de vehículos y consulta de servicios de taller y repuestos.

---

## 6. Business Constraints & Non-Negotiables

1. **Cero Video/GIF en el Hero y cabecera:** La constitución del proyecto prohíbe terminantemente elementos de video o GIF above-the-fold para asegurar rendimiento y estética sobria.
2. **Datos reales y consistentes:** No inventar marcas no oficiales (únicamente Venucia y ZXAuto como marcas 0km principales). Ubicación fija en Av. Caroní, Puerto Ordaz, Estado Bolívar.
3. **Mobile-First Responsiveness:** Toda la experiencia de usuario debe estar perfectamente optimizada para smartphones, que representan >80% del tráfico de leads en la región.
4. **Arquitectura sin backend inicial:** Todo el catálogo y contenido opera con estructuras de datos tipadas en TypeScript (`types.ts`) listas para conexión a CMS futuro.
