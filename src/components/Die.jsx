import React from "react";
import { dieSides } from "../constants";
import "./Die.css";

function Die({ number }) {
  return <img className="Die" src={dieSides[number]} alt={number} />;
}

export default Die;
