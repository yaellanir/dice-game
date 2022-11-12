import React from "react";
import Score from "./Score"
import "./Player.css";

function Player({ player, activePlayer}) {
  const {id,name,score} = player

  return (
    <div className={`player ${activePlayer === id ? 'active' :null}`}>
      <h2>{name}</h2>
      <Score score={score}/>
    </div>
  );
}

export default Player;
