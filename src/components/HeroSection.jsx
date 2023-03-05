import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <div className="hero-container">
        <video src="video/background.mp4" autoPlay loop muted />
      </div>
    </>
  );
};

export default HeroSection;
