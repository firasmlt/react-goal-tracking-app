import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className="button"
      onClick={props.type === "submit" ? props.onClick : props.clearGoals}
    >
      {props.children}
    </button>
  );
};

export default Button;
