import withLayout from "Utils/withLayout";
import React from "react";
import HeroSection from "Components/HeroSection";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default withLayout(LandingPage);
