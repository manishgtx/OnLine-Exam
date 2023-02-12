import { useContext } from "react";
import { AppContext } from "@/context/context";
import Question from "./Question";
const Pallete = () => {
    const {questionsList} = useContext(AppContext);
    return (
        <div className="pallete">
            <h1>Question Pallete</h1>
            <div className="questions-container">
                {questionsList.map((question,index) => {
                    return <Question key={question.id} {...question} index={index}/>
                })}
            </div>
        </div>
    )
}

export default Pallete;