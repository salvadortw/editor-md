# 📝 Live Markdown Editor

Una herramienta de productividad web enfocada en la escritura técnica y la renderización en tiempo real. Este editor permite gestionar múltiples documentos, aplicar estilos personalizados y exportar contenido en diversos formatos, todo ello ejecutándose localmente en el navegador sin necesidad de una base de datos externa.

## 🚀 Características Principales

- **Live Preview:** Renderizado en tiempo real de Markdown a HTML conforme escribes.
- **Gestión Multi-documento:** Crea, edita y organiza múltiples archivos de texto desde una única interfaz.
- **Persistencia de Datos (Offline First):** Tus documentos se guardan automáticamente en tu navegador usando **IndexedDB**, garantizando que no pierdas información si cierras la pestaña o pierdes conexión.
- **Exportación Versátil:** Descarga tus documentos en formatos **PDF, HTML o TXT** con un solo clic.
- **Interfaz Personalizable:** Cambia dinámicamente entre **Modos Claro y Oscuro** mediante Chakra UI.
- **Estadísticas en Tiempo Real:** Visualización instantánea de recuento de palabras, caracteres y métricas de lectura.

## 🛠️ Stack Tecnológico

- **Framework:** React + Vite.
- **Editor de Código:** [Ace Editor](https://ace.c9.io/) (potente editor para una experiencia de escritura profesional).
- **Base de Datos Local:** **Dexie.js** (wrapper amigable para IndexedDB).
- **Interfaz y Estilos:** Chakra UI (componentes accesibles y rápidos).
- **Procesamiento Markdown:** `marked` (parser rápido y seguro).
- **Generación de Archivos:** `html2pdf` (conversión de DOM a PDF).

## 🧠 Decisiones Técnicas y Arquitectura

- **Almacenamiento Local Robusto:** Se implementó **Dexie.js** para interactuar con IndexedDB. A diferencia del `LocalStorage` tradicional, esta arquitectura permite manejar grandes volúmenes de datos y consultas complejas de manera asíncrona, asegurando que la interfaz de usuario nunca se bloquee.
- **Rendimiento:** Se optimizó el renderizado del parser `marked` para minimizar el impacto en el *main thread* al escribir, garantizando una escritura fluida incluso en documentos extensos.
- **Arquitectura de Componentes:** Uso de hooks personalizados para desacoplar la lógica de guardado (persistence layer) de la lógica de presentación (UI).

## 🔧 Instalación y Configuración Local

1. **Clonar el repositorio:**

```bash
git clone https://github.com/salvadortw/editor-md.git
cd editor-md
```

2. **Instalar dependencias:**

```bash
npm install
```

3. **Iniciar el modo desarrollo:**

```bash
npm run dev
```

La aplicación estará corriendo en `http://localhost:5173`.

## 📈 Roadmap

- [ ] Implementar un sistema de "Auto-save" con debounce para optimizar escrituras en la base de datos.
  
- [ ] Integración con servicios de nube (Google Drive/Dropbox) para backup externo.
