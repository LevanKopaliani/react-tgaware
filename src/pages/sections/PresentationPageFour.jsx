import MainButton from "../../components/MainButton";
import "../../styles/PresentationPageFour.css";

const PresentationPageFour = () => {
  return (
    <section className="presentation-section-four">
      <div className="wrapper">
        <div className="presentation-section-four-container">
          <div className="psfr-top-section">
            <h1 className="psfr-top-title">
              Severe and Extreme HTG May Present with Other Clinical Symptoms or
              Carry Risks
            </h1>
            <p className="psfr-top-subtitle">
              Older literature refers to the risk of AP appearing only above 10
              mmol/L, but recent studies indicate that the risk of acute
              pancreatitis increases in a dose-dependent manner even within the
              range of moderately elevated TG levels (eg, {">"}2.0 mmol/L)5,8
            </p>
            <p className="psfr-top-sub-subtitle">
              Furthermore, people with severe hypertriglyceridemia (TG 5.7-10.0
              mmol/L; 500-880 mg/dL) may experience unrecognized marked
              increases in TG levels ({">"}10 mmol/L), leading to acute
              pancreatitis.9
            </p>
            <MainButton text={"Clinical Presentation PDF."} />
          </div>
          <div className="psfr-bottom-section">
            <h1 className="psfr-bottom-title">
              Untreated severe or extreme HTG is associated with
            </h1>
            <div className="subtitle-container">
              <p> - Recurrent episodes of acute pancreatitis1</p>
              <p> - Hospitalization including ICU stays1</p>
              <p> - Increased risk of mortality</p>
              <p>(5-8% in uncomplicated acute pancreatitis)2,4,5</p>
              <p>- Persistent organ failure1</p>
              <p>
                - Significant interference with patients' lives, social
                relationships, and activities9
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationPageFour;
