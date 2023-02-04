import "../../styles/ManagmentPageFour.css";
import ThOneImg from "../../assets/img/managment/thoneimg.png";
import ThTwoImg from "../../assets/img/managment/thtwoimg.png";
import TableButton from "../../assets/img/managment/tablebutton.png";
import TableData from "../../assets/data/TableData";
import { useState } from "react";

const ManagmentPageFour = () => {
  const [DataNum, setDataNum] = useState(0);

  return (
    <section className="managment-section-four">
      <div className="managment-section-four-top">
        <div className="wrapper">
          <div className="managment-section-four-container">
            <div className="msf-section-info">
              <h1 className="msf-title title">
                Lifestyle and
                <br /> Pharmacologic Treatments
              </h1>
              <p className="msf-subtitle">
                Genetic heterogeneity of triglyceride metabolism makes responses
                to guideline-directed therapy highly variable.
              </p>
              <p className="msf-sub-subtitle">
                Some people are highly resistant to current therapies, and their
                TG levels can be challenging to manage in the clinic. 2,3
              </p>
            </div>
            <div className="msf-section-table-one">
              <h2 className="msf-table-one-title title">
                Average effects of lifestyle interventions 4,5
              </h2>
              <table className="msf-table-one">
                <thead className="table-head">
                  <span>Lifestyle interventions</span>
                  <img src={ThOneImg} alt="" />
                </thead>
                <tbody>
                  <tr>
                    <td>Intervention</td>
                    <td>TG lowering</td>
                  </tr>
                  <tr>
                    <td>Alcohol abstinence</td>
                    <td>
                      TVariable Can lower TGs by as much as 80% in people with
                      elevated TG and excess alcohol intake
                    </td>
                  </tr>
                  <tr>
                    <td>Weight loss</td>
                    <td>
                      Approximately 8 mg/dL (0.1 mmol/L) per kg weight loss
                    </td>
                  </tr>
                  <tr>
                    <td>Dietary modification</td>
                    <td>
                      0.18 mmol/L (15.7 mg/dL) reduction with plant-based diet
                      enriched in protein and unsaturated fat
                    </td>
                  </tr>
                  <tr>
                    <td>Aerobic axercise</td>
                    <td>10-20%</td>
                  </tr>
                  <tr>
                    <td>ω3-polyunsaturaed fatty acids (eg, fish, flaxseed)</td>
                    <td>10-50%</td>
                  </tr>
                </tbody>
                <thead className="table-head">
                  <span>Pharmacologic interventions</span>
                  <img src={ThTwoImg} alt="" />
                </thead>
                <tbody>
                  <tr>
                    <td>Statins</td>
                    <td>
                      Dose-dependent; 22-45% reduction in people with baseline
                      TG
                      {" >"} 250mg/dL
                    </td>
                  </tr>
                  <tr>
                    <td>Fibrates</td>
                    <td>30-50%</td>
                  </tr>
                  <tr>
                    <td>Niacin</td>
                    <td>up to 30%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="table-one-bottom-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </div>

      <section className="managment-section-four-bottom">
        <div className="wrapper">
          <div className="msf-section-bottom-info">
            <h1 className="msf-title bottom-section-title title">
              Extreme HTG
            </h1>
            <p className="msf-subtitle">
              A small percentage of people have monogenic causes of extreme
              hypertriglyceridemia. They often have extremely high triglyceride
              levels ({">"}880 mg/dL) that do not respond to current
              therapies.1,5
            </p>
            <p className="msf-sub-subtitle">
              Without genetic testing, it can be challenging to distinguish
              monogenic chylomicronemia (also known as Familial Chylomicronemia
              syndrome; FCS) from multifactorial (polygenic) chylomicronemia
              syndrome (MCS).
              <br />
              <br /> The following table shows characteristics of these
              syndromes.
            </p>
            <table className="msf-table-two">
              <tr>
                <th className="tablebutton">
                  <img
                    className={DataNum === 0 ? "opacity" : ""}
                    src={TableButton}
                    alt="button"
                    onClick={() => setDataNum(0)}
                  />
                  <img
                    className={DataNum === 1 ? "opacity" : ""}
                    src={TableButton}
                    alt="button"
                    onClick={() => setDataNum(1)}
                  />
                </th>
                <th>{TableData[DataNum].string1}</th>
                <th className="second-cl">
                  Familial Chylomicronemia
                  <br /> Syndrome (FCS)
                </th>
              </tr>
              <tr>
                <td>TG Levels</td>
                <td>{TableData[DataNum].string2}</td>
                <td className="second-cl">
                  Persistently {">"}880 mg/dL (10mmmol/L)
                </td>
              </tr>
              <tr>
                <td>Prevalence</td>
                <td>{TableData[DataNum].string3}</td>
                <td className="second-cl">~ 1 in 100,000 to 1 in 1 million</td>
              </tr>
              <tr>
                <td>Genes</td>
                <td>{TableData[DataNum].string4}</td>
                <td className="second-cl">
                  Homozygous mutations in LPL or genes involved in LPL
                  processing (APOC2, APOA5, GPD1, GPIHBP1, LMF1)
                </td>
              </tr>
              <tr>
                <td>Contribution of secondary factors</td>
                <td>{TableData[DataNum].string5}</td>
                <td className="second-cl">Minimal</td>
              </tr>
              <tr>
                <td>Inheritance</td>
                <td>{TableData[DataNum].string6}</td>
                <td className="second-cl">Autosomal recessive</td>
              </tr>
              <tr>
                <td>Age of onset</td>
                <td>{TableData[DataNum].string7}</td>
                <td className="second-cl">Childhood or adolescence</td>
              </tr>
              <tr>
                <td>
                  Shared clinical features (usually more common in FCS than MCS)
                </td>
                <td>
                  <div className="wrap">{TableData[DataNum].string8}</div>
                </td>
                <td className="second-cl">
                  <div className="wrap">
                    Abdominal pain Nausea Vomiting Eruptive xanthomas Lipemia
                    retinalis Pancreatitis
                  </div>
                </td>
              </tr>
              <tr>
                <td>Other clinical features</td>
                <td>{TableData[DataNum].string9}</td>
                <td className="second-cl">
                  Failure to thrive, and Hepatosplenomegaly
                </td>
              </tr>
              <tr>
                <td>Response to pharmacotherapy</td>
                <td>{TableData[DataNum].string10}</td>
                <td className="second-cl">
                  Minimal effect of vibrates, w-3 fatty acids, niacin, statins
                </td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ManagmentPageFour;
