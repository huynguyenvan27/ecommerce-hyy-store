
import { Link } from "react-router-dom";
import './navmobi.css'

const NavMobi = ({menu,btnToogleMenu,handleModal}) => {

  return(
    <div className={menu ? 'navMenu open' : 'navMenu'} id="nav-mobile">
      <nav className="d-flex flex-column" >
      <div className=" d-flex justify-content-between align-items-center">
        <h3>MENU</h3>
        <button  className="closebtn btn" onClick={btnToogleMenu}>&times;</button>
      </div>
      <Link to="/" className="nav-mobile__link" onClick={btnToogleMenu}>Trang chủ</Link>
      <Link to="/sneaker" className="nav-mobile__link" onClick={btnToogleMenu}>Sneaker </Link>
      <Link to="/blog" className="nav-mobile__link" onClick={btnToogleMenu}>Tin tức </Link>
      <Link to="/about-us" className="nav-mobile__link" onClick={btnToogleMenu}>Giới thiệu </Link>
      <Link to="/contact" className="nav-mobile__link" onClick={btnToogleMenu}>Liên hệ </Link>
      <Link to="/wishlist" className="nav-mobile__link" onClick={btnToogleMenu}>
        <span>Yêu thích</span>
      </Link>
      <button className="btn--primary mt-5 nav-mobile__link" onClick={handleModal}>
        <span>Đăng nhập</span>
        <i className="bi bi-person-fill"></i>
      </button>
      </nav>
    </div>
  )

}

export default NavMobi;