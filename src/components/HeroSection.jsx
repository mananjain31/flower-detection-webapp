import React from "react";
import heroSectionImage from "Assets/images/hero-section.jpeg";

const HeroSection = () => {
  return (
    <section className="relative">
      <img src={heroSectionImage} alt="hero-section" className="w-full" />
      <div className="z-10 absolute top-0 w-full h-full grid place-items-center font-serif">
        <div className="text-8xl text-center text-white">
          <h3>FLOWERS</h3>
          <h3 className="font-sans text-7xl italic">need time</h3>
          <h3>TO BLOOM</h3>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
