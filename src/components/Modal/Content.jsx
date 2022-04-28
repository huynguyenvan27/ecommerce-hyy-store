import { useContext,useCallback } from 'react';
import { FaFacebookF,FaTwitter,FaYoutube,FaInstagram } from 'react-icons/fa';
import SizeList from '../../pages/Productdt/SizeList'
import { Link } from 'react-router-dom';
import './content.css'
import Modal from 'react-modal/lib/components/Modal';



const Content = ({productdt,handleAddToCart,handleWishList,handleSize, sizeList,isOpen,onRequestClose,closeModal,style}) =>{

  let formatter = new Intl.NumberFormat("en-US", {
    currency: "VND",
  });






  return(
    <Modal
    isOpen={isOpen}
    // onAfterOpen={onAfterOpen}
    onRequestClose={onRequestClose}
    style={style}
    overlayClassName="Overlay"
  >
  <div className="popup">
  <div className="popup-close">
  <button className="btn" onClick={closeModal}><i className="bi bi-x-square-fill"></i></button>
</div>
<div className="popup-content my-3">
    {productdt.map(item => {
      return(
        <div className="row">
          <div className="col-7">
            <img src={item.img} alt="" />
          </div>
          <div className="col-5">
            <div className="sneaker-info ms-3">
              <div className="ranked-vote">
                <span><i className="bi bi-star-fill"></i></span>
                <span><i className="bi bi-star-fill"></i></span>
                <span><i className="bi bi-star-fill"></i></span>
                <span><i className="bi bi-star-fill"></i></span>
                <span><i className="bi bi-star-fill"></i></span>
              </div>
              <h1 className="sneaker-name">{item.name}</h1>
              {item.discount !=0 ?
              <span className="text-16 sale">Sale : {item.discount*100} %</span>
              :""
              }
              <div className="sneaker-price mt-3">
          <span className="price-current">{formatter.format(parseInt(item.price - item.price*item.discount))}đ</span>
          <span className="price-old">{formatter.format(item.price)}đ</span></div>
              <div className="text mt-3">Thương hiệu : ADIDAS</div>
              <div className="sneaker-size__list d-flex flex-wrap mt-3">
                <SizeList handleSize={handleSize} sizeList={sizeList} />
              </div>
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <button className="btn--primary mt-5" onClick={()=>handleAddToCart(item.id)}>
                  <i className="bi bi-bag"></i>
                  Thêm vào giỏ hàng
                </button>
              </div>
              <div className="sneaker-favourite mt-5">
                <button className="btn btn-light favourite btn-outline-danger" onClick={()=>{handleWishList(item.id)}}>
                  <i className="bi bi-heart"></i>
                  <span className="like">Thêm vào yêu thích</span>
                  <span className="liked">Đã thêm vào yêu thích</span>
                </button>
              </div>

            </div>
          </div>
        </div>
    )})}
</div>
<div className="popup-footer">
  <div className="mt-3">
    <span className="text align-middle">Chia sẻ:</span>
    <Link to="#" className="icon-link"> <FaFacebookF/></Link>
    <Link to="#" className="icon-link"> <FaTwitter /></Link>
    <Link to="#" className="icon-link"> <FaYoutube /></Link>
    <Link to="#" className="icon-link"><FaInstagram/></Link>
  </div>
</div>


</div>
</Modal>
)
};

export default Content;