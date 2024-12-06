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
  const { level } = router.query;

  useEffect(() => {
    if (level && questionsData[level]) {
      setQuestions(questionsData[level]);
    }
    setInitialRenderComplete(true);
  }, [level]);

  const handleAnswerOptionClick = (answer) => {
    if (answer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  if (!initialRenderComplete) {
    return <div>Loading...</div>; // Show a loading message until the initial render is complete
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 lg:p-16">
      {showScore ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Your Score: {score}/{questions.length}</h2>
        </div>
      ) : (
        <>
          <div className="mb-4 text-center">
            <h2 className="text-xl font-semibold sm:text-2xl lg:text-3xl">{questions[currentQuestion].question}</h2>
          </div>
          <div className="space-y-4 w-full max-w-md">
            {questions[currentQuestion].answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(answer)}
                className="w-full py-2 px-4 border border-gray-300 rounded hover:bg-gray-100 transition transform duration-200 hover:scale-105"
              >
                {answer}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
