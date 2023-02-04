import MainButton from "../../components/MainButton";
import "../../styles/HomePageFour.css";

const HomePageFour = () => {
  return (
    <section className="section-four">
      <div className="wrapper">
        <div className="section-four-top-container">
          <h1 className="section-four-title title">
            Causes of Hypertriglyceridemia
          </h1>
          <p className="section-four-subtitle">
            Hypertriglyceridemia can arise from 5.
            <br /> - Single genetic bi-allelic mutations
            <br /> - The combined effects of several small-effect heterozygous
            mutations
            <br />
            <br /> As well as:
            <br /> - Lifestyle factors and other medical conditions.
          </p>
          <p className="section-four-sub-subtitle">
            Learn more about the causes of Hypertriglyceridemia
          </p>
          <MainButton text={"Learn more"} outline={"black"} />
        </div>
        <div className="section-four-bottom-container">
          <h1 className="section-four-bottom-title title">
            Management of Hypertriglyceridemia
          </h1>
          <p className="section-four-bottom-subtitle">
            The complex etiology of HTG can make management very challenging, as
            each person responds differently to interventions intended to lower
            plasma HTG levels.
            <br />
            <br /> Despite these challenges, major professional societies
            recommend lowering HTG levels to reduce the risk of cardiovascular
            disease or acute pancreatitis.
          </p>
          <p className="section-four--bottom-sub-subtitle">
            Learn more about different strategies for management of HTG.
          </p>
          <MainButton text={"Learn more"} outline={"black"} />
        </div>
      </div>
    </section>
  );
};

export default HomePageFour;
