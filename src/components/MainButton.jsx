import "../styles/MainButton.css";

const MainButton = ({ text, outline }) => {
  return <button className={"mainbutton " + `${outline}`}>{text}</button>;
};

export default MainButton;
