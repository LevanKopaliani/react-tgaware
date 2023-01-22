import "../styles/Home.css";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <main className="homepage">
      <NavBar />
      <section className="section-one wrapper">
        <h1 className="section-one__title">
          Hypertriglyceridemia is a marker of increased risk
          <span> for stroke, myocardial infarction.</span>
        </h1>
        <p className="section-one__subtitle">
          Hypertriglyceridemia is a marker of increased risk for stroke,
          myocardial infarction, diabetes, hypertension, and acute pancreatitis.
        </p>
        <button className="section-one__button">Learn more</button>
      </section>
    </main>
  );
};

export default Home;
