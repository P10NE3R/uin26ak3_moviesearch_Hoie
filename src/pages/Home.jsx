import { use, useState } from "react"
import "../styles/home.scss"
import { data } from "react-router-dom"

export default function Home(){
    
    //Her henter vi inn koden dra .env slik at vi ikke pusher API nøkkelen.
    const baseURL =`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`
    
    const [search, setSearch] = useState([])
    const [results, setResults] = useState()

    
    const getMovies = async()=>{
        //Her lager vi en try-catch blokk for api kallet 
        try {
            
            //Her lages en respons som basically er film data 
            const response = await fetch(`${baseURL}&s=${search}`)
            
            //Her gjøres data til json. Her brukes response som data variabel
            const data = await response.json()
            
            //Her printes dataen ut i konsollen
            console.log("fra getMovies", data)   
            
            setResults(data?.Search)
            console.log(results)
           
            
            

        } catch (err) {
            console.error(err)
        }
    }
  
    

    const handleChange = (e)=>{
        setSearch(e.target.value)
     
       
    }
    
    
    return(
        <>
          <main>
             <h1>Forside</h1>
             <form>
                <label htmlFor="search">
                Søk etter film
                </label>
                <input id="search" type="search" placeholder="film" onChange={handleChange}/>
             </form>
            <button onClick={getMovies}>Søk</button>
            <ul>
                {results?.map((movie)=> 
                <li key={movie?.imdbID}>
                    {movie?.Title}
                    <img src={movie?.Poster}></img>
                </li>
            )}
            </ul>
            

        </main>
        
        </>
    )
}