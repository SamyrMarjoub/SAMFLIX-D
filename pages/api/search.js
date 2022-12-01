import { apiBase, apiKey } from "../../lib/tmdb"


export default async (req, res) =>{
    let query = req.query.query
    const film  = await fetch(`${apiBase}/search/movie?api_key=${apiKey}&language=pt-BR&query=${query}`)
    const json = await film.json()

    res.status(200).json({
        list:json.results

    })
   
   
}