import { Link } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { selectTotalBill,selectAllCartItems,selectCount,remove} from "../../store/slices/cart.slice";
import SideNavItem from "./SideNavItem";
import "./sidenav.css"

const SideNav = ({state,btnToogle}) =>{

  const cart = useSelector(selectAllCartItems)
  const totalBill = useSelector(selectTotalBill)
  const totalNumber = useSelector(selectCount)
  const dispatch = useDispatch()
  const handleRemove = (id) => {dispatch(remove(id))}
  let formatter = new Intl.NumberFormat("en-US", {
    currency: "VND",
  });
    return (
        <div className={state ? 'sidenav open' : 'sidenav'} id="mini-cart">
        <button className="closebtn btn" onClick={btnToogle}>&times;</button>
        <div className="mini-cart__inner">
            { cart.length == 0 ? <h1>Hiện tại không có sản phẩm nào trong giỏ hàng</h1> :
              <>
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