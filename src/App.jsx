import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Education from "./sections/education/Education";
import Experience from "./sections/experience/Experience";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import Footer from "./sections/footer/Footer";
import Header from "./sections/header/Header";
import Hobby from "./sections/hobby/Hobby";
import Navbar from "./sections/navbar/Navbar";
import FAQs from "./sections/faqs/Questions";
import Skills from "./sections/skills/Skills";
import Model from "./components/Model";
import Theme from "./theme/Theme";
import { useThemeContext } from './context/theme-context';
import {useRef, useState, useEffect} from 'react';


const App = () => {
  const {themeState} = useThemeContext();

  const mainRef = useRef();

  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPosition, setSiteYPosition] = useState(0);


  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  }
  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  }

  //check if floating nav should be shown or hidden
  const floatingNavToggleHandler = () => {
    if(siteYPosition < (mainRef?.current?.getBoundingClientReact().y - 20) || siteYPosition > (mainRef?.current?.getBoundingClientReact().y + 20)){
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }
    setSiteYPosition(mainRef?.current?.getBoundingClientReact().y);
  }

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);
    return () => clearInterval(checkYPosition);
  }, [siteYPosition])



  return (
    <main className={`${themeState.primary}`} ref={mainRef}>
        <Navbar/>
        <Header/>
        <About/>
        <Skills/>
        <Experience/>
        <Education/>
        <FAQs/>
        <Contact/>
        <Footer/>
        <Theme/>
        {showFloatingNav && <FloatingNav/>}
        
    </main>
  )
}

export default App


