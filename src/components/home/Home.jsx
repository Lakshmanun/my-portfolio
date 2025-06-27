import React from 'react'
import './home.css'
import Hero from './Hero'
import About from '../about/About'
import Services from '../services/Services'
import Projects from '../projects/Projects'
export default function Home() {
  return (
    <>
      <div className="home">


        <Hero />
        <About />
        <Services/>
        <Projects/>
      </div>
    </>
  )
}
