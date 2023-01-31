import MainButton from "../../components/MainButton";
import "../../styles/ManagmentPageFifth.css";

const ManagmentPageFifth = () => {
  return (
    <section className="managment-section-fifth">
      <div className="wrapper">
        <div className="managment-section-fifth-container">
          <div className="msff-info">
            <h1 className="msff-title">
              Nutrition Management for People with Extreme
              <br /> HTG
            </h1>
            <p className="msff-subtitle">
              For people with extreme HTG (monogenic or multifactorial), strict
              management of diet is critical to minimize the risk of
              pancreatitis and other complications.
            </p>
            <MainButton text={"Learn more"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagmentPageFifth;
