import React from "react";
import "./Button.css";

const Button = ({ handleClick, btnText, classBtn }) => {
  return (
    <div className="btn-container">
      <button
        className={`btn-${classBtn}`}
        onClick={handleClick}
      >
        {btnText}
      </button>
    </div>
  );
};

export default Button;
