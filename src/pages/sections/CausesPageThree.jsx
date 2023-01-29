import "../../styles/CausesPageThree.css";

const CausesPageThree = () => {
  return (
    <section className="causes-section-three">
      <div className="wrapper">
        <div className="causes-section-three-container">
          <h1 className="causes-section-three-title">
            Nongenetic Causes of HTG
          </h1>
          <div className="list-container">
            <ul className="section-three-list">
              <p>Hypothyroidism</p>
              <li>Pregnancy (especially third trimester)</li>
              <li>Poorly controlled diabetes</li>
              <li>Obesity</li>
              <li>Alcohol intake</li>
              <li>Insulin resistance</li>
              <li>Metabolic syndrome</li>
              <li>Renal disease (nephrotic syndrome, glomerulonephritis)</li>
              <li>Acute hepatitis</li>
              <li> Diet (high saturated fat or high glycemic index)</li>
              <li>Systemic lupus erythematosus</li>
              <li>HIV</li>
              <li>Cushing syndrome</li>
              <li>Lipodystrophy</li>
              <li>Glycogen storage disease</li>
            </ul>
            <ul className="section-three-list">
              <p>Drugs</p>
              <li>Nonselective β blockers</li>
              <li>Corticosteroids</li>
              <li>Oral estrogens</li>
              <li>Thiazide diuretics</li>
              <li>Tamoxifen, raloxifene</li>
              <li>Androgens</li>
              <li>Bile acid sequestrants</li>
              <li>Cyclosporine</li>
              <li>
                Second-generation antipsychotics <br />
                (eg, clozapine and olanzapine)
              </li>
              <li>Sirolimus, tacrolimus</li>
              <li>L-asparaginase retinoic acid drugs (isotretinoin)</li>
              <li>Cyclophosphamide</li>
              <li>Protease inhibitors</li>
              <li>Interferon</li>
            </ul>
          </div>

          <p className="section-three-text">
            Hypertriglyceridemia can occur as part of the metabolic syndrome and
            complicate the management of obesity, diabetes, and insulin
            resistance. 5,10,11
          </p>
        </div>
      </div>
    </section>
  );
};

export default CausesPageThree;
