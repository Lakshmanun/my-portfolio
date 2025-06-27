import React from 'react'
import './services.css'
import hours from '../../assect/24.png'
import satistic from '../../assect/satistic.png'
import home from '../../assect/home.png'
export default function Services() {
    return (
        <>
            <section className="services ">
                <div className="servicesrow container">
                    <div className="servicesleft">
                        <h1>
                            Clients Get Always Exceptoinal Wroks  From Me
                        </h1>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                            dicta nemo harum ea ex non? Quis nostrum impedit
                        </p>
                    </div>
                    <div className="servicesrigth">
                        <img src={home} alt="services" />
                    </div>

                </div>
                <div className="sevicesbox">
                    <img src={hours} alt="time" />
                    <h3>24 <span> Hours active</span></h3>
                    <p> 24 hours avalible  chat your  problem</p>
                </div>
                <div className="servicesfooter">
                    <ul>
                        <li>1. Top Quality Works</li>
                        <li>2. Commitments</li>
                        <li>3. 24 Hourrs Active</li>
                    </ul>

                </div>
            </section>
            <section className='satistic'>
                <div className="satisticrow container">
                    <div className="satisticleft">
                        <img src={satistic} alt="" />
                    </div>
                    <div className="satisticright">
                        <h1><span > Perfect Solution</span> <br /> For Your Business</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, suscipit blanditiis magnam dolorum quae,
                        </p>
                        <br />
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores blanditiis facilis harum sed voluptatum nesciunt libero exercitationem unde iure dolore, quas in quasi voluptates corrupti vitae voluptatibus rem sit dolor!</p>
                        <button className='btn'> Detials</button>

                    </div>

                </div>
            </section>
        </>
    )
}
