import React from 'react'
import './projects.css'
import Projectcard from './Projectcard'
export default function Projects() {
    return (
        <>
            <section className="project">
                <div className="projecttop">
                    <h1>Recent Projects</h1>

                </div>
                <div className="projectscards">
                    <Projectcard/>
                </div>
            </section>
        </>
    )
}
