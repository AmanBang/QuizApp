import React from "react";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import QuizScreen from "./Components/QuizScreen";
import JoinScreen from "./Components/JoinScreen";

function App() {
  
  const [isQuizStarted, setQuizStarted] = useState()

  return(
    <div>
      <Navbar />
      <div className="quiz-container">
      {
        isQuizStarted ?  <QuizScreen retry={()=>setQuizStarted(false)} /> :
        <JoinScreen start={()=> setQuizStarted(true)}/>
      }
       

      </div>
    </div>
  )

}

export default App; 