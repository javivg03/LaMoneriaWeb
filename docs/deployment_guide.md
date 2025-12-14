# Guía de Despliegue - Vivienda Rural La Monería

Esta guía detalla paso a paso cómo llevar tu página web desde tu ordenador a Internet, usando servicios modernos, gratuitos y profesionales.

## Opción Recomendada: Vercel (Rápido y Gratuito)

Vercel es la plataforma estándar para aplicaciones React/Vite. Ofrece un plan gratuito generoso y es muy fácil de usar.

### Prerrequisitos
1. Tener tu código subido a **GitHub** (recomendado) o tener los archivos en tu ordenador.
2. Contar con una cuenta en [Vercel.com](https://vercel.com) (puedes entrar con tu Github/Email).

### Paso 1: Importar proyecto en Vercel
1. Ve a tu [Dashboard de Vercel](https://vercel.com/dashboard).
2. Haz clic en **"Add New..."** -> **"Project"**.
3. Selecciona tu repositorio de GitHub (si lo subiste) o elige "Import Third-Party Git Repository" si lo tienes en otro lado.
   - *Alternativa Manual*: Si instalas `Vercel CLI` en tu ordenador (`npm i -g vercel`), puedes simplemente escribir `vercel` en la terminal del proyecto y seguir los pasos.

### Paso 2: Configuración (Build Settings)
Vercel suele detectar todo automáticamente, pero verifica:
- **Framework Preset**: Vite
- **Root Directory**: `./` (la raíz del proyecto)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

Dale a **"Deploy"**. En 1-2 minutos tu web estará online en una dirección `lo-que-sea.vercel.app`.

---

## Configurar Dominio Personalizado

Si has comprado un dominio (ej. `viviendarurallamoneria.com`) en GoDaddy, ionos, DonDominio, etc.:

1. Ve a tu proyecto en **Vercel** -> **Settings** -> **Domains**.
2. Escribe tu dominio y dale a **Add**.
3. Vercel te dará unos valores para configurar en tu proveedor de dominio (DNS Records):
   - Normalmente un registro **A** apuntando a una IP (ej. `76.76.21.21`).
   - O un registro **CNAME** apuntando a `cname.vercel-dns.com`.
4. Ve a la web donde compraste tu dominio, busca "gestión de DNS" y añade esos registros.
5. Espera unas horas (puede tardar hasta 48h, pero suele ser rápido) y tu dominio funcionará con certificado SSL (candado verde) automático.

---

## Verificación de Producción Local

Antes de subir cambios, puedes probar cómo se verá la web "real" en tu ordenador:

1. Ejecuta el comando de construcción:
   ```bash
   npm run build
   ```
   Esto creará una carpeta `dist/` con la web optimizada.

2. Ejecuta la previsualización:
   ```bash
   npm run preview
   ```
3. La terminal te dará una URL (ej. `http://localhost:4173`) para ver la versión final.

---

## Solución de Problemas Comunes

### Errores de "Case Sensitivity" (Mayúsculas/Minúsculas)
Si en tu ordenador funciona pero en Vercel falla, suele ser porque importaste un archivo con mayúscula/minúscula incorrecta (ej. `component/UI` vs `component/ui`).
- **Solución**: Asegúrate de que tus `import` coincidan EXACTAMENTE con el nombre del archivo en la carpeta.

### Imágenes no cargan
- Asegúrate de que las imágenes están en `src/assets` e importadas en el código, O en la carpeta `public/`.
- Las imágenes en `public/` se referencian con `/` (ej. `/logo.png`).
