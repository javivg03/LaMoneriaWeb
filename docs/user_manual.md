# Manual de Usuario - Vivienda Rural La Monería

Guía práctica para administrar y mantener la página web.

## 📝 Cómo hacer cambios comunes

### 1. Cambiar Textos
La mayoría de los textos están directamente en los archivos de la carpeta `src/pages/`.
- Para cambiar textos de la portada: Edita `src/pages/Home.tsx`.
- Para cambiar la descripción de la casa: Edita `src/pages/Alojamiento.tsx`.
- Para los datos de contacto: Edita `src/pages/Contacto.tsx`.

Simplemente busca el texto que quieres cambiar dentro del archivo (Ctrl+F) y sustitúyelo respetando las comillas.

### 2. Cambiar Imágenes
Las imágenes están en `src/assets/`.
- **Reemplazar una imagen existente**: Guarda la nueva imagen con el **mismo nombre exacto** en esa carpeta.
- **Añadir nuevas fotos a la galería**:
  1. Guarda la foto en `src/assets/`.
  2. Abre `src/pages/Galeria.tsx`.
  3. Importa la imagen al principio del archivo: `import nuevaFoto from '@/assets/nueva-foto.jpg';`.
  4. Añádela a la lista `galleryImages` siguiendo el modelo de las anteriores.

### 3. Actualizar Precios o Teléfono
El teléfono y precios aparecen en varios sitios.
- `Header.tsx`: Menú superior.
- `Home.tsx`: Portada.
- `Contacto.tsx`: Página de contacto.
- `Footer.tsx`: Pie de página.

### 4. Cambiar Colores
Los colores corporativos se definen en `src/index.css`. Busca la sección `:root` y cambia los valores HSL de `--primary`, `--secondary`, etc.

---

## 🚀 Publicar cambios en Internet

Si usas Vercel (recomendado):
1. **Verificar**: Asegúrate de que todo funciona bien en tu ordenador (`npm run dev`).
2. **Construir (opcional)**: Puedes probar si la construcción es correcta con `npm run build`.
3. **Subir**:
   - Si tienes Vercel conectado a GitHub, simplemente haz un "commit" y "push" de tus cambios. Vercel actualizará la web automáticamente.
   - Si usas Vercel CLI, ejecuta `vercel --prod` en la terminal.

Para más detalles técnicos, consulta la **[Guía de Despliegue](./deployment_guide.md)**.
