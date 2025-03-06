import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function Section6() {
  const sectionRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (typeof window !== "undefined") {

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=500%",
          scrub: 1,
          pin: true,
        },
      });

      tl.to(".software-right-container", {
        xPercent: -105 * 3,
        ease: "none",
      });

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }
  }, []);

  return (
    <main className=" w-full overflow-hidden">
      <section ref={sectionRef} className="flex min-h-screen w-full">
        <div className="w-1/2 flex justify-center items-center software-left">
          <img src="/assets/re-logo.webp" width="auto" />
          <div>
            <h2>Renie</h2>
            <h6>Software</h6>
            <p>Where everything comes together</p>
          </div>
        </div>

        <div className="w-1/2 flex items-center overflow-hidden relative">
          <div
            className="flex flex-nowrap space-x-10"
          >
            <div className="software-right-container">
              <img src="/assets/renie-hub.webp" />
              <span>Renie Admin</span>
              <p>
                Renie Admin centralizes all management tasks, providing seamless control over operations, data, and user interactions.
              </p>
            </div>
            <div className="software-right-container">
              <img src="/assets/renie-hub-2.webp" />
              <span>Renie Hub</span>
              <p>
                Our innovative platform makes it possible to generate a passive income from data monetization of plastic waste.
              </p>
            </div>
            <div className="software-right-container">
              <img src="/assets/renie-hub-3.webp" />
              <span>Renie Rewards</span>
              <p>
                Renie Nexus makes recycling easy with instant access and prize rewards, boosting sustainability.
              </p>
            </div>
            <div className="software-right-container">
              <img src="/assets/renie-hub-4.webp" />
              <span>Renie Ads</span>
              <p>
                Our AI platform uses Renie Bin data to deliver targeted ads, driving eco-friendly engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Section6;
