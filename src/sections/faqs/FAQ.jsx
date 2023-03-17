import Card from "../../components/Card"
import {FcPlus, FcMinus} from 'react-icons/fc'
import { useState } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

const FAQ = ({faq}) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <Card className="faq" onClick={() => setShowAnswer(prev => !prev)}>
        <div>
            <h4 className="faq__question">
                {faq.question}
            </h4>
            <button className="faq__icon">
                { showAnswer ? <FcMinus/> : <FcPlus/> }
            </button>

        </div>
        {showAnswer && <p className="faq__answer">{faq.answer}</p>}

    </Card>
  )
}

export default FAQ