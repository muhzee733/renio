import Footer from "@/components/Navbar/Footer";
import Banner from "@/components/Banner/Banner";
import HowItWork from "@/components/HowItWorks/HowItWork";
import Navbar from "@/components/Navbar/Navbar";
import Section3 from "@/components/Section3";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import RenieBin from "@/components/RenieBin";
import Meta from "@/components/Meta";
import RecycleSection from "@/components/RecycleSection";
import RenieLicensee from "@/components/RenieLicensee";

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

      <section>
        <Section5 />
      </section>

      <section className="renie-software-section">
        <Section6 />
      </section>

      <RenieLicensee />

      <section className=" section-8">
        <Footer />
      </section>
      {/* <MiniFooter /> */}
    </>
  );
}
