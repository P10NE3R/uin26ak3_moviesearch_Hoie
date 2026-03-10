import MovieCard from "../components/MovieCard"
export default function MovieSearch({results}){
    
    
    
    
    return(
        <>
            <section>
                 {results?.map((movie) => <MovieCard  movie={movie}  />)}
                
                
            </section>  
        
        </>
    )
}