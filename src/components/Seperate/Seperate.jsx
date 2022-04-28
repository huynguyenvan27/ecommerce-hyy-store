import { Link } from "react-router-dom"
import './seperate.css'
const Seperate = () => {

    return (
        <div id="seperate" className="position-relative">
            <div className="seperate-block position-absolute">
                <h1 className=" text-center  main-name">Hyy Store</h1>
                <div className=" text-center  category-name">
                    <Link to ="/">Trang chủ</Link>
                    <span >/</span>
                    <span>Giới thiệu</span>
                </div>
            </div>
        </div>
    )
}
export default Seperate;