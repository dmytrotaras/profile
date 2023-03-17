import './footer.css'
import {links, socials} from './data'
import AOS from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  return (
    <footer>
      <div data-aos="flip-right" className='container footer__container'>
        <h4>P.S. Talent is not a birthday gift, it's a skill which could be earned through the work.</h4>
        {/*
        <ul className='nav__menu'>
          {
            links.map(fLink => <li key={fLink.id} className={fLink.ref}><a href={fLink.link}>{fLink.title}</a></li>)
          }
        </ul>
        */}
      </div>
      <div className="footer__copyright" id="">
        <small>2023 Dmytro Tarasov &copy; All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer