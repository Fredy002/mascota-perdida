import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function DownloadPDFVisible() {
    const downloadPDF = async () => {
        try {
            // Importar las librerías dinámicamente
            const html2canvas = (await import("html2canvas")).default;
            const jsPDF = (await import("jspdf")).default;
            // Capturar el contenido visible de la página (el flyer principal)
            const flyerElement = document.querySelector('.flyer');
            if (!flyerElement) {
                alert("No se pudo encontrar el contenido para capturar.");
                return;
            }
            // Capturar el contenido como imagen
            const canvas = await html2canvas(flyerElement, {
                scale: 2, // Mayor calidad
                useCORS: true,
                allowTaint: true,
                backgroundColor: "#ffffff",
                logging: false,
                width: 794, // Ancho A4 en píxeles
                height: 1123, // Alto A4 en píxeles
                scrollX: 0,
                scrollY: 0,
            });
            // Crear PDF en formato A4
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF({
                orientation: "portrait",
                unit: "mm",
                format: "a4",
            });
            // Agregar imagen al PDF ocupando toda la página
            pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
            // Descargar el PDF
            pdf.save("isabela-perdida.pdf");
        }
        catch (error) {
            console.error("Error al generar PDF:", error);
            alert("Error al generar el PDF. Por favor, inténtalo de nuevo.");
        }
    };
    return (_jsxs("div", { className: "download-section", children: [_jsx("button", { onClick: downloadPDF, className: "download-btn", children: "\uD83D\uDCC4 Descargar PDF para Imprimir" }), _jsx("p", { className: "download-info", children: "Descarga el volante en formato PDF optimizado para impresi\u00F3n en papel A4" })] }));
}
