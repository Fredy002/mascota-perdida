import type { MetaFunction } from "@remix-run/node";
import DownloadPDF from "~/components/DownloadPDF";
import PrintButton from "~/components/PrintButton";

export const meta: MetaFunction = () => {
  return [
    { title: "¡Se perdió Isabela!" },
    { name: "description", content: "Ayúdanos a encontrar a nuestra querida perrita Isabela" },
  ];
};

export default function Index() {
  return (
    <div className="flyer">
      <h1>🌟 ¡SE PERDIÓ MI PERRITA ISABELA! 🌟</h1>
      <h2>¿La has visto? ¡Por favor, ayúdanos a encontrarla!</h2>

      <div className="photo-placeholder">
        <img src="/isabela.jpg" alt="Isabela" />
      </div>

      <div className="info">
        <strong>📌 Nombre:</strong> Isabela<br />
        <strong>🐶 Raza:</strong> Pequeña mestiza — pelaje blanco con manchas marrones en orejas y cabeza<br />
        <strong>👀 Características:</strong> Ojos grandes y expresivos, nariz rosada, orejas caídas, tamaño pequeño<br />
        <strong>📍 Última vez vista:</strong> Cerca al <strong>Óvalo Chama</strong>, por la <strong>Avenida Universitaria</strong>, cerca a la <strong>Avenida Pachacútec</strong><br />
        <strong>📅 Fecha de desaparición:</strong> [Indica la fecha, ej: 15 de abril de 2025]
      </div>

      <div className="contact">
        <strong>📞 ¡LLÁMAME SI LA VES O SABES ALGO!</strong><br />
        Teléfono: <a href="tel:+51999888777">+51 999 888 777</a><br />
        WhatsApp: <a href="https://wa.me/51999888777">Haz clic aquí</a><br />
        Correo: <a href="mailto:tucorreo@example.com">tucorreo@example.com</a><br />
        <br />
        💰 <strong>RECOMPENSA por su retorno seguro.</strong>
      </div>

      <div className="share">
        📢 <strong>¡POR FAVOR, COMPARTAN ESTE AVISO!</strong><br />
        En redes sociales, grupos de vecinos, tiendas, veterinarias... ¡Cada persona cuenta!
      </div>

      <div className="footer">
        ❤️ Gracias por tu corazón y tu ayuda. No la dejemos sola.
      </div>

      <DownloadPDF />
      <PrintButton />
    </div>
  );
}
