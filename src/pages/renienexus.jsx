import Footer from "@/components/Navbar/Footer";
import MiniFooter from "@/components/Navbar/MiniFooter";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Meta from "@/components/Meta";

const RenieApp = () => {
  return (
    <>
      <Meta
        title="Renie App: Track Your Recycling Impact Anytime, Anywhere"
        description="Download the Renie App to easily track your recycling impact, find nearby bins, and earn rewards for your sustainable efforts."
      />
      <Navbar />
      {/* <Banner /> */}
      <RenieNexus />
      <LoveRenie />
      <EasyStep />
      <AnimatedSection />
      <Green />
      <Footer />
      <MiniFooter />
    </>
  );
};

export default RenieApp;
