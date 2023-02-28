import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import PSG from '../../img/PSG.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'

export const Intro = () => {
  return (
    <div className='intro'>
        <div className='i-left'>
        <div className="i-name">
            <span>Hola! Soy</span>
            <span>Nicolás Mosquera</span>
            <span>Desarrollador Frontend con alto nivel de experiencia en diseño y desarrollo web, <br/>protegiendo el trabajo y la Calidad.</span>
        </div>

        <button className="button i-button">Contratame</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>

        </div>
        <div className='i-right'>
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={PSG} alt="" />
        <img src={glassesimoji} alt="" />
        <div style={{top: '-4%', left: '68%'}}>
          <FloatingDiv image={Crown} txt1='Web' txt2='Desarrollador'/>
        </div>
        <div style={{top: '18rem', left: '-2.5rem'}}>
          <FloatingDiv image={thumbup} txt1="El Mejor Diseño" txt2="Para Otorgar"/>
        </div>

      {/* Blur divs*/}
        <div className='blur' style={{background: 'rgb(141, 227, 238)'}}></div>
        <div className='blur'
        style={{
          background: '#C1F5FF',
          top: '17rem',
          width: '21rem',
          height: '11rem',
          left: '-9rem'
        }}

        ></div>
        </div>
    </div>
  )
};

export default Intro