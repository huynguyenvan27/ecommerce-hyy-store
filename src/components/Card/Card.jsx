import { Link } from "react-router-dom"
import './card.css'
import React, { useState,useContext } from "react";
import {  addOption,addWishList,review } from "../../store/slices/cart.slice";
import { useDispatch } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Content from "../Modal/Content";
import {myContext } from '../../App';
import { selectAllProducts } from "../../store/slices/product.slice";
import { useSelector } from "react-redux";
import { selectAddWishList , selectView} from "../../store/slices/cart.slice";
import { formatter } from "../../../util";


const Card = ({product}) =>{

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      zIndex: "4",
      transform: 'translate(-50%, -50%)',
    },
  };
  const {open} = useContext(myContext);
  const {setOpen} = useContext(myContext);


  const {size,setSize} = useContext(myContext)

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
  }

  const WishList = useSelector(selectAddWishList)
  const View = useSelector(selectView)
  const products = useSelector(selectAllProducts)
  const dispath = useDispatch()
  const handleAddToCart = (id) => {
    if(size != null) {
      dispath(addOption({id:id,size:size}))
      setOpen(true)
      closeModal()
      setSize(null)
    }else{
      toast.warn(`
      Chọn Size trước khi thêm vào giỏ hàng`,{
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    }
  }

  const handleAddToWishList = (id) => {dispath(addWishList(id));
    toast.success(`
    ${product.name}
    Đã thêm sản phẩm vào yêu thích`,{
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  });
    }

  const handleQuickReview = (id) =>{
    dispath(review(id))
    openModal()
  }
  

  const handleAddToCartQuick = (id) => {
      dispath(addOption({id:id,size:"42"}));
      toast.success(`
    ${product.name}
    Đã thêm sản phẩm vào giỏ hàng`,{
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  });
  }

  return(
    <>
    <Content productdt={View}
      isOpen={modalIsOpen}
      closeModal={closeModal}
      onRequestClose={closeModal}
      style={customStyles}
      handleAddToCart={handleAddToCart}
      handleAddToWishList={handleAddToWishList}
      handleQuickReview={handleQuickReview}
    />
    <div className="product-card">
      <div className="product-card__inner position-relative">
        <span className="number-sale">
          { product.discount!= 0 ? `-${product.discount*100}%` : ""}
        </span>
        <Link to = {`/sneaker/${product.id}`} className="product-link"> 
          <img src={product.img} alt={product.name} title={product.name}/>
        </Link>
        <div className="text-center quick-action">
          <button className="add-to-cart" onClick={()=> handleAddToCartQuick (product.id)}>
          <span className="icon-title">Thêm vào giỏ hàng</span>
            <i className="bi bi-bag"></i>
          </button>
          <button className="favourite" onClick={() => handleAddToWishList(product.id)}>
            <span className="icon-title" >Thêm vào yêu thích</span>
            <i className="bi bi-suit-heart"></i>
          </button>
          <button className="quick-review" onClick={()=>handleQuickReview(product.id)}>
            <span className="icon-title">Xem nhanh</span>
            <i className="bi bi-search"></i>
          </button>

        </div>
      </div>
      <Link to = {`/sneaker/${product.id}`} className="product-info">
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
    </>
  )
}
export default Card;