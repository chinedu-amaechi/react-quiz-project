// src/app/components/Navigation/Navigation.js
"use client";

import { useState } from "react";
import Link from "next/link";
import "./Navigation.css";
import Image from "next/image";

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="nav-bar">
      <label className="logo">ProgQuiz</label>
      <ul className={`nav-options ${showMenu ? "show" : ""}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Leaderboard">Leaderboard</Link>
        </li>
      </ul>

      <div className="action-container" onClick={handleShowMenu}>
        {showMenu ? (
          <Image src="close.svg" alt="Close menu" width={25} height={25} />
        ) : (
          <Image src="menu.svg" alt="Close menu" width={25} height={25} />
        )}
      </div>
    </nav>
  );
}
