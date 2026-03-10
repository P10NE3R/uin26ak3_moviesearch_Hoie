import { Link, useParams } from 'react-router-dom'

export default function MovieCard({ movie }){
    const {imdbID, Title, Poster, Year} = movie
    
   
    //<Link to={movie.Title}>{movie.Title}</Link>

    //Her har jeg valgt å vise film i artikkel kort
    return( 
        <>
        <article key={movie?.imdbID}>
            <img src={movie?.Poster}/>
            
           <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
            <p>Utgivelsesår: {movie?.Year}</p>
        </article>
        
        </>   
        
    )
}