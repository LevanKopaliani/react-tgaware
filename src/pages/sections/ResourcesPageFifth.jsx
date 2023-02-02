import "../../styles/ResourcesPageFifth.css";
import FaqData from "../../assets/data/FaqData";
import FaqAcordeon from "../../components/FaqAcordeon";

const ResourcesPageFifth = () => {
  return (
    <section className="resources-section-fifth">
      <div className="wrapper">
        <div className="resources-section-fifth-container">
          <h1 className="rsff-title">Frequently Asked Questions </h1>
          <div className="FAQ-container">
            {FaqData.map((item, index) => (
              <FaqAcordeon title={item.title} content={item.data} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesPageFifth;
