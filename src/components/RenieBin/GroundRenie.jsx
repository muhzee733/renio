import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollCanvas = ({ imagePath, frameCount, containerClass }) => {
  const canvasRef = useRef(null);
  const h2Ref = useRef(null);
  const h3Ref = useRef(null);
  const h4Ref = useRef(null);
  const h5Ref = useRef(null);
  const h6Ref = useRef(null);
  const imagesRef = useRef([]);
  const animationRef = useRef({ frame: 20 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const canvas = canvasRef.current;
    const h2 = h2Ref.current;
    const h3 = h3Ref.current;
    const h4 = h4Ref.current;
    const h5 = h5Ref.current;
    const h6 = h6Ref.current;

    if (!canvas || !h2 || !h3 || !h4 || !h5 || !h6) return;

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

    gsap.to(h2, {
      scrollTrigger: {
        trigger: h2,
        start: "top 15%",
        end: "+=13000",
        pin: true,
        pinSpacing: false,
      },
    });
    gsap.to(h3, {
      scrollTrigger: {
        trigger: h3,
        start: "top 15%",
        end: "+=13000",
        pin: true,
        pinSpacing: false,
      },
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, [imagePath, frameCount, containerClass]);

  return (
    <>
      <div className="PowerRenie ground-section">
        <div className="power-wrapper">
          <div className="container-xl">
            <div className="row">
              <div className="col-lg-12">
                <div className="power">
                  <h2 ref={h2Ref} className="build-pin pt-5 text-center">
                    Build from the ground up
                  </h2>
                  <h3 ref={h3Ref} className="text-left">
                    Text 1
                  </h3>
                  <h3 ref={h4Ref} className="text-left">
                    Text 2
                  </h3>
                  <h3 ref={h5Ref} className="text-right">
                    Text 3
                  </h3>
                  <h3 ref={h6Ref} className="text-right">
                    Text 4
                  </h3>
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
