import { apiBase, apiKey } from "../../lib/tmdb"

export default async (req, res) =>{
    const result  = await fetch(`${apiBase}/tv/popular?api_key=${apiKey}&language=pt-BR`)
    const json = await result.json()

    res.status(200).json({
        list:json.results
    })
}


// https://api.themoviedb.org/3/api_key=86ff22163d48cfd8567997262922738a&language=pt-br&page=1