import { React, useState } from "react";
import "./Dice.css";
import Die from "./Die";
import diceRollSound from "../imgs/dice-roll-sound.mp3";
import chaching from "../imgs/chaching.mp3";
import loser from "../imgs/loser.mp3";

function Dice({
  updatePlayerScore,
  switchTurn,
  currentTempScore,
  setCurrentTempScore,
}) {
  // const [currentTempScore, setCurrentTempScore] = useState(0);
  const [die1, setDie1] = useState(null);
  const [die2, setDie2] = useState(null);

  // ? can i to map and also display img?
  function rollingDice() {
    const roll1 = Math.floor(Math.random() * 6 + 1);
    const roll2 = Math.floor(Math.random() * 6 + 1);
    new Audio(diceRollSound).play();

    setDie1(roll1);
    setDie2(roll2);
    if (roll1 === roll2) {
      new Audio(loser).play();
      setCurrentTempScore("reset");
      switchTurn();
      return;
    }
    setCurrentTempScore(roll1 + roll2);
  }

  function holdDice() {
    new Audio(chaching).play();
    updatePlayerScore(currentTempScore);
    setCurrentTempScore("reset");
  }

  return (
    <>
      <div className="diceSection">
        <div className="die">
          <Die number={die1} />
        </div>
        <div className="die">
          <Die number={die2} />
        </div>
        <button onClick={rollingDice} className="roll">
          Roll
        </button>
        <button onClick={holdDice} className="hold">
          {" "}
          Hold
        </button>
      </div>
      <div className="tempScoreContainer diceSection">
        <h3>Turn Score</h3>
        <p>{currentTempScore}</p>
      </div>
    </>
  );
}

export default Dice;
