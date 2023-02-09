import React from 'react'
import './hobby.css'
import AVTR1 from '../../assets/av1.jpg'
import AVTR2 from '../../assets/av2.jpg'
import AVTR3 from '../../assets/av3.jpg'
import AVTR4 from '../../assets/av4.jpg'
import AVTR5 from '../../assets/av4.jpg'
import AVTR6 from '../../assets/av4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    image: AVTR1,
    name: 'Some NAME',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
  },
  {
    image: AVTR2,
    name: 'Some NAME',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
  },
  {
    image: AVTR3,
    name: 'Some NAME',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
  },
  {
    image: AVTR4,
    name: 'Some NAME',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
  },
  {
    image: AVTR5,
    name: 'Some NAME',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
  },
  {
    image: AVTR6,
    name: 'Some NAME',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
  },
]

const Hobby = () => {
  return (
    <section id='hobby'>
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
              <div className='hobby__image'>
                <img src={image}/>
              </div>
              <h5 className='hobby__name'>{name}</h5>
              <small className='hobby__describtion'>{text}</small>
            </SwiperSlide>
          )


        })
      }


      </Swiper>
    </section>
  )
}

export default Hobby
