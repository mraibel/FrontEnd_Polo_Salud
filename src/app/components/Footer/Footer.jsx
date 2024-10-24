// src/app/components/Footer.js
import React from 'react';

// src/app/components/Footer.js
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 mt-auto"> {/* mt-auto empuja el footer hacia abajo */}
        <div className="container mx-auto text-center">
          <p>© 2024 Polo de salud. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-4">
            <a href="/acerca" className="hover:underline">Acerca</a>
            <a href="/contacto" className="hover:underline">Contacto</a>
            <a href="/equipo" className="hover:underline">Equipo</a>
          </div>
        </div>
      </footer>
    );
  };
  

export default Footer;
