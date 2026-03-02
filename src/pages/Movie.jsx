import { useOutletContext, useParams } from "react-router-dom"
export default function Movie(){
    const {movie} = useOutletContext()
    
    
    
    
    return(
        /*Her vil jeg ha inn movie title*/
        <article>

            <h1>{movie.Title}</h1>
        </article>
        
    )
}   