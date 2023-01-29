import MainButton from "../../components/MainButton";
import "../../styles/CausesPageTwo.css";

const CausesPageTwo = () => {
  return (
    <section className="causes-section-two">
      <div className="wrapper">
        <div className="section-two-container">
          <h1 className="section-two-title">Overview</h1>
          <p className="section-two-subtitle">
            Hypertriglyceridemia arises from combinations of three factors,
            which vary across individuals
          </p>
          <ul className="section-two-list">
            <li>- increased triglyceride production</li>
            <li>
              - altered processing and catabolism of triglyceride-rich
              lipoproteins (TRLs)
            </li>
            <li>- reduced clearance of TRLs or TRL remnants</li>
          </ul>
          <p className="section-two-subtitle">These three factors can have.</p>
          <ul className="section-two-list">
            <li>
              - Genetic causes (commonly referred to as “Primary HTG”), often a
              complex polygenetic susceptibility.{" "}
            </li>
            <li>
              - Nongenetic causes (commonly referred to as “Secondary HTG”),
              including diet, lifestyle, medical conditions, and drugs5.
            </li>
            <li>
              Often, HTG is a complex mix of polygenetic and secondary causes.
              In some cases, genetic factors may explain high TG levels that are
              refractory to lifestyle changes and guideline-directed therapy.3,5
            </li>
          </ul>
          <MainButton text={"Learn more"} />
        </div>
      </div>
    </section>
  );
};

export default CausesPageTwo;
