import React from "react";
import "../assets/css/WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "919629776056"; // 🔴 Replace with your WhatsApp number (with country code)
  const message = "Hello! I want to know more about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;
