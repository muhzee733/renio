import Head from "next/head";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Footer from "@/components/Navbar/Footer";
import Banner from "@/components/Banner/Banner";
import HowItWork from "@/components/HowItWorks/HowItWork";
import MiniFooter from "@/components/Navbar/MiniFooter";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>Transform your waste into income</title>
        <meta name="description" content="Transform your waste into income" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        />
      </Head>
      <Banner />
      <HowItWork />
      <MiniFooter />
      <Footer />
    </>
  );
}
