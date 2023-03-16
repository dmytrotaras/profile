import data from './data'
import './floating-nav.css'
import Scrollspy from 'react-scrollspy'
import Nav from './Nav'
import AOS from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

const FloatingNav = () => {
  return (
    <ul id="floating__nav">
      <Scrollspy className='scrollspy' items={['header', 'about', 'experience', 'education', 'contact']} currentClassName="active">
      {
        data.map(item => <Nav key={item.id} item={item} />)
      }
      </Scrollspy>
    </ul>

  )
}

export default FloatingNav