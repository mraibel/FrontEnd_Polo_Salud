'use client'

import { useForm } from "react-hook-form"

export default function Page() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <main>
            <section>
                <h2 className="text-4xl">Noticias</h2>
                <h3 className="text-2xl">Crear</h3>
                <div className="mx-44 flex justify-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-80 gap-2">
                        <label>Título</label>
                        <input {...register("title", { required: true })} className="border-2 border-black"/>
                        <label>Subtitulo</label>
                        <input {...register("subtitle", { required: true })} className="border-2 border-black"/>
                        <label>Bajada</label>
                        <input {...register("lead", { required: true })} className="border-2 border-black"/>
                        <label>Cuerpo de la noticia</label>
                        <input {...register("body", { required: true })} className="border-2 border-black"/>
                        <label>Fecha</label>
                        <input {...register("date")} type="date" className="border-2 border-black"/>

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input type="submit" />
                    </form>
                </div>

                <h3 className="text-2xl">Editar</h3>
                <h3 className="text-2xl">Eliminar</h3>
            </section>
            <section>
                <h2 className="text-4xl">Proyectos</h2>
                <h3 className="text-2xl">Crear</h3>
                <h3 className="text-2xl">Editar</h3>
                <h3 className="text-2xl">Eliminar</h3>
            </section>
            <section>
                <h2 className="text-4xl">Categorías</h2>
                <h3 className="text-2xl">Crear</h3>
                <h3 className="text-2xl">Editar</h3>
                <h3 className="text-2xl">Eliminar</h3>
            </section>
        </main>
    )
}