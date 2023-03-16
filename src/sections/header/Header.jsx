import './header.css'
import ME from '../../assets/me.png'
import data from './data'
import AOS from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

const Header = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
  return (
    <header id="header">
        <div className="container header__container">
            <div className="header__profile" data-aos="flip-left">
                <img src={ME} alt="Header Portrait"/>
            </div>
            <h3 data-aos="fade-up">Dmytro Tarasov</h3>
            <p data-aos="fade-up">
            Experienced software developer and technical project manager with a unique combination of technology expertise and exceptional communication skills.
            </p>
            <div className="header__cta" data-aos="fade-up">
                <a href="#contact" className='btn pirmary'>Let's Talk</a>
                <a href="#experience" className='btn light'>My Experience</a>
            </div>
            <div className="header__socials">
                {
                    data.map(item => <a key={(item.id)} href={item.link} className={item.ref} target="_blank" rel="noopener noreferrer" >{item.icon}</a>)
                }
            </div>
        </div>

    </header>
  )
}

export default Header