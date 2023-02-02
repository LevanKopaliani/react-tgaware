import "../styles/FaqAcordeon.css";
import AcordionImg from "../assets/img/resources/acordeonbutton.png";
import { useState } from "react";

const FaqAcordeon = ({ title, content }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="faq-acordion">
      <div className="faq-acordion-item">
        <div className="faq-acordion-block">
          <h1 className="faq-acordion-title" onClick={() => setActive(!active)}>
            {title}
          </h1>
          <div className="faq-acordion-img">
            <img
              src={AcordionImg}
              className={active ? "rotate" : ""}
              alt=""
              onClick={() => setActive(!active)}
            />
          </div>
        </div>
        {active && <div className="acordeon-content">{content}</div>}
      </div>
    </div>
  );
};

export default FaqAcordeon;
