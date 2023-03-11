import Blog from "./components/Blog";
import Headers from "./components/Header";
import img1 from "./assets/safe.png";
import img2 from "./assets/commit.png";
import img3 from "./assets/welcome.png";
import Companies from "./components/Companies";
import Review from "./components/Review";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DriverForm from "./components/DriverForm";
import StartRide from "./pages/StartRide";
import HeroSection from "./components/HeroSection";
import ScrolltoTop from "./components/ScrolltoTop";
import ServicesMap from "./pages/ServicesMap";
import RidesMap from "./pages/RidesMap";
import SrctoDest from "./components/SrctoDest";

const App = () => {
  const contents = [
    {
      title: "Safe, Affordable, And Trusted",
      des: "",
      img: img1,
    },
    {
      title: "Enjoy Your Life With Us Now!",
      des: "Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.",
      img: img2,
    },
    {
      title: "We are always to Welcome",
      des: "Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.",
      img: img3,
    },
  ];
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/start" element={<StartRide />} />
          <Route path="/services" element={<ServicesMap/>} />
          <Route path="/ridesmap" element={<RidesMap/>}/>
        </Routes>
      </BrowserRouter>
      <ScrolltoTop />
    </>
  );
};

export default App;
