import MainButton from "../../components/MainButton";
import "../../styles/PresentationPageTwo.css";

const PresentationPageTwo = () => {
  return (
    <section className="presentation-section-two">
      <div className="wrapper">
        <div className="presentation-section-two-container">
          <div className="pst-info-container">
            <h1 className="pst-info-title title">
              Consensus Definitions of Plasma Triglyceride Levels
            </h1>
            <MainButton text={"Learn more"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationPageTwo;
