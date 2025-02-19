import Footer from "@/components/Navbar/Footer";
import MiniFooter from "@/components/Navbar/MiniFooter";
import Navbar from "@/components/Navbar/Navbar";
import AnimatedSection from "@/components/RenieApp/AnimatedSection";
import Banner from "@/components/RenieApp/Banner";
import EasyStep from "@/components/RenieApp/EasyStep";
import Green from "@/components/RenieApp/Green";
import LoveRenie from "@/components/RenieApp/LoveRenie";
import RenieNexus from "@/components/RenieApp/RenieNexus";
import React from "react";

const RenieApp = () => {
  return (
    <>
      <Navbar />
      <Banner />
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
