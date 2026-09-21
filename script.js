// Configuración de WhatsApp
// Número configurado: +1 (808) 749-3638
const WHATSAPP_NUMBER = "18087493638"; 

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("certificateForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Captura de datos del formulario
        const tipoCertificado = document.getElementById("tipoCertificado").value;
        const nombreCompleto = document.getElementById("nombreCompleto").value.trim();
        const tipoDoc = document.getElementById("tipoDoc").value;
        const numDoc = document.getElementById("numDoc").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const tipoEmpresa = document.getElementById("tipoEmpresa").value;
        const urgencia = document.getElementById("urgencia").value;
        const observaciones = document.getElementById("observaciones").value.trim() || "Ninguna";

        // Estructuración del mensaje para WhatsApp
        const mensajeWhatsApp = 
`*SOLICITUD DE CERTIFICADO - BANKOOF*
---------------------------------------
📋 *Tipo de Certificado:* ${tipoCertificado}
👤 *Nombre / Razón Social:* ${nombreCompleto}
🪪 *Documento:* ${tipoDoc} - ${numDoc}
📧 *Correo Electrónico:* ${email}
📞 *Teléfono:* ${telefono}
🏢 *Tipo de Empresa:* ${tipoEmpresa}
🚨 *Nivel de Urgencia:* ${urgencia}
📝 *Observaciones:* ${observaciones}
---------------------------------------
_Hola, deseo comunicarme con un asesor para continuar con el trámite de mi certificado bancario._`;

        // Codificar mensaje para URL
        const urlEncodedMessage = encodeURIComponent(mensajeWhatsApp);

        // Construir URL oficial de WhatsApp
        const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${urlEncodedMessage}`;

        // Abrir WhatsApp en nueva pestaña
        window.open(whatsappURL, "_blank");
    });
});

// Función auxiliar para scroll suave
function scrollToForm() {
    const element = document.getElementById("solicitud");
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}
