
import SizeList from './SizeList'
import StarRatings from "react-star-ratings/build/star-ratings"
import { FaFacebookF,FaTwitter,FaYoutube,FaInstagram } from 'react-icons/fa';
import { Link } from "react-router-dom";

const ProductdtInfo = ({product,handleAddToCart,handleWishList,handleSize}) => {
  
  let formatter = new Intl.NumberFormat("en-US", {
    currency: "VND",
  });

  return(
    <div className="sneaker-info ms-lg-5 mt-md-4 mt-2 d-flex flex-column">
      <div className="ranked-vote">
        <span><i className="bi bi-star-fill"></i></span>
        <span><i className="bi bi-star-fill"></i></span>
        <span><i className="bi bi-star-fill"></i></span>
        <span><i className="bi bi-star-fill"></i></span>
        <span><i className="bi bi-star-fill"></i></span>
      </div>
      <h1 className="sneaker-name">{product.name}</h1>
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
      <div className="sneaker-size__list d-flex flex-wrap mt-5">
        <SizeList sizeList={product.list_size}/>
      </div>
      <div className="d-flex align-items-center mt-5">
        <button className="btn--primary" onClick={()=>handleAddToCart(product.id)}>
          <i className="bi bi-bag"></i>
          Thêm vào giỏ hàng
        </button>
      </div>
      <div className="sneaker-favourite mt-5">
        <button className="btn btn-light favourite btn-outline-danger" onClick={()=>handleWishList(product.id)}>
          <i className="bi bi-heart"></i>
          <span className="like">Thêm vào yêu thích</span>
          <span className="liked">Đã thêm vào yêu thích</span>
        </button>
      </div>
      <div className="sneaker-size-guide mt-5">
        <a href="" className="btn-link btn">
          Hướng dẫn chọn size
        </a>
      </div>
      <div className="mt-5">
        <span className="text align-middle">Chia sẻ:</span>
        <Link to="#" className="icon-link"> <FaFacebookF/></Link>
        <Link to="#" className="icon-link"> <FaTwitter /></Link>
        <Link to="#" className="icon-link"> <FaYoutube /></Link>
        <Link to="#" className="icon-link"><FaInstagram/></Link>
      </div>
    </div>
  )

}

export default ProductdtInfo;