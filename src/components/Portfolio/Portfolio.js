import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from "swiper/react"
import Sidebar from "../../img/sidebar.png"
import MusicApp from "../../img/musicapp.png"
import "swiper/css"

const PortFolio = () => {
  return (
    <div className="portfolio" id='Portfolio'>
        <span>Recent Projects</span>
        <span>Portfolio</span>


        {/* slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={Sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default PortFolio