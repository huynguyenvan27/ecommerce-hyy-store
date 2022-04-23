import { Link } from "react-router-dom";
import './home.css'
import Policy from "./Policy";
import Slider from "react-slick";
import Option from "./Option";
import ListProduct from "./ListProduct";
import DealHot from "./DealHot";
import Newsletter from "../../components/Newsletter/Newsletter";
import News from "./News";

const Home = () =>{

  const settings = {
    dots: true,
    arrows: true,
    accessibility: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,      
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    fade : true,
    cssEase: "linear", 
    appendDots: dots => (
      <div
        style={{
          
        }}
      >
        <ul style={{ margin: "40px" }}> {dots} </ul>
      </div>
    ),
  };
  return( 
    <>
    <div id="banner">
      <Slider {...settings} className="slider">

        <div className="slider-1 slider-item">
          <div className="banner-title">
            <h1 className="text-left">Welcome to</h1>
            <h1 className="text-right">Hyy Store</h1>
          </div>
          <Link to='/sneaker' className="btn" id="shop-now">
            <h1>MUA NGAY!</h1>
          </Link>
        </div>
        <div className="slider-2 slider-item">
          <div className="banner-title">
            <h1 className="text-left">Sale off 20%</h1>
            <h1 className="text-right text-white">All item</h1>
          </div>
          <Link to="/sneaker" className="btn" id="shop-now">
            <h1>MUA NGAY!</h1>
          </Link>
        </div>
        <div className="slider-3 slider-item">
          <div className="banner-title">
            <h1 className="text-left">Bộ sưu tập</h1>
            <h1 className="text-right">mùa hè</h1>
          </div>
          <Link to="/sneaker" className="btn" id="shop-now">
            <h1>MUA NGAY!</h1>
          </Link>
        </div>
      </Slider>
      <Policy />
      <Option />
      <ListProduct />
      <DealHot />
      <News/>
      <Newsletter />
    </div>

    </>
  )
}


export default Home;