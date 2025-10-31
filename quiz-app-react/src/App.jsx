import React, { useState } from "react";

const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the capital of India?',
    answerOptions: [
      { answerText: 'Dhaka', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: false },
      { answerText: 'Dehli', isCorrect: true },
    ],
  },
  {
    questionText: 'What is the capital of Afghanistan?',
    answerOptions: [
      { answerText: 'Dehli', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Kabul', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the capital of Pakistan?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'Islamabad', isCorrect: true },
      { answerText: 'Paris', isCorrect: false },
      { answerText: 'Peshawar', isCorrect: false },
    ],
  },
]

function App() {
  const [currentquestion, setCurrentQuestion] = useState(0)
  const [answered, setAnswered] = useState(false)
  const NextQuestion = () => {
    setCurrentQuestion(currentquestion + 1)
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-lg bg-black p-5 rounded shadow-lg">
        <div className="p-2 border text-center font-bold mb-2 text-xl">Quiz App</div>
        <div>
          <div>{questions[currentquestion].questionText}</div>
          {questions[currentquestion].answerOptions.map((option, index) => (
            <button 
            className="block w-full p-2 mt-2 rounded">
              {option.answerText}</button>
          ))}
          <button className={`${answered ? "bg-green-500" : "bg-green-300"} block w-full  mt-2 text-white p-2 rounded`}
          disabled = {answered ? "" : "disabled"}
          onClick={NextQuestion}>Next Question</button>
          <p className="text-center text-gray-400 text-sm mt-2">Question {currentquestion + 1} of {questions.length}</p>
        </div>
      </div>
    </div>
  )
}

export default App;