import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Newsletter from "./Newsletter/Newsletter";
import { Provider } from "react-redux";
import store from "../store/store";
import Seperate from "./Breadcrumbs/Breadcrumbs";



const Layout = (props) => {
  // const [open,setOpen] = useState(false);

  return(
    
    <Provider  store = {store}>
        
        <Header/>
        <Seperate />
        <Outlet />
        <Newsletter/>
        <Footer/>
        
  
    </Provider>

  )
}

export default Layout;