import React, { useState } from "react";
import "./App.css";
import Player from "./components/Player";
import GameControls from "./components/GameControls";
import DisplayMessage from "./components/DisplayMessage";
import { defaultState } from "./constants";
import restart from "./imgs/restart.mp3";
import success from "./imgs/success.mp3";

function App() {
  const [gameState, setGameState] = useState(defaultState);

  function switchTurn(params) {
    const currentPlayer = gameState.playerTurn;
    currentPlayer === "player1"
      ? setGameState((prev) => ({ ...prev, playerTurn: "player2" }))
      : setGameState((prev) => ({ ...prev, playerTurn: "player1" }));
  }

  function updatePlayerScore(currentTempScore) {
    const activePlayer = gameState.playerTurn;
    const newScore = gameState[activePlayer].score + currentTempScore;
    setGameState((prev) => {
      return {
        ...prev,
        [activePlayer]: {
          ...prev[activePlayer],
          score: newScore,
        },
      };
    });
    if (newScore >= 100) {
      handleWin();
      return;
    }
    switchTurn();
  }

  function handleWin() {
    new Audio(success).play();
    setGameState((prev) => ({ ...prev, winner: prev.playerTurn }));
  }

  function restartGame() {
    new Audio(restart).play();
    setGameState(defaultState);
  }

  function setCurrentTempScore(latestRoll) {
    if (latestRoll === "reset") {
      setGameState((prev) => ({
        ...prev,
        currentTempScore: 0,
      }));
      return;
    }
    setGameState((prev) => ({
      ...prev,
      currentTempScore: prev.currentTempScore + latestRoll,
    }));
  }
  return (
    <div className="App">
      <div className="playerSection">
        <Player
          activePlayer={gameState.playerTurn}
          player={gameState.player1}
        />
        <Player
          activePlayer={gameState.playerTurn}
          player={gameState.player2}
        />
      </div>
      {gameState.winner && (
        <DisplayMessage
          onClick={restartGame}
          text={`${gameState.playerTurn} WON!`}
          buttonText={"Play Again!"}
        />
      )}
      <GameControls
        updatePlayerScore={updatePlayerScore}
        switchTurn={switchTurn}
        restartGame={restartGame}
        currentTempScore={gameState.currentTempScore}
        setCurrentTempScore={setCurrentTempScore}
      />
    </div>
  );
}

export default App;
