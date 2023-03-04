import React from "react";
import "./styles.scss";

const Navigation = ({ heading }) => {
  return (
    <div className="header">
      <h2>{heading}</h2>
    </div>
  );
};

export default Navigation;
