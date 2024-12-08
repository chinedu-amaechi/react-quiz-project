// src/app/quiz-page/page.js

"use client";

import Loader from "@/app/components/Loader/Loader";
import { useState } from "react";

import { UserContextProvider } from "../contexts/user-context";
import RegisterForm from "./components/register-form";
import CategorySelection from "./components/category-selection";
import Quiz from "./components/quiz";

import "./quiz-page.css";

export default function QuizPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(true);
  const [showCategorySelection, setShowCategorySelection] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);
  const [category, setCategory] = useState(null);

  function handleGetQuestions() {
    setIsLoading(true);
    setShowRegisterForm(false);
    setTimeout(() => {
      setIsLoading(false);
      setShowCategorySelection(true);
    }, 4000);
  }

  function handleCategorySelect(selectedCategory) {
    setCategory(selectedCategory);
    setStartQuiz(true);
  }

  return (
    <UserContextProvider>
      <div className="quiz-page">
        {isLoading && <Loader />}
        {showRegisterForm && <RegisterForm onSubmitFunc={handleGetQuestions} />}
        {showCategorySelection && !startQuiz && (
          <CategorySelection onSelectCategory={handleCategorySelect} />
        )}
        {startQuiz && category && <Quiz category={category} />}
      </div>
    </UserContextProvider>
  );
}
