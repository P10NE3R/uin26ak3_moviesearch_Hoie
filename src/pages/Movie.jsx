import { useEffect } from 'react'
import { useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

export default function Movie(){
    
    
    const { slug } = useParams()
    const API_KEY = import.meta.env.VITE_API_KEY;
    const baseURL =`https://www.omdbapi.com/?apikey=${API_KEY}`
    const [ movie, setMovie ] = useState()
    
    
    
    
    const getMovie = async()=>{
        try {
            const response = await fetch(`${baseURL}&i=${slug}`)
            const data = await response.json()
            setMovie(data)
            console.log(data.Search)
            
            
        } catch (err) {
            console.error(err)
        }
    }
   


    useEffect(()=>{
       getMovie()
        
    },[slug])
    
    
    



    return(
        <>
            <main key={slug}>

                    <h3>{movie?.Title}</h3> 

                    <img src={movie?.Poster} alt={movie?.Title} />
            </main>
            
           
        </>
    )
}