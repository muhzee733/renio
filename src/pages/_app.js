import "@/styles/globals.css";
import "@/styles/customStyle.css"
import '@/components/Slider5/slider.css';
import '@/components/Slide3/slide.css';

import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
// sdnsjdsjd