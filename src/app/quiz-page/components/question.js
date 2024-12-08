// src/app/quiz-page/components/question.js

"use client";

import { useEffect, useState } from "react";
import "./question.css";
import { useUser } from "@/app/contexts/user-context";

export default function Question({ question }) {
  const { setUser } = useUser();

  const [selectedOption, setSelectedOption] = useState(null);
  const [correctSelection, setCorrectSelection] = useState(null);

  // reset the selected option when question changes
  useEffect(() => {
    setSelectedOption(null);
  }, [question]);

  function handleCheckAnswer(option) {
    if (selectedOption === null) {
      setSelectedOption(option);
      if (question.correct_answer === option) {
        setCorrectSelection(true);
        setUser(prev => {return {...prev, points: prev.points + 1}})
      } else {
        setCorrectSelection(false);
      }
    }
  }
  return (
    <div className="question">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option, i) => (
          <p
            key={i}
            className={`option ${
              selectedOption === i && correctSelection
                ? "correct"
                : (selectedOption === i) & !correctSelection
                ? "wrong"
                : ""
            }`}
            onClick={() => handleCheckAnswer(i)}
          >
            {i + 1}: {option}
          </p>
        ))}
      </div>

      {selectedOption !== null && !correctSelection && (
        <p className="answer-summary">The correct answer is <span>option {question.correct_answer + 1}</span> </p>
      )}
    </div>
  );
}
