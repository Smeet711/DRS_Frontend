import React from "react";
import Nav from "./Navbar/Nav";
import ButtonOutline from "./ButtonOutline";
import Icon1 from "../assets/icon-1.png";
import Icon2 from "../assets/car.png";
import Icon3 from "../assets/driver.png";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
const Header = () => {
  const Info = [
    {
      icon: Icon1,
      title: "Find The Perfect Car",
      des: "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.",
    },
    {
      icon: Icon2,
      title: "Book your Ride",
      des: "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.",
    },
    {
      icon: Icon3,
      title: "Hit on the Roads",
      des: "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.",
    },
  ];
  return (
    <section className="bg-Hero bg-cover bg-center  py-4 md:px-24 px-4">
      <Nav />

{/* <Navbar/> */}


      {/* <div className="flex md:flex-row flex-col gap-5 pt-20">
        <div className="flex-1">
          <h1
            className="md:text-5xl text-4xl font-semibold tracking-wide md:leading-tight
          leading-snug"
          >
            Be prepared for the mountains and beyond.
          </h1>
          <p className="text-gray-600 md:w-2/3 md:py-4 py-2 leading-relaxed">
            Are you looking for amazing hiking travel? Don’t worry! We got it
            for you!
          </p>
          <br />
          <div className="flex md:gap-4 gap-2 flex-wrap">
            <ButtonFill>Contact Us</ButtonFill>
            <ButtonOutline />
          </div>
        </div>
        <div className="flex-1  flex justify-center">
          <img src={HeroImg} alt="hero" className="h-2/3" />
        </div>
      </div> */}

      <HeroSection />

      <div className="bg-white shadow-2xl flex md:flex-row flex-col md:-mt-48 gap-10 md:p-14 p-10 mt-5 rounded-md">
        {Info.map((info, i) => (
          <div key={i}>
            <img src={info.icon} alt="icon" className="h-16" />
            <h1 className="font-semibold text-lg my-3">{info.title}</h1>
            <p className="text-gray-600 text-sm leading-relaxed">{info.des}</p>
            <button className="text-rose-600 font-medium text-sm my-1">
              Read More
            </button>
          </div>
        ))}
      </div>
      <p className="py-10 md:text-sm text-xs block text-gray-600 text-center">
        Don’t hesitate to contact us to get better Information.
        <span className="text-rose-600 font-semibold italic px-1">
          EXPLORE ALL RIDES.
        </span>
      </p>
    </section>
  );
};

export default Header;
