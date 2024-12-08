"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import questionsData from '../data/questions.json';

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);
  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    if (category && questionsData[category]) {
      setQuestions(questionsData[category]);
    }
    setInitialRenderComplete(true);
  }, [category]);

  const handleAnswerOptionClick = (answer) => {
    if (answer === questions[currentQuestion]?.correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handlePreviousQuestion = () => {
    const prevQuestion = currentQuestion - 1;
    if (prevQuestion >= 0) {
      setCurrentQuestion(prevQuestion);
    }
  };

  if (!initialRenderComplete) {
    return <div>Loading...</div>; // Show a loading message until the initial render is complete
  }

  if (!questions[currentQuestion] || !questions[currentQuestion].answers) {
    return <div>Loading...</div>; // Show a loading message if questions[currentQuestion] or answers is undefined
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 lg:p-16 bg-gray-50">
      <div className="w-full max-w-3xl p-6 sm:p-10 bg-white shadow rounded-lg">
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-bold mb-4">{category} Quiz</h2>
          <div className="mb-2 text-lg sm:text-xl lg:text-2xl">{questions[currentQuestion].question}</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {questions[currentQuestion].answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerOptionClick(answer)}
              className="w-full py-2 px-4 text-left bg-gray-100 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition transform hover:scale-105"
              aria-label={`Answer option ${answer}`}
            >
              {answer}
            </button>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handlePreviousQuestion}
            className="py-2 px-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
            disabled={currentQuestion === 0}
          >
            Previous
          </button>
          {currentQuestion === questions.length - 1 ? (
            <button className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">See Result</button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Next
            </button>
          )}
        </div>
        <div className="mt-4">
          <div className="h-2 w-full bg-gray-200 rounded">
            <div
              className="h-full bg-blue-500 rounded"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
