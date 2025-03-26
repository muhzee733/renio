import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";

function Section6() {
  const sectionRef = useRef();
  const containerRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    if (typeof window !== "undefined" && window.innerWidth > 768) {
      let sections = gsap.utils.toArray(".software-right-container");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%", // Adjust based on section height
          scrub: 1,
          pin: true,
        },
      });

      sections.forEach((section) => {
        tl.to(section, {
          autoAlpha: 1, // Fade in
          duration: 0.5,
          ease: "power1.inOut",
        })
          .to(section, {
            autoAlpha: 1, // Keep it visible for longer
            duration: 1,
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
    <main className="bg-white w-100 overflow-hidden">
      <div className="container-xl">
        <section
          ref={sectionRef}
          className="d-flex min-vh-100 w-100 custom-flex"
        >
          <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center software-left">
            <img src="/assets/re-logo.webp" alt="logo" />
            <div>
              <h2>Renie</h2>
              <h6>Software</h6>
              <p>Where everything comes together</p>
            </div>
          </div>
          <div className="col-md-6 overflow-hidden position-relative">
            <div
              ref={containerRef}
              className={`renie-custom-software ${
                isMobile ? "vertical-layout" : ""
              }`}
            >
              <div className="software-right-container">
                <Link href="/renieadmin">
                  <img src="/assets/admin.webp" alt="Renie Admin" />
                  <span>Renie Admin</span>
                  <p>
                    Renie Admin centralizes all management tasks, providing
                    seamless control over operations, data, and user
                    interactions.
                  </p>
                </Link>
              </div>{" "}
              <div className="software-right-container">
                <Link href="/reniehub">
                  <img src="/assets/hub.webp" alt="Renie Hub" />
                  <span>Renie Hub</span>
                  <p>
                    Our innovative platform makes it possible to generate a
                    passive income from data monetization of plastic waste.
                  </p>
                </Link>
              </div>
              <div className="software-right-container">
                <Link href="/renieapp">
                  <img src="/assets/renie-hub-3.webp" alt="Renie Rewards" />
                  <span>Renie Rewards</span>
                  <p>
                    Renie Nexus makes recycling easy with instant access and
                    prize rewards, boosting sustainability.
                  </p>
                </Link>
              </div>
              <div className="software-right-container">
                <Link href="/renieads">
                  <img src="/assets/ads.webp" alt="Renie Ads" />
                  <span>Renie Ads</span>
                  <p>
                    Our AI platform uses Renie Bin data to deliver targeted ads,
                    driving eco-friendly engagement.
                  </p>
                </Link>
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
          align-items: center;
          height: 100vh;
        }
        .software-right-container {
          flex: 1;
          min-width: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 750px;
          opacity: 0;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 100%;
          transition: opacity 0.3s ease-in-out;
        }
        .software-right-container:first-child {
          opacity: 1 !important;
        }
        .software-right-container img {
          max-width: 100%;
        }

        /* Mobile (Stacked) Layout */
        @media (max-width: 768px) {
          .renie-custom-software {
            flex-direction: column;
            gap: 50px;
          }
          .software-right-container {
            position: static;
            opacity: 1;
            width: 100%;
            height: auto;
          }
          .renie-custom-software {
            height: unset;
          }
          .software-right-container {
            transform: translateY(0%);
          }
        }
      `}</style>
    </main>
  );
}

export default Section6;
