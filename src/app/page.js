import Image from "next/image";
import { CarouselClient } from "./components/Carousel/Carousel";

export default function Home() {
  return (
    <>
      <main className="container mx-auto">
        <div className="mx-auto relative sm:px-20 py-5">
          <div className="text-center w-full relative">
            <div className="absolute top-0 left-0 h-[200px] sm:h-[calc(100%-55px)] w-full bg-black opacity-50"></div>
            <video autoPlay muted loop className="w-full h-[200px] sm:h-fit">
            <source
            src="https://video.wixstatic.com/video/0b340f_b4aaabafff194cf6ac9ee5511f58099d/720p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-[40px] right-[30px] sm:top-2/4 sm:left-2/4 text-white sm:translate-y-[-50%] sm:translate-x-[-50%] font-site">
          <h2 className="sm:text-4xl mb-4">FREE & ACCESSIBLE</h2>
          <h1 className="sm:text-[90px] sm:leading-[90px]">
            EDUCATION FOR ALL
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row relative items-center bg-white mt-[-10px] sm:mt-[-55px] mx-auto max-w-xs sm:max-w-4xl border-t-4 border-blue-site font-site">
          <h3 className="flex-1 sm:text-3xl py-4 px-8 text-center sm:text-left">
            Take action to help us grow
          </h3>
          <a
            href="/contact"
            className="btn-main sm:text-2xl sm:p-8 hover:bg-purple-site w-fit"
          >
            DONATE
          </a>
        </div>
      </div>     
      </div>
      </main>
    </>
  )
}
