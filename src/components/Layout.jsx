import { Outlet } from "react-router-dom";
import Newsletter from "./Newsletter/Newsletter";
import { Provider } from "react-redux";
import store from "../store/store";
import Seperate from "./Breadcrumbs/Breadcrumbs";



const Layout = (props) => {
  return(
    
    <>
        <Seperate />
        <Outlet />
        <Newsletter/>
    </>
    

  )
}

export default Layout;