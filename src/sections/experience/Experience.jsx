
import './experience.css'
import data from './data'
import Card from '../../components/Card'


const Experience = () => {

  return (
    <section id ='experience'>

        <h2>Experience</h2>
        <p id='title__p'>Learn more about my Commercial Practice in this division.</p>

        <div className='container experience__container'>
        {
            data.map(item => (
                <Card key={item.id} className="experience__item" >
                    <div className="experience__item-image">
                        <a href={item.link} >
                           <img src={item.img} alt="" />
                        </a>
                    </div>
                    <h4>{item.title}</h4>
                    <p><strong>Focus on : </strong>{item.focus}</p>
                    <p><strong>Technologies : </strong>{item.tech}</p>
                    <div className='pitch__part'>
                        <img src={item.pitchimg} className='pitch__img'/>
                        <p>{item.pitch}</p>
                    </div>
                    <ul className='experience__list'>
                        <li>
                            <div className='experience__list-icon'>{item.icon}</div>
                            <p>{item.p1}</p>
                        </li>
                        <li>
                            <div className='experience__list-icon'>{item.icon}</div>
                            <p>{item.p2}</p>
                        </li>
                        <li>
                            <div className='experience__list-icon'>{item.icon}</div>
                            <p>{item.p3}</p>
                        </li>
                        <li>
                            <div className='experience__list-icon'>{item.icon}</div>
                            <p>{item.p4}</p>
                        </li>
                    </ul>
                </Card>
            ))
        }
        </div>



    </section>
  )
}

export default Experience