import React from "react";
import "./Button.css";

function Button({ onClick, text }) {
  return (
    <button onClick={onClick} className="Button">
      {text}
    </button>
  );
}

export default Button;
