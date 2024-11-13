import React from 'react'
import './home.css'
import home from '../../assect/home.png'
import developer from '../../assect/first.png'
import designer from '../../assect/uiux.jpg'
import braandimg from '../../data'
export default function Hero() {
    return (
        <>
            <div className=" hero container">
                <div className="row">
                    <div className=" left ">
                        <h1>Hey' I Am <br /> Vicky Dev </h1>
                        <p> UI/UX designer and Web Developer,working as an Frontend & Backend developer at  <span className="company">GrafixUI</span> for past 6 months </p>
                        <buttuon className="btn">Hire Me</buttuon>
                    </div>
                    <div className=" right ">
                        <img src={home} alt="" />
                    </div>
                </div>
                <div className="dialogbox1">
                 <img src={developer} alt="" />
                 <h3> Best Design <br />Awards </h3>
                </div>
            </div> 
            <div className="dialogbox2">
                <img src={designer} alt="" />
                <div className="text">
                    <h3>UI/UX</h3>
                    <p>Lorem ipsum dolor <br />
                    ar usaly molestiae ! </p>
                </div>
            </div>
            <div className="herofooter">
                <div className="content">
                <h1>Work For All This Brand & Client</h1>
                <div className="brand">
                    {braandimg.map((item) => (
                        <div className="images" key={item.id}>
                            <img src={item.img} alt={item.alt} />
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </>
    )
}
