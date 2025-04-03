import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/RenieHub/Banner";
import SecondSection from "@/components/RenieHub/SecondSection";
import ThirdSection from "@/components/RenieHub/ThirdSection";
import FourthSection from "@/components/RenieHub/FourthSection";
import React from "react";
import FifthSection from "@/components/RenieHub/FifthSection";
import SixSection from "@/components/RenieHub/SixSection";
import Footer from "@/components/Navbar/Footer";
import MiniFooter from "@/components/Navbar/MiniFooter";
import Meta from "@/components/Meta";

const reniehub = () => {
  return (
    <>
       <Meta
          title="Renie Hub: Your Central Resource for Recycling and Sustainability"
          description="Access resources, tools, and information at Renie Hub. Empower your sustainability journey with the latest insights and support."
        />
      <Navbar />
      <Banner />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixSection />
      <Footer />
      <MiniFooter />
    </>
  );
};

export default reniehub;
