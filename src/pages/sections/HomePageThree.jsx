import MainButton from "../../components/MainButton";
import "../../styles/HomePageThree.css";

const HomePageThree = () => {
  return (
    <section className="section-three">
      <div className="wrapper">
        <div className="section-three-container">
          <h1 className="section--three-title">Acute Pancreatitis</h1>
          <p className="section-three-subtitle">
            TG levels above 10 mmol/L (880 mg/dL) confer a high risk for acute
            pancreatitis, though the risk begins to increase at even lower TG
            levels. - European Atherosclerosis Society Consensus Statement, 2021
          </p>
          <p className="section-three-sub-subtitle">
            Learn more about acute pancreatitis and other symptoms of severe and
            extreme hypertriglyceridemia.
          </p>
          <MainButton text={"Learn more"} />
        </div>
      </div>
    </section>
  );
};

export default HomePageThree;
