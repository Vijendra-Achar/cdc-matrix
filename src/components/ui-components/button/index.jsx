import React from "react";
import "./styles.scss";

const Button = ({ label, ...props }) => {
  return (
    <button {...props} className="custom-button">
      {label}
    </button>
  );
};

export default Button;
