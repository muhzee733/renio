import React from 'react'
import './dark.css';

const DarkLight = () => {
  const Image = ({ src, alt, className }) => {
    return <img src={src} alt={alt} className={className} />;
  };
  return (
    <>
      <Image src="/assets/dark_mode.webp" alt="dark mode" className="darkLight" />
      {/* <Image src="/assets/light_mode.webp" alt="light mode" className="darkLight" /> */}
    </>
  )
}

export default DarkLight