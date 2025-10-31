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
    <div className="App">
      <div>
        <div>Quiz App</div>
        <div></div>
      </div>
    </div>
  )
}

export default App