import { useEffect } from "react";
import gsap from "gsap";

const DataMonetizationSection = () => {
  useEffect(() => {
    const rightElems = document.querySelectorAll(".right-elem");

    rightElems.forEach((elem) => {
      const imgElem = elem.querySelector(".hide-img");

      if (!imgElem) return; // Ensure the image exists before proceeding

      const onMouseEnter = () => {
        gsap.to(imgElem, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
        });
      };

      const onMouseLeave = () => {
        gsap.to(imgElem, {
          opacity: 0,
          scale: 0,
          duration: 0.3,
        });
      };

      const onMouseMove = (event) => {
        gsap.to(imgElem, {
          x: event.clientX - elem.getBoundingClientRect().x - 90,
          y: event.clientY - elem.getBoundingClientRect().y - 215,
          duration: 0.1,
        });
      };

      elem.addEventListener("mouseenter", onMouseEnter);
      elem.addEventListener("mouseleave", onMouseLeave);
      elem.addEventListener("mousemove", onMouseMove);

      return () => {
        elem.removeEventListener("mouseenter", onMouseEnter);
        elem.removeEventListener("mouseleave", onMouseLeave);
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="why-choose">
      <section className="container-xl my-5">
        <div className="row">
          <div className="col-lg-4 col-md-12 p-0">
            <h2>
              Why Choose <br /> Renie?
            </h2>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row custom-rows">
              {[
                {
                  title: "From trash to cash",
                  description:
                    "Traditional waste management costs money, but Renie helps businesses earn from their waste by transforming trash into cash.",
                  img: "/assets/from-trash.webp",
                },
                {
                  title: "Sustainability Meets Profitability",
                  description:
                    "Our model supports zero-waste initiatives and circular economy efforts, aligning businesses with sustainable practices while generating revenue.",
                  img: "/assets/meets.webp",
                },
                {
                  title: "Real-Time Data Insights",
                  description:
                    "Businesses gain access to valuable insights on consumer behavior, waste patterns, and sustainability performance, helping them make data-driven decisions.",
                  img: "/assets/real-time.webp",
                },
                {
                  title: "Seamless Integration",
                  description:
                    "Our smart Renie bins integrate with existing waste management systems, making it effortless for companies to start monetizing their waste data.",
                  img: "/assets/seamless.webp",
                },
                {
                  title: "A Competitive Edge",
                  description:
                    "By leveraging waste data, brands can refine product development, improve marketing strategies, and create eco-friendly innovations.",
                  img: "/assets/competitive.webp",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="col-lg-12 d-flex align-items-center mb-4 custom-cursure "
                >
                  <div className="row right-elem position-relative">
                    <div className="col-lg-3 p-0">
                      <h5>{item.title}</h5>
                      <img className="hide-img" src={item.img} alt="logo" />
                    </div>
                    <div className="col-lg-8">
                      <p className="text-muted">{item.description}</p>
                    </div>
                    <div className="col-lg-1 text-right custom-arrow">
                      <img src="/assets/arrow-2.webp" width={15} alt="arrow" />
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
