import {useState} from 'react'
import { AppContext } from '@/context/context'
const RadioBtn = () => {
    const {questionsList,questionNumber} = useContext(AppContext)
    const [option,setOption] = useState('')
  return (
                    <div className="radio-buttons">
                        {questionsList[questionNumber].options.map((option,i) => {
                            return <div key={i} className="radio">
                        <input type="radio" id={option} checked={()=> questionsList[questionNumber].selectedOption === option} name={option} value={option} onChange={(e)=> setOption({value:e.target.value})}/>
                        <label for="html">{option}</label>
                    </div>
            })}
                    </div>
  )
}

export default RadioBtn