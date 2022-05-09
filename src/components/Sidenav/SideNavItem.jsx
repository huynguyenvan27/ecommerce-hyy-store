import { Link } from "react-router-dom"


const SideNavItem = ({product,quantity,handleRemove,size,btnToogle}) => {
  let formatter = new Intl.NumberFormat("en-US", {
    currency: "VND",
  });
  return (
    <div className="d-flex flex-column mini-cart__item" >
      <div className="d-flex justify-content-between align-items-start">
      <Link to={`sneaker/${product.id}`} onClick={btnToogle} className="product-img">
        <img src={product.img} alt={product.name}/>
      </Link>
      <div className="product-info d-flex flex-column">
        <Link to={`sneaker/${product.id}`} onClick={btnToogle} className="product-name text-12">{product.name}</Link>
        <span>
          <label>SL:</label>
          <label className="quantity">{quantity}</label>
        </span>
        <span>
          <label>Size:</label>
          <label className="quantity">{size}</label>
        </span>
        <span>
          <label>Tạm tính:</label>
          <label className="product-price color--red">{formatter.format(product.price)}đ</label>
        </span>
      </div>
      <button  className="btn-remove btn" onClick={()=>handleRemove(product.id)}><i className="bi bi-trash"></i></button>
      </div>
    </div>
  )
}
export default SideNavItem;