import { Link } from "react-router-dom";
import './footer.css'
import { FaFacebookF,FaTwitter,FaYoutube,FaInstagram } from 'react-icons/fa';
const Footer = (props) =>{
  return(
    <footer>
      <div className="container">
        <Link id="logo" to="/">
          <img src='/image/logo.png' alt="logo" />
        </Link>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="store">
              <h1>STORE 1</h1>
              <p className="store-icon">
                <i className="bi bi-house-door"></i>
                <span>Số 9a, 44 Trần Thái Tông</span>
              </p>
              <p className="store-icon">
                <i className="bi bi-telephone"></i>
                <span>0981 930 183</span>
              </p>
            </div>
            <div className="store">
              <h1>STORE 2</h1>
              <p className="store-icon">
                <i className="bi bi-house-door"></i>
                <span>Số 27 , 30 Trương Định</span>
              </p>
              <p className="store-icon">
                <i className="bi bi-telephone"></i>
                <span>0982 883 789</span>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 d-flex flex-column ">
            <h1>THÔNG TIN</h1>
            <Link to="/">Trang chủ</Link>
            <Link to="/sneaker">Sneaker</Link>
            <Link to="/blog">Tin tức</Link>
            <Link to="about-us">Giới thiệu</Link>
            <Link to="/contact">Liên hệ</Link>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 d-flex flex-column">
            <h1>HỖ TRỢ</h1>
            <Link to="#">Chính sách giao hàng</Link>
            <Link to="#">Chính sách đổi trả</Link>
            <Link to="#">Chính sách bảo mật</Link>
            <Link to="#">Điều khoản dịch vụ</Link>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <h1>FANFAGE</h1>
            <p>Theo dõi để nhận được thông tin ưu đãi sớm nhất</p>
            <Link to="#" className="icon-link"> <FaFacebookF/></Link>
            <Link to="#" className="icon-link"> <FaTwitter /></Link>
            <Link to="#" className="icon-link"> <FaYoutube /></Link>
            <Link to="#" className="icon-link"><FaInstagram/></Link>
          </div>
        </div>
      </div>
    </footer>
  )
    
}

export default Footer;