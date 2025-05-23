import Head from "next/head";
import Footer from "@/components/Navbar/Footer";
import Banner from "@/components/Banner/Banner";
import HowItWork from "@/components/HowItWorks/HowItWork";
import MiniFooter from "@/components/Navbar/MiniFooter";
import Navbar from "@/components/Navbar/Navbar";
import Section3 from "@/components/Section3";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import RenieBin from "@/components/RenieBin";
import Meta from "@/components/Meta";
import AnimatedSection from "@/components/RenieApp/AnimatedSection";
import RecycleSection from "@/components/RecycleSection";

export default function Home() {
  return (
    <>
      <Meta
        title="Transform your waste into income"
        description="Discover Renie’s solutions to transform your waste into income by recycling and sustainable waste management. Help us divert waste from landfills."
      />
      <section>
        <Navbar />
      </section>

      <section className="section section-1">
        <Banner />
      </section>
      <RecycleSection />

      <section id="how-it-works" className="section section-2">
        <HowItWork />
      </section>

      <section className="new-section">
        <RenieBin />
      </section>

      <section className=" scroll-section-outer" id="scroll-section-outer">
        <Section3 />
      </section>

      {/* <section className="section section-4">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/aAoVks4P7dU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section> */}

      <section>
        <Section5 />
      </section>

      <section className="renie-software-section">
        <Section6 />
      </section>
      <AnimatedSection />

      <section className=" section-8">
        <Footer />
      </section>
      {/* <MiniFooter /> */}
    </>
  );
}
