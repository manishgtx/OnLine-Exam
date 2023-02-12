import {useContext} from 'react'
import { AppContext } from '@/context/context'
const QuestionPanel = ({option,setOption}) => {
    const {questionNumber,questionsList,dispatch} = useContext(AppContext)
    console.log(questionsList)
  return (
    <div className='question-panel'>
        <div className="head">
            <h1>QNo: 1</h1>
            <div className="dropdown-wrapper">
                <div className="dropdown">
                    View in:
                    <select name="cars" id="cars">
                        <option value="english">English</option>
                    </select>
                </div>
            </div>
        </div>
        <div className='question-wrapper'>
            <div className="instruction">
                <h5>QUESTION INSTRUCTION</h5>
            </div>
            <div className="question-detail">
            <h5>QUESTION</h5>
            <p>{questionsList[questionNumber].question}</p>
            {questionsList[questionNumber].options.map((option,i) => {
                console.log(option)
                return <div key={i} className="radio">
                        <input type="radio" checked={ questionsList[questionNumber].selectedOption === option} name={option} value={option} onChange={(e) => dispatch({type:'SELECT_OPTION',payload:e.target.value})}/>
                        <label for={option}>{option}</label>
                    </div>
            })}
            </div>
        </div>
        {/* dispatch({action:'SELECT_OPTION',payload:e.target.value}) */}
    </div>
  )
}

export default QuestionPanel