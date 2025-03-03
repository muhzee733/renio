import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function Section6() {
  const sectionRef = useRef();
  const containerRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let sections = gsap.utils.toArray(".software-right-container");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=500%", // Adjust based on section height
          scrub: 1,
          pin: true,
        },
      });

      sections.forEach((section, index) => {
        tl.to(section, {
          autoAlpha: 1, // Fade in
          duration: 0.5,
          ease: "power1.inOut",
        })
          .to(section, {
            autoAlpha: 1, // Keep it visible for LONGER (2 seconds)
            duration: 3, // Increased visibility time
          })
          .to(section, {
            autoAlpha: 0, // Fade out before next
            duration: 0.5,
            ease: "power1.inOut",
          });
      });

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }
  }, []);

  return (
    <main className="bg-white w-100 overflow-hidden ">
      <div className="container">
        <section ref={sectionRef} className="d-flex min-vh-100 w-100 custom-flex">
          <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center software-left">
            <img src="/assets/re-logo.png" alt="logo" />
            <div>
              <h2>Renie</h2>
              <h6>Software</h6>
              <p>Where everything comes together</p>
            </div>
          </div>
          <div className="col-md-6 overflow-hidden position-relative">
            <div ref={containerRef} className="d-flex renie-custom-software">
              <div className="software-right-container">
                <img src="/assets/renie-hub.png" alt="Renie Admin" />
                <span>Renie Admin</span>
                <p>
                  Renie Admin centralizes all management tasks, providing
                  seamless control over operations, data, and user interactions.
                </p>
              </div>
              <div className="software-right-container">
                <img src="/assets/renie-hub-2.png" alt="Renie Hub" />
                <span>Renie Hub</span>
                <p>
                  Our innovative platform makes it possible to generate a
                  passive income from data monetization of plastic waste.
                </p>
              </div>
              <div className="software-right-container">
                <img src="/assets/renie-hub-3.png" alt="Renie Rewards" />
                <span>Renie Rewards</span>
                <p>
                  Renie Nexus makes recycling easy with instant access and prize
                  rewards, boosting sustainability.
                </p>
              </div>
              <div className="software-right-container">
                <img src="/assets/renie-hub-4.png" alt="Renie Ads" />
                <span>Renie Ads</span>
                <p>
                  Our AI platform uses Renie Bin data to deliver targeted ads,
                  driving eco-friendly engagement.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .renie-custom-software {
          display: flex;
          width: 100%;
          gap: 40px;
          position: relative;
        }
        .software-right-container {
          flex: 1;
          min-width: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: self-start;
          justify-content: center;
          height: 650px;
          opacity: 0;
          position: absolute;
          top: 120px;
          left: 0;
          width: 100%;
          transition: opacity 0.3s ease-in-out;
        }
        .software-right-container:first-child {
          opacity: 1 !important; /* Ensures the first section is always visible */
        }
        .software-right-container img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </main>
  );
}

export default Section6;
