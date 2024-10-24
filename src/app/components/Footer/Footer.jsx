// src/app/components/Footer.js
import React from 'react';

// src/app/components/Footer.js
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 mt-auto"> {/* mt-auto empuja el footer hacia abajo */}
        <div className="container mx-auto text-center">
          <p>© 2024 Tu Empresa. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-4">
            <a href="/about" className="hover:underline">About</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="/team" className="hover:underline">Team</a>
          </div>
        </div>
      </footer>
    );
  };
  

export default Footer;
