import './faqObshie.scss'
import {FaAngleDown} from 'react-icons/fa'
import {FaAngleUp} from 'react-icons/fa'
import { useState } from 'react'
import { dataQuesAnswer1_1, dataQuesAnswer1_2 } from './dataQuesAnswer3'
import { dataQuesAnswer1_3, dataQuesAnswer1_4 } from './dataQuesAnswer3'

function FaqMarketplace(){
    const [answer1, setAnswer1] = useState(false)
    const toggleAnswer1 = () => {
        setAnswer1(!answer1)
    }
    const [answer2, setAnswer2] = useState(false)
    const toggleAnswer2 = () => {
        setAnswer2(!answer2)
    }

    const [answer3, setAnswer3] = useState(false)
    const toggleAnswer3 = () => {
        setAnswer3(!answer3)
    }

    const [answer4, setAnswer4] = useState(false)
    const toggleAnswer4 = () => {
        setAnswer4(!answer4)
    }
    return(
        <div>

{dataQuesAnswer1_1.map((item) => (
            <div className='div_answ_qwes' key={item.id}>
            <div className='div_ques'>
                <FaAngleDown className='icon_angle_down' onClick={toggleAnswer1}/>
                {answer1 && <FaAngleUp className='icon_angle_up' onClick={toggleAnswer1}/>}
                <h1>{item.question}</h1>
            </div>
            {answer1 &&  <p className='answ_p2p'>{item.answer}</p>}
            </div>
            )) }

{dataQuesAnswer1_2.map((item) => (
            <div className='div_answ_qwes' key={item.id}>
            <div className='div_ques'>
                <FaAngleDown className='icon_angle_down' onClick={toggleAnswer2}/>
                {answer2 && <FaAngleUp className='icon_angle_up' onClick={toggleAnswer2}/>}
                <h1>{item.question}</h1>
            </div>
            {answer2 &&  <p className='answ_p2p'>{item.answer}</p>}
            </div>
            )) }

{dataQuesAnswer1_3.map((item) => (
            <div className='div_answ_qwes' key={item.id}>
            <div className='div_ques'>
                <FaAngleDown className='icon_angle_down' onClick={toggleAnswer3}/>
                {answer3 && <FaAngleUp className='icon_angle_up' onClick={toggleAnswer3}/>}
                <h1>{item.question}</h1>
            </div>
            {answer3 &&  <p className='answ_p2p'>{item.answer}</p>}
            </div>
            )) }

{dataQuesAnswer1_4.map((item) => (
            <div className='div_answ_qwes' key={item.id}>
            <div className='div_ques'>
                <FaAngleDown className='icon_angle_down' onClick={toggleAnswer4}/>
                {answer4 && <FaAngleUp className='icon_angle_up' onClick={toggleAnswer4}/>}
                <h1>{item.question}</h1>
            </div>
            {answer4 &&  <p className='answ_p2p'>{item.answer}</p>}
            </div>
            )) }

        </div>
    )
}

export default FaqMarketplace