
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


export default function Layout({ children }){
    const {slug} = useParams()
  



    return (
        <>
        {/* Hovednavigasjon */}
        <nav className="main-nav">

            {

            }
           
            <Link to="/">Home</Link>
            
            {
            
            }
          <Link to="/:movie">Movie</Link>

   
      
        </nav>

        {
        
        
        
        }
        {children}



        {

        }
        <footer>
            
        </footer>
        </>
    )
}