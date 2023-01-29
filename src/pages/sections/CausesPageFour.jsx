import MainButton from "../../components/MainButton";
import "../../styles/CausesPageFour.css";
import TopBlockImg1 from "../../assets/img/causes/topblock1.png";
import TopBlockImg2 from "../../assets/img/causes/topblock2.png";

const CausesPageFour = () => {
  return (
    <section className="causes-section-four">
      <div className="wrapper">
        <div className="causes-section-four-container">
          <div className="causes-section-four-heading">
            <h1>Genetic Causes of HTG</h1>
            <p>
              Patients with severe or extreme HTG are more likely to have
              genetic factors.
            </p>
            <p>Learn more about the causes of Hypertriglyceridemia</p>
            <MainButton text={"Learn more"} />
          </div>
          <div className="causes-section-four-topblock">
            <h2 className="topblock-title">
              Genetic Causes of Moderately Elevated TG and Severe HTG
            </h2>
            <div className="topblock-list-container">
              <ul className="topblock-list-one">
                <div className="topblock-list-image">
                  <img src={TopBlockImg1} alt="" />
                </div>
                <p>Multifactorial or polygenetic HTG</p>
                <p className="divider"></p>
                <p>Dysbetalipoproteinemia</p>
                <ul>
                  <li>APOE E2/E2 homozygosity, or</li>
                  <li>APOE dominant rare variant heterozygosity</li>
                </ul>
                <p className="divider"></p>
                <p>Combined hyperlipoproteinemia</p>
                <ul>
                  <li>Complex genetic susceptibility (see below) plus</li>
                  <li>
                    Accumulation of small-effect LDL-C-raising polymorphisms
                  </li>
                </ul>
              </ul>
              <ul className="topblock-list-two">
                <div className="topblock-list-image">
                  <img src={TopBlockImg2} alt="" />
                </div>
                <p>Synonyms or former names</p>
                <p className="divider"></p>
                <p>Hypolipoproteinemia (HLP) Type 4, familial HTG</p>
                <p className="divider"></p>
                <p>HLP Type 3</p>
                <p className="divider"></p>
                <p>HLP Type 2B, familial combined hyperlipidemia</p>
              </ul>
            </div>
            <p className="topblock-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="causes-section-four-bottomblock">
            <h2 className="bottomblock-title">Genetic Causes of Extreme HTG</h2>
            <div className="bottomblock-list-container">
              <ul className="bottomblock-list-one">
                <p>
                  Monogenic chylomicronemia (rare, 5% of cases of extreme HTG)
                </p>
                <p className="divider"></p>
                <p>Bi-allelic mutations in</p>
                <ul>
                  <li>Lipoprotein lipase (LPL), (80-90% of monogenic cases)</li>
                  <li>APOC2</li>
                  <li>APOA5</li>
                  <li>Lipase maturation factor 1 (LMF1)</li>
                  <li>GPIHBP</li>
                </ul>
                <p className="divider"></p>
                <p>
                  Multifactorial or polygenic chylomicronemia Complex genetic
                  susceptibility, including
                </p>
                <ul>
                  <li>
                    Heterozygous, rare, large-effect variants in genes involved
                    in monogenic chylomicronemia
                  </li>
                  <li>
                    Combinations of small-effect polymorphisms in ~30-40 genes
                  </li>
                </ul>
                <p>
                  Bi-allelic mutations in GPD1, leading to transient infantile
                  HTG
                </p>
              </ul>
              <div className="bottomblock-list-two">
                <p>Synonyms or former names</p>
                <p className="divider"></p>
                <p>HLP Type 1, Familial chylomicronemia syndrome (FCS)</p>
                <p className="divider"></p>
                <p>HLP Type 5, mixed hyperlipidemia</p>
              </div>
            </div>
            <p className="bottomblock-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CausesPageFour;
