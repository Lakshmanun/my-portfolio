import React from 'react'
import './home.css'
import home from '../../assect/home.png'
export default function Hero() {
    return (
        <>
            <div className=" hero container">
                <div className="row">
                    <div className=" left ">
                        <h1>Hey' I Am <br/> Vicky Dev </h1>
                        <p> UI/UX designer and Web Developer,working as an Frontend & Backend developer at  <span className="company">GrafixUI</span>  of past 6 months </p>
                        <buttuon className="btn">Hire Me</buttuon>
                    </div>
                    <div className=" right ">
                        <img src={home} alt="" />
                    </div>
                </div>
            </div>
            <div className="herofooter">
                    
            </div>
        </>
    )
}
