import React from 'react'
import './education.css'
import KNTEU from '../../assets/knteu.png'
import KPI from '../../assets/kpi.png'

const Education = () => {
  return (
    <section id ='education'>
        <h5>Academic Degree</h5>
        <h2>Education</h2>

        <div className="container education__container">
            <article className="education">
                <div className="education__head">
                    <div className="education__content">
                        <img src={KNTEU} className="university__logo__knteu"  />
                        <h3 className='knteu'>KYIV NATIONAL UNIVERSITY OF TRADE AND ECONOMICS</h3>
                    </div>
                </div>
                <div className="degree">
                    <div className="degree__description">
                        <h3><strong>BE &nbsp;&nbsp;</strong>in&nbsp; Software&nbsp; Engineering</h3>
                    </div>
                    <div className="degree_details">
                        <p><strong>Key courses &nbsp;:&nbsp;&nbsp; </strong>Algorithms and Data Structures&nbsp;,&nbsp; Object-Oriented Programming&nbsp;,&nbsp; Web-Applications Development&nbsp;,&nbsp; Databases and Information Systems&nbsp;,&nbsp; Introduction to Cloud Technologies&nbsp;,&nbsp; Functional Programming&nbsp;,&nbsp; Probability Theory&nbsp; and&nbsp; Statistics.</p>
                    </div>
                </div>
                
            </article>

            <article className="education">
                <div className="education__head">
                    <div className="education__content">
                        <img src={KPI} className="university__logo__kpi" />
                        <h3 className='kpi'> IGOR SIKORSKY KYIV POLYTECHNIC INSTITUTE </h3>
                    </div>
                </div>
                <div className="degree">
                    <div className="degree__description">
                        <h3><strong>MS &nbsp;&nbsp;</strong>in&nbsp; Computer&nbsp; Sciences&nbsp; in&nbsp; medicine</h3>
                    </div>
                    <div className="degree_details">
                        <p><strong>Key courses &nbsp;:&nbsp;&nbsp; </strong>Biomedical cybernetics&nbsp;,&nbsp; Research methods of complex systems and processes&nbsp;,&nbsp; High-performance distributing systems&nbsp;,&nbsp; Medical imaging&nbsp;,&nbsp; Ultra-large data sets processing: Methods and technologies of computational intelligence.</p>
                    </div>
                </div>
                
        
            </article>

            
        </div>
    </section>
  )
}

export default Education