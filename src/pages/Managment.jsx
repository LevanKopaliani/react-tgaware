import "../styles/Managment.css";
import ManagmentPageFifth from "./sections/ManagmentPageFifth";
import ManagmentPageFour from "./sections/ManagmentPageFour";
import ManagmentPageThree from "./sections/ManagmentPageThree";
import ManagmentPageTwo from "./sections/ManagmentPageTwo";

const Managment = () => {
  return (
    <main className="managment">
      <section className="managment-section">
        <div className="managment-container">
          <h1 className="managment-section-title">
            Hypertriglyceridemia Management
          </h1>
        </div>
      </section>
      <ManagmentPageTwo />
      <ManagmentPageThree />
      <ManagmentPageFour />
      <ManagmentPageFifth />
    </main>
  );
};

export default Managment;
