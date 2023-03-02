import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resumen from './resumen.pdf'

const Services = () => {
  return (
    <div className='services'>
        <div className='awesome'>
        <span>Mi Impresionante</span>
        <span>Mis Servicios</span>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </span>
        <a href={Resumen} download>
        <button className='button s-button'>Descargar CV</button>
        </a>

        <div className='blur s-blurl' style={{ background: "#ABF1FF94" }}></div>
        </div>
        <div className='cards'>
            <div style={{left: '20rem'}}>
                {/* 1 Card */}
                <Card
                emoji = {HeartEmoji}
                heading = {'Diseño'}
                detail = {"Figma, Sketch, Photoshop, Adobe 😜"}
                />
            </div>

        <div style={{ top: "10rem", left: "1rem" }}>
          {/* 2 Card */}
          <Card
            emoji = {Glasses}
            heading = {'Desarrollador'}
            detail = {"HTML, CSS, JavaScript, React 😄"}
          />
        </div>

        <div style={{ top: "17rem", left: "16rem" }}>
          {/* 3 Card */}
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry 😒"
            }
          />
        </div>
        </div>
    </div>
  )
}

export default Services