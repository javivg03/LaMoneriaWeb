# Estructura del Proyecto - Vivienda Rural La Monería

Este documento explica cómo está organizada la aplicación para facilitar su entendimiento y mantenimiento.

## 📂 Directorios Principales

### `src/` (Source)
Aquí vive todo el código fuente de la aplicación.
- **`assets/`**: Imágenes estáticas (logos, favicon, imágenes de fondo).
- **`components/`**: Bloques de construcción reutilizables.
  - **`Layout/`**: Componentes estructurales como `Header.tsx` (menú superior) y `Footer.tsx` (pie de página).
  - **`UI/`**: Componentes base de diseño (botones, tarjetas, inputs). Basados en Shadcn UI.
  - **`GDPR/`**: Componentes legales como el banner de cookies.
  - `SEO.tsx`: Componente invisible que gestiona el posicionamiento en buscadores para cada página.
- **`pages/`**: Cada archivo aquí representa una página de la web (Inicio, Galería, Contacto...).
- **`lib/`**: Utilidades y configuraciones internas (ej. configuración de clases CSS).
- `App.tsx`: El "cerebro" que decide qué página mostrar según la dirección web (Rutas).
- `main.tsx`: El punto de entrada principal que arranca React.

### `public/`
Archivos que se sirven tal cual al navegador.
- `robots.txt`: Reglas para los buscadores (Google).
- `sitemap.xml`: Mapa del sitio (si se genera estáticamente).

### `docs/`
Documentación del proyecto (donde estás ahora).

## 📄 Archivos de Configuración Importantes

- `vite.config.ts`: Configuración del servidor de desarrollo y construcción.
- `package.json`: Lista de "ingredientes" (librerías) que necesita el proyecto para funcionar.
- `tailwind.config.ts`: Configuración de los estilos visuales (colores corporativos, fuentes, espaciados).
- `tsconfig.json`: Reglas para escribir buen código TypeScript.

## 🎨 Sistema de Diseño (Estilos)

El diseño se controla principalmente desde `src/index.css` y `tailwind.config.ts`.
- Usamos variables CSS para los colores (ej. `--primary`, `--secondary`) lo que permite cambiar el tema de colores de toda la web desde un solo lugar.
