import React from "react";
import "./GameControls.css";
import Button from "./Button";
import Dice from "./Dice";


function GameControls({
  updatePlayerScore,
  switchTurn,
  restartGame,
  currentTempScore,
  setCurrentTempScore,
}) {
  return (
    <div className="GameControls">
      <Button onClick={restartGame} text="Restart" />
      <Dice
        updatePlayerScore={updatePlayerScore}
        switchTurn={switchTurn}
        currentTempScore={currentTempScore}
        setCurrentTempScore={setCurrentTempScore}
      />
    </div>
  );
}

export default GameControls;
