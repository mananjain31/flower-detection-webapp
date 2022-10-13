import React from "react";
import { Link } from "react-router-dom";
// import heroSectionImage from "Assets/images/hero-section.jpeg";

const HeroSection = () => {
  return (
    <section className="h-screen">
      {/* <img src={heroSectionImage} alt="hero-section" className="w-full" /> */}
      <div className="z-10 bg-red-300 w-full h-full grid place-items-center font-serif">
        <div className="text-4xl sm:text-5xl md:text-8xl  text-center text-white">
          <h3>FLOWERS</h3>
          <h3 className="font-sans text-3xl sm:text-4xl md:text-7xl  italic">
            need time
          </h3>
          <h3>TO BLOOM</h3>
          <Link
            to="/main"
            className="text-lg px-4 py-2 sm:text-2xl lg:text-3xl bg-slate-800 hover:bg-slate-900 mt-3"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
