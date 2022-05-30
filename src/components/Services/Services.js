import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card.js'
import MyResume from './MyResume.pdf'
import { motion } from 'framer-motion';
import {link} from 'react-scroll'

const Services = () => {

  const transition = {duration : 2, type: 'spring'}
  
  return (
    <div className="services" id='Services'>
      <div className="awesome">
      <span>My Awesome </span>
      <span>services </span>
      <spane>
        I create website and Webapp  
        <br />
        using HTML,CSS,Javascripts,Reacts and many more
      </spane>
      <a href={MyResume} download>
      <button className="button s-button">Download CV</button>
      </a>
      <div className="blur s-blur1" style={{ background: '#ABF1FF94'}}></div>
      </div>

      <div className="cards">
        
        <motion.div 
        whileInView={{left:'25rem'}}
        initial={{left: '25%'}}
        transition={transition}
        style={{left: '14rem'}}>
          <Card 
          emoji = {HeartEmoji}
          heading = {'Design'}
          detail = {"Figma, Sketch, Photoshop"}
          />
        </motion.div>

        <motion.div 
         whileInView={{left:'10rem'}}
         initial={{left: '25%'}}
         transition={transition}
        style={{ top: '12rem', left: '-4rem'}}>
          <Card 
            emoji={Glasses}
            heading={'Developer'}
            detail={'Html, Css, Javascript, React, Tailwind, Next js, Firebase 9'}
          />
        </motion.div>

        <motion.div 
         whileInView={{left:'25rem'}}
         initial={{left: '25%'}}
         transition={transition}
        style={{ top: '19rem', left: '12rem'}}>
          <Card 
            emoji={Humble}
            heading={'UI/UX'}
            detail={'Figma'}
          />
        </motion.div>
        <div className="blur s-blur2" style={{ background: 'var(--purple)'}}>

        </div>
      </div>
    </div>
  )
}

export default Services