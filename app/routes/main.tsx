import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from "react";
import DownloadPDF from "~/components/DownloadPDF";
import PrintButton from "~/components/PrintButton";

export const meta: MetaFunction = () => {
  return [
    { title: "¡Se perdió Isabela!" },
    { name: "description", content: "Ayúdanos a encontrar a nuestra querida perrita Isabela" },
  ];
};

export default function Main() {
  const [isEditing, setIsEditing] = useState(false);
  const [flyerData, setFlyerData] = useState({
    title: "🌟 ¡SE PERDIÓ MI PERRITA ISABELA! 🌟",
    subtitle: "¿La has visto? ¡Por favor, ayúdanos a encontrarla!",
    name: "Isabela",
    breed: "Pequeña mestiza — pelaje blanco con manchas marrones en orejas y cabeza",
    characteristics: "Ojos grandes y expresivos, nariz rosada, orejas caídas, tamaño pequeño",
    lastSeen: "Cerca al Óvalo Chama, por la Avenida Universitaria, cerca a la Avenida Pachacútec",
    date: "[Indica la fecha, ej: 15 de abril de 2025]",
    phone: "+51 999 888 777",
    whatsapp: "https://wa.me/51999888777",
    email: "tucorreo@example.com",
    reward: "RECOMPENSA por su retorno seguro.",
    shareMessage: "¡POR FAVOR, COMPARTAN ESTE AVISO! En redes sociales, grupos de vecinos, tiendas, veterinarias... ¡Cada persona cuenta!",
    footer: "❤️ Gracias por tu corazón y tu ayuda. No la dejemos sola."
  });

  const handleInputChange = (field: string, value: string) => {
    console.log('Input change:', field, value);
    setFlyerData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleEditMode = () => {
    console.log('Toggle edit mode:', !isEditing);
    setIsEditing(!isEditing);
  };

  const saveData = () => {
    localStorage.setItem('flyerData', JSON.stringify(flyerData));
    alert('Datos guardados exitosamente!');
  };

  const loadData = () => {
    const savedData = localStorage.getItem('flyerData');
    if (savedData) {
      setFlyerData(JSON.parse(savedData));
      alert('Datos cargados exitosamente!');
    } else {
      alert('No hay datos guardados.');
    }
  };

  const resetData = () => {
    if (confirm('¿Estás seguro de que quieres restaurar los datos originales?')) {
      setFlyerData({
        title: "🌟 ¡SE PERDIÓ MI PERRITA ISABELA! 🌟",
        subtitle: "¿La has visto? ¡Por favor, ayúdanos a encontrarla!",
        name: "Isabela",
        breed: "Pequeña mestiza — pelaje blanco con manchas marrones en orejas y cabeza",
        characteristics: "Ojos grandes y expresivos, nariz rosada, orejas caídas, tamaño pequeño",
        lastSeen: "Cerca al Óvalo Chama, por la Avenida Universitaria, cerca a la Avenida Pachacútec",
        date: "[Indica la fecha, ej: 15 de abril de 2025]",
        phone: "+51 999 888 777",
        whatsapp: "https://wa.me/51999888777",
        email: "tucorreo@example.com",
        reward: "RECOMPENSA por su retorno seguro.",
        shareMessage: "¡POR FAVOR, COMPARTAN ESTE AVISO! En redes sociales, grupos de vecinos, tiendas, veterinarias... ¡Cada persona cuenta!",
        footer: "❤️ Gracias por tu corazón y tu ayuda. No la dejemos sola."
      });
    }
  };

  // Cargar datos guardados al iniciar la página
  useEffect(() => {
    const savedData = localStorage.getItem('flyerData');
    if (savedData) {
      try {
        setFlyerData(JSON.parse(savedData));
      } catch (error) {
        console.error('Error al cargar datos guardados:', error);
      }
    }
  }, []);

  return (
    <div className="flyer">
      {/* Botón de edición */}
      <div className="edit-controls">
        <button onClick={toggleEditMode} className="edit-btn">
          {isEditing ? "👁️ Ver Vista Previa" : "✏️ Editar Contenido"}
        </button>
      </div>

      {/* Botones de acción */}
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "20px", flexWrap: "wrap" }}>
        <button onClick={saveData} style={{ padding: "10px 20px", backgroundColor: "#27ae60", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}>💾 Guardar</button>
        <button onClick={loadData} style={{ padding: "10px 20px", backgroundColor: "#3498db", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}>📂 Cargar</button>
        <button onClick={resetData} style={{ padding: "10px 20px", backgroundColor: "#e74c3c", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}>🔄 Restaurar</button>
      </div>

      {/* Volante con campos editables */}
      {isEditing ? (
        <h1>
          <textarea 
            value={flyerData.title} 
            onChange={(e) => handleInputChange('title', e.target.value)}
            style={{ 
              width: "100%", 
              padding: "10px", 
              fontSize: "2.5em", 
              fontWeight: "bold",
              color: "#e74c3c",
              border: "2px dashed #ccc", 
              borderRadius: "6px", 
              boxSizing: "border-box",
              textAlign: "center",
              resize: "none",
              fontFamily: "inherit"
            }}
          />
        </h1>
      ) : (
        <h1>{flyerData.title}</h1>
      )}

      {isEditing ? (
        <h2>
          <textarea 
            value={flyerData.subtitle} 
            onChange={(e) => handleInputChange('subtitle', e.target.value)}
            style={{ 
              width: "100%", 
              padding: "10px", 
              fontSize: "1.5em", 
              color: "#3498db",
              border: "2px dashed #ccc", 
              borderRadius: "6px", 
              boxSizing: "border-box",
              textAlign: "center",
              resize: "none",
              fontFamily: "inherit"
            }}
          />
        </h2>
      ) : (
        <h2>{flyerData.subtitle}</h2>
      )}

      <div className="photo-placeholder">
        <img src="/isabela.jpg" alt={flyerData.name} />
      </div>

      <div className="info">
        <strong>📌 Nombre:</strong> {isEditing ? (
          <input 
            type="text" 
            value={flyerData.name} 
            onChange={(e) => handleInputChange('name', e.target.value)}
            style={{ 
              padding: "5px", 
              fontSize: "inherit", 
              border: "2px dashed #ccc", 
              borderRadius: "4px", 
              width: "200px"
            }}
          />
        ) : (
          flyerData.name
        )}<br />
        <strong>🐶 Raza:</strong> {isEditing ? (
          <textarea 
            value={flyerData.breed} 
            onChange={(e) => handleInputChange('breed', e.target.value)}
            style={{ 
              padding: "5px", 
              fontSize: "inherit", 
              border: "2px dashed #ccc", 
              borderRadius: "4px", 
              width: "300px",
              resize: "vertical"
            }}
          />
        ) : (
          flyerData.breed
        )}<br />
        <strong>👀 Características:</strong> {isEditing ? (
          <textarea 
            value={flyerData.characteristics} 
            onChange={(e) => handleInputChange('characteristics', e.target.value)}
            style={{ 
              padding: "5px", 
              fontSize: "inherit", 
              border: "2px dashed #ccc", 
              borderRadius: "4px", 
              width: "300px",
              resize: "vertical"
            }}
          />
        ) : (
          flyerData.characteristics
        )}<br />
        <strong>📍 Última vez vista:</strong> {isEditing ? (
          <textarea 
            value={flyerData.lastSeen} 
            onChange={(e) => handleInputChange('lastSeen', e.target.value)}
            style={{ 
              padding: "5px", 
              fontSize: "inherit", 
              border: "2px dashed #ccc", 
              borderRadius: "4px", 
              width: "300px",
              resize: "vertical"
            }}
          />
        ) : (
          flyerData.lastSeen
        )}<br />
        <strong>📅 Fecha de desaparición:</strong> {isEditing ? (
          <input 
            type="text" 
            value={flyerData.date} 
            onChange={(e) => handleInputChange('date', e.target.value)}
            style={{ 
              padding: "5px", 
              fontSize: "inherit", 
              border: "2px dashed #ccc", 
              borderRadius: "4px", 
              width: "200px"
            }}
          />
        ) : (
          flyerData.date
        )}
      </div>

      <div className="contact">
        <strong>📞 ¡LLÁMAME SI LA VES O SABES ALGO!</strong><br />
        Teléfono: {isEditing ? (
          <input 
            type="text" 
            value={flyerData.phone} 
            onChange={(e) => handleInputChange('phone', e.target.value)}
            style={{ 
              padding: "5px", 
              fontSize: "inherit", 
              border: "2px dashed #ccc", 
              borderRadius: "4px", 
              width: "150px"
            }}
          />
        ) : (
          <a href={`tel:${flyerData.phone}`}>{flyerData.phone}</a>
        )}<br />
        WhatsApp: {isEditing ? (
          <input 
            type="text" 
            value={flyerData.whatsapp} 
            onChange={(e) => handleInputChange('whatsapp', e.target.value)}
            style={{ 
              padding: "5px", 
              fontSize: "inherit", 
              border: "2px dashed #ccc", 
              borderRadius: "4px", 
              width: "200px"
            }}
          />
        ) : (
          <a href={flyerData.whatsapp}>Haz clic aquí</a>
        )}<br />
        Correo: {isEditing ? (
          <input 
            type="email" 
            value={flyerData.email} 
            onChange={(e) => handleInputChange('email', e.target.value)}
            style={{ 
              padding: "5px", 
              fontSize: "inherit", 
              border: "2px dashed #ccc", 
              borderRadius: "4px", 
              width: "200px"
            }}
          />
        ) : (
          <a href={`mailto:${flyerData.email}`}>{flyerData.email}</a>
        )}<br />
        <br />
        💰 <strong>{isEditing ? (
          <textarea 
            value={flyerData.reward} 
            onChange={(e) => handleInputChange('reward', e.target.value)}
            style={{ 
              padding: "5px", 
              fontSize: "inherit", 
              border: "2px dashed #ccc", 
              borderRadius: "4px", 
              width: "300px",
              resize: "vertical"
            }}
          />
        ) : (
          flyerData.reward
        )}</strong>
      </div>

      <div className="share">
        📢 <strong>{isEditing ? (
          <textarea 
            value={flyerData.shareMessage} 
            onChange={(e) => handleInputChange('shareMessage', e.target.value)}
            style={{ 
              padding: "5px", 
              fontSize: "inherit", 
              border: "2px dashed #ccc", 
              borderRadius: "4px", 
              width: "400px",
              resize: "vertical"
            }}
          />
        ) : (
          flyerData.shareMessage
        )}</strong>
      </div>

      <div className="footer">
        {isEditing ? (
          <textarea 
            value={flyerData.footer} 
            onChange={(e) => handleInputChange('footer', e.target.value)}
            style={{ 
              padding: "5px", 
              fontSize: "inherit", 
              border: "2px dashed #ccc", 
              borderRadius: "4px", 
              width: "400px",
              resize: "vertical"
            }}
          />
        ) : (
          flyerData.footer
        )}
      </div>

      <DownloadPDF flyerData={flyerData} />
      <PrintButton />
    </div>
  );
}
