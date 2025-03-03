import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollCanvas = ({ imagePath, frameCount, containerClass }) => {
  const canvasRef = useRef(null);
  const h2Ref = useRef(null);
  const imagesRef = useRef([]);
  const animationRef = useRef({ frame: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const canvas = canvasRef.current;
    const h2 = h2Ref.current;
    if (!canvas || !h2) return;

    const context = canvas.getContext("2d");
    canvas.width = 1158;
    canvas.height = 651;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = `${imagePath}${(i + 1).toString().padStart(4, "0")}.webp`;
      imagesRef.current.push(img);
    }

    const render = () => {
      if (!context || imagesRef.current.length === 0) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(imagesRef.current[animationRef.current.frame], 0, 0);
    };

    imagesRef.current[0].onload = render;

    // Animate canvas scrolling
    gsap.to(animationRef.current, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: `.${containerClass}`,
        start: "bottom bottom",
        end: "+=13000",
        scrub: 1,
        pin: `.${containerClass}`,
        onUpdate: render,
      },
    });

    // Pin the <h2> while scrolling
    gsap.to(h2, {
      scrollTrigger: {
        trigger: h2,
        start: "top 15%",
        end: `+=13000`, // Adjust this value based on how long you want the pin effect
        pin: true,
        pinSpacing: false, // Prevents adding extra space
      },
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, [imagePath, frameCount, containerClass]);

  return (
    <>
      <div className="PowerRenie ground-section">
        <div className="power-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="power">
                  {/* Add ref to h2 */}
                  <h2 ref={h2Ref} className="build-pin pt-5 text-center">
                    Build from the ground up
                  </h2>
                  <div className="canvas-wrapper1">
                    <div className={containerClass}>
                      <canvas ref={canvasRef} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollCanvas;
