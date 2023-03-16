import './contact.css'
import contacts from './data'
import AOS from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

const Contact = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  return (
    <section id="contact" >
      <h2>Get In Touch</h2>
      <p>
        Shoot me a message via any of the links below!
      </p>
      <div className='container contact__container' >
      {
        contacts.map(contact => <a data-aos={contact.animation} key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer">{contact.icon}</a>)
      }
      </div>
      </section>
  )
}

export default Contact