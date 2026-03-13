import MovieCard from "../components/MovieCard"
export default function MovieSearch({results}){
    
    
    
    
    return(
        <>
            {/*I dette komponent så mappes alle artikkel kortene ut*/}
            <section>
                 {results?.map((movie, i) => <MovieCard  key={movie?.imdbID + i} movie={movie}  />)}
            </section>  
        </>
    )
}