import { Link, useLocation } from "react-router-dom"
import './Breadcrumbs.css'
const Seperate = () => {
    


    return (
        <div id="seperate" className="position-relative">
            <div className="seperate-block position-absolute">
                <h1 className=" text-center  main-name">Hyy Store</h1>
                <ul className=" text-center  category-name">
                    <Link to ="/">Trang chủ</Link>
                    <span >/</span>
                    <span>Giới thiệu</span>
                </ul>
            </div>
        </div>
    )
}
export default Seperate;