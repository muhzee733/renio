import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollCanvas = ({ imagePath, frameCount, containerClass }) => {

  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const animationRef = useRef({ frame: 0 });
  const contentRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

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
                  <h2 className="build-pin" ref={contentRef}>Build from the ground up</h2>
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
