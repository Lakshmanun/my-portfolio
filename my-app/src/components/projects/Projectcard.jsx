import React from 'react'
import './projects.css'


import project4 from '../../assect/project4.jpg'
import project3 from '../../assect/project3.png'
import project2 from '../../assect/project2.png'
import project1 from '../../assect/project1.png'

export default function Projectcard() {
  return (
    <>
        <div className="cards container">
            <div className="card">
                <img src={project1} alt="projects" />
                <img src={project2} alt="projects" />
                <img src={project3} alt="projects" />
                <img src={project4} alt="projects" />
            </div>
        </div>
    </>
  )
}
