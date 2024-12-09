// src/app/quiz-page/components/register-form.js

"use client";

import { useReducer } from "react";
import "./register-form.css";
import { useUser } from "@/app/contexts/user-context";

const initialState = {
  name: "",
  experience: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "experience":
      return { ...state, experience: action.payload };
    default:
      return state;
  }
}

export default function RegisterForm({ onSubmitFunc }) {
  const { setUser } = useUser();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, experience } = state;

  function handleFormSubmit(e) {
    e.preventDefault();
    if (name !== "" && experience !== "") {
      setUser({
        name: name,
        experience: experience,
        points: 0,
        highestPoints: 0,
      });
      onSubmitFunc();
    } else {
      alert("Enter your credentials");
    }
  }

  return (
    <form className="register-form" onSubmit={handleFormSubmit}>
      <div className="label-input">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
        />
      </div>
      <div className="label-input">
        <label>Years of programming experience:</label>
        <input
          type="number"
          value={experience}
          onChange={(e) =>
            dispatch({ type: "experience", payload: e.target.value })
          }
        />
      </div>
      <button className="btn">Start</button>
    </form>
  );
}
