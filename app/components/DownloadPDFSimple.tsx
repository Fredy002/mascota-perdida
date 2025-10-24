import { useRef } from "react";

export default function DownloadPDFSimple() {
  const flyerRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    if (!flyerRef.current) return;

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
    } catch (error) {
      console.error("Error al generar PDF:", error);
      alert("Error al generar el PDF. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div>
      {/* Referencia al contenido para capturar */}
      <div ref={flyerRef} style={{ display: "none" }}>
        <div className="flyer-print">
          <h1>🌟 ¡SE PERDIÓ MI PERRITA ISABELA! 🌟</h1>
          <h2>¿La has visto? ¡Por favor, ayúdanos a encontrarla!</h2>

          <div className="photo-placeholder-print">
            <img src="/isabela.jpg" alt="Isabela" />
          </div>

          <div className="info-print">
            <strong>📌 Nombre:</strong> Isabela<br />
            <strong>🐶 Raza:</strong> Pequeña mestiza — pelaje blanco con manchas marrones en orejas y cabeza<br />
            <strong>👀 Características:</strong> Ojos grandes y expresivos, nariz rosada, orejas caídas, tamaño pequeño<br />
            <strong>📍 Última vez vista:</strong> Cerca al <strong>Óvalo Chama</strong>, por la <strong>Avenida Universitaria</strong>, cerca a la <strong>Avenida Pachacútec</strong><br />
            <strong>📅 Fecha de desaparición:</strong> [Indica la fecha, ej: 15 de abril de 2025]
          </div>

          <div className="contact-print">
            <strong>📞 ¡LLÁMAME SI LA VES O SABES ALGO!</strong><br />
            Teléfono: <a href="tel:+51999888777">+51 999 888 777</a><br />
            WhatsApp: <a href="https://wa.me/51999888777">Haz clic aquí</a><br />
            Correo: <a href="mailto:tucorreo@example.com">tucorreo@example.com</a><br />
            <br />
            💰 <strong>RECOMPENSA por su retorno seguro.</strong>
          </div>

          <div className="share-print">
            📢 <strong>¡POR FAVOR, COMPARTAN ESTE AVISO!</strong><br />
            En redes sociales, grupos de vecinos, tiendas, veterinarias... ¡Cada persona cuenta!
          </div>

          <div className="footer-print">
            ❤️ Gracias por tu corazón y tu ayuda. No la dejemos sola.
          </div>
        </div>
      </div>

      {/* Botón para descargar */}
      <div className="download-section">
        <button onClick={downloadPDF} className="download-btn">
          📄 Descargar PDF para Imprimir
        </button>
        <p className="download-info">
          Descarga el volante en formato PDF optimizado para impresión en papel A4
        </p>
      </div>
    </div>
  );
}
