# 🚀 Guía de Despliegue - Isabela Lost Dog

Esta guía te ayudará a desplegar tu aplicación Remix en Netlify y GitHub Pages.

## 📋 Problemas Solucionados

- ✅ Configuración de Netlify para Remix con SSR
- ✅ Configuración de GitHub Pages para SPA
- ✅ Manejo de rutas client-side
- ✅ Redirecciones para rutas no encontradas

## 🌐 Despliegue en Netlify

### Opción 1: Despliegue Automático (Recomendado)

1. **Conecta tu repositorio a Netlify:**
   - Ve a [netlify.com](https://netlify.com)
   - Conecta tu cuenta de GitHub
   - Selecciona este repositorio
   - Netlify detectará automáticamente la configuración de `netlify.toml`

2. **Configuración automática:**
   - Build command: `npm run build`
   - Publish directory: `build`
   - Node version: 18

### Opción 2: Despliegue Manual

```bash
# Instalar dependencias
npm install

# Construir el proyecto
npm run build

# Subir la carpeta 'build' a Netlify
```

## 🐙 Despliegue en GitHub Pages

### Opción 1: GitHub Actions (Recomendado)

1. **El workflow ya está configurado** en `.github/workflows/deploy.yml`
2. **Habilita GitHub Pages:**
   - Ve a Settings > Pages en tu repositorio
   - Selecciona "GitHub Actions" como fuente
3. **Haz push a la rama main/master** y el despliegue será automático

### Opción 2: Despliegue Manual

```bash
# Ejecutar el script de despliegue
deploy-github-pages.bat

# O manualmente:
npm install
npm run build
# Copiar contenido de 'build' a tu repositorio
```

## 🔧 Configuraciones Importantes

### Para Netlify
- Usa el plugin `@netlify/plugin-remix` para SSR
- Configuración en `netlify.toml`

### Para GitHub Pages
- Configurado como SPA (Single Page Application)
- Archivos `_redirects` y `404.html` para manejo de rutas
- Workflow de GitHub Actions para despliegue automático

## 🐛 Solución de Problemas

### Error: "Ruta /main no encontrada"

**Causa:** Las plataformas de hosting no saben cómo manejar las rutas de Remix.

**Solución aplicada:**
- ✅ Netlify: Plugin de Remix + redirecciones
- ✅ GitHub Pages: Configuración SPA + 404.html

### Error: "404 en rutas directas"

**Solución:** Los archivos `_redirects` y `404.html` redirigen todas las rutas a `index.html` para que React Router las maneje.

## 📁 Archivos de Configuración

- `netlify.toml` - Configuración de Netlify
- `.github/workflows/deploy.yml` - Workflow de GitHub Actions
- `public/_redirects` - Redirecciones para GitHub Pages
- `public/404.html` - Página 404 para GitHub Pages
- `remix.config.js` - Configuración de Remix (SSR deshabilitado para GitHub Pages)

## 🎯 Verificación

Después del despliegue, verifica que:
- ✅ La ruta `/` redirige a `/main`
- ✅ La ruta `/main` funciona correctamente
- ✅ Los enlaces y navegación funcionan
- ✅ El PDF se genera correctamente

## 📞 Soporte

Si tienes problemas:
1. Verifica que todos los archivos de configuración estén presentes
2. Revisa los logs de despliegue en la plataforma
3. Asegúrate de que la versión de Node.js sea 18+
