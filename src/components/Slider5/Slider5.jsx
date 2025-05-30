import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Slider = ({
  title1,
  title2,
  img,
  img2,
  h6,
  p,
  customClass = "",
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 1200);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      {/* Desktop Version */}
      {!isMobile && (
        <div
          id="desktop-version"
          className="main-slider"
          style={{ background: `#${customClass}` }}
        >
          <div className="container-xl">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <h2>{title1}</h2>
                <h4>{title2}</h4>
                {img2 && <img src={img2} alt="mobile-1" />}
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="custom-image">
                  <img src={img} alt="mobile-1" />
                  <h4>{title2}</h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <h6>{h6}</h6>
                <p className="collapsible-tex">{p}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Version */}
      {isMobile && (
        <div
          id="mobile-version"
          className="main-slider"
          style={{ background: `#${customClass}` }}
        >
          <div className="container">
            <div className="row align-items-center pt-5 mb-2">
              <h2 className="text-center">{title1}</h2>
              <div className="custom-image text-center">
                <img src={img} alt="mobile-1" />
                <h4>{title2}</h4>
              </div>
              <h6 className="text-center">{h6}</h6>
              <p className="text-center">{p}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Slider.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  img2: PropTypes.string,
  h6: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};

export default Slider;
