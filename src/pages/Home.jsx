import { use, useState } from "react"
import "../styles/home.scss"
import { data } from "react-router-dom"
import { useEffect } from 'react';
export default function Home(){

//Her så blir api nøkkelen definert. Den er lagret trygt i .env filen
const API_KEY = import.meta.env.VITE_API_KEY;



    //Her henter vi inn koden dra .env slik at vi ikke pusher API nøkkelen.
   /* const baseURL =`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`*/
    

    const baseURL =`https://www.omdbapi.com/?apikey=${API_KEY}`
    
    const [search, setSearch] = useState()
    const [results, setResults] = useState()

    const storedHistory = localStorage.getItem(search)
    const [history, setHistory] = useState(storedHistory ? JSON.parse(storedHistory) : [])
    console.log("Sjekk history storage", storedHistory)
    
    //Her så lagres history i cookie, slik at det ikke er noe lag i lagringen
    useEffect(()=>{
        localStorage.setItem("search", JSON.stringify(history))
    },[history])



    //useEffect her starter siden med en fetch av en gitt array med filmer
    useEffect(()=>{
       //innitialMovies()
    },[])
        
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
  
    


    const handleChange = (e)=>{
        setSearch(e.target.value)
        console.log(search)
        if (search.length > 3) {
            getMovies()
        }
    }

    //Submit som håndterer innlegg av skjema

    const handleSubmit = (e)=>{
        e.preventDefault()
        e.target.reset()
        //Her lagres søkeordet 
        
        setHistory((prev) => [...prev, search])



    }
    console.log(history)

    return(
        <>
          <main>
             <h1>Filmsøk</h1>
             
             <form onSubmit={handleSubmit}>
                <input aria-label="Søk etter film" id="search" autoComplete="off" type="search" placeholder="film" onChange={handleChange}/>
             <button onClick={getMovies}>Søk</button>
             </form>
            
            <section>
                <ul>
                {results?.map((movie)=> 
                <li key={movie?.imdbID}>
                    {movie?.Title}
                    <img src={movie?.Poster}/>
                    <p>Utgivelsesår: {movie?.Year}</p>
                </li>
            )}
            </ul>
            </section>
            
        </main>
        </>
    )
}