import "../../styles/PresentationPageFifth.css";
import Dimage0 from "../../assets/img/presentation/d0.png";
import Dimage1 from "../../assets/img/presentation/d1.png";
import Dimage2 from "../../assets/img/presentation/d2.png";
import Dimage3 from "../../assets/img/presentation/d3.png";
import Dimage4 from "../../assets/img/presentation/d4.png";
import Dimage5 from "../../assets/img/presentation/d5.png";
import Dimage6 from "../../assets/img/presentation/d6.png";
import DownArrow from "../../assets/img/acordeondown.png";
import UpArrow from "../../assets/img/acordeonup.png";
import { useState } from "react";

const PresentationPageFifth = () => {
  const [active, setActive] = useState(false);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 431pxpx)").matches
  );

  return (
    <section className="presentation-section-fifth">
      <div className="presentation-wrapper">
        <div className="presentation-section-fifth-container">
          <div className="psft-title-container">
            <h1 className="psft-title title">
              Common physical features
              <p>and complications of severe or extreme HTG</p>
            </h1>
          </div>
          <div className="psft-top-section">
            <div className="disease-block reverse">
              <div className="disease-info">
                <h1 className="disease-title title">Cardiovascular disease</h1>
                <p className="disease-subtitle">
                  People with severe or extreme HTG have approximately 2-fold to
                  9-fold higher risk of MI, stroke, aortic stenosis or other
                  major adverse cardiovascular event compared to those with
                  normal TG levels.1,4,16 Furthermore, elevated plasma TG levels
                  are related to subclinical atherosclerosis and vascular
                  inflammation in statin-naïve, apparently healthy people, and
                  to residual CV risk in statin-treated patients.7
                  <br />
                  Hypertriglyceridemia can occur as part of the metabolic
                  syndrome and complicate the management of obesity, diabetes,
                  and insulin resistance.5,10,11
                </p>
              </div>
              <div className="disease-img">
                <img src={matches ? Dimage0 : Dimage1} alt="" />
              </div>
            </div>
            <div className="disease-block">
              <div className="disease-img">
                <img src={Dimage2} alt="" />
              </div>
              <div className="disease-info">
                <h1 className="disease-title title">Acute pancreatitis</h1>
                <p className="disease-subtitle">
                  People with persistent extreme HTG, characterized by
                  chylomicronemia have a 360-fold higher risk of acute
                  pancreatitis than the general population and those with severe
                  HTG or transient extreme HTG have approximately 50-fold higher
                  risk.
                  <br /> <br />
                  Acute pancreatitis is fatal in 5-8% of uncomplicated cases and
                  as many as 30% of complicated cases. It is also associated
                  with an increased risk of persistent organ failure, endocrine
                  and exocrine pancreatic insufficiency, and type 3C diabetes
                  mellitus.
                </p>
              </div>
            </div>
            <div className="disease-block reverse">
              <div className="disease-info">
                <h1 className="disease-title title">
                  Non-alcoholic fatty liver disease (NAFLD)
                </h1>
                <p className="disease-subtitle">
                  Elevated plasma TG levels are a risk factor for development of
                  NAFLD,17-19 which can progress to non-alcoholic
                  steatohepatitis and cirrhosis.20 As many as three-in-four
                  people with extreme HTG levels may develop NAFLD.21
                </p>
              </div>
              <div className="disease-img">
                <img src={Dimage3} alt="" />
              </div>
            </div>
          </div>
          <div
            className={
              active ? "psft-bottom-section enroll" : "psft-bottom-section"
            }
          >
            <div className="disease-block">
              <div className="disease-img">
                <img src={Dimage4} alt="" />
              </div>
              <div className="disease-info">
                <h1 className="disease-title title">
                  Recurrent abdominal pain
                </h1>
                <p className="disease-subtitle">
                  People with persistent extreme HTG, characterized by
                  chylomicronemia have a 360-fold higher risk of acute
                  pancreatitis than the general population and those with severe
                  HTG or transient extreme HTG have approximately 50-fold higher
                  risk.
                </p>
              </div>
            </div>
            <div className="disease-block reverse">
              <div className="disease-info">
                <h1 className="disease-title title">Eruptive xanthoma</h1>
                <p className="disease-subtitle">
                  Elevated plasma TG levels are a risk factor for development of
                  NAFLD,17-19 which can progress to non-alcoholic
                  steatohepatitis and cirrhosis.20 As many as three-in-four
                  people with extreme HTG levels may develop NAFLD.21
                </p>
              </div>
              <div className="disease-img">
                <img src={Dimage5} alt="" />
              </div>
            </div>
            <div className="disease-block">
              <div className="disease-img">
                <img src={Dimage6} alt="" />
              </div>
              <div className="disease-info">
                <h1 className="disease-title fz-42 title">
                  Hepatosplenomegaly
                </h1>
                <p className="disease-subtitle">
                  PPeople with persistent extreme HTG, characterized by
                  chylomicronemia have a 360-fold higher risk of acute
                  pancreatitis than the general population and those with severe
                  HTG or transient extreme HTG have approximately 50-fold higher
                  risk.
                </p>
              </div>
            </div>
          </div>
          <div className="read-more">
            <div className="read-more-text title">
              <p>{active ? "SHOW LESS" : "Read more"}</p>
            </div>
            <div className="read-more-button">
              <img
                src={active ? UpArrow : DownArrow}
                alt=""
                onClick={() => setActive(!active)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationPageFifth;
