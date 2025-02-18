import { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const DataMonetizationSection = () => {
  useEffect(() => {
    const rows = document.querySelectorAll(".custom-cursure");

    rows.forEach((row) => {
      row.addEventListener("mouseenter", () => {
        gsap.to("body", { cursor: "url('/assets/cusure.png'), auto", duration: 0.3 });
      });
      row.addEventListener("mouseleave", () => {
        gsap.to("body", { cursor: "default", duration: 0.3 });
      });
    });
    return () => {
      rows.forEach((row) => {
        row.removeEventListener("mouseenter", () => {});
        row.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div className="why-choose">
      <section className="container my-5">
        <div className="row">
          <div className="col-lg-4 col-md-12 p-0">
            <h2>
              Why Choose <br /> Renie for Data <br /> Monetization?
            </h2>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row custom-rows">
              {[
                {
                  title: "Turn Waste into Revenue",
                  description:
                    "Traditional waste management costs money, but Renie helps businesses earn from their waste by transforming disposal into a monetizable data asset.",
                },
                {
                  title: "Sustainability Meets Profitability",
                  description:
                    "Our model supports zero-waste initiatives and circular economy efforts, aligning businesses with sustainable practices while generating revenue.",
                },
                {
                  title: "Real-Time Data Insights",
                  description:
                    "Businesses gain access to valuable insights on consumer behavior, waste patterns, and sustainability performance, helping them make data-driven decisions.",
                  icon: "/images/icon1.png",
                },
                {
                  title: "Seamless Integration",
                  description:
                    "Our smart Renie bins integrate with existing waste management systems, making it effortless for companies to start monetizing their waste data.",
                  icon: "/images/icon2.png",
                },
                {
                  title: "A Competitive Edge",
                  description:
                    "By leveraging waste data, brands can refine product development, improve marketing strategies, and create eco-friendly innovations.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="col-lg-12 d-flex align-items-center mb-4 custom-cursure"
                >
                  <div className="row">
                    <div className="col-lg-3 p-0">
                      <h5>{item.title}</h5>
                    </div>
                    <div className="col-lg-8">
                      <p className="text-muted">{item.description}</p>
                    </div>
                    <div className="col-lg-1 text-right">
                      <span>&#8599;</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataMonetizationSection;
