import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SignUp from "../components/SignUp";
import "../styles/Managment.css";
import ManagmentPageFifth from "./sections/ManagmentPageFifth";
import ManagmentPageFour from "./sections/ManagmentPageFour";
import ManagmentPageThree from "./sections/ManagmentPageThree";
import ManagmentPageTwo from "./sections/ManagmentPageTwo";

const Managment = () => {
  return (
    <main className="managment">
      <NavBar />
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
      <SignUp />
      <Footer />
    </main>
  );
};

export default Managment;
