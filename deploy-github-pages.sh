#!/bin/bash

# Script para desplegar en GitHub Pages
echo "🚀 Desplegando en GitHub Pages..."

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# Construir el proyecto
echo "🔨 Construyendo el proyecto..."
npm run build

# Copiar archivos necesarios para GitHub Pages
echo "📁 Copiando archivos de configuración..."
cp public/_redirects build/
cp public/404.html build/

echo "✅ ¡Despliegue listo! Los archivos están en la carpeta 'build'"
echo "💡 Para desplegar:"
echo "   1. Sube el contenido de la carpeta 'build' a tu repositorio"
echo "   2. Configura GitHub Pages para usar la carpeta 'build' como fuente"
echo "   3. O usa el workflow de GitHub Actions que ya está configurado"
