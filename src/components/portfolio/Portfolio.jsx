import React from 'react'
import './portfolio.css'
import IMG5 from '../../assets/flx.png'
import IMG6 from '../../assets/str.png'
import {FaTools} from 'react-icons/fa'
import {BsBriefcaseFill} from 'react-icons/bs'

const Portfolio = () => {
  return (
    <section id ='portfolio'>
        <h5>Professional Practice</h5>
        <h2>Experience</h2>

        <div className="container portfolio__container">
            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={IMG6} alt="" />
                </div>
                <h3>Technical Project Manager &nbsp;at&nbsp; NDA</h3>
                <p><strong>Focus on &nbsp;: &nbsp;&nbsp;</strong>CRM&nbsp;,&nbsp; CMS&nbsp;,&nbsp; AI</p>
                <p><strong>Technologies &nbsp;: &nbsp;&nbsp;</strong>php&nbsp;,&nbsp; python&nbsp;,&nbsp; node.js&nbsp;,&nbsp; tablau&nbsp;,&nbsp; muscul&nbsp;,&nbsp; postgraseSQL&nbsp;,&nbsp; prometheus&nbsp;,&nbsp; new relic&nbsp;,&nbsp; jenkins&nbsp;,&nbsp; terraform&nbsp;,&nbsp; gitlab&nbsp;,&nbsp; maven </p>


                <ul className='portfolio__list'>
                    <li>
                        <BsBriefcaseFill className='portfolio__list-icon'/>
                        <p>Manage the advanced teams with 15+ direct subordinates (backend, ml, devops, QAs and designers) in order solve business issues.</p>
                    </li>
                    <li>
                        <BsBriefcaseFill className='portfolio__list-icon'/>
                        <p>Create the vision of feature development, behavior of functionality, generating ideas for enhancements of the product, and new feature development.</p>
                    </li>
                    <li>
                        <BsBriefcaseFill className='portfolio__list-icon'/>
                        <p>Collect, define and translate business/product objectives into the technical requirements, tasks and distribute to development team.</p>
                    </li>
                </ul>

        
            </article>

            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={IMG5} alt="" />

                </div>
                <h3>Software Developer &nbsp;at&nbsp; Flex</h3>
                <p><strong>Focus on &nbsp;: &nbsp;&nbsp;</strong>ERP&nbsp;,&nbsp; WMS&nbsp;,&nbsp; SRM&nbsp;,&nbsp; EDI</p>
                <p><strong>Technologies &nbsp;: &nbsp;&nbsp;</strong>python&nbsp;,&nbsp; django&nbsp;,&nbsp; oop&nbsp;,&nbsp; sql&nbsp;,&nbsp; elasticsearch&nbsp;,&nbsp; linux&nbsp;,&nbsp; json&nbsp;,&nbsp; xml&nbsp;,&nbsp; git&nbsp;,&nbsp; rocket universe&nbsp;,&nbsp; perl&nbsp;,&nbsp; zpl</p>

                <ul className='portfolio__list'>
                    <li>
                        <FaTools className='portfolio__list-icon'/>
                        <p>Conduct in-depth analysis and investigation of existing code due to large amount of customization and poor technical documentation.  </p>
                    </li>
                    <li>
                        <FaTools className='portfolio__list-icon'/>
                        <p>Proactive approach to problem-solving, identifying and resolving them before the impacts are felt by the business.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </li>
                    <li>
                        <FaTools className='portfolio__list-icon'/>
                        <p>Technical backlog preparation, management of the issues lifecycle, iteration planning, and leading the elaboration of tasks.</p>
                    </li>
                </ul>

            </article>


        </div>
    </section>
  )
}

export default Portfolio