import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'

const Services = () => {
  return (
    <div className='services'>
        <div className='awesome'>
        <span>Mi Impresionante</span>
        <span>Mis Servicios</span>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </span>
        <button className='button s-button'>Descargar CV</button>
        <div className='blur s-blurl' style={{ background: "#ABF1FF94" }}></div>
        </div>
        <div className='cards'>
            <div>
                <Card
                emoji = {HeartEmoji}
                heading = {'Desing'}
                detail = {"Figma, Sketch, Photoshop, Adobe, XD"}
                />
            </div>
        </div>
    </div>
  )
}

export default Services