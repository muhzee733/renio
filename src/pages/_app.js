import "@/styles/globals.css";
import "@/styles/customStyle.css"
import '@/components/Slider5/slider.css';
import '@/components/Slide3/slide.css';
import '@/styles/reniebin.css'
import "@/styles/monitization.css"
import "@/styles/renieapp.css"
import "@/styles/reniehub.css"
import "@/styles/renieadmin.css"
import "@/styles/renie-ads.css"
import "@/styles/mediahub.css"
import WhatsAppButton from "@/components/WhatsAppButton";

import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <WhatsAppButton />
    </ThemeProvider>
  );
}