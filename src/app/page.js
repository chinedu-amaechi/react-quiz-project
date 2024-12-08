// src/app/page.js

import Link from "next/link";

import "./intro-page.css";

export default function Home() {
  return (
    <div className="intro-page">
      <h1>Welcome to ProgQuiz</h1>
      <p>Here you can test your programming knowledge</p>
      <Link href="/quiz-page" className="btn">
        Start Quiz
      </Link>
      {/* <Loader /> */}
    </div>
  );
}
