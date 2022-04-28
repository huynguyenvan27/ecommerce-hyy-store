import { Link } from "react-router-dom"
import TableCart from "./TableCart"
import './cart.css'
const Cart = () => {


    return (
        <div id="cart">
        <div className="container">
          <div className="mt-5">
            <h1 className="heading-1 text-center">Giỏ hàng của bạn</h1>
          </div>
          <div>
            <TableCart />
            <div className="d-flex justify-content-between mt-5">
              <Link to = "/sneaker" className="btn--white">Tiếp tục mua hàng</Link>
              <Link to = "/checkout" className="btn--primary ms-3" id="btn-checkout"> Tiến hành thanh toán</Link>
            </div>
          </div>
        </div>
    
      </div>

    )
}

export default Cart;