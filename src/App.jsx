import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{Routes, Route} from "react-router-dom"
import Movie from './pages/Movie'
import Home from "./pages/Home"
function App() {
  

  return (
    <Routes>
        <Route index element={<Home />}/>
        <Route path=":movie" element={<Movie />}/>
    </Routes>
  ) 
}

export default App
