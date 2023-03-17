import './questions.css'
import faqs from './data'
import FAQ from './FAQ'
import AOS from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'



const Questions = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  return (
    <section id="questions">
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some questions I usually get. Click to toggle the answer, and if you still have some more questions, shoot me a message from the contact section !
      </p>
      <div className='container faqs__container' data-aos="zoom-in">
        {
          faqs.map(faq => (
            <FAQ key={faq.id} faq={faq}/>
          ))
        }
      </div>
    </section>
  )
}

export default Questions