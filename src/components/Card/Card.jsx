import { Link } from "react-router-dom"
import './card.css'
const Card = ({product}) =>{
  let formatter = new Intl.NumberFormat("en-US", {
    currency: "VND",
  });
  return(
    <div className="col col-lg-2 col-md-4 col-sm-6 col-6">
    <div className="product-card">
      <div className="product-card__inner position-relative">
        <span className="number-sale">
          { product.discount!= 0 ? `-${product.discount*100}%` : ""}
        </span>
        <Link to = {`product/${product.id}`} className="product-link"> 
          <img src={product.img} alt={product.name} title={product.name}/>
        </Link>
        <div className="text-center quick-action">
          <button className="add-to-cart">
          <span className="icon-title">Thêm vào giỏ hàng</span>
            <i className="bi bi-bag"></i>
          </button>
          <button className="favourite">
            <span className="icon-title">Thêm vào yêu thích</span>
            <i className="bi bi-suit-heart"></i>
          </button>
          <button className="quick-review">
            <span className="icon-title">Xem nhanh</span>
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
      <Link to = {`product/${product.id}`} className="product-info">
        <h1 className="name-tag" title={product.name}>{product.name}</h1>
      </Link>
      <div className="sneaker-price">
        {product.discount!=0?
          ( 
          <>
          <span className="price-current">{formatter.format(parseInt(product.price - product.price*product.discount))}đ</span>
          <span className="price-old">{formatter.format(product.price)}đ</span>
          </>
          )
        :
          <span className="price-current">{formatter.format(product.price)}đ</span>
        }
      </div>
    </div>
  </div>  
  )
}
export default Card;