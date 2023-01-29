import NavBar from "../components/NavBar";
import SignUpButton from "../components/SignUpButton";
import "../styles/Causes.css";
import CausesPageThree from "./sections/CausesPageThree";
import CausesPageTwo from "./sections/CausesPageTwo";

const Causes = () => {
  return (
    <main className="causes">
      <NavBar />
      <section className="causes-section">
        <div className="causes-container">
          <h1 className="causes-heading">
            <span>Causes of </span>
            <br /> Hypertriglyceridemia
          </h1>
          <SignUpButton />
        </div>
      </section>
      <CausesPageTwo />
      <CausesPageThree />
    </main>
  );
};

export default Causes;
