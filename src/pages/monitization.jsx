import React from "react";
import Monitization from "@/components/Monitization/MonitizationDiv";
import WhyChoose from "@/components/Monitization/WhyChoose";
import Benefit from "@/components/Monitization/Benefit";
import Banner from '@/components/Monitization/Banner';
import RenieData from "@/components/Monitization/RenieData";

const MonitizationSection = () => {
  return (
    <div className="monitization">
      <Banner />
      <RenieData />
      <Monitization />
      <WhyChoose />
      <Benefit />
    </div>
  );
};

export default MonitizationSection;
