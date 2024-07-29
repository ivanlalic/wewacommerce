document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("whatsapp-form");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");
    const sendButton = document.getElementById("send-button");
    const headerLogo = document.querySelector(".logo");
    const mainTitle = document.querySelector("h1");
    const footerText = document.querySelector("footer");

    sendButton.addEventListener("click", function () {
        const phoneNumber = phoneInput.value;
        const message = messageInput.value;
        if (phoneNumber) {
            let whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
            if (message) {
                whatsappURL += `&text=${encodeURIComponent(message)}`;
            }
            window.location.href = whatsappURL;
        }
    });

    // Language selection functionality
    const usFlag = document.getElementById("us-flag");
    const esFlag = document.getElementById("es-flag");

    usFlag.addEventListener("click", function (event) {
        event.preventDefault();
        setLanguage("en");
    });

    esFlag.addEventListener("click", function (event) {
        event.preventDefault();
        setLanguage("es");
    });

    function setLanguage(lang) {
        // Implement language-specific content changes
        if (lang === "es") {
            headerLogo.textContent = "WhatsApp";
            mainTitle.textContent = "Envia Mensajes de WhatsApp Sin Agregar Contacto";
            footerText.textContent = "2023 WhatsApp Message Sender - No guardamos ninguna información personal";
            // Update input placeholders and button text for Spanish version
            phoneInput.placeholder = "CodigoPaisNumero";
            messageInput.placeholder = "Tu Mensaje";
            sendButton.textContent = "Enviar via WhatsApp";
        } else {
            // Default to English
            headerLogo.textContent = "WhatsApp";
            mainTitle.textContent = "Send a WhatsApp Message Without Adding the Contact";
            footerText.textContent = "2023 WhatsApp Message Sender - We don't store any personal information";
            // Reset input placeholders and button text to English version
            phoneInput.placeholder = "CountryCodePhone";
            messageInput.placeholder = "Your message";
            sendButton.textContent = "Send via WhatsApp";
        }
    }
});
