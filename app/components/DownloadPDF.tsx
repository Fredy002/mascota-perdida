interface FlyerData {
  title: string;
  subtitle: string;
  name: string;
  breed: string;
  characteristics: string;
  lastSeen: string;
  date: string;
  phone: string;
  whatsapp: string;
  email: string;
  reward: string;
  shareMessage: string;
  footer: string;
}

interface DownloadPDFProps {
  flyerData: FlyerData;
}

export default function DownloadPDF({ flyerData }: DownloadPDFProps) {
  const downloadPDF = async () => {
    try {
      // Importar las librerías dinámicamente
      const html2canvas = (await import("html2canvas")).default;
      const jsPDF = (await import("jspdf")).default;

      // Crear un elemento temporal que contenga solo el contenido del volante
      const flyerElement = document.querySelector('.flyer') as HTMLElement;
      
      if (!flyerElement) {
        alert("No se pudo encontrar el contenido para capturar.");
        return;
      }

      // Crear un elemento temporal con el contenido editado
      const tempElement = document.createElement('div');
      tempElement.className = 'flyer-print';
      tempElement.innerHTML = `
        <h1>${flyerData.title}</h1>
        <h2>${flyerData.subtitle}</h2>
        
        <div class="photo-placeholder-print">
          <img src="/isabela.jpg" alt="${flyerData.name}" />
        </div>
        
        <div class="info-print">
          <strong>📌 Nombre:</strong> ${flyerData.name}<br />
          <strong>🐶 Raza:</strong> ${flyerData.breed}<br />
          <strong>👀 Características:</strong> ${flyerData.characteristics}<br />
          <strong>📍 Última vez vista:</strong> ${flyerData.lastSeen}<br />
          <strong>📅 Fecha de desaparición:</strong> ${flyerData.date}
        </div>
        
        <div class="contact-print">
          <strong>📞 ¡LLÁMAME SI LA VES O SABES ALGO!</strong><br />
          Teléfono: <a href="tel:${flyerData.phone}">${flyerData.phone}</a><br />
          WhatsApp: <a href="${flyerData.whatsapp}">Haz clic aquí</a><br />
          Correo: <a href="mailto:${flyerData.email}">${flyerData.email}</a><br />
          <br />
          💰 <strong>${flyerData.reward}</strong>
        </div>
        
        <div class="share-print">
          📢 <strong>${flyerData.shareMessage}</strong>
        </div>
        
        <div class="footer-print">
          ${flyerData.footer}
        </div>
      `;

      // Configurar el elemento temporal
      tempElement.style.position = "absolute";
      tempElement.style.top = "-9999px";
      tempElement.style.left = "-9999px";
      tempElement.style.width = "794px";
      tempElement.style.height = "1123px";
      tempElement.style.backgroundColor = "#ffffff";
      tempElement.style.overflow = "hidden";
      
      // Agregar temporalmente al DOM
      document.body.appendChild(tempElement);

      // Esperar un momento para que se renderice
      await new Promise(resolve => setTimeout(resolve, 100));

      // Capturar el contenido como imagen
      const canvas = await html2canvas(tempElement, {
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

      // Remover el elemento temporal
      document.body.removeChild(tempElement);

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
    <div className="download-section">
      <button onClick={downloadPDF} className="download-btn">
        📄 Descargar PDF para Imprimir
      </button>
      <p className="download-info">
        Descarga el volante en formato PDF optimizado para impresión en papel A4
      </p>
    </div>
  );
}
