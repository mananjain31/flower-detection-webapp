import withLayout from "Utils/withLayout";
import React from "react";
import HeroSection from "Components/HeroSection";
import UploadFormSection from "Components/UploadFormSection";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <UploadFormSection />
    </div>
  );
};

export default withLayout(LandingPage);
