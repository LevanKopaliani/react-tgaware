import NavBar from "../components/NavBar";
import "../styles/Resources.css";
import ResourcesPageThree from "./sections/ResourcesPageThree";
import ResourcesPageTwo from "./sections/ResourcesPageTwo";

const Resources = () => {
  return (
    <main className="resources">
      <NavBar />
      <div className="resources-section">
        <div className="resources-container">
          <h1 className="resources-title">Help Advance Current Research</h1>
        </div>
      </div>

      <ResourcesPageTwo />
      <ResourcesPageThree />
    </main>
  );
};

export default Resources;
