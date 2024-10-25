import Image from "next/image";
import { CarouselClient } from "./components/Carousel/Carousel";

export default function Home() {
  return (
    <>
      <main className="container mx-auto mt-[-25px]">
        <div className="mx-auto relative sm:px-20 py-5">
          <div className="text-center w-full relative">
            {/* Video de fondo con superposición de color */}
            <div className="absolute top-0 left-0 h-[200px] sm:h-[calc(100%-45px)] w-full bg-black opacity-50"></div>
            <video autoPlay muted loop className="w-full h-[200px] sm:h-fit">
              <source src="clip2.mp4" type="video/mp4" />
            </video>

            {/* Texto sobre el video */}
            <div className="absolute top-[40px] right-[30px] sm:top-2/4 sm:left-2/4 text-white sm:translate-y-[-50%] sm:translate-x-[-50%] font-site">
              <h2 className="sm:text-4xl mb-4 font-bold">Polo de Salud</h2>
              <h1 className="sm:text-[90px] sm:leading-[90px] font-bold">
                SALUD PARA TODOS
              </h1>
            </div>

            {/* Sección de suscripción con animación */}
            <div className="relative group flex flex-col sm:flex-row items-center bg-white mt-[-10px] sm:mt-[-55px] mx-auto max-w-xs sm:max-w-4xl border-t-4 border-blue-site font-site overflow-hidden">
              {/* Pseudo-elemento para la animación al hover */}
              <div className="absolute inset-0 w-full h-full bg-blue-500 left-0 top-0 transform scale-x-0 origin-right transition-transform duration-500 ease-in-out group-hover:scale-x-50 clip-path-diagonal"></div>
              
              <h3 className="flex-1 sm:text-3xl py-4 px-8 text-center sm:text-left font-semibold relative z-10">
                Suscríbete para recibir noticias
              </h3>

              <a 
                href="/contact" 
                className="btn-main sm:text-2xl sm:p-8 hover:bg-purple-site w-fit font-bold relative z-10 hover:text-white transition duration-300 ease-in-out"
              >
                SUSCRÍBIRME
              </a>
            </div>
          </div>  

          <div className="flex flex-col sm:flex-row sm:mt-32 mb-12 sm:gap-12">


          
        <div className="basis-1/3 ">
          <div className="h-[370px] relative bg-zinc-950 ">
            <Image
              src="/6.jpg" // Ruta relativa a la imagen en la carpeta public
              alt="neto"
              layout="fill"
              objectFit="cover"
              sizes="50vw"
            />
          </div>
          <div className="border-y-4 border-blue-600 p-8 sm:w-60 relative bg-white sm:mt-[-300px] ">
            <h3 className="text-2xl font-site font-bold text-blue-900">Objetivo</h3>
            <p className="my-6 text-sm">
            Apoyar e impulsar el desarrollo de iniciativas que aporten a la formación de capital humano, investigación e
           innovación con enfoque territorial, fortaleciendo la vinculación con el medio, con esto mejorar la
          salud en Ñuble.
            </p>
            <a href="/projects" className="text-purple-site py-6 font-site font-semibold text-blue-900">
              Read More
            </a>
          </div>
        </div>

        <div className="basis-2/3">
          <div className="h-[370px] relative">
            <Image
              src="/5.jpg" // Ruta relativa a la imagen en la carpeta public
              alt="Descripción de la imagen"
              layout="fill"
              objectFit="cover"
              sizes="100vw"
            />
          </div>
          <div className="border-y-4 border-orange-600 p-8 sm:w-60 relative bg-white sm:ml-32 sm:mt-[-430px]">
            <h3 className="text-2xl font-site font-bold text-orange-900">¿Qué es?</h3>
            <p className="my-6 text-sm">
            El Polo de Salud busca mejorar el ámbito sanitario local, impulsando el desarrollo económico y social a través de la colaboración entre entidades públicas y privadas. La Universidad del Bío-Bío, gracias a su enfoque en formación e investigación, puede liderar este proceso, facilitando el acceso a servicios de salud y generando oportunidades de crecimiento para la región.
            </p>
            <a href="/about" className="text-purple-site py-6 font-site font-semibold text-orange-900">
              Read More
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:mt-32 mb-12 sm:gap-12">
        <div className="basis-2/3">
          <div className="h-[370px] sm:h-[470px] relative">
            <Image
              src="/2.png" // Ruta relativa a la imagen en la carpeta public
              alt="Descripción de la imagen"
              layout="fill"
              objectFit="cover"
              sizes="100vw"
            />
          </div>
          <div className="border-y-4 border-orange-600 p-8 sm:w-60 relative bg-white sm:ml-44 sm:mt-[-230px]">
            <h3 className="text-2xl font-site font-bold font-bold text-orange-900">Recent News</h3>
            <p className="my-6 text-sm">
              Get caught up on recent news and our latest achievements in the
              world of education.
            </p>
            <a href="/news" className="text-purple-site py-6 font-site font-semibold font-semibold text-orange-900">
              Read More
            </a>
          </div>
        </div>

        <div className="basis-1/3">
          <div className="h-[370px] sm:h-[470px] relative">
            <Image
              src="/1.png" // Ruta relativa a la imagen en la carpeta public
              alt="Descripción de la imagen"
              layout="fill"
              objectFit="cover"
              sizes="50vw"
            />
          </div>
          <div className="border-y-4 border-blue-600 p-8 sm:w-60 relative bg-white sm:ml-32 sm:mt-[-530px]">
            <h3 className="text-2xl font-site font-bold text-blue-900">Take Part</h3>
            <p className="my-6 text-sm">
              We welcome contributions in whatever form they come. Whether you
              want to contribute your time as a volunteer, join us as a partner
              or donate resources towards helping us achieve our goals, there is
              always an opportunity to make a difference.
            </p>
            <a href="/contact" className="text-purple-site py-6 font-site font-semibold text-blue-900">
              Read More
            </a>
          </div>
        </div>
      </div>
      </div>

      </main>
    </>
  );
}
