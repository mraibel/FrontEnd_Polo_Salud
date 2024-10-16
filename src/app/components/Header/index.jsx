export default function HeaderName() {
    return (
        <header className="w-full my-6 px-2 sm:px-8">
            <div className="flex sm:px-6 h-header sm:items-center sm:gap-8">
                <h2 className="flex-1">
                    <a>
                        Logo
                    </a>
                </h2>
                <div>
                    <button className="block md:hidden float-right relative z-50">
                        <div className="space-y-2 absolute top-0 right-0 bg-purple-site p-3">
                            <span className="block h-[3px] w-6 bg-white transform transition duration-500 ease-in-out "></span>
                            <span className="block h-[3px] w-6 bg-white transform transition duration-500 ease-in-out "></span>
                            <span className="block h-[3px] w-6 bg-white transform transition duration-500 ease-in-out "></span>
                        </div>
                    </button>
                    <nav className="max-md:w-0 max-md:opacity-0 transition-all duration-500 ease-in-out md:block overflow-hidden max-md:absolute max-md:animate-sideways-once max-md:h-screen max-md:bg-white max-md:pt-24 z-40 top-0 right-0">
                        <ul className="flex flex-col items-center md:flex-row gap-10 md:gap-4 min-[900px]:gap-5 lg:gap-12 justify-end text-sm md:text-[15px] leading-[22px]">
                            <li className="relative">
                                <a className=" text-purple-site" href="/">Inicio</a>
                                <span className="absolute -bottom-5 md:hidden border-b-2 w-48 left-[calc(50%_-_theme(space.24))]"></span>
                            </li>
                            <li className="relative">
                                <a className=" hover:text-purple-site" href="/about">Sobre Nosotros</a>
                                <span className="absolute -bottom-5 md:hidden border-b-2 w-48 left-[calc(50%_-_theme(space.24))]"></span>
                            </li>
                            <li className="relative">
                                <a className=" hover:text-purple-site" href="/projects">Projectos</a>
                                <span className="absolute -bottom-5 md:hidden border-b-2 w-48 left-[calc(50%_-_theme(space.24))]"></span>
                            </li>
                            <li className="relative">
                                <a className=" hover:text-purple-site" href="/news">Noticias</a>
                                <span className="absolute -bottom-5 md:hidden border-b-2 w-48 left-[calc(50%_-_theme(space.24))]"></span>
                            </li>
                            <li className="relative">
                                <a className=" hover:text-purple-site" href="/team">Equipo</a>
                                <span className="absolute -bottom-5 md:hidden border-b-2 w-48 left-[calc(50%_-_theme(space.24))]"></span>
                            </li>
                            <li className="relative">
                                <a className=" hover:text-purple-site" href="/contact">Contacto</a>
                                <span className="absolute -bottom-5 md:hidden border-b-2 w-48 left-[calc(50%_-_theme(space.24))]">
                                </span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}