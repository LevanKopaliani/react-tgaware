import "../styles/SignUp.css";
import SignUpIcon from "../assets/img/signup-icon.png";
import MainButton from "./MainButton";
import Acordion from "./Acordion";
import ReferencesData from "../assets/data/ReferencesData";

const SignUp = () => {
  return (
    <section className="signup">
      <div className="signup-container">
        <div className="signup-form-container">
          <div className="signup-info">
            <div className="signup-info-heading">
              <h1 className="signup-info-heading__title">Sign up</h1>
              <p className="signup-info-heading__subtitle">
                Sign up to receive information on familial chylomicronemia
                syndrome and hypertriglyceridemia disorders.
              </p>
            </div>
            <div className="signup-info__img">
              <img src={SignUpIcon} alt="SignUpIcon" />
            </div>
          </div>
          <form action="">
            <input
              type="text"
              className="form-input"
              placeholder="First Name*"
            />
            <input
              type="text"
              className="form-input"
              placeholder="Last Name*"
            />
            <input type="email" className="form-input" placeholder="Email*" />
            <input type="text" className="form-input" placeholder="City*" />
            <input type="text" className="form-input" placeholder="State*" />
            <input
              type="number"
              className="form-input"
              placeholder="Zip Code*"
            />
            <input
              type="number"
              className="form-input"
              placeholder="NPI Number*"
            />
            <input
              type="text"
              className="form-input"
              placeholder="What is your specialty*"
            />
            <input
              type="text"
              className="form-input"
              placeholder="# of suspected patients*"
            />
          </form>
          <div className="signup-agreement">
            <p className="field-required">*Required fields</p>
            <div className="agreement-container">
              <p className="agreement-fields">
                <span>
                  <input type="checkbox" id="contact" />
                </span>
                <label htmlFor="contact">
                  I would like an Akcea representative to contact me.
                </label>
              </p>
              <p className="agreement-fields">
                <span>
                  <input type="checkbox" id="agree" />
                </span>
                <label htmlFor="agree" for="agree">
                  By clicking this box, I agree that Akcea may use the
                  information I’m submitting to provide me with information
                  about FCS and FCS therapies. I understand that all personal
                  information I’ve submitted will be kept confidential in
                  accodance with Akcea’s privacy policy, and I agree to the
                  terms of use.
                </label>
              </p>
            </div>
          </div>
          <MainButton text={"Submit"} img={true} />
        </div>
        <Acordion title={"SHOW REFERENCES"} content={ReferencesData} />
      </div>
    </section>
  );
};

export default SignUp;
