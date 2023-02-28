import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'

export const Intro = () => {
  return (
    <div className='intro'>
        <div className='i-left'>
        <div className="i-name">
            <span>Hola! Soy</span>
            <span>Nicolás Mosquera</span>
            <span>Desarrollador Frontend con alto nivel de experiencia en diseño y desarrollo web, <br/>protegiendo el trabajo de Calidad</span>
        </div>

        <button className="button i-button">Contratame</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>

        </div>
        <div className='i-right'>
        soy del lado derecho
        </div>
    </div>
  )
}

export default Intro