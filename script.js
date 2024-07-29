document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("whatsapp-form");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");
    const messageSelect = document.getElementById("message-select");
    const sendButton = document.getElementById("send-button");
    const headerLogo = document.querySelector(".logo");
    const mainTitle = document.querySelector("h1");
    const footerText = document.querySelector("footer");

    // Add event listener for message selection
    messageSelect.addEventListener("change", function() {
        switch(this.value) {
            case "1":
                messageInput.value = `Hola, ! 
Nos comunicamos de IBericaStore para confirmar la orden y la dirección de entrega. 

Orden 

Total: € 

La dirección de envío es: 

IMPORTANTE 
Por favor recordar que una vez respondido este mensaje con la confirmación de la orden y dirección, IBericaStore procederá al envío que llegará entre 1 y 3 días hábiles.
Las entregas son de Lunes a Viernes de 8 a 18 horas y se paga en dinero al repartidor al recibirlo.
Muchas gracias. 
Saludos, 
IBericaStore`;
                break;
            case "2":
                messageInput.value = "Hello from XimcoStore";
                break;
            default:
                messageInput.value = "";
        }
    });

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
        if (lang === "es") {
            headerLogo.textContent = "WhatsApp";
            mainTitle.textContent = "Envia Mensajes de WhatsApp Sin Agregar Contacto";
            footerText.textContent = "2023 WhatsApp Message Sender - No guardamos ninguna información personal";
            phoneInput.placeholder = "CodigoPaisNumero";
            messageInput.placeholder = "Tu Mensaje";
            sendButton.textContent = "Enviar via WhatsApp";
            messageSelect.options[0].text = "Selecciona un mensaje predefinido";
        } else {
            headerLogo.textContent = "WhatsApp";
            mainTitle.textContent = "Send a WhatsApp Message Without Adding the Contact";
            footerText.textContent = "2023 WhatsApp Message Sender - We don't store any personal information";
            phoneInput.placeholder = "CountryCodePhone";
            messageInput.placeholder = "Your message";
            sendButton.textContent = "Send via WhatsApp";
            messageSelect.options[0].text = "Select a preset message";
        }
    }
});