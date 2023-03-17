import './about.css'
import AboutImage from '../../assets/me-about.jpg'
import data from './data'
import Card from '../../components/Card'
/*
import {HiDownload} from 'react-icons/hi'
import CV from '../../assets/cv.pdf'
...
<a href={CV} download className='btn primary'>Download CV <HiDownload/></a> 
*/


const About = () => {
  return (
    <section id="about" >
      <div className='container about__container'>

        <div className='about__left' data-aos="fade-right">

          <div className='about__portrait'>
            <div className='about__portrait-image' >
              <img src={AboutImage} alt='About Image'/>
            </div>
          </div>

        </div>
        <div className='about__right' data-aos="fade-left">
          <h5>Get to Know</h5>
          <h2>About Me</h2>
          <div className='about__cards'>
            {
              data.map(item => (
                <Card key={item.id} className='about__card'>
                  <img src={item.icon} className='about__card-icon' />
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }

          </div>
          <p>
          Constantly growing as a professional in web development and other related IT industries.
          </p>
          <p>
          My engineering experience include application development with microservice architecture, and my background in leading instilled a strong foundation in excellent interpersonal, written, and verbal communication skills. I approach application development with passion, care, and diligent attention to detail. I look forward to each challenge as an opportunity to build on a lifelong pursuit of learning.
          </p>
          <a href="#contact" className='btn pirmary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About