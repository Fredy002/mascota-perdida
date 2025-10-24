# 🐶 Volante de Búsqueda de Isabela

Una aplicación web moderna para crear y personalizar volantes de búsqueda de mascotas perdidas, construida con Remix.

## ✨ Características

- 🎨 **Edición inline** - Edita directamente sobre el diseño del volante
- 📄 **Generación de PDF** - Descarga volantes en formato A4 para imprimir
- 🖨️ **Impresión directa** - Imprime desde el navegador
- 💾 **Guardado local** - Guarda tus datos en el navegador
- 📱 **Responsive** - Funciona en móviles y escritorio
- 🎯 **Fácil de usar** - Interfaz intuitiva y simple

## 🚀 Instalación y Uso

### Desarrollo
```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Abrir en navegador
# http://localhost:3000
```

### Producción
```bash
# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## 📋 Funcionalidades

### ✏️ Edición de Contenido
- Título y subtítulo del volante
- Información de la mascota (nombre, raza, características)
- Ubicación y fecha de desaparición
- Datos de contacto (teléfono, WhatsApp, email)
- Mensajes personalizados

### 💾 Gestión de Datos
- **Guardar** - Guarda los datos en el navegador
- **Cargar** - Carga datos previamente guardados
- **Restaurar** - Vuelve a los datos originales

### 📄 Generación de PDF
- PDF optimizado en formato A4
- Solo el contenido del volante (sin botones)
- Alta calidad de imagen
- Listo para imprimir

## 🛠️ Tecnologías

- **Remix** - Framework web moderno
- **React** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático
- **Vite** - Herramienta de build
- **html2canvas** - Generación de imágenes
- **jsPDF** - Generación de PDF

## 📁 Estructura del Proyecto

```
├── app/
│   ├── routes/
│   │   ├── _index.tsx      # Redirección a /main
│   │   └── main.tsx        # Página principal
│   ├── components/
│   │   ├── DownloadPDF.tsx # Generación de PDF
│   │   └── PrintButton.tsx # Botón de impresión
│   ├── root.tsx            # Layout principal
│   └── styles.css          # Estilos CSS
├── public/
│   ├── isabela.jpg         # Imagen de Isabela
│   └── favicon.svg         # Favicon personalizado
└── package.json            # Dependencias y scripts
```

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod
```

## 📝 Uso

1. **Abrir la aplicación** en tu navegador
2. **Hacer clic en "Editar Contenido"** para activar el modo de edición
3. **Modificar los campos** que necesites (aparecen con bordes punteados)
4. **Guardar los cambios** usando el botón "Guardar"
5. **Ver la vista previa** para revisar el resultado
6. **Descargar el PDF** para imprimir y distribuir

## 🎯 Características Técnicas

- **Persistencia local** - Los datos se guardan en localStorage
- **Optimización de imágenes** - Generación de PDF de alta calidad
- **Responsive design** - Adaptable a diferentes dispositivos
- **Carga rápida** - Optimizado para rendimiento
- **Sin dependencias externas** - Funciona completamente en el navegador

## 📞 Soporte

Si tienes algún problema o sugerencia, por favor abre un issue en el repositorio.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

**¡Ayuda a encontrar a Isabela y otras mascotas perdidas!** 🐶❤️