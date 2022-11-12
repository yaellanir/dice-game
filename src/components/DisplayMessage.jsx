import React from "react";
import Button from "./Button";
import "./DisplayMessage.css";
import winningImg from "../imgs/dice-gcdd7fe2d6_640.png";

const DisplayMessage = ({ text, onClick, buttonText }) => {
  return (
    <div className="modal">
      <div className="content">{text}</div>
      <img src={winningImg} alt="" />
      <Button onClick={onClick} text={buttonText} />
    </div>
  );
};

export default DisplayMessage;
