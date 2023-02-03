import { useState } from "react";
import { NavLink } from "react-router-dom";

import "../styles/NavBar.css";
import { IconContext } from "react-icons";
import LogoWhite from "../assets/img/logo-white.png";
import NavBtn from "../assets/img/bntNAV.png";
import MobileLogo from "../assets/img/mobilemenulogo.png";
import CloseButton from "../assets/img/btn-close.png";
import FaICon from "../assets/img/Fb-Icon.png";
import InsICon from "../assets/img/Ins-Icon.png";
import LinICon from "../assets/img/Lin-icon.png";

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toogleMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar">
        <div className="navbar-container container">
          <div className="nav-logo">
            <img src={LogoWhite} alt="" />
          </div>
          <div className="menu-icon" onClick={toogleMenu}>
            {mobileMenu ? "" : <img src={NavBtn} alt="" />}
          </div>
          <ul className={mobileMenu ? "nav-menu active" : "nav-menu"}>
            <div className="mobile-header">
              <img
                src={MobileLogo}
                alt="MobileMenuLogo"
                onClick={closeMobileMenu}
              />
              <img
                src={CloseButton}
                alt="CloseButton"
                onClick={closeMobileMenu}
              />
            </div>
            <li className="nav-item">
              <NavLink
                to="/causes"
                className={({ isActive }) =>
                  isActive ? "nav-links activated" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                CAUSES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-links activated" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                PATHOPHYSIOLOGY
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/clinical-presentation"
                className={({ isActive }) =>
                  isActive ? "nav-links activated" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                CLINICAL PRESENTATION
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/managment"
                className={({ isActive }) =>
                  isActive ? "nav-links activated" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                MANAGEMENT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/resources"
                className={({ isActive }) =>
                  isActive ? "nav-links activated" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                RESOURCES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/stay-informed"
                className={({ isActive }) =>
                  isActive ? "nav-links activated" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                STAY INFORMED
              </NavLink>
            </li>
            <button className="nav-button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.98519 21.4439L8.9853 21.444C9.40569 21.864 9.97601 22.1002 10.5711 22.1002H13.4282C14.6671 22.1002 15.6711 21.0954 15.6711 19.8574V14.8574C15.6711 14.4078 15.3063 14.0431 14.8568 14.0431C14.4073 14.0431 14.0425 14.4078 14.0425 14.8574V19.8574C14.0425 20.1964 13.7673 20.4716 13.4282 20.4716H10.5711C10.4084 20.4716 10.2516 20.4064 10.1368 20.2922C10.0213 20.1767 9.95679 20.021 9.95679 19.8574V17.7145C9.95679 17.265 9.59202 16.9002 9.14251 16.9002C8.69299 16.9002 8.32822 17.265 8.32822 17.7145V19.8574C8.32822 20.4525 8.5645 21.0224 8.98519 21.4439Z"
                  fill="white"
                  stroke="white"
                  stroke-width="0.2"
                />
                <path
                  d="M15.0141 2.5563L15.014 2.55616C14.5932 2.13625 14.0229 1.9 13.4282 1.9H10.5711C9.33215 1.9 8.32822 2.9048 8.32822 4.14286V12C8.32822 12.4495 8.69299 12.8143 9.14251 12.8143C9.59202 12.8143 9.95679 12.4495 9.95679 12V4.14286C9.95679 3.8038 10.232 3.52857 10.5711 3.52857H13.4282C13.5909 3.52857 13.7476 3.59384 13.8625 3.70794C13.978 3.82346 14.0425 3.97921 14.0425 4.14286V6.28571C14.0425 6.73523 14.4073 7.1 14.8568 7.1C15.3063 7.1 15.6711 6.73523 15.6711 6.28571V4.14286C15.6711 3.54772 15.4348 2.97785 15.0141 2.5563Z"
                  fill="white"
                  stroke="white"
                  stroke-width="0.2"
                />
                <path
                  d="M2.5563 8.98519L2.55619 8.9853C2.13624 9.40569 1.9 9.97601 1.9 10.5711V13.4282C1.9 14.6671 2.9048 15.6711 4.14286 15.6711H12C12.4495 15.6711 12.8143 15.3063 12.8143 14.8568C12.8143 14.4073 12.4495 14.0425 12 14.0425H4.14286C3.8038 14.0425 3.52857 13.7673 3.52857 13.4282V10.5711C3.52857 10.4084 3.59385 10.2516 3.70797 10.1368C3.82349 10.0213 3.97922 9.95679 4.14286 9.95679H6.28571C6.73523 9.95679 7.1 9.59202 7.1 9.14251C7.1 8.69299 6.73523 8.32822 6.28571 8.32822H4.14286C3.54772 8.32822 2.97785 8.5645 2.5563 8.98519Z"
                  fill="white"
                  stroke="white"
                  stroke-width="0.2"
                />
                <path
                  d="M20.3628 13.9331L20.2921 13.8624C20.1766 13.9779 20.0208 14.0425 19.8571 14.0425H17.7142C17.2647 14.0425 16.8999 14.4073 16.8999 14.8568C16.8999 15.3063 17.2647 15.6711 17.7142 15.6711H19.8571C20.4522 15.6711 21.0221 15.4348 21.4436 15.0141L21.4438 15.014C21.8637 14.5932 22.0999 14.0229 22.0999 13.4282V10.5711C22.0999 9.33215 21.0951 8.32822 19.8571 8.32822H11.9999C11.5504 8.32822 11.1856 8.69299 11.1856 9.14251C11.1856 9.59202 11.5504 9.95679 11.9999 9.95679H19.8571C20.1961 9.95679 20.4714 10.232 20.4714 10.5711V13.4282C20.4714 13.591 20.406 13.7477 20.2919 13.8626L20.3628 13.9331ZM20.3628 13.9331C20.2285 14.0674 20.0473 14.1425 19.8571 14.1425H17.7142C17.3199 14.1425 16.9999 14.4625 16.9999 14.8568C16.9999 15.2511 17.3199 15.5711 17.7142 15.5711H19.8571C20.4256 15.5711 20.9701 15.3454 21.373 14.9433L20.3628 13.9331Z"
                  fill="white"
                  stroke="white"
                  stroke-width="0.2"
                />
              </svg>
              Clinical trials
            </button>
            <div className="socmedia">
              <div className="menu-icons">
                <img src={FaICon} alt="Facebook" />
                <img src={InsICon} alt="Instagram" />
                <img src={LinICon} alt="Linkedin" />
              </div>
              <p className="menu-copyright">
                © 2021 Akcea Therapeutics, Inc. All rights reserved.
                US-FCS-2100030
              </p>
            </div>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default NavBar;
