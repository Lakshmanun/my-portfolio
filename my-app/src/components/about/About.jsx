import React from 'react'
import './about.css'
import logo from '../../assect/first.png'
export default function About() {
    return (
        <>
            <section className="about">
                <div className="aboutrow container">
                    <div className="left">
                        <div className="detial">
                            <div className="img">
                                <img src={logo} alt="" />
                            </div>
                            <div className="text">
                                <h1>Web Developer</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur <br />adipisicing elit. Maxime sequi distinctio error tempora <br />perferendis non numquam, </p>
                            </div>
                        </div>
                        <div className="detial">
                            <div className="img">
                                <img src={logo} alt="" />
                            </div>
                            <div className="text">
                                <h1>UI/UX Designer</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur <br />adipisicing elit. Maxime sequi distinctio error tempora <br />perferendis non numquam, </p>
                            </div>
                        </div> <div className="detial">
                            <div className="img">
                                <img src={logo} alt="" />
                            </div>
                            <div className="text">
                                <h1>MERN Stack Developer</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur <br />adipisicing elit. Maxime sequi distinctio error tempora <br />perferendis non numquam, </p>
                            </div>
                        </div>

                    </div>
                    <div className="aboutright">
                        <h1>My Awesome <br /> <span> Services</span></h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Possimus provident  inventore ab  fuga  </p>
                         <br /> 
                         <br />
                         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat <br /> 
                          aliquid iusto possimus neque ut cumque impedit, beatae aspernatur, <br /> 
                          placeat blanditiis culpa quas laudantium deserunt enim autem accusamus praesentium vero. Ipsum!</p>
                          <a href="vicky.pdf" download={'/vicky.pdf'}>  <button className="btn">Download cv </button>
                           </a>
                    </div>

                </div> 

            </section>

        </>
    )
}
