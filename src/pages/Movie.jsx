import { useParams } from "react-router-dom"
export default function Movie(){
    const {movie} = useParams()
    
    
    
    
    return(
        /*Her vil jeg ha inn movie title*/
        <article>
            
            <h1>{movie}</h1>
            


        </article>
        
    )
}   