import "../styles/Footer.css";
import Logo from "../assets/img/logo-white.png";
import { Link } from "react-router-dom";
import footerFB from "../assets/img/footer-fb-icon.png";
import footerIns from "../assets/img/footer-ins-icon.png";
import footerLin from "../assets/img/footer-lin-icon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <img src={Logo} alt="Logo" />
          <p>
            © 2021 Akcea Therapeutics,
            <br /> Inc. All rights reserved. US-FCS-2100030
          </p>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <Link to="/">CAUSES</Link>
            </li>
            <li>
              <Link to="/">PATHOPHYSIOLOGY</Link>
            </li>
            <li>
              <Link to="/">CLINICAL PRESENTATION</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">MANAGEMENT</Link>
            </li>
            <li>
              <Link to="/">RESOURCES</Link>
            </li>
            <li>
              <Link to="/">STAY INFORMED</Link>
            </li>
          </ul>
        </div>
        <div className="social-links">
          <Link to="/">
            <img src={footerFB} alt="facebook" />
          </Link>
          <Link to="/">
            <img src={footerIns} alt="Instagram" />
          </Link>
          <Link to="/">
            <img src={footerLin} alt="Linkedin" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
