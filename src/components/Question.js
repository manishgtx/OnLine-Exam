import React, { useContext } from 'react'
import { AppContext } from '@/context/context'
const Question = ({id,status,index}) => {
  const {dispatch} = useContext(AppContext)
  return (
    <div className={`question ${status}`} onClick={() => dispatch({type:'MOVE_TO_QUESTION',payload:index})}>
      <p>{id}</p>
    </div>
  )
}

export default Question