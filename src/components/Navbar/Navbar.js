import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll'
import Experience from '../Experience/Experience'
import PortFolio from '../Portfolio/Portfolio'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Andrew</div>
            <Toggle />
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                        <li>Home</li>
                    </Link> 
                    <Link spy={true} to='Services' smooth={true} >
                        <li>Services</li>
                    </Link> 
                    <Link spy={true} to='Experience' smooth={true}>
                        <li>Experience</li>
                    </Link> 
                    <Link spy={true} to='PortFolio' smooth={true} >
                         <li>Portfolio</li>
                    </Link> 
                </ul>
            </div>
            <button className="button n-button">
                Contact
            </button>
        </div>
    </div>
  )
}

export default Navbar