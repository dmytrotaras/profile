import React from 'react'
import './hobbyslider.css'
import AVTR1 from '../../assets/av1.png'
import AVTR2 from '../../assets/av2.jpeg'
import AVTR3 from '../../assets/av3.png'
import AVTR4 from '../../assets/av4.jpeg'
import AVTR from '../../assets/tool.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    image: AVTR1,
  },
  {
    image: AVTR2,
  },
  {
    image: AVTR3,
  },
  {
    image: AVTR4,
   
  },
]

const Hobbyslider = () => {
  return (
    <section id='hobbyslider'>
      <h5>What inspire me</h5>
      <h2>Hobby</h2>

      <Swiper className="container hobby__container"
            // install Swiper modules
            modules={[ Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}>
      {
        data.map(({image,name,text}, index) => {
          return (
            <SwiperSlide key={index} className='hobby'>
                <img className="hobby__image" src={image}/>
            </SwiperSlide>
          )

        })
      }


      </Swiper>
    </section>
  )
}

export default Hobbyslider
