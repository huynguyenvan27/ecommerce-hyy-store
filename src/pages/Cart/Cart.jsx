import { Link } from "react-router-dom"
import TableCart from "./TableCart"
import './cart.css'
import { useSelector } from "react-redux"
import { selectCount } from "../../store/slices/cart.slice"
const Cart = () => {

    const count = useSelector(selectCount)

    return (
        <div id="cart">
        <div className="container">
          <div className="mt-5">
            <h1 className="heading-1 text-center">Giỏ hàng của bạn</h1>
          </div>
          <div>
            <TableCart />
            <div className="d-flex justify-content-center mt-5">
              <Link to = "/sneaker" className="btn--white">Tiếp tục mua hàng</Link>
              <Link to = "/checkout" className={count == 0 ? "btn--primary ms-3 d-none" :"btn--primary ms-3"} id="btn-checkout"> Tiến hành thanh toán</Link>
            </div>
          </div>
        </div>
    
      </div>

    )
}

export default Cart;