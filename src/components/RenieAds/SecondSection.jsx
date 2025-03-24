import React from "react";

const sections = [
  {
    title: `<span class="gradient-color">OPTIMIZING </span> <span class="custom-color">AD DELIVERY</span> <span class="gradient-color"> WITH AI-POWERED DATA FROM RENIE BINS </span>`,
    text: "Ads That Matter’s AI constantly improves, driven by vast data from thousands of Renie bins located in diverse environments. By analyzing waste metrics and user interactions, it delivers optimized, relevant ads that engage a wide range of consumers across different areas.",
    image: "/assets/renieads/Layer_1.webp",
  },
  {
    title: `<span class="gradient-color"> Your Brand, </span><span class="custom-color">Fully Customizable</span> <span class="gradient-color">on Our Platform</span>`,
    text: "Our ad takes over the mobile screen as soon as a user connects to a Renie Bin. With complete control over your brand’s colors and messaging, you can create a fully immersive experience that captures attention and resonates with your audience.",
    image: "/assets/renieads/Layer_6.webp",
  },
  {
    title: `<span class="gradient-color">Make a Lasting  ${"<br />"} </span> <span class="custom-color">First Impression</span>`,
    text: "Your ad commands the entire mobile screen, ensuring maximum visibility. Our interface button subtly blends with your brand’s colors, creating a seamless and immersive experience.",
    image: "/assets/renieads/Layer_3.webp",
  },
  {
    title: `<span class="gradient-color">Ads for ${"<br />"} Every Stage of Your </span><span class="custom-color">Marketing Funnel</span>`,
    text: "Ads That Matter supports both image and full-screen video ads, strategically designed to drive brand awareness and engagement at key points in the customer journey.",
    image: "/assets/renieads/Layer_4.webp",
  },
  {
    title: `<span class="gradient-color">Visible in </span> <br/> <span class="custom-color">Thousands of Locations </span><span class="gradient-color">Every Day</span>`,
    text: "Maximize your brand’s reach with Ads That Matter, displaying your ads across thousands of locations every day. Engage diverse audiences through strategically placed Renie Bins, ensuring high visibility and meaningful connections.",
    image: "/assets/renieads/Layer_2.webp",
  },
];


function App() {
  return (
    <section className="ads-delivery">
      <div className="container-xl">
        {sections.map((section, index) => (
          <div key={index} className="row align-items-center my-4">
            {index === 1 || index === 3 ? (
              <>
                <div className="col-md-6 d-flex flex-column justify-content-end align-items-end">
                  <h3
                    className="fw-bold text-right"
                    dangerouslySetInnerHTML={{ __html: section.title }}
                  />
                  <p>{section.text}</p>
                </div>
                <div className="col-md-6">
                  <img src={section.image} alt="Icon" className="img-fluid" />
                </div>
              </>
            ) : (
              <>
                <div className={`col-md-6 d-flex justify-content-end`}>
                  <img src={section.image} alt="Icon" className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <h3 className="fw-bold" dangerouslySetInnerHTML={{ __html: section.title }} /> 
                  <p>{section.text}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
