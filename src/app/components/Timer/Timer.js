"use client";

import { useEffect } from "react";
import "./Timer.css"


export default function Timer({ limit, onsetLimit, onTimeOutFunc }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (limit > 0) {
        onsetLimit(limit - 1);
      } else {
        onTimeOutFunc();
      }
      return () => clearTimeout(timer);
    }, 1000);
  }, [limit, onsetLimit, onTimeOutFunc]);

  return <label className="timer">{limit} seconds left</label>;
}
