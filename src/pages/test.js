import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Sections = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const scrollHandler = (event) => {
      // Prevent default scrolling behavior
      event.preventDefault();

      // Get current scroll position
      const currentScroll = window.scrollY;
      const scrollDirection = event.deltaY;

      // Determine which direction the scroll is happening (down or up)
      const nextSection = scrollDirection > 0
        ? Array.from(sections).find(section => section.offsetTop > currentScroll)
        : Array.from(sections).reverse().find(section => section.offsetTop < currentScroll);

      if (nextSection) {
        // Scroll to the next or previous section smoothly using GSAP
        gsap.to(window, {
          duration: 0.3,  // Faster scroll speed (make sure it's faster than before)
          scrollTo: { y: nextSection, offsetY: 0 },
          ease: 'none',  // Set to 'none' for linear scroll behavior (no easing)
        });
      }
    };

    // Add scroll event listener
    window.addEventListener('wheel', scrollHandler, { passive: false });

    return () => window.removeEventListener('wheel', scrollHandler);
  }, []);

  return (
    <div>
      <div className="section" style={{ height: '100vh', backgroundColor: 'lightblue' }}>
        <h2>Section 1</h2>
      </div>
      <div className="section" style={{ height: '100vh', backgroundColor: 'lightgreen' }}>
        <h2>Section 2</h2>
      </div>
      <div className="section" style={{ height: '100vh', backgroundColor: 'lightcoral' }}>
        <h2>Section 3</h2>
      </div>
      <div className="section" style={{ height: '100vh', backgroundColor: 'lightyellow' }}>
        <h2>Section 4</h2>
      </div>
    </div>
  );
};

export default Sections;
