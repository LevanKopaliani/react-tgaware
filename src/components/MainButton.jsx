import "../styles/MainButton.css";
import SubmitImg from "../assets/img/submit-img.png";

const MainButton = ({ text, outline, img }) => {
  return (
    <button className={"mainbutton " + `${outline}`}>
      {img ? <img src={SubmitImg} alt="" /> : ""} {text}
    </button>
  );
};

export default MainButton;
