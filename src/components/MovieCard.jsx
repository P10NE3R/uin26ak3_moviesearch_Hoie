import { Link, useParams } from 'react-router-dom'
import Movie from '../pages/Movie'

export default function MovieCard({ movie }){
    const {imdbID, Title, Poster, Year} = movie
    
   const imgLink =  "src/styles/mImg.png"  

   
    // har jeg valgt å vise film i artikkelkort
    return( 
        <>
        <article key={movie?.imdbID}>
           
            
            
                
            
            <img 
                src={movie.Poster} 
                alt={movie.Title}
                onError={(e) => {
                e.currentTarget.src = imgLink
                }}
            />

            {console.log("Bilde", movie?.Poster)}
            <Link to={`/movie/${movie.imdbID}/${movie.Title}`}>{movie.Title}</Link>
            <p>Utgivelsesår: {movie?.Year}</p>
        </article>
        
        </>   
        
    )
}