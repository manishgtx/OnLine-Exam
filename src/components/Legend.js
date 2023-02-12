import React, { useContext } from 'react'
import Button from './Button'
import { AppContext } from '@/context/context'
const Legend = () => {
  const {questionsList} = useContext(AppContext);
  const answered = () => {
    let count=0;
    questionsList.forEach((question)=> {
      if(question.status === 'answers') count++;
    })
    return count;
  }
  const reviewPlusAns = () => {
    let count=0;
    questionsList.forEach((question)=> {
      if(question.status === 'reviewPanswers') count++;
    })
    return count;
  }
  const reviewMinusAns = () => {
    let count=0;
    questionsList.forEach((question)=> {
      if(question.status === 'review-answers') count++;
    })
    return count;
  }
  const dump = () => {
    let count=0;
    questionsList.forEach((question)=> {
      if(question.status === 'dump') count++;
    })
    return count;
  }
  const noVisit = () => {
    let count=0;
    questionsList.forEach((question)=> {
      if(question.status === '') count++;
    })
    return count;
  }
  return (
    <div className='legend'>
      <h1>Legend (Click to View)</h1>
      <div className="section-2">
        <div className="answers">{answered()} Answer</div>
        <div className="wrong-answers">2 No Answer</div>
      </div>
      <div className="section-2">
        <div className="reviewPanswers">{reviewPlusAns()} Review+Ans</div>
        <div className="review-answers">{reviewMinusAns()} Review-Ans</div>
      </div>
      <div className="section-2">
        <div className="dump">{dump()} Dump</div>
        <div className="no-visit">{noVisit()} No Visit</div>
      </div>
      <h1>10 All Questions</h1>
      <div className="buttons-legend">
        <div className="section-4">
          <Button title='Profile' className='question-btn'/>
          <Button title='Instr' className='question-btn'/>
        </div>
        <div className="section-4">
          <Button title='Questions' className='question-btn'/>
          <Button title='Submit' className='question-btn'/>
        </div>
      </div>
    </div>
  )
}

export default Legend