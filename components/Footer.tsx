import { Instagram, Mail } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className=" py-10 bg-black text-center border-gray-100 ">
      <div className="mb-4 flex justify-center space-x-6">
        <a
          href="mailto:info.kontaktmusic@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail size={40} />
        </a>
        <a
          href="https://www.instagram.com/kontaktmusiclimited?utm_source=qr&igsh=aHhyeG42Z3Flc2Mw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={40} />
        </a>
      </div>
      <div className="max-w-3xl mx-auto text-2xl">
        <a
          href="mailto:info.kontaktmusic@gmail.com"
          className="text-white font-medium  hover:text-gray-700 transition-colors"
        >
          info.kontaktmusic@gmail.com
        </a>
      </div>
      <p className="text-sm text-gray-500 mt-1">
        © {new Date().getFullYear()} KONTAKT MUSIC. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
