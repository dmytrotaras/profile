import './education.css'
import data from './data'
import Card from '../../components/Card'
import AOS from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

const Education = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  return (
    <section id="education">
      <h2>Education</h2>
      <p>In this part find brief information about my Academic Degree, during it, I explored numerous topics of Computer Sience with emphasis on applying complex theoretical material to creating and optimization software.</p>

      <div className='container education__container'>
        {
          data.map(item => (
            <Card key={item.id} className="education">
              <div className='edu__block' >
                  <a href={item.link} id={item.nm} className='education__title'>
                    <img src={item.icon} className={item.nm}/>
                    <h3>{item.name}</h3>
                  </a>
                <div className='education__details'>
                  <h4>{item.title}</h4>
                  <p><strong>Key courses : </strong>{item.desc}</p>
                </div>
              </div>
            </Card>
          ))
        }
        </div>
    </section>
  )
}

export default Education