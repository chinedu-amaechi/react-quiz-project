"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import allQuestions from "./questions.json";
import Question from "./question";
import "./quiz.css";
import Timer from "@/app/components/Timer/Timer";
import { useUser } from "@/app/contexts/user-context";
import axios from "axios";

export default function Quiz({ category }) {
  const router = useRouter();
  const { user, setUser } = useUser();
  const [questions] = useState(allQuestions[category]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [openQuestion, setOpenQuestion] = useState(true);
  const [time, setTime] = useState(60);

  function handleNextQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function handleCloseQuestion() {
    setOpenQuestion(false);
    if (user.points > user.highestPoints) {
      setUser((prev) => ({ ...prev, highestPoints: prev.points }));
    }
  }

  function handleReplay() {
    setCurrentQuestion(0);
    setOpenQuestion(true);
    setUser((prev) => ({ ...prev, points: 0 }));
    setTime(60);
  }

  async function handleGoHome() {
    try {
      const response = await axios.put("/api/users", user);
      console.log(response.data);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="quiz">
      <div className="points-container">
        <label className="points">
          Points: <span>{user.points}</span>
        </label>
        <label className="highest-points">
          Highest points: <span>{user.highestPoints}</span>
        </label>
      </div>
      {openQuestion && <Question question={questions[currentQuestion]} />}
      <div className="quiz-actions">
        {openQuestion ? (
          <button className="btn" onClick={handleNextQuestion}>
            Next
          </button>
        ) : (
          <>
            <button className="btn" onClick={handleReplay}>
              Replay
            </button>
            <button className="btn" onClick={handleGoHome}>
              Go Home
            </button>
          </>
        )}
        <Timer
          onTimeOutFunc={handleCloseQuestion}
          limit={time}
          onsetLimit={setTime}
        />
      </div>
    </div>
  );
}
