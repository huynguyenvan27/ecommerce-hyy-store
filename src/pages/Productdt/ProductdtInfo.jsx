
import QtyBtn from "../../components/QtyBtn/QtyBtn"
import SizeList from "../../components/SizeList"
import StarRatings from "react-star-ratings/build/star-ratings"
const ProductdtInfo = ({product}) => {


  return(
    <div class="sneaker-info ms-lg-5 mt-md-4 mt-2 d-flex flex-column">
      <div class="ranked-vote">
        <span><i class="bi bi-star-fill"></i></span>
        <span><i class="bi bi-star-fill"></i></span>
        <span><i class="bi bi-star-fill"></i></span>
        <span><i class="bi bi-star-fill"></i></span>
        <span><i class="bi bi-star-fill"></i></span>
      </div>
      <h1 class="sneaker-name">{product.name}</h1>
      <div class="sneaker-price">
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
      <div class="sneaker-size__list d-flex flex-wrap mt-5">
        <SizeList />
      </div>
      <div class="d-flex align-items-center mt-5">
        <QtyBtn />
        <button class="btn--primary ms-5" id="btnAddCart">
          <i class="bi bi-bag"></i>
          Thêm vào giỏ hàng
        </button>
      </div>
      <div class="sneaker-favourite mt-5">
        <button class="btn btn-light favourite btn-outline-danger">
          <i class="bi bi-heart"></i>
          <span class="like">Thêm vào yêu thích</span>
          <span class="liked">Đã thêm vào yêu thích</span>
        </button>
      </div>
      <div class="sneaker-size-guide mt-5">
        <a href="" class="btn-link btn">
          Hướng dẫn chọn size
        </a>
      </div>
      <div class="mt-5">
        <span class="text align-middle">Chia sẻ:</span>
        <a href="" class="icon-link facebook"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="" class="icon-link twitter"><i class="fa-brands fa-twitter"></i></a>
        <a href="" class="icon-link youtube"><i class="fa-brands fa-youtube"></i></a>
        <a href="" class="icon-link pinterest"><i class="fa-brands fa-pinterest"></i></a>
      </div>
    </div>
  )

}