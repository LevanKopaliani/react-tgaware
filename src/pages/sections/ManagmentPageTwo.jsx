import MainButton from "../../components/MainButton";
import SignUpButton from "../../components/SignUpButton";
import "../../styles/ManagmentPageTwo.css";

const ManagmentPageTwo = () => {
  return (
    <section className="managment-section-two">
      <div className="wrapper">
        <div className="managment-section-two-container">
          <h1 className="mst-title">Goals of Management</h1>
          <p className="mst-subtitle">
            For adults, current American College of Cardiology Expert Consensus
            recommends lowering of fasting TG levels to 1.7 mmol/L (150 mg/dL)
            to reduce ASCVD risk.10
          </p>
          <p className="mst-sub-subtitle">
            According to the American Heart Association, the American College of
            Cardiology, and multisociety guidelines, it is reasonable to reduce
            triglyceride levels in adults with TG ≥ 5.7 mmol/L (500 mg/dL) to
            reduce the risk of acute pancreatitis. Reducing TG levels is
            especially important in adults with TG 10.0 mmol/L (880 mg/dL).9
          </p>
          <MainButton text={"Learn more"} />
        </div>
      </div>
      <SignUpButton />
    </section>
  );
};

export default ManagmentPageTwo;
