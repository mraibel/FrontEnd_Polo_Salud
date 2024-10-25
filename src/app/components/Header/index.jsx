"use client";

import { useState } from 'react';
import Image from 'next/image';
export default function HeaderName() {
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

    const handleMouseEnter = (e) => {
        const { offsetLeft, offsetWidth } = e.currentTarget;
        setUnderlineStyle({
            left: offsetLeft,
            width: offsetWidth,
        });
    };
    
    const handleMouseLeave = () => {
        setUnderlineStyle({ left: 0, width: 0 });
    };

    return (
        <header className="w-full my-6 px-2 sm:px-8">
            <div className="flex sm:px-6 h-header sm:items-center sm:gap-8 relative">
                <h2 className="flex-1">
                    <a href="/" className="flex items-center gap-2 sm:gap-6">
                    <Image src="/logopolo.png" alt="Logo" width={50} height={50} />
                        <div>
                            <span className="block font-site font-bold text-2xl sm:text-1xl text-blue-800">Polo De Salud</span>
                            <span className="text-x font-bold text-orange-600">Salud para todos</span>
                        </div>
                    </a>
                </h2>
                <div>
                    <nav className="relative">
                        <ul className="flex flex-col items-center md:flex-row gap-10 md:gap-4 min-[900px]:gap-5 lg:gap-8 justify-end text-sm md:text-[16px] leading-[22px] relative">
                            {['Inicio', 'Sobre Nosotros', 'Proyectos', 'Noticias', 'Equipo', 'Contacto',"Iniciar Sesión"].map((item, index) => (
                                <li
                                    key={index}
                                    className="relative"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <a
                                        className="hover:text-purple-site px-2"
                                        href={`/${item.toLowerCase().replace(' ', '')}`}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                            {/* Barra deslizante */}
                            <div
                                className="absolute h-0.5 bg-blue-900 transition-all duration-300"
                                style={{
                                    left: `${underlineStyle.left}px`,
                                    width: `${underlineStyle.width}px`,
                                    bottom: '-3px', // Ajuste para la posición justo debajo del texto
                                    transition: 'left 0.5s ease-in-out, width 0.3s ease-in-out',
                                }}c
                            />
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="border-b border-gray-300 mb-0 mt-4" />
        </header>
    );
}
