import React, { useState } from 'react'
import './navbar.css'
import { FaBars, FaTimes } from "react-icons/fa";
export default function Navbar() {
  const [menu, openmenu] = useState(false);
  return (
    <>
      <nav>
        <div className="logo"> Mrstudio</div>
        <div className='navbar'>
          <ul className={menu ? "mobileview" : "menu"}>
            <li><a href="home">Home</a></li>
            <li><a href="home">About Us</a></li>
            <li><a href="home">Services</a></li>
            <li><button className='btn'> Contact Us</button></li>
          </ul>
          <button className='toggle' onClick={() => openmenu(!menu)}>
            {menu ? <FaTimes className='icon' /> : <FaBars className='icon' />}
          </button>

        </div>
      </nav>
    </>
  )
}
