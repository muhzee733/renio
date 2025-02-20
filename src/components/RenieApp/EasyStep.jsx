import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EasyStep = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: true, threshold: 0.2 });

  return (
    <div className="easystep" ref={sectionRef}>
      <div className="easystep-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>
                Get Started in <span style={{ color: "#E31662" }}>2</span> Easy Steps
              </h2>
            </div>
          </div>
          <div className="row">
            <motion.div
              className="col-lg-6 col-md-6 col-12 p-0 position-relative animated-left-column"
              initial={{ x: -200, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="left-track position-relative custom-scan-height">
                <div className="scan-title">
                  <h3>Scan & Track</h3>
                  <p>Use the app to scan and monitor your waste disposal habits.</p>
                </div>
                <div className="vertical-box">
                  <div></div>
                </div>
              </div>
              <img className="white-box" src="/assets/step-1.png" alt="renie-box" />
            </motion.div>

            <motion.div
              className="col-lg-6 col-md-6 col-12 p-0 position-relative animated-right-column"
              initial={{ x: 200, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            >
              <div className="left-track position-relative custom-scan-height">
                <div className="scan-title scan-title-2">
                  <h3>Earn & Make an Impact</h3>
                  <p>Get rewarded for recycling & be part of the sustainability movement!</p>
                </div>
                <div className="vertical-box-right">
                  <div></div>
                </div>
              </div>
              <img className="white-box white-box-2" src="/assets/step-2.png" alt="renie-box" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyStep;
