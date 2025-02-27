import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/RenieAdmin/Banner";
import React from "react";
import SecondSection from "@/components/RenieAdmin/secondSection";
import ThirdSection from "@/components/RenieAdmin/ThirdSection";
import Footer from "@/components/Navbar/Footer";
import MiniFooter from "@/components/Navbar/MiniFooter";

const RenieAdmin = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <SecondSection />
      <ThirdSection />
      <Footer/>
      <MiniFooter />
    </>
  );
};

export default RenieAdmin;
