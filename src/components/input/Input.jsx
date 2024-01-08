import React from "react";

const Input = ({ id, labelStyle, inputStyle, text, placeholder, type, required }) => {
  return (
    <>
      {required ? <input id={id} className={inputStyle} type={type} placeholder={placeholder} required /> : <input id={id} placeholder={placeholder} className={inputStyle} type={type} />}
      <label htmlFor={id} className={labelStyle}>
        {text}
      </label>
    </>
  );
};

export default Input;
