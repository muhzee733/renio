import Meta from "@/components/Meta";
import JoinNow from "@/components/Monitization/JoinNow";
import Footer from "@/components/Navbar/Footer";
import MiniFooter from "@/components/Navbar/MiniFooter";
import Navbar from "@/components/Navbar/Navbar";
import RenieAds from "@/components/RenieAds/Banner";
import SecondSection from "@/components/RenieAds/SecondSection";
import ThirdSection from "@/components/RenieAds/ThirdSection";
import P from "@/components/Typography/P";
import React from "react";

const Renieads = () => {
  return (
    <>
      <Meta
        title="Ads That Matter | Sustainable Advertising with Renie"
        description="Use network of 1000s of Renie Bins working together, forming Renie’s advertising platform, ‘Ads That Matter,’. Reach your perfect audience with AI."
      />
      <Navbar />
      <RenieAds />
      <section className="custom-section-renie">
        <div className="container-xl">
          <div class="row">
            <div class="col-md-6">
              <figure className="d-flex justify-content-center renie-ads-image">
                <img src="/assets/renieads/renie-ads.webp" alt="mobile-image" />
              </figure>
            </div>
            <div class="col-md-6">
              <div className="renie-future-section">
                <h4>The Smart Network Behind Smart Ads</h4>
                <P
                  title={
                    "Ads That Matter is a highly customizable platform, which uses data gathered by 1000s of Renie Bins to precisely target consumers with advertisements"
                  }
                />
                <div className="renie-boxes">
                  <div className="d-flex align-items-center gap-4 mt-5">
                    <img src="/assets/json/ai-icon.png" alt="ai-icon"/>
                    <div>
                      <h6>AI-Powered Ads, Delivered to the Right Audience</h6>
                      <P
                        title={
                          "Smart algorithms + real-time insights = ads that truly connect."
                        }
                      />
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-4 mt-5">
                    <img src="/assets/json/real-time.png" />
                    <div>
                      <h6>Real-Time Insight. Real-World Impact</h6>
                      <P
                        title={
                          "Leverage live data from thousands of Renie Bins to deliver ads that resonate."
                        }
                      />
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-4 mt-5">
                    <img src="/assets/json/customized.png" />
                    <div>
                      <h6>Full Ad Customization, Zero Limits</h6>
                      <P
                        title={
                          "From visuals to timing — everything is in your hands."
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SecondSection />
      <ThirdSection />
      <JoinNow />
      <Footer />
      <MiniFooter />
    </>
  );
};

export default Renieads;
