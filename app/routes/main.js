import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import DownloadPDF from "~/components/DownloadPDF";
import PrintButton from "~/components/PrintButton";
export const meta = () => {
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
    const handleInputChange = (field, value) => {
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
        }
        else {
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
            }
            catch (error) {
                console.error('Error al cargar datos guardados:', error);
            }
        }
    }, []);
    return (_jsxs("div", { className: "flyer", children: [_jsx("div", { className: "edit-controls", children: _jsx("button", { onClick: toggleEditMode, className: "edit-btn", children: isEditing ? "👁️ Ver Vista Previa" : "✏️ Editar Contenido" }) }), _jsxs("div", { style: { display: "flex", gap: "10px", justifyContent: "center", marginBottom: "20px", flexWrap: "wrap" }, children: [_jsx("button", { onClick: saveData, style: { padding: "10px 20px", backgroundColor: "#27ae60", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }, children: "\uD83D\uDCBE Guardar" }), _jsx("button", { onClick: loadData, style: { padding: "10px 20px", backgroundColor: "#3498db", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }, children: "\uD83D\uDCC2 Cargar" }), _jsx("button", { onClick: resetData, style: { padding: "10px 20px", backgroundColor: "#e74c3c", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }, children: "\uD83D\uDD04 Restaurar" })] }), isEditing ? (_jsx("h1", { children: _jsx("textarea", { value: flyerData.title, onChange: (e) => handleInputChange('title', e.target.value), style: {
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
                    } }) })) : (_jsx("h1", { children: flyerData.title })), isEditing ? (_jsx("h2", { children: _jsx("textarea", { value: flyerData.subtitle, onChange: (e) => handleInputChange('subtitle', e.target.value), style: {
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
                    } }) })) : (_jsx("h2", { children: flyerData.subtitle })), _jsx("div", { className: "photo-placeholder", children: _jsx("img", { src: "/isabela.jpg", alt: flyerData.name }) }), _jsxs("div", { className: "info", children: [_jsx("strong", { children: "\uD83D\uDCCC Nombre:" }), " ", isEditing ? (_jsx("input", { type: "text", value: flyerData.name, onChange: (e) => handleInputChange('name', e.target.value), style: {
                            padding: "5px",
                            fontSize: "inherit",
                            border: "2px dashed #ccc",
                            borderRadius: "4px",
                            width: "200px"
                        } })) : (flyerData.name), _jsx("br", {}), _jsx("strong", { children: "\uD83D\uDC36 Raza:" }), " ", isEditing ? (_jsx("textarea", { value: flyerData.breed, onChange: (e) => handleInputChange('breed', e.target.value), style: {
                            padding: "5px",
                            fontSize: "inherit",
                            border: "2px dashed #ccc",
                            borderRadius: "4px",
                            width: "300px",
                            resize: "vertical"
                        } })) : (flyerData.breed), _jsx("br", {}), _jsx("strong", { children: "\uD83D\uDC40 Caracter\u00EDsticas:" }), " ", isEditing ? (_jsx("textarea", { value: flyerData.characteristics, onChange: (e) => handleInputChange('characteristics', e.target.value), style: {
                            padding: "5px",
                            fontSize: "inherit",
                            border: "2px dashed #ccc",
                            borderRadius: "4px",
                            width: "300px",
                            resize: "vertical"
                        } })) : (flyerData.characteristics), _jsx("br", {}), _jsx("strong", { children: "\uD83D\uDCCD \u00DAltima vez vista:" }), " ", isEditing ? (_jsx("textarea", { value: flyerData.lastSeen, onChange: (e) => handleInputChange('lastSeen', e.target.value), style: {
                            padding: "5px",
                            fontSize: "inherit",
                            border: "2px dashed #ccc",
                            borderRadius: "4px",
                            width: "300px",
                            resize: "vertical"
                        } })) : (flyerData.lastSeen), _jsx("br", {}), _jsx("strong", { children: "\uD83D\uDCC5 Fecha de desaparici\u00F3n:" }), " ", isEditing ? (_jsx("input", { type: "text", value: flyerData.date, onChange: (e) => handleInputChange('date', e.target.value), style: {
                            padding: "5px",
                            fontSize: "inherit",
                            border: "2px dashed #ccc",
                            borderRadius: "4px",
                            width: "200px"
                        } })) : (flyerData.date)] }), _jsxs("div", { className: "contact", children: [_jsx("strong", { children: "\uD83D\uDCDE \u00A1LL\u00C1MAME SI LA VES O SABES ALGO!" }), _jsx("br", {}), "Tel\u00E9fono: ", isEditing ? (_jsx("input", { type: "text", value: flyerData.phone, onChange: (e) => handleInputChange('phone', e.target.value), style: {
                            padding: "5px",
                            fontSize: "inherit",
                            border: "2px dashed #ccc",
                            borderRadius: "4px",
                            width: "150px"
                        } })) : (_jsx("a", { href: `tel:${flyerData.phone}`, children: flyerData.phone })), _jsx("br", {}), "WhatsApp: ", isEditing ? (_jsx("input", { type: "text", value: flyerData.whatsapp, onChange: (e) => handleInputChange('whatsapp', e.target.value), style: {
                            padding: "5px",
                            fontSize: "inherit",
                            border: "2px dashed #ccc",
                            borderRadius: "4px",
                            width: "200px"
                        } })) : (_jsx("a", { href: flyerData.whatsapp, children: "Haz clic aqu\u00ED" })), _jsx("br", {}), "Correo: ", isEditing ? (_jsx("input", { type: "email", value: flyerData.email, onChange: (e) => handleInputChange('email', e.target.value), style: {
                            padding: "5px",
                            fontSize: "inherit",
                            border: "2px dashed #ccc",
                            borderRadius: "4px",
                            width: "200px"
                        } })) : (_jsx("a", { href: `mailto:${flyerData.email}`, children: flyerData.email })), _jsx("br", {}), _jsx("br", {}), "\uD83D\uDCB0 ", _jsx("strong", { children: isEditing ? (_jsx("textarea", { value: flyerData.reward, onChange: (e) => handleInputChange('reward', e.target.value), style: {
                                padding: "5px",
                                fontSize: "inherit",
                                border: "2px dashed #ccc",
                                borderRadius: "4px",
                                width: "300px",
                                resize: "vertical"
                            } })) : (flyerData.reward) })] }), _jsxs("div", { className: "share", children: ["\uD83D\uDCE2 ", _jsx("strong", { children: isEditing ? (_jsx("textarea", { value: flyerData.shareMessage, onChange: (e) => handleInputChange('shareMessage', e.target.value), style: {
                                padding: "5px",
                                fontSize: "inherit",
                                border: "2px dashed #ccc",
                                borderRadius: "4px",
                                width: "400px",
                                resize: "vertical"
                            } })) : (flyerData.shareMessage) })] }), _jsx("div", { className: "footer", children: isEditing ? (_jsx("textarea", { value: flyerData.footer, onChange: (e) => handleInputChange('footer', e.target.value), style: {
                        padding: "5px",
                        fontSize: "inherit",
                        border: "2px dashed #ccc",
                        borderRadius: "4px",
                        width: "400px",
                        resize: "vertical"
                    } })) : (flyerData.footer) }), _jsx(DownloadPDF, { flyerData: flyerData }), _jsx(PrintButton, {})] }));
}
