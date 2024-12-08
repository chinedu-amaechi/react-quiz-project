// src/app/components/Loader/Loader.js

import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <div>
        <h1 className="text">Loading...</h1>
      </div>
      <div className="line-box">
        <div className="line"></div>
      </div>
    </div>
  );
}
