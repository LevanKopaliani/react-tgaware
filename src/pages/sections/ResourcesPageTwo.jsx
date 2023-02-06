import ContactButton from "../../components/ContactButton";
import MainButton from "../../components/MainButton";
import "../../styles/ResourcesPageTwo.css";

const ResourcesPageTwo = () => {
  return (
    <section className="resources-section-two">
      <div className="wrapper">
        <div className="resources-section-two-container">
          <div className="rst-info-top">
            <h1 className="info-top-title title">
              The CORE Study: Olezarsen Clinical Trial
            </h1>
            <p className="info-top-subtitle">
              Ionis is committed to developing better treatment options for
              people living with hypertriglyceridemia. We are currently
              conducting late-stage clinical trials of olezarsen, an
              investigational therapy designed to reduce triglyceride levels in
              the blood.
            </p>
            <ContactButton />
          </div>
          <div className="rst-info-center">
            <h1 className="info-center-title title">
              A New Kind of Investigational Triglyceride-Lowering Therapy
            </h1>
            <p className="info-center-subtitle">
              Olezarsen is an investigational mRNA-targeted medicine consisting
              of:
            </p>
            <p className="info-center-sub-subtitle">
              - an antisense oligonucleotide directed against the mRNA for
              apoC-III.
              <br />
              <br /> - a liver-specific ligand designed to increase the binding
              and uptake of olezarsen by hepatocytes, where most apoC-III is
              produced.
              <br />
              <br /> Olezarsen is designed to reduce production of apoC-III in
              the liver and enhance the uptake of triglyceride (TG)-rich
              particles in peripheral tissues.
            </p>
          </div>
          <div className="rst-info-bottom">
            <p className="info-bottom-subtitle">
              Olezarsen leverages LICA technology.
            </p>
            <p className="info-bottom-sub-subtitle">
              LICA involves the attachment of a molecule called a ligand that
              binds with receptors on the surfaces of cells in a highly specific
              manner. Because these receptors are often found only on certain
              cell types, LICA has the potential to effectively deliver
              antisense medicines with specificity to certain cell types that
              express these receptors.
            </p>
            <MainButton text={"Learn more"} outline={"black"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesPageTwo;
