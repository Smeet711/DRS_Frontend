import React from "react";
import Typical from "react-typical";
import ButtonFill from "./ButtonFill";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="hero-container">
        <div className="videocontainer">
          <video src="video/videoback2.mp4" autoPlay loop muted />
          <div className="herobtns">
            <button onClick={() => navigate("/start")}>
              <ButtonFill>Let's Start Ride</ButtonFill>{" "}
            </button>
          </div>
        </div>
        <p>
          Welcome to{" "}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={["Decentralized Ride Sharing", 1000]}
          />
        </p>
      </div>
    </>
  );
};

export default HeroSection;
