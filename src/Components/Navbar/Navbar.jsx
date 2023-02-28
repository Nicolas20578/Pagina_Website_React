import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Nicolás</div>
            <span>toggle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <li>Inicio</li>
                    <li>Servicio</li>
                    <li>Experencia</li>
                </ul>
            </div>
            <button className='button n-button'>
                Contactame
            </button>
        </div>
    </div>
  )
}

export default Navbar