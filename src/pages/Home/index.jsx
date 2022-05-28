import { Link } from "react-router-dom";
import Policy from "./Policy";
import Slider from "react-slick";
import Option from "./Option";
import NewProduct from "./NewProduct";
import DealHot from "./DealHot";
import Newsletter from "../../components/Newsletter/Newsletter";
import News from "./News";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../store/slices/product.slice";
import { ToastContainer } from "react-toastify";
import './home.css'
import { useEffect } from "react";
const Home = () =>{

  const products = useSelector(selectAllProducts)
  console.log(products);

  const productsNew =  products.filter(item => item.isNew == true)
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,      
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    fade : true,
    cssEase: "ease-out", 
    arrows:false,
    appendDots: dots => (
      <div
      >
        <ul style={{ margin: "40px" }}> {dots} </ul>
      </div>
    ),
  };
  return( 
    <>
    <div id="banner">
      <div className="slider">
      <Slider {...settings}>
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
      </div>
    </div>
      <Policy />
      <Option />
      <NewProduct data={productsNew}/>
      <DealHot />
      <News/>
      <Newsletter/>
      <ToastContainer 
          position="bottom-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          style={{ fontSize: "1.5rem" }} 
        />
 

    </>
  )
}


export default Home;