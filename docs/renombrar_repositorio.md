# 📝 Instrucciones para Renombrar el Repositorio en GitHub

## Pasos para cambiar el nombre del repositorio

### Opción 1: Desde la Web de GitHub (Más fácil)

1. **Ir a tu repositorio** en GitHub.com
2. Hacer clic en **Settings** (⚙️ Configuración) en la parte superior
3. En la sección **General**, busca el campo **Repository name**
4. Cambiar el nombre de:
   ```
   rio-tinto-retreat-web-main
   ```
   a:
   ```
   ViviendaRuralLaMoneria
   ```
5. Hacer clic en **Rename** (Renombrar)

### Opción 2: Actualizar la referencia local (Después del cambio en GitHub)

Una vez renombrado en GitHub, actualiza la URL remota en tu ordenador:

```bash
git remote set-url origin https://github.com/TU-USUARIO/ViviendaRuralLaMoneria.git
```

Reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub.

### Verificar que se actualizó correctamente

```bash
git remote -v
```

Deberías ver la nueva URL con el nombre `ViviendaRuralLaMoneria`.

---

## ⚠️ Nota Importante

- GitHub redirigirá automáticamente las URLs antiguas a las nuevas, pero es mejor actualizar todos los enlaces.
- Si tienes el proyecto desplegado en Vercel/Netlify, no es necesario hacer nada, se sincronizará automáticamente.
