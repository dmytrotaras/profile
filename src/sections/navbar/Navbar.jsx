import Logo1 from '../../assets/logo1.jpg'
import Logo2 from '../../assets/logo2.jpg'
import Pltt from '../../assets/bulb.png'
import data from './data'
import './navbar.css'
import {useModelContext} from '../../context/model-context.js'


const Navbar = () => {
    const {showModelHandler} = useModelContext(); 
  return (
    <nav>
        <div className='container nav__container'>
            <a href="#" className='nav__logo'>
                <img src={Logo1} alt="Logo" />
            </a>
            <ul className='nav__menu'>
                {
                    data.map(item => <li key={item.id} className={item.ref} ><a href={item.link}>{item.title}</a></li>)
                }
            </ul>
            <button id='theme__icon' onClick={showModelHandler}>
                <img src={Pltt} alt=""/>
            </button>

        </div>
    </nav>
  )
}

export default Navbar