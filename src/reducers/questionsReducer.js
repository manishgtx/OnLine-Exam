const questionsReducer = (state,action) => {
    if(action.type === 'DUMP'){
        const newData = {...state.questionsList[state.questionNumber],status:'dump'}
        const newList = state.questionsList.map((question) => {
            if(question.id === state.questionsList[state.questionNumber].id){
              return newData
            }
            return question
          })
          if(state.questionsList.length-1 > state.questionNumber){
            return {...state,questionsList:newList,questionNumber:state.questionNumber+1}
          }
          else {
            return {...state,questionsList:newList} 
          }
    }
    if(action.type === 'NEXT'){
        let newData;
        if(state.questionsList[state.questionNumber].selectedOption){
            newData = {...state.questionsList[state.questionNumber],status:'answers'}
        }
        else {
            newData = {...state.questionsList[state.questionNumber],status:'wrong-answers'}
        }
        const newList = state.questionsList.map((question) => {
            if(question.id === state.questionsList[state.questionNumber].id){
              return newData
            }
            return question
          })
          if(state.questionsList.length-1 > state.questionNumber){
            return {...state,questionsList:newList,questionNumber:state.questionNumber+1}
          }
          else {
            return {...state,questionsList:newList} 
          }
    }
    if(action.type === 'PREV'){
        return {...state,questionNumber:state.questionNumber-1}
    }
    if(action.type === 'REVIEW'){
        let newData;
        if(state.questionsList[state.questionNumber].selectedOption){
            newData = {...state.questionsList[state.questionNumber],status:'reviewPanswers'}
        }
        else {
            newData = {...state.questionsList[state.questionNumber],status:'review-answers'}
        }
        const newList = state.questionsList.map((question) => {
            if(question.id === state.questionsList[state.questionNumber].id){
              return newData
            }
            return question
          })
          if(state.questionsList.length-1 > state.questionNumber){
            return {...state,questionsList:newList,questionNumber:state.questionNumber+1}
          }
          else {
            return {...state,questionsList:newList} 
          }
    }
    if(action.type === 'CLEAR'){
        const newData = {...state.questionsList[state.questionNumber],selectedOption:'',status:''}
        const newList = state.questionsList.map((question) => {
            if(question.id === state.questionsList[state.questionNumber].id){
              return newData
            }
            return question
          })
          return {...state,questionsList:newList}
    }
    if(action.type === 'MOVE_TO_QUESTION'){
        return {...state,questionNumber:action.payload}
    }
    if(action.type === 'SELECT_OPTION'){
        const newData = {...state.questionsList[state.questionNumber],selectedOption:action.payload}
        const newList = state.questionsList.map((question) => {
            if(question.id === state.questionsList[state.questionNumber].id){
              return newData
            }
            return question
          })
        return {...state,questionsList:newList}
    }
    return state;
}

export default questionsReducer;