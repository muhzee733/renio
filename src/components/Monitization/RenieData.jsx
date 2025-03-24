import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const data = [
  {
    id: 1,
    title1: "Step 1",
    title2: "Smart Waste Collection",
    para: "Our intelligent Renie Bins are equipped with advanced sensors that collect valuable data from disposed items. Data points include material types, brand recognition, and consumer behavior insights.",
    icon: "/assets/cup-icon.webp",
  },
  {
    id: 2,
    title1: "Step 2",
    title2: "Data Extraction & Analysis",
    para: "The collected waste data is processed through our AI-powered platform. Our system extracts key insights, such as consumer preferences, recycling trends, and product lifecycle data.",
    icon: "/assets/monitize.webp",
  },
  {
    id: 3,
    title1: "Step 3",
    title2: "Data Monetization & Revenue Generation",
    para: "The extracted data is fed into Renie’s monetization algorithms, converting it into actionable insights. Businesses can monetize this data by partnering with brands, sustainability initiatives, and market research firms.",
    icon: "/assets/monitization-2.webp",
  },
  {
    id: 4,
    title1: "Step 4",
    title2: "Earn & Optimize Sustainability Goals",
    para: "Companies receive monetized payouts for their waste data contributions. Real-time sustainability impact tracking improves ESG (Environmental, Social, and Governance) reporting.",
    icon: "/assets/monitization-3.webp",
  },
];

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
        xPercent: -100 * (data.length - 0),
        ease: "none",
      });

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }
  }, []);

  return (
    <main className="w-100 reee">
      <div className="container-xl">
        <section
          ref={sectionRef}
          className="d-flex min-vh-100 w-100 custom-renie-card"
        >
          <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
            <div className="software-left-data text-center">
              <h2>How Does Renie’s Data Monetization Work?</h2>
              <p>
                We redefine waste management by turning waste data into revenue.
                Our Renie Bins collect and analyze waste-related data, allowing
                businesses to benefit from sustainable waste practices while
                generating income.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 d-flex align-items-center overflow-hidden position-relative">
            <div className="d-flex flex-nowrap gap-4">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="software-right-container software-right-data p-4 bg-white rounded shadow"
                >
                  <h1>{item.title1}</h1>
                  <div className="m-data d-flex align-items-center gap-2">
                    <img
                      src={item.icon}
                      alt="icon"
                      className="img-fluid"
                    />
                    <h6>{item.title2}</h6>
                  </div>
                  <p>{item.para}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Section6;
