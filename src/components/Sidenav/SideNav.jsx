import { Link } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { selectTotalBill,selectAllCartItems,selectCount,remove} from "../../store/slices/cart.slice";
import SideNavItem from "./SideNavItem";
import "./sidenav.css"
import { formatter } from "../../../util";
const SideNav = ({state,btnToogle}) =>{

  const cart = useSelector(selectAllCartItems)
  const totalBill = useSelector(selectTotalBill)
  const totalNumber = useSelector(selectCount)
  const dispatch = useDispatch()
  const handleRemove = (id) => {dispatch(remove(id))}
    return (
        <div className={state ? 'sidenav open' : 'sidenav'} id="mini-cart">
        <button className="closebtn btn" onClick={btnToogle}>&times;</button>
        <div className="mini-cart__inner">
            { cart.length == 0 ?
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src="/image/empty_cart-512.webp" className="empty-cart"/>
              <h3 className="mt-4">Giỏ hàng trống !</h3>
              <button className="btn--primary mt-5" onClick={btnToogle}>Quay lại mua hàng</button>
            </div>

            :<>
                  <div classname="heading-cart text-center mb-4">
                        <h4 classname="text-center">Sản phẩm trong giỏ hàng:{totalNumber}</h4>
                      </div>
                      <div classname="d-flex flex-column mini-cart__item">
                        {cart.map(item=>{
                          return(
                            <SideNavItem 
                              key={item.product.id}
                              product={item.product}
                              quantity={item.quantity}
                              handleRemove={handleRemove}
                              size={item.size}
                              btnToogle={btnToogle}
                            />
                          )
                        })}
                      <div className="mini-cart__total text-center">
                        <span className="text">TỔNG TIỀN:</span>
                        <span className="text color--red">{formatter.format(totalBill)}đ</span>
                      </div>
                      </div>
              </>
            }
        </div>
        {
          cart.length == 0 ? "" :
          <div className="mini-cart__router">
            <Link to="/cart" className="btn--primary btn d-block mb-3 mt-5" onClick={btnToogle}>XEM GIỎ HÀNG</Link>
            <Link to="/checkout" className="btn--primary btn d-block"onClick={btnToogle}>TIẾN HÀNH THANH TOÁN</Link>
          </div>
        } 
      </div>
    )
}

export default SideNav;