import React from 'react'
import {FiMail} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="mailto:dmytrosuertes@gmail.com" target="_blank"><FiMail/></a>
        <a href="https://instagram.com" target="_blank"><BsInstagram/></a>
        <a href="https://wa.me/+34623494625" target="_blank"><BsWhatsapp/></a>
        <a href="https://t.me/somenmsrnm" target="_blank"><BsTelegram/></a>
    </div>
  )
}

export default HeaderSocials