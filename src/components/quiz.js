"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
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
    if (answer === questions[currentQuestion]?.correct) {
      setScore(score + 1);
      // Add celebratory effect like confetti
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

  if (!questions[currentQuestion]) {
    return <div>Loading...</div>; // Show a loading message if questions[currentQuestion] is undefined
  }

  // Example celebratory effect using confetti
  const Confetti = () => (
    <div className="confetti">
      {/* Implement confetti animation */}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 lg:p-16 bg-gradient-to-r from-green-200 via-blue-200 to-purple-200">
      {showScore ? (
        <>
          <div className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Your Score: {score}/{questions.length}</h2>
            <button className="mt-4 py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 transition-transform duration-200 transform hover:scale-105">
              Share your results
            </button>
          </div>
          <Confetti />
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <header className="w-full flex justify-between items-center p-4">
            <h2 className="text-lg font-bold">Quiz Title</h2>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${(currentQuestion / questions.length) * 100}%` }}></div>
            </div>
          </header>
          <div className="mb-4 text-center">
            <h2 className="text-xl font-semibold sm:text-2xl lg:text-3xl">{questions[currentQuestion].question}</h2>
          </div>
          <div className="space-y-4 w-full max-w-md">
            {questions[currentQuestion].answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(answer)}
                className="w-full py-2 px-4 bg-white shadow rounded hover:bg-blue-100 transition-transform duration-200 transform hover:scale-105"
                aria-label={`Answer option ${answer}`}
              >
                {answer}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
