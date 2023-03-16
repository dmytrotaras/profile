import data from './data'
import './skills.css'
import Card from '../../components/Card'
import AOS from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import {GrLanguage} from 'react-icons/gr'

const Skills = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <p>In this part, I listed my main skills and knowledge connected with all SDLC. I'm working to give you the best in all below. </p>
      <div className='container skills__container' data-aos="flip-down">
        {
          data.map(item => (
            <Card key={item.id} className="skill light">
              <div className='skill__header'>
                <div className='skill__icon'>{item.icon}</div>
              </div>
              <div className='skill__details'>
                <h4>{item.p1}</h4>
                <h4>{item.p2}</h4>
                <h4>{item.p3}</h4>
                <h4>{item.p4}</h4>
                <h4>{item.p5}</h4>
                <h4>{item.p6}</h4>
                <h4>{item.p7}</h4>
              </div>
            </Card>
            /*
            <Card key={item.id} className="skill light">
              <div className='skill__icon'>{item.icon}</div>
              <div className='skill__details'>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </Card>
            */
          ))
        }
        </div>
    </section>
  )
}

export default Skills