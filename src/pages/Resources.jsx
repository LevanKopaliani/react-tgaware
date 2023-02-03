import "../styles/Resources.css";
import ResourcesPageFifth from "./sections/ResourcesPageFifth";
import ResourcesPageFour from "./sections/ResourcesPageFour";
import ResourcesPageThree from "./sections/ResourcesPageThree";
import ResourcesPageTwo from "./sections/ResourcesPageTwo";

const Resources = () => {
  return (
    <main className="resources">
      <div className="resources-section">
        <div className="resources-container">
          <h1 className="resources-title">Help Advance Current Research</h1>
        </div>
      </div>

      <ResourcesPageTwo />
      <ResourcesPageThree />
      <ResourcesPageFour />
      <ResourcesPageFifth />
    </main>
  );
};

export default Resources;
