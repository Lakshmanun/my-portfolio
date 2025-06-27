import React from 'react'
import Home from './components/home/Home'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import About from './components/about/About'
import Navbar from './components/navbar/Navbar'
import Services from './components/services/Services'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/services' element={<Services/>}/>
          
        </Routes>
        

      </BrowserRouter>
    </>
  )
}
