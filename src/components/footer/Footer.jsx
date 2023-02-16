import React from 'react'
import './footer.css'
import {FiMail} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#hobby">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer__socials">
        <a href="https://t.me/somenmsrnm" ><BsTelegram/></a>
        <a href="https://wa.me/+34623494625" ><BsWhatsapp/></a>
        <a href="mailto:dmytrosuertes@gmail.com" ><FiMail/></a>
        <a href="https://instagram.com"><BsInstagram/></a>
        
        
        </div>
        <div className="footer_copyright">
            <small>&copy; Dmytro Taras. All rights reserved. </small>
        </div>
    </footer>
  )
}

export default Footer