import React from "react";
import H1 from "../Typography/H1";
import P from "../Typography/P";
import H4 from "../Typography/H4";

const Benefits = () => {
  const features = [
    {
      title: "Proven Business Model",
      description:
        "Benefit from a tested business model that minimizes risks and maximizes returns.",
    },
    {
      title: "Low Start-up Costs",
      description:
        "Enjoy a low initial investment, making it easier to start your business without financial strain.",
    },
    {
      title: "Comprehensive Training & Support",
      description:
        "Receive thorough training and continuous support to ensure your business success.",
    },
    {
      title: "Exclusive Products & Services",
      description:
        "Access a range of exclusive, high-demand products and services to set your business apart.",
    },
    {
      title: "Marketing Resources",
      description:
        "Leverage expertly crafted marketing materials and campaigns to attract customers.",
    },
    {
      title: "Ongoing Business Development",
      description:
        "Benefit from ongoing business development resources to help you stay competitive.",
    },
    {
      title: "Exclusive Territory Rights",
      description:
        "Operate within an exclusive territory to avoid direct competition from other franchises.",
    },
    {
      title: "High Profit Potential",
      description:
        "Experience high-profit potential with our optimized business model and product offerings.",
    },
  ];
  return (
    <>
      <div className="franchise-benefits">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-12">
              <div className="benefits-franch">
                <H1 title={"Franchise Benefits"} />
                <P
                  title={
                    "Owning a Renie.io franchise comes with numerous benefits, including a proven business model, low start-up costs, and access to ongoing support and marketing resources. As part of our family, you will enjoy exclusive access to our innovative products and services, along with a high potential for profitability."
                  }
                />
              </div>
            </div>
          </div>
          <div className="row g-4 mt-5">
            {features.map((feature, index) => (
              <div className="col-md-6" key={index}>
                <div className="d-flex gap-3 p-3">
                  <figure>
                    <img src="/assets/json/reg.png" />
                  </figure>
                  <div className="title-desc">
                    <H4 title={feature.title} />
                    <P title={feature.description} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
