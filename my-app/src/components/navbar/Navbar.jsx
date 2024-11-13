import React, { useState } from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
export default function Navbar() {
  const [menu, openmenu] = useState(false);
  return (
    <>
      <nav>
        <div className="logo"> Mrstudio</div>
        <div className='navbar'>
          <ul className={menu ? "mobileview" : "menu"}>
          <li><Link  to={'/'} >Home</Link></li>
          <li><Link  to={'/about'}>About Us</Link></li>
          <li><Link to={'/services'} >Services</Link></li>
          
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
