import Blog from "./components/Blog";
import Headers from "./components/Header";
import img1 from "./assets/safe.png";
import img2 from "./assets/commit.png";
import img3 from "./assets/welcome.png";
import Companies from "./components/Companies";
import Review from "./components/Review";
import Footer from "./components/Footer/Footer";
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
    <div className="font-Poppins">
      <Headers />
      <Blog content={contents[0]} />
      <Companies />
      <Blog content={contents[1]} alternative={true} />
      <Blog content={contents[2]} />
      <Review />
      <Footer />
    </div>
  );
};

export default App;
