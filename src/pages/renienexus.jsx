import Footer from "@/components/Navbar/Footer";
import MiniFooter from "@/components/Navbar/MiniFooter";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Meta from "@/components/Meta";
import LoveRenie from "@/components/RenieApp/LoveRenie";
import EasyStep from "@/components/RenieApp/EasyStep";
import AnimatedSection from "@/components/RenieApp/AnimatedSection";
import Green from "@/components/RenieApp/Green";
import Banner from "@/components/RenieApp/Banner";
import RenieNexusApp from "@/components/RenieApp/RenieNexusApp";

const RenieNexus = () => {
  return (
    <>
      <Meta
        title="Renie App: Track Your Recycling Impact Anytime, Anywhere"
        description="Download the Renie App to easily track your recycling impact, find nearby bins, and earn rewards for your sustainable efforts."
      />
      <Navbar />
      <Banner />
      {/* <RenieNexusApp />
      <LoveRenie />
      <EasyStep />
      <AnimatedSection />
      <Green /> */}
      <Footer />
      <MiniFooter />
    </>
  );
};

export default RenieNexus;
