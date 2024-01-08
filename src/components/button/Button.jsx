import React from "react";

const Button = ({ type, icon, text, className, onClick }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      <span>{icon}</span>
      <p>{text}</p>
    </button>
  );
};

export default Button;
