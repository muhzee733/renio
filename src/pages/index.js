import Head from "next/head";
import { useTheme } from "next-themes";
import Footer from "@/components/Navbar/Footer";
import Banner from "@/components/Banner/Banner";
import HowItWork from "@/components/HowItWorks/HowItWork";
import MiniFooter from "@/components/Navbar/MiniFooter";
import Navbar from "@/components/Navbar/Navbar";
import Section3 from "@/components/Section3";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";

export default function Home() {
  return (
    <>
      <Head>
        <title>Transform your waste into income</title>
        <meta name="description" content="Transform your waste into income" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Navbar />
      </section>

      <section className="section section-1">
        <Banner />
      </section>

      <section className="section section-2">
        <HowItWork />
      </section>

      <section className=" scroll-section-outer">
        <Section3 />
      </section>

      <section className="section section-4">
        <h1>Section 4</h1>
      </section>

      <section className=" scroll-section-outer">
        <Section5 />
      </section>

      <section className=" scroll-section-outer">
        <Section6 />
      </section>

      <section className="section section-7">
        <h1>Bin</h1>
      </section>

      <section className="section section-8">
        <MiniFooter />
        <Footer />
      </section>
    </>
  );
}
