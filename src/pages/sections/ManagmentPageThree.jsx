import "../../styles/ManagmentPageThree.css";
import ArrowS from "../../assets/img/managment/arrow-s.png";
import ArrowM from "../../assets/img/managment/arrow-m.png";
import Arrowleft from "../../assets/img/managment/leftarrow.png";
import ArrowRight from "../../assets/img/managment/rightarrow.png";

const ManagmentPageThree = () => {
  return (
    <section className="managment-section-three">
      <div className="wrapper">
        <div className="managment-section-three-container">
          <h1 className="msth-title title">
            A General
            <br /> Treatment Approach
          </h1>
          <div className="msth-block-container center-block">
            <div className="msth-block mgt">
              <p>Patient with elevated TG</p>
              <ul className="msth-list">
                <li>Define and achieve LDL-C goal</li>
                <li>Define non-HDL-C goal</li>
                <li>Exclude/treat secondary causes of HTG</li>
                <li>Implement lifestyle changes</li>
              </ul>
            </div>
            <div className="arrow arrow-s">
              <img src={ArrowS} alt="" />
            </div>
            <div className="msth-block second-block">
              <p>Non-HDL-C goal not achieved TG elevated</p>
            </div>
            <div className="arrow center">
              <img src={Arrowleft} alt="" />
              <img src={ArrowRight} alt="" />
            </div>
          </div>

          <div className="arrow afterwrap">
            <img src={ArrowM} alt="" />
            {/* <img src={AfterWrap} alt="" className="afterwrap-img" /> */}
          </div>
          <div className="msth-block-container">
            <div className="msth-block-column self">
              <div className="msth-block">
                <p>TG {"<"} 10 mol/L</p>
              </div>
              <div className="arrow arrow-m">
                <img src={ArrowM} alt="" />
              </div>
              <div className="msth-block left-arrow">
                <p>Primary goal: CV risk reduction</p>
                <p>
                  Depending on overall CV risk, evaluate for further. Non-HDL-C
                  reduction:
                </p>
                <ul className="msth-list">
                  <li>Consider further LDL-C reduction</li>
                  <li>Consider fibrate and/or omega-3 FAd </li>
                </ul>
              </div>
            </div>

            <div className="msth-block-column mgt-101">
              <div className="arrow arrow-m hiddenArow">
                <img src={ArrowM} alt="" />
              </div>
              {/* <div className="arrow afterwrap">
                <img src={ArrowS} alt="" />
              </div> */}
              <div className="msth-block">
                <p>TG ≥ 10 mol/L</p>
              </div>
              <div className="arrow arrow-m">
                <img src={ArrowM} alt="" />
              </div>
              <div className="msth-block">
                <p>Primary goal: prevention of pancreatitis</p>
                <p>Further TG reduction required:</p>
                <ul className="msth-list">
                  <li>Intensify life-style changes</li>
                  <li>Consider vibrate and/or omega-3 FAd</li>
                  <li>Consider MCT fat</li>
                  <li>Consult liquid clinic</li>
                </ul>
              </div>
              <div className="arrow arrow-s">
                <img src={ArrowS} alt="" />
              </div>
              <div className="msth-block">
                <p>TG ≥ 10 mol/L</p>
              </div>
              <div className="arrow arrow-s">
                <img src={ArrowS} alt="" />
              </div>
              <div className="msth-block">
                <p>Consider experimental therapy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagmentPageThree;
