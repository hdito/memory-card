import React, { useState } from "react";
import "./App.css";

function App() {
  const [highscore, setHightscore] = useState(() => 0);
  const [score, setScore] = useState(() => 0);
  const [clickedColors, setClickedColors] = useState(() => new Set());
  let cards = [
    "#d80d13",
    "#f81530",
    "#fc590c",
    "#fec844",
    "#013239",
    "#4e5136",
    "#025a8a",
    "#6fbacd",
    "#1a1a36",
    "#0507ba",
    "#3f7beb",
    "#b4c5df",
    "#591725",
    "#74242f",
    "#d7ab84",
  ];
  shuffleArray(cards);
  function handleClick(event) {
    console.log(event.target.id);
    if (clickedColors.has(event.target.id)) {
      if (score > highscore) {
        setHightscore(() => score);
      }
      setScore(() => 0);
      setClickedColors(() => new Set());
      return;
    }
    clickedColors.add(event.target.id);
    setScore((score) => score + 1);
  }
  return (
    <div className="app">
      <h1>Memory card</h1>
      <div className="score">
        <span>Score {score}</span>
        <span>High score: {highscore}</span>
      </div>
      <div className="cards">
        {cards.map((card) => (
          <div
            id={card}
            style={{ backgroundColor: card }}
            key={Math.random()}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
