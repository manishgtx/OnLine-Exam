import {createContext,useReducer} from 'react';
import { quesList } from '@/meta/quesList';
import reducer from '@/reducers/questionsReducer';
const AppContext = createContext();
const initialState = {
    questionsList: quesList,
    questionNumber:0,
}
const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer,initialState);
    return (
        <AppContext.Provider value={{...state,dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}