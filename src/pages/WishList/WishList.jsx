import { Link } from "react-router-dom"
// import './cart.css'
import { selectAddWishList } from "../../store/slices/cart.slice"
import { useSelector } from "react-redux"
const WishList = () => {
  const list = useSelector(selectAddWishList)
  console.log(list);
  let formatter = new Intl.NumberFormat("en-US", {
    currency: "VND",
  });
    return (
        <div id="cart">
        <div className="container">
          <div className="mt-5">
            <h1 className="heading-1 text-center">Sản phẩm yêu thích</h1>
          </div>
          <div>
          <table style={{width:"100%"}}>
          <thead>
                <tr>
                    <th className="text-center"></th>
                    <th className="text-center">Số Lượng</th>
                    <th className="text-center">Ảnh</th>
                    <th className="text-center">Tên</th>
                    <th className="text-center">Đơn Giá</th>
                    <th className="text-center"></th>
                </tr>
          </thead>
          <tbody className="list-cart-item-final">
                {list.map((item,id)=>{
                    return(
                    <tr key={item.id}>
                        <td>
                            <button className="btn-remove btn" onClick={()=>handleRemove(item.id)}><i className="bi bi-trash"></i></button>
                        </td>
                        <td className="text-center"  style={{fontSize:"1.3rem"}}>{id+1}</td>
                        <td className="text-center">
                            <Link to={`/product/${item.id}`} className="product-img">
                                <img src={item.img} alt={item.name} />
                            </Link>
                        </td>
                        <td className="text-center">
                          <Link to={`/product/${item.id}`} className="product-name">{item.name} </Link>
                        </td>
                        <td data="Tạm tính:" className="text-center">
                            <label className="product-price color--red">{formatter.format(item.price)}đ</label>
                        </td>
                        <td className="text-center">
                          <button className="btn btn--primary" style={{fontSize:"1.5rem"}}>Thêm vào giỏ hàng</button>
                        </td>

                    </tr>)
                })}
            </tbody>
          </table>
            <div className="d-flex justify-content-between mt-5">
              <Link to = "/sneaker" className="btn--white">Tiếp tục mua hàng</Link>
              <Link to = "/checkout" className="btn--primary ms-3" id="btn-checkout"> Tiến hành thanh toán</Link>
            </div>
          </div>
        </div>
    
      </div>

    )
}

export default WishList;