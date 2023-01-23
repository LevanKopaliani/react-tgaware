import MainButton from "../../components/MainButton";
import "../../styles/HomePageTwo.css";

const HomePageTwo = () => {
  return (
    <section className="section-two ">
      <div className="wrapper">
        <div className="section-container">
          <h1 className="section-title">
            Atherosclerotic Cardiovascular Disease
          </h1>
          <p className="section-subtitle">
            After decades of controversy, recent epidemiologic and genetic
            studies have brought consensus that elevated plasma levels of
            triglyceride (TG), triglyceride-rich lipoproteins (TRLs), and TRL
            remnants are causally related to increased risk of atherosclerotic
            cardiovascular disease (ASCVD).
          </p>
          <p className="section-sub-subtitle">
            Learn more about ASCVD and other symptoms of severe and extreme
            hypertriglyceridemia
          </p>
          <MainButton text={"Learn more"} outline={"black"} />
        </div>
      </div>
    </section>
  );
};

export default HomePageTwo;
