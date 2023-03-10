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
        <div className="acordion-item-title">
          <div
            className="acordion-title title"
            onClick={() => setIsActive(!isActive)}
          >
            {title}
          </div>
          <div className="colapse-img" onClick={() => setIsActive(!isActive)}>
            <img src={isActive ? acordeonDown : acordeonUp} alt="" />
          </div>
        </div>
        {isActive && (
          <div className="acordion-content">
            {content.map((item, index) => (
              <p key={index}>{item.data}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Acordion;
