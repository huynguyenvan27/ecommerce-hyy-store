import { Link } from "react-router-dom";
import { useState } from "react";
import QtyBtn from "../../components/QtyBtn/QtyBtn";
import { useSelector ,useDispatch } from "react-redux";
import { selectTotalBill, selectNumberSale , selectAllCartItems, remove ,increase,decrease,addSale } from "../../store/slices/cart.slice"
import './cart.css'
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { formatter } from "../../../util";
const TableCart = () => {
    const dispatch = useDispatch();

    const cart = useSelector(selectAllCartItems)
    const numberSale = useSelector(selectNumberSale)
    const totalBill = useSelector(selectTotalBill)


    const handleIncrease = ({id:id,size:size}) => {
      dispatch(increase({id:id,size:size}));
    };

    const handleRemove = (id) =>{
        alert("Bạn có muốn xóa sản phẩm?")
      dispatch(remove(id))
    }
    
    const handleDecrease = ({id:id,size:size}) => {
      dispatch(decrease({id:id,size:size}));
    };

    const [code,setCode] = useState(0)
    const handleCode = (e) => {
      setCode(e.target.value)
    }

    const handleSubmitCode = () =>{
        if(code == 'HELLO'){
            dispatch(addSale(0.05))
            toast.success(`Áp dụng mã thành công`,{
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return
        }
        dispatch(addSale(0))
    }


    return (
        <>
        {cart.length==0 ? 
        <div className="d-flex justify-content-center flex-column">  
        <div className="d-flex justify-content-center">
            <img src="/image/empty_cart-512.webp" className="empty-cart"/>
        </div>
            <h4 className="text-center mt-4">Không có sản phẩm nào trong giỏ hàng !!!</h4> 
        </div>
        :
        <>
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
                            <label className="product-price color--red">{formatter.format(item.quantity*item.product.price)} đ</label>
                        </td>
                        <td>
                            <button className="btn-remove btn" onClick={()=>handleRemove(item.product.id)}><i className="bi bi-trash"></i></button>
                        </td>
                    </tr>)
                })}
            </tbody>
        </table>
        <div className="row">
        <div className="col-lg-8 col-sm-6">
            <div className="check-code d-flex align-items-center">
                <input type="text" id="code-input" placeholder="Mã giảm giá:" onChange={(e) => handleCode(e)}/>
                <input type="submit" className="btn--primary" value="ÁP DỤNG" onClick={handleSubmitCode}/>
            </div>
            
        </div>
        <div className="col-lg-4 col-sm-6">
            <div className="bill-block">
                <p className="d-flex justify-content-between text">Tạm tính : <span className="color--red">{formatter.format(totalBill)} đ</span></p>
                <p className="d-flex justify-content-between text">Sale :  <span className="color--red">- {formatter.format(totalBill*numberSale)} đ</span></p>
                <p className="d-flex justify-content-between text">Tổng cộng : <span className="color--red">{formatter.format(totalBill-totalBill*numberSale)} đ</span></p>
            </div>
            <ToastContainer style={{fontSize : "1.6rem"}}/>
        </div>
        </div>
        </>
        }

        </>
    )
}
export default TableCart;