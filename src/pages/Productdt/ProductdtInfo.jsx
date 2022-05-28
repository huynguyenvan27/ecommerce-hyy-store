
import SizeList from './SizeList'
import { FaFacebookF,FaTwitter,FaYoutube,FaInstagram } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { formatter } from '../../../util';
const ProductdtInfo = ({product,handleAddToCart,handleWishList}) => {
  
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
      <p className='text-16'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
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