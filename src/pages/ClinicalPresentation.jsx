import SignUpButton from "../components/SignUpButton";
import "../styles/ClinicalPresentation.css";
import PresentationPageThree from "./sections/PresentationPageThree";
import PresentationPageTwo from "./sections/PresentationPageTwo";

const ClinicalPresentation = () => {
  return (
    <main className="presentation">
      <section className="presentation-section">
        <div className="presentation-container">
          <h1 className="presentation-title">
            <p>Recognizing</p>Symptoms of Severe or Extreme HTG
          </h1>
        </div>
        <SignUpButton />
      </section>
      <PresentationPageTwo />
      <PresentationPageThree />
    </main>
  );
};

export default ClinicalPresentation;
