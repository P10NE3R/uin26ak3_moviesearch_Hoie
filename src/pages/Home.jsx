import { use, useState } from "react"
import "../styles/home.scss"
import { data } from "react-router-dom"
import { useEffect } from 'react';
export default function Home(){
    
    //Her henter vi inn koden dra .env slik at vi ikke pusher API nøkkelen.
    const baseURL =`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`
    
    const [search, setSearch] = useState([])
    const [results, setResults] = useState()

    const innitialMovies  = async()=>{
        try {
            const response = await fetch(`${baseURL}&s=James-Bond&page=1`)
            const data = await response.json()
            console.log("fra getMovies", data)   
            setResults(data?.Search)
        } catch (err) {
            console.error(err)
        }
    }


    const getMovies = async()=>{
        //Her lager vi en try-catch blokk for api kallet 
        try {
            //Her lages en respons som basically er film data 
            const response = await fetch(`${baseURL}&s=${search}&page=1`)

            //Her gjøres data til json. Her brukes response som data variabel
            const data = await response.json()
            
            //Her printes dataen ut i konsollen
            console.log("fra getMovies", data)   
            
            //Her blir filmer skrevet til resultat array
            setResults(data?.Search)
        } catch (err) {
            console.error(err)
        }
    }
  
    //useEffect her starter siden med en fetch av en gitt array med filmer
    useEffect(()=>{
       innitialMovies()
    },[])


    const handleChange = (e)=>{
        setSearch(e.target.value)
        console.log(search)
        if (search.length > 3) {
            getMovies()
        }
    }

    return(
        <>
          <main>
             <h1>Filmsøk</h1>
             
             <form>
                <input aria-label="Søk etter film" id="search" type="search" placeholder="film" onChange={handleChange}/>
             </form>
            <button onClick={getMovies}>Søk</button>
            <ul>
                {results?.map((movie)=> 
                <li key={movie?.imdbID}>
                    {movie?.Title}
                    <img src={movie?.Poster}/>
                    <p>Utgivelsesår: {movie?.Year}</p>
                </li>
            )}
            </ul>
        </main>
        </>
    )
}