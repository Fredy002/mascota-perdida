import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
export default function DownloadPDFSimple() {
    const flyerRef = useRef(null);
    const downloadPDF = async () => {
        if (!flyerRef.current)
            return;
        try {
            // Importar las librerías dinámicamente
            const html2canvas = (await import("html2canvas")).default;
            const jsPDF = (await import("jspdf")).default;
            // Capturar el contenido como imagen con dimensiones específicas
            const canvas = await html2canvas(flyerRef.current, {
                scale: 1,
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
    return (_jsxs("div", { children: [_jsx("div", { ref: flyerRef, style: { display: "none" }, children: _jsxs("div", { className: "flyer-print", children: [_jsx("h1", { children: "\uD83C\uDF1F \u00A1SE PERDI\u00D3 MI PERRITA ISABELA! \uD83C\uDF1F" }), _jsx("h2", { children: "\u00BFLa has visto? \u00A1Por favor, ay\u00FAdanos a encontrarla!" }), _jsx("div", { className: "photo-placeholder-print", children: _jsx("img", { src: "/isabela.jpg", alt: "Isabela" }) }), _jsxs("div", { className: "info-print", children: [_jsx("strong", { children: "\uD83D\uDCCC Nombre:" }), " Isabela", _jsx("br", {}), _jsx("strong", { children: "\uD83D\uDC36 Raza:" }), " Peque\u00F1a mestiza \u2014 pelaje blanco con manchas marrones en orejas y cabeza", _jsx("br", {}), _jsx("strong", { children: "\uD83D\uDC40 Caracter\u00EDsticas:" }), " Ojos grandes y expresivos, nariz rosada, orejas ca\u00EDdas, tama\u00F1o peque\u00F1o", _jsx("br", {}), _jsx("strong", { children: "\uD83D\uDCCD \u00DAltima vez vista:" }), " Cerca al ", _jsx("strong", { children: "\u00D3valo Chama" }), ", por la ", _jsx("strong", { children: "Avenida Universitaria" }), ", cerca a la ", _jsx("strong", { children: "Avenida Pachac\u00FAtec" }), _jsx("br", {}), _jsx("strong", { children: "\uD83D\uDCC5 Fecha de desaparici\u00F3n:" }), " [Indica la fecha, ej: 15 de abril de 2025]"] }), _jsxs("div", { className: "contact-print", children: [_jsx("strong", { children: "\uD83D\uDCDE \u00A1LL\u00C1MAME SI LA VES O SABES ALGO!" }), _jsx("br", {}), "Tel\u00E9fono: ", _jsx("a", { href: "tel:+51999888777", children: "+51 999 888 777" }), _jsx("br", {}), "WhatsApp: ", _jsx("a", { href: "https://wa.me/51999888777", children: "Haz clic aqu\u00ED" }), _jsx("br", {}), "Correo: ", _jsx("a", { href: "mailto:tucorreo@example.com", children: "tucorreo@example.com" }), _jsx("br", {}), _jsx("br", {}), "\uD83D\uDCB0 ", _jsx("strong", { children: "RECOMPENSA por su retorno seguro." })] }), _jsxs("div", { className: "share-print", children: ["\uD83D\uDCE2 ", _jsx("strong", { children: "\u00A1POR FAVOR, COMPARTAN ESTE AVISO!" }), _jsx("br", {}), "En redes sociales, grupos de vecinos, tiendas, veterinarias... \u00A1Cada persona cuenta!"] }), _jsx("div", { className: "footer-print", children: "\u2764\uFE0F Gracias por tu coraz\u00F3n y tu ayuda. No la dejemos sola." })] }) }), _jsxs("div", { className: "download-section", children: [_jsx("button", { onClick: downloadPDF, className: "download-btn", children: "\uD83D\uDCC4 Descargar PDF para Imprimir" }), _jsx("p", { className: "download-info", children: "Descarga el volante en formato PDF optimizado para impresi\u00F3n en papel A4" })] })] }));
}
