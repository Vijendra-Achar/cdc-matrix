import React from "react";
import "./styles.scss";

const Input = ({ ...props }) => {
  return <input {...props} className="input-box" />;
};

export default Input;
