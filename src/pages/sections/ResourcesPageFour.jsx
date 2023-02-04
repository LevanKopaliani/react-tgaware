import "../../styles/ResourcesPageFour.css";
import LocIcon from "../../assets/img/resources/locationicon.png";
import NavArrow from "../../assets/img/resources/navarrow2.png";
import { useRef } from "react";

function ResourcesPageFour() {
  const MapNav = useRef();
  function scroll(e) {
    let scrollable = document.getElementById("scrollcontainer");

    scrollable.scrollBy({
      top: e,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <section className="resources-section-four">
      <div className="wrapper">
        <div className="resources-section-four-container">
          <h1 className="rsf-title title">CORE Study Locations</h1>
          <p className="rsf-subtitle">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae.
          </p>
          <div className="rsf-map">
            <div className="map-nav" ref={MapNav}>
              <div className="nav-items-container" id="scrollcontainer">
                <div className="map-nav-item">
                  <p>
                    <span>
                      <img src={LocIcon} alt="" />
                    </span>
                    Location 01
                  </p>
                  <p>
                    605 N Michigan 4th Floor, Chicago, IL 60611, United States
                  </p>
                </div>
                <div className="map-nav-item">
                  <p>
                    <span>
                      <img src={LocIcon} alt="" />
                    </span>
                    Location 02
                  </p>
                  <p>
                    605 N Michigan 4th Floor, Chicago, IL 60611, United States
                  </p>
                </div>
                <div className="map-nav-item">
                  <p>
                    <span>
                      <img src={LocIcon} alt="" />
                    </span>
                    Location 03
                  </p>
                  <p>
                    605 N Michigan 4th Floor, Chicago, IL 60611, United States
                  </p>
                </div>
                <div className="map-nav-item">
                  <p>
                    <span>
                      <img src={LocIcon} alt="" />
                    </span>
                    Location 04
                  </p>
                  <p>
                    605 N Michigan 4th Floor, Chicago, IL 60611, United States
                  </p>
                </div>
                <div className="map-nav-item">
                  <p>
                    <span>
                      <img src={LocIcon} alt="" />
                    </span>
                    Location 05
                  </p>
                  <p>
                    605 N Michigan 4th Floor, Chicago, IL 60611, United States
                  </p>
                </div>
                <div className="map-nav-item">
                  <p>
                    <span>
                      <img src={LocIcon} alt="" />
                    </span>
                    Location 06
                  </p>
                  <p>
                    605 N Michigan 4th Floor, Chicago, IL 60611, United States
                  </p>
                </div>
                <div className="map-nav-item">
                  <p>
                    <span>
                      <img src={LocIcon} alt="" />
                    </span>
                    Location 07
                  </p>
                  <p>
                    605 N Michigan 4th Floor, Chicago, IL 60611, United States
                  </p>
                </div>
              </div>

              <div className="nav-arrows">
                <div className="arrow-up" onClick={() => scroll(-112)}>
                  <img src={NavArrow} alt="" />
                </div>
                <div className="arrow-down" onClick={() => scroll(112)}>
                  <img src={NavArrow} alt="" />
                </div>
              </div>
            </div>
            <div className="map-body"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResourcesPageFour;
