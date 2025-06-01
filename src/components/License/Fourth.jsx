import React from "react";
import Image from "next/image";
import H1 from "../Typography/H1";
import P from "../Typography/P";

const licenseeItems = [
  {
    icon: "/assets/renie-update/icon-6.png",
    text: "Gain rights in your territory",
  },
  {
    icon: "/assets/renie-update/icon-7.png",
    text: "Deploy Renie bins across venues",
  },
  {
    icon: "/assets/renie-update/icon-8.png",
    text: "Onboard clients to the renie ecosystem",
  },
  {
    icon: "/assets/renie-update/icon-9.png",
    text: "Manage bin fleets, partners and users",
  },
  {
    icon: "/assets/renie-update/icon-10.png",
    text: "Generate recurring revenue from software and hardware",
  },
  {
    icon: "/assets/renie-update/icon-11.png",
    text: "Earn up to $500 usd/ton of waste recycled through our technology",
  },
];

const LicenseeRole = () => {
  return (
    <section
      className="role-licensee text-white text-center"
    >
      <div className="container-xl">
        <H1 title={'Your role as a licensee'} />
        <P title={'you are not managing waste, you’re deploying tech.'} />

        <div className="row g-5 role">
          {licenseeItems.map((item, index) => (
            <div key={index} className="col-sm-6 col-md-6">
              <div className="d-flex align-items-center gap-3 text-start h-100">
                <Image
                  src={item.icon}
                  alt={item.text}
                  width={70}
                  height={70}
                  className="flex-shrink-0"
                />
                <p className=" mb-0">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LicenseeRole;
