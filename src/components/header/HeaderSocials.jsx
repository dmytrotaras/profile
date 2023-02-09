import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/dmytro-tarasov-a0a1701b0" target="_blank"><BsLinkedin/></a>
        <a href="https://instagram.com" target="_blank"><BsInstagram/></a>
        <a href="https://whatsapp.com" target="_blank"><BsWhatsapp/></a>
        <a href="https://telegram.com" target="_blank"><BsTelegram/></a>
    </div>
  )
}

export default HeaderSocials