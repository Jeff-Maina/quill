import BookSlider from "../../components/Bookslider/Bookslider";
import MainBody from "../../components/mainbody/mainbody";
import Navbar from "../../components/navbar/navbar";
import "./homepage.css";
function Homepage() {
  return (
    <div id="homepage-container">
      <Navbar/>
      <BookSlider/>
      <MainBody/>
    </div>
  );
}

export default Homepage;
