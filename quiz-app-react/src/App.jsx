import React from "react";

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
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-lg bg-black p-5 rounded shadow-lg">
        <div className="p-2 border text-center font-bold mb-2 text-xl">Quiz App</div>
        <div>
          <div>{questions[0].questionText}</div>
          {questions[0].answerOptions.map((option, index) => (
            <button>{option.answerText}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;