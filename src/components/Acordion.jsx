import React from "react";
import { useState } from "react";
import "../styles/Acordion.css";
import acordeonDown from "../assets/img/acordeondown.png";
import acordeonUp from "../assets/img/acordeonup.png";

const Acordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="acordion">
      <div className="acordion-item">
        <div className="acordion-title">
          <div className="title" onClick={() => setIsActive(!isActive)}>
            {title}
          </div>
          <div className="colapse-img" onClick={() => setIsActive(!isActive)}>
            <img src={isActive ? acordeonDown : acordeonUp} alt="" />
          </div>
        </div>
        {isActive && <div className="acordion-content">{content}</div>}
      </div>
    </div>
  );
};

export default Acordion;
