import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import H2 from "../Typography/H2";
import H1 from "../Typography/H1";
import P from "../Typography/P";

const EasyStep = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: true, threshold: 0.2 });

  return (
    <div className="easystep" ref={sectionRef}>
      <div className="easystep-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <H2 title=" Get Started in 2 Easy Steps" />
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
                  <H1 title="Scan & Track" />
                  <P title="Use the app to scan and monitor your waste disposal habits." />
                </div>
                <div className="vertical-box">
                  <div></div>
                </div>
              </div>
              <img
                className="white-box"
                src="/assets/step-1.webp"
                alt="renie-box"
              />
            </motion.div>

            <motion.div
              className="col-lg-6 col-md-6 col-12 p-0 position-relative animated-right-column"
              initial={{ x: 200, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            >
              <div className="left-track position-relative custom-scan-height">
                <div className="scan-title scan-title-2">
                  <H1 title="Earn & Make an Impact" />
                  <P title="Get rewarded for recycling & be part of the sustainability movement!" />
                </div>
                <div className="vertical-box-right">
                  <div></div>
                </div>
              </div>
              <img
                className="white-box white-box-2"
                src="/assets/step-2.webp"
                alt="renie-box"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyStep;
