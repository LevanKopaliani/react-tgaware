import ContactButton from "../../components/ContactButton";
import "../../styles/ResourcesPageThree.css";

const ResourcesPageThree = () => {
  return (
    <section className="resources-section-three">
      <div className="wrapper">
        <div className="resources-section-three-container">
          <div className="section-three-top">
            <h1 className="three-top-title">Previous Studies of Olezarsen</h1>

            <ul className="three-top-list">
              <p>
                In a Phase 2 study, olezarsen significantly reduced and
                sustained TG levels with a favorable safety and tolerability
                profile.
              </p>
              <li>
                In patients with established cardiovascular disease (CVD) or at
                risk for CVD, and TG levels between 200 and 500 mg/dL, 91 %
                achieved TG levels {"<"}150 mg/dL following treatment with
                olezarsen.
              </li>
              <li>
                No clinically meaningful safety signals were observed in
                early-stage clinical studies.
              </li>
            </ul>
            <p className="three-top-subtitle">
              Previous studies support administration of olezarsen by
              once-monthly subcutaneous injection.
            </p>
          </div>
          <div className="section-three-bottom">
            <h1 className="three-bottom-title">
              Do you have eligible patients?
            </h1>
            <ul className="three-bottom-list">
              <li>
                Potentially eligible participants are adults with fasting TG ≥
                500 mg/dl despite ongoing use of standard-of-care lipid-lowering
                medications.
              </li>
              <li>
                Patients with glycated hemoglobin (HbA1C ≥ 9.5) are not
                eligible.
              </li>
              <li>
                Other inclusion and exclusion criteria will be evaluated before
                enrollment.
              </li>
            </ul>
            <div className="three-bottom-button-container">
              <ContactButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesPageThree;
