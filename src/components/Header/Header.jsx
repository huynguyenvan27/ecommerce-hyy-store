import { Link,NavLink } from "react-router-dom"
import './header.css'
const Header = () => {
  return(
    <div id="header">
      <div className='topbar'>
        <p className='text-center'>TẠO TÀI KHOẢN, DÙNG CODE 'HELLO' GIẢM 5% CHO ĐƠN HÀNG ĐẦU TIÊN</p>
      </div>
      <header id="header-site"> 
        <div className="container d-flex justify-content-between align-items-center">
          <Link id="logo" to="/">
            <img src='/image/logo.png' alt="logo" />
          </Link>  
          <nav className="header-nav">
            <NavLink to="/" className="underline-css active-page">Trang chủ</NavLink>
            <NavLink to="/sneaker" className="underline-css">Sneaker</NavLink>
            <NavLink to="/accessory" className="underline-css">Phụ kiện</NavLink>
            <NavLink to="/blog" className="underline-css">Tin tức</NavLink>
            <NavLink to="/about-us" className="underline-css">Giới thiệu</NavLink>
            <NavLink to="/contact" className="underline-css">Liên hệ</NavLink>
          </nav>
          <div className="header-icon">
            <button className="btn">
              <img src="/image/search.svg" alt=""/>
            </button>
            <button className="btn">
              <img src="/image/heart.svg" alt=""/>
            </button>
            <button className="btn" id="userLogin">
              <img src="/image/user.svg" alt=""/>
            </button>
            <button className="btn" >
              <img src="/image/bag.svg" alt=""/>
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;