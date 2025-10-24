@echo off
echo 🚀 Desplegando en GitHub Pages...

echo 📦 Instalando dependencias...
npm install

echo 🔨 Construyendo el proyecto...
npm run build

echo 📁 Copiando archivos de configuración...
copy public\_redirects build\
copy public\404.html build\

echo ✅ ¡Despliegue listo! Los archivos están en la carpeta 'build'
echo 💡 Para desplegar:
echo    1. Sube el contenido de la carpeta 'build' a tu repositorio
echo    2. Configura GitHub Pages para usar la carpeta 'build' como fuente
echo    3. O usa el workflow de GitHub Actions que ya está configurado

pause
