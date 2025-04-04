import { useEffect } from "react";
import gsap from "gsap";
import H4 from "../Typography/H4";
import P from "../Typography/P";

const DataMonetizationSection = () => {
  useEffect(() => {
    const rightElems = document.querySelectorAll(".right-elem");
  
    let activeImg = null;
  
    rightElems.forEach((elem) => {
      const imgElem = elem.querySelector(".hide-img");
      if (!imgElem) return;
  
      const onMouseEnter = () => {
        // Hide previously active image
        if (activeImg && activeImg !== imgElem) {
          gsap.to(activeImg, { opacity: 0, scale: 0, duration: 0.4 });
        }
  
        // Show current image
        gsap.to(imgElem, {
          opacity: 1,
          scale: 1.2,
          duration: 0.8,
        });
  
        activeImg = imgElem;
      };
  
      const onMouseLeave = () => {
        gsap.to(imgElem, {
          opacity: 0,
          scale: 0,
          duration: 0.8,
        });
  
        // Clear only if it's the current active one
        if (activeImg === imgElem) {
          activeImg = null;
        }
      };
  
      const onMouseMove = (event) => {
        const rect = elem.getBoundingClientRect();
        gsap.to(imgElem, {
          x: event.clientX - rect.x - 90,
          y: event.clientY - rect.y - 150,
          duration: 0.8,
        });
  
        // If a different element is active, update immediately
        if (activeImg && activeImg !== imgElem) {
          gsap.to(activeImg, { opacity: 0, scale: 0, duration: 0.5 });
          gsap.to(imgElem, { opacity: 1, scale: 1, duration: 0.5 });
          activeImg = imgElem;
        }
      };
  
      elem.addEventListener("mouseenter", onMouseEnter);
      elem.addEventListener("mouseleave", onMouseLeave);
      elem.addEventListener("mousemove", onMouseMove);
  
      // Cleanup
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
                      <H4 title={item.title} />
                      {/* <h5>{item.title}</h5> */}
                      <img className="hide-img" src={item.img} alt="logo" />
                    </div>
                    <div className="col-lg-8">
                      <P title={item.description} />             
                      {/* <p className="text-muted">{item.description}</p> */}
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
