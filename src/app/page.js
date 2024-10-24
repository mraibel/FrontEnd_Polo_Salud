import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="container mx-auto">
        <div>
          <Image 
            src={'/banner.png'}
            width={2000}
            height={500}
            alt="Banner pagina inicial"  
          />
        </div>
      </main>
    </>
  )
}
