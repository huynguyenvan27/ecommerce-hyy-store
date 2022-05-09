import { Outlet } from "react-router-dom"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import store from "../store/store"
import { Provider } from "react-redux"
const Layout1 = () => {
  return(
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )

}

export default Layout1;