import { Link,NavLink } from "react-router-dom"
import {react , useCallback ,useEffect, useContext,useState} from 'react'
import { myContext } from "../../App"
import SideNav from "../Sidenav/SideNav"
import Overlay from "../Overlay/Overlay"
import NavMobi from "../NavMobi/NavMobi"
import FormLogin from "../FromLogin/FormLogin"
import './header.css'
import { useSelector } from "react-redux"
import { selectUser } from "../../store/slices/user.slice"
const Header = () => {
  const {open} = useContext(myContext);
  const {setOpen} = useContext(myContext);
  const btnToogle = useCallback(() =>{
    setOpen(!open)
  })

  const [menu,setMenu] = useState(false)
  const btnToogleMenu = () => {
    setMenu(!menu)
  }

  // handle FormLogin

  const [modal,setModal] = useState(false)
  const handleModal = () => {
    setModal(!modal)
    setMenu(false)
    setOpen(false)
  }

  

  // srcoll to top
  const [hide,setHide]= useState(false)
  const [lastScrollY,setLastScrollY] = useState(0)
  const controllScroll = ()  =>{
    if(window !== undefined){
      if(window.scrollY > lastScrollY && window.scrollY > lastScrollY){
        setHide(true); 
      }else{
        setHide(false); 
      }
      setLastScrollY(window.scrollY); 
    }
  }
  useEffect(()=>{
    if(window !== undefined){
      window.addEventListener("scroll",controllScroll)
    }
    // hàm cleanup
    return () => {
      window.removeEventListener('scroll', controllScroll);
    };

  },[lastScrollY])


  const user = useSelector(selectUser)

  return(
    <>
    <div id="header" className={hide? "header hide" : "header show"  }>
      <div className='topbar'>
        <p className='text-center'>TẠO TÀI KHOẢN, DÙNG CODE 'HELLO' GIẢM 5% CHO ĐƠN HÀNG ĐẦU TIÊN</p>
      </div>
      <header id="header-site"> 
        <div className="container d-flex justify-content-between align-items-center">
          <button className="btn nav-icon" onClick={btnToogleMenu}>
            <img src="/image/nav-mobile.svg" />
          </button>
          <Link id="logo" to="/">
            <img src='/image/logo.png' alt="logo" />
          </Link>  
          <nav className="header-nav">
            <NavLink to="/" className="underline-css active-page">Trang chủ</NavLink>
            <NavLink to="/sneaker" className="underline-css">Sneaker</NavLink>
            <NavLink to="/blog" className="underline-css">Tin tức</NavLink>
            <NavLink to="/about-us" className="underline-css">Giới thiệu</NavLink>
            <NavLink to="/contact" className="underline-css">Liên hệ</NavLink>
          </nav>
          <div className="header-icon">
            <button className="btn">
              <img src="/image/search.svg" alt=""/>
            </button>
            <Link to="/wishlist">
            <button className="btn">
                <img src="/image/heart.svg" alt=""/>
            </button>
            </Link>
            {localStorage.getItem("token")? 
              <Link to = "/users">
                <button className="btn" id="userLogin" >
                  <img src="/image/user.svg" alt=""/>
                </button>
              </Link> :
              <button className="btn" id="userLogin" onClick={handleModal}>
                <img src="/image/user.svg" alt=""/>
              </button>
            }
            <button className="btn" onClick={btnToogle}>
              <img src="/image/bag.svg" alt=""/>
            </button>
          </div>
        </div>
      </header>
    </div>
      <NavMobi menu={menu} btnToogleMenu={btnToogleMenu} handleModal={handleModal}/>
      <SideNav 
        state={open}
        btnToogle={btnToogle}
       />
       <FormLogin modal={modal} handleModal={handleModal}/>
       <Overlay state={open} btnToogle={btnToogle}/>
       <Overlay state={menu} btnToogle={btnToogleMenu}/>
    </>
  )
}

export default Header;