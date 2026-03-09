import { useEffect } from 'react'
import { useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

export default function Movie({ movie }){
    const {slug} = useParams()
    
    //Her må jeg fortsette med å fetche igjen
    return(
        <>
            <section>
                <h3>{movie.Title}</h3> 
            </section>
           
        </>
    )
}