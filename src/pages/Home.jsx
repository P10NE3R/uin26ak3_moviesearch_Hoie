import { useState } from "react"

export default function Home(){
    
    //Her henter vi inn koden dra .env slik at vi ikke pusher API nøkkelen.
    const baseURL =`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`
    
    const [search, setSearch] = useState()
    
    const getMovies = async()=>{
        //Her lager vi en try-catch blokk for api kallet 
        try {
            
            //Her lages en respons som basically er film data 
            const response = await fetch(`${baseURL}&s=${search}`)
            
            //Her gjøres data til json. Her brukes response som data variabel
            const data = await response.json()
            
            //Her printes dataen ut i konsollen
            console.log(data)   

        } catch (err) {
            console.error(err)
        }
    }
    
    const handleChange = (e)=>{
        setSearch

    }
    
    return(
        <>
          <main>
             <h1>Forside</h1>
             <form>
                <label>
                Søk etter film
                <input type="search" placeholder="film" onChange={handleChange}/>
                </label>
             </form>
            <button onClick={getMovies}>Søk</button>
        </main>
        
        </>
      
    )
}