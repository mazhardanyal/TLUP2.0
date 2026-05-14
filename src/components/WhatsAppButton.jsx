import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {

  const message = encodeURIComponent(
    "السلام علیکم، مجھے آپ کے اسکول کے بارے میں معلومات چاہیے۔"
  );

  return (
    <a
      href={`https://wa.me/+923018049913?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-50 transition-all"
    >
      <FaWhatsapp size={46} />
    </a>
  );
};

export default WhatsAppButton;