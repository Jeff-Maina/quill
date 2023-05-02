import BookSlider from "../../components/Bookslider/Bookslider";
import Navbar from "../../components/navbar/navbar";
import './homepage.css'
function Homepage() {
    return ( 
        <div id="homepage-container">
            <Navbar/>
            <div>
                <BookSlider/>
            </div>
        </div>
     );
}

export default Homepage;