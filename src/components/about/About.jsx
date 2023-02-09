import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {HiAcademicCap} from 'react-icons/hi'
import {BsFolderFill} from 'react-icons/bs'
import {BsBriefcaseFill} from 'react-icons/bs'
import AVTR from '../../assets/tool.png'
import AVTR7 from '../../assets/notebook.png'
import AVTR8 from '../../assets/folder.png'

const About = () => {
  return (
    <section id='about'>
        <h5>Get to Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="About Image"/>
                </div>
            </div>
            <div className="about__content">
                <div className='about__cards'>
                    <article className='about__card'>
                        <img src={AVTR} className='facts__icon' />
                        <h5>Exprience</h5>
                        <small>4 Years Working</small>
                    </article>
                    <article className='about__card'>
                        <img src={AVTR7} className='facts__icon' />
                        <h5>Bachelor</h5>
                        <small>of Engineering</small>
                    </article>
                    <article className='about__card'>
                        <img src={AVTR8} className='facts__icon' />
                        <h5>Projects</h5>
                        <small>10+ Completed</small>
                    </article>
                </div>
                <p>
                Experienced software developer and technical project manager with a unique combination of technology expertise and exceptional communication skills. My engineering skills include application development with microservice architecture, and my background in leading instilled a strong foundation in excellent interpersonal, written, and verbal communication skills. I approach application development with passion, care, and diligent attention to detail. I look forward to each challenge as an opportunity to build on a lifelong pursuit of learning.
                </p>
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About