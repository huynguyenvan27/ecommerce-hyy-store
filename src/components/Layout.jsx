import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Provider } from "react-redux";
import store from "../store/store";

const Layout = (props) => {


  return(
    <Provider  store = {store}>
      <Header/>
      <Outlet />
      <Footer/>
    </Provider>
  )
}

export default Layout;