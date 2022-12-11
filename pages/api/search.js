import { apiBase, apiKey } from "../../lib/tmdb"
import axios from "axios"

export default async (req, res) =>{
    let query = req.query.query
    const film  = await axios.get(`${apiBase}/search/movie?api_key=${apiKey}&language=pt-BR&query=${query}`, { 
        headers: { "Accept-Encoding": "gzip,deflate,compress" } 
    })


    res.status(200).json({
        list:film.data.results

    })
   
   
}