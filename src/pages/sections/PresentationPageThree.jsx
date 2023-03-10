import "../../styles/PresentationPageThree.css";

const PresentationPageThree = () => {
  return (
    <section className="presentation-section-three">
      <div className="wrapper">
        <div className="presentation-section-three-container">
          <h1 className="psth-title title">
            Moderately elevated TG levels{" "}
            <p>
              ({">"}1.7 mmol/L; {">"}150 mg/dL)
            </p>
          </h1>
          <p className="psth-subtitle">
            There is now consensus that moderately elevated plasma TG level is
            causally related to clinically relevant increased risk of
            atherosclerotic cardiovascular disease (ASCVD) which may be due to
            TG, triglyceride-rich lipoproteins (TRLs) and/or TRL remnants.
          </p>
          <p className="psth-sub-subtitle">
            Summarized from European Atherosclerosis Society consensus
            statement, 2021 1
          </p>
          <div className="psth-info-block">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99984 15.3334H12.6665V18.0001C12.6665 18.3537 12.807 18.6928 13.057 18.9429C13.3071 19.1929 13.6462 19.3334 13.9998 19.3334C14.3535 19.3334 14.6926 19.1929 14.9426 18.9429C15.1927 18.6928 15.3332 18.3537 15.3332 18.0001V15.3334H17.9998C18.3535 15.3334 18.6926 15.1929 18.9426 14.9429C19.1927 14.6928 19.3332 14.3537 19.3332 14.0001C19.3332 13.6465 19.1927 13.3073 18.9426 13.0573C18.6926 12.8072 18.3535 12.6667 17.9998 12.6667H15.3332V10.0001C15.3332 9.64646 15.1927 9.30732 14.9426 9.05727C14.6926 8.80722 14.3535 8.66675 13.9998 8.66675C13.6462 8.66675 13.3071 8.80722 13.057 9.05727C12.807 9.30732 12.6665 9.64646 12.6665 10.0001V12.6667H9.99984C9.64621 12.6667 9.30708 12.8072 9.05703 13.0573C8.80698 13.3073 8.6665 13.6465 8.6665 14.0001C8.6665 14.3537 8.80698 14.6928 9.05703 14.9429C9.30708 15.1929 9.64621 15.3334 9.99984 15.3334ZM25.9998 0.666748H1.99984C1.64622 0.666748 1.30708 0.807224 1.05703 1.05727C0.80698 1.30732 0.666504 1.64646 0.666504 2.00008V26.0001C0.666504 26.3537 0.80698 26.6928 1.05703 26.9429C1.30708 27.1929 1.64622 27.3334 1.99984 27.3334H25.9998C26.3535 27.3334 26.6926 27.1929 26.9426 26.9429C27.1927 26.6928 27.3332 26.3537 27.3332 26.0001V2.00008C27.3332 1.64646 27.1927 1.30732 26.9426 1.05727C26.6926 0.807224 26.3535 0.666748 25.9998 0.666748ZM24.6665 24.6667H3.33317V3.33341H24.6665V24.6667Z"
                fill="#ff0000"
              />
            </svg>
            <div className="psth-info-text-container">
              <p>
                ???Plasma TG varies over a wide range in the population, and as
                levels rise, the risk of atherosclerotic cardiovascular disease
                increases continuously???
              </p>
              <p>European Atherosclerosis Society consensus statement, 20221</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationPageThree;
