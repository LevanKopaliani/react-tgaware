import "../styles/Home.css";
import NavBar from "../components/NavBar";
import HomePageTwo from "./sections/HomePageTwo";
import HomePageThree from "./sections/HomePageThree";
import HomePageFour from "./sections/HomePageFour";
import SignUpButton from "../components/SignUpButton";
import MainButton from "../components/MainButton";
import SignUp from "../components/SignUp";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="homepage">
      <NavBar />

      <section className="section-one">
        <div className="section-one-container">
          <h1 className="section-one__title">
            Hypertriglyceridemia is a marker of increased risk
            <span> for stroke, myocardial infarction.</span>
          </h1>
          <p className="section-one__subtitle">
            Hypertriglyceridemia is a marker of increased risk for stroke,
            myocardial infarction, diabetes, hypertension, and acute
            pancreatitis.
          </p>
          <MainButton text={"Learn more"} outline={"white"} />
        </div>
        <SignUpButton />
      </section>

      <HomePageTwo />
      <HomePageThree />
      <HomePageFour />
      <SignUp />
      <Footer />
    </main>
  );
};

export default Home;