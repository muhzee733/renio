import React from "react";
import H1 from "./Typography/H1";
import H4 from "./Typography/H4";

const features = [
  {
    icon: "/assets/renie-update/launch-icon-1.webp",
    text: "Launch a scalable smart recycling infrastructure",
  },
  {
    icon: "/assets/renie-update/datamonitise-icon-2.webp",
    text: "Earn from data monetization and software activation fees",
  },
  {
    icon: "/assets/renie-update/esg-icon3.webp",
    text: "Provide ESG solutions to governments, brands, and institutions",
  },
  {
    icon: "/assets/renie-update/admin-report-4.webp",
    text: "Manage everything from logistics to impact reporting with our Admin Panel",
  },
];

const RenieLicensee = () => {
  return (
    <section className="renie-licensee-section">
      <div className="renie-licensee-container">
        <div class="container-xl">
          <div className="renie-licensee-left">
            <H1 title={"Become a Renie Licensee"} />
            <h2>Bring the future of recycling to your region.</h2>
            <p className="desc">
              Join our global network of licensees and take charge of deploying
              Renie's smart waste solutions in your territory. As a Renie
              partner, you'll gain access to our full suite of
              technology—including smart bins, software platforms, and
              operational tools—backed by our training and support.
            </p>
            <div className="features-list">
              <h3>As a licensee, you can:</h3>
              <ul>
                {features.map((feature, idx) => (
                  <li key={idx}>
                    <img src={feature.icon} alt="icon" />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="cta-area">
              <H4
                title={"Ready to lead the circular economy in your region?"}
              />
              <button className="btn-2">LEARN MORE</button>
            </div>
          </div>
          <div className="renie-licensee-right">
            <div className="main-box">
              <img
                src="/assets/renie-update/license-1.webp"
                alt="Recycle & Earn Box"
                className="box-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RenieLicensee;
