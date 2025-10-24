# ¡Se perdió Isabela! - Proyecto Remix

Una página web para ayudar a encontrar a la perrita perdida Isabela, construida con Remix.

## 🚀 Cómo ejecutar el proyecto

### 1. Instalar dependencias
```bash
npm install
```

### 2. Ejecutar en modo desarrollo
```bash
npm run dev
```

### 3. Abrir en el navegador
Ve a [http://localhost:5173](http://localhost:5173)

## 📁 Estructura del proyecto

```
├── app/
│   ├── routes/
│   │   └── _index.tsx      # Página principal
│   ├── root.tsx            # Layout principal
│   └── styles.css          # Estilos CSS
├── public/
│   └── isabela.jpg         # Imagen de Isabela
├── package.json
├── remix.config.js
└── vite.config.ts
```

## 🛠️ Scripts disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Ejecuta la aplicación en producción
- `npm run typecheck` - Verifica los tipos de TypeScript

## 📱 Características

- ✅ Diseño responsivo
- ✅ Optimizado para móviles
- ✅ Imagen de Isabela incluida
- ✅ Enlaces de contacto funcionales
- ✅ Estructura moderna con Remix
- ✅ **Botón para descargar PDF en formato A4**
- ✅ **Botón para imprimir directamente**
- ✅ Optimizado para impresión

## 🖨️ Funcionalidades de Impresión

### Descargar PDF
- Haz clic en "📄 Descargar PDF para Imprimir"
- Se genera un PDF optimizado en formato A4
- Perfecto para imprimir y distribuir

### Imprimir directamente
- Haz clic en "🖨️ Imprimir Página"
- Se abre el diálogo de impresión del navegador
- Usa Ctrl+P como alternativa rápida

### Optimizaciones para impresión
- Los botones se ocultan automáticamente al imprimir
- Colores optimizados para impresión en blanco y negro
- Layout adaptado para papel A4
