import { Link } from "react-router-dom";
import QtyBtn from "../../components/QtyBtn/QtyBtn";
import { useSelector ,useDispatch } from "react-redux";
import { selectTotalBill , selectAllCartItems, remove ,increase,decrease } from "../../store/slices/cart.slice"
import './cart.css'
const TableCart = () => {
    const dispatch = useDispatch();

    const cart = useSelector(selectAllCartItems)

    const totalBill = useSelector(selectTotalBill)
    // console.log(cart);

    let formatter = new Intl.NumberFormat("en-US", {
        currency: "VND",
      });

    const handleIncrease = ({id:id,size:size}) => {
      dispatch(increase({id:id,size:size}));
    };

    const handleRemove = (id) =>{
      dispatch(remove(id))
    }
    
    const handleDecrease = ({id:id,size:size}) => {
      dispatch(decrease({id:id,size:size}));
    };
    return (
        <>
        {cart.length==0 ? <h2 className="text-center">Không có sản phẩm nào trong giỏ hàng</h2> :
        <table id="cart-bill" style={{width:"100%"}}>
            <thead>
                <tr>
                    <th>Sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Tạm tính</th>
                    <th></th>   
                </tr>
            </thead>
            <tbody className="list-cart-item-final">
                {cart.map(item=>{
                    return(
                    <tr key={item.product.id}>
                        <td className="d-flex align-items-center">
                            <Link to={`/product/${item.product.id}`} className="product-img">
                                <img src={item.product.img} alt={item.product.name} />
                            </Link>
                            <div className="d-flex flex-column ms-3">
                                <Link to={`/product/${item.product.id}`} className="product-name">{item.product.name} </Link>
                                <label className="product-details">Giá:{item.product.price}</label>
                                <form>
                                    <label className="product-details" htmlFor="size-final">Size:</label>
                                    <span name="size" id="size-final">
                                         {item.size}
                                    </span>
                                </form>
                            </div>
                        </td>
                        <td data="Số lượng:">
                            <QtyBtn handleDecrease={handleDecrease}
                                handleIncrease={handleIncrease}
                                quantity={item.quantity}
                                product={item.product}
                                size={item.size}
                            />
                        </td>
                        <td data="Tạm tính:">
                            <label className="product-price color--red">{formatter.format(item.quantity*item.product.price)}đ</label>
                        </td>
                        <td>
                            <button className="btn-remove btn" onClick={()=>handleRemove(item.product.id)}><i className="bi bi-trash"></i></button>
                        </td>
                    </tr>)
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td className="d-flex align-items-center">
                        <input type="text" id="code-input" placeholder="Mã giảm giá:" />
                        <input type="submit" className="btn--primary" value="ÁP DỤNG" />
                    </td>
                    <th colSpan="100%" className="text-center">
                        <label className="">Tổng cộng:</label>
                        <label className="total-value color--red">{formatter.format(totalBill)}</label>
                    </th>
                </tr>
            </tfoot>
        </table>}
        </>
    )
}
export default TableCart;