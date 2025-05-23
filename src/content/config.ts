import { defineCollection,z } from "astro:content";



const certificaciones = defineCollection({
    schema: z.object({
        Nombre :  z.string(),
        Url : z.string().url(),
        Certificado_id : z.string(),
        Tecnologias :z.array( z.string()),
        Icon : z.string(),
    })
})


const proyectos = defineCollection({
    schema: z.object({
        Nombre :  z.string(),
        Url : z.string().url(),
        Tecnologias :z.tuple([z.string()]),
        Icon : z.string(),
    })
})

const icons ={

    goolag:"",
    java :"",
    javascript :"",
    python :"",
    typescript:"",
    react:"",

}

export const collections ={certificaciones,proyectos}