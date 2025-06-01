import Banner from "@/components/License/Banner";
import FifthSection from "@/components/License/FifthSection";
import Fourth from "@/components/License/Fourth";
import SecondSection from "@/components/License/SecondSection";
import ThirdSection from "@/components/License/ThirdSection";
import Meta from "@/components/Meta";
import Footer from "@/components/Navbar/Footer";
import Navbar from "@/components/Navbar/Navbar";
import MeetRenieBin from "@/components/RenieBin/MeetRenieBin";
import SixthSection from "@/components/License/SixthSection";
import React from "react";

const license = () => {
  return (
    <>
      <Meta
        title="Renie License"
        description="Discover Renie’s solutions to transform your waste into income by recycling and sustainable waste management. Help us divert waste from landfills."
      />
      <Navbar />
      <Banner />
      <SecondSection />
      <ThirdSection />
      <Fourth />
      <FifthSection />
      <SixthSection />
      <figure className="text-center main-image">
        <img src="/assets/renie-update/group.png" alt="Renie License" />
      </figure>

      <div className="text-center d-none d-md-block">
        <button
          className="btn-2 mt-5 text-center"
          onClick={() => (window.location.href = "/renielicense")}
        >
          Explore the Full demo
        </button>
      </div>
      <Footer />
    </>
  );
};

export default license;
