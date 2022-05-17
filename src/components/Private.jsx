import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import { selectUser } from "../store/slices/user.slice";
import { useNavigate } from "react-router-dom";
import Unauthorized from "./Unauthorized";
import Home from "../pages/Home";

const Private = ({ children }) => {
    const navigate = useNavigate()
    const user = useSelector(selectUser);
    if (!user) {
        return
    } else {
        return (
            <>
                {children}
                <Outlet />
            </>
        );
    }
};

export default Private;
