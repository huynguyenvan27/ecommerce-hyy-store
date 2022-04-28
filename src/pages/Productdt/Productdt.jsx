import ProductdtInfo from "./ProductdtInfo";
// import { selectProductById } from "../../store/slices/product.slice";
import { useDispatch} from "react-redux";
import { myContext  } from "../../App";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../services/product.service";
import { add,addOption } from "../../store/slices/cart.slice";
import Slider from "react-slick"
import './productdt.css'
import { useState ,useCallback,useContext} from "react";


const Productdt = () =>{

  const {open} = useContext(myContext);
  const {setOpen} = useContext(myContext);
  const {size,setSize} = useContext(myContext);

  const dispatch = useDispatch()
  const { id } = useParams();
  const { isFetching, data } = useGetProductByIdQuery({ id });

  const handleSize = useCallback((e) => setSize(e))
  console.log(size);
  
  const handleAddToCart = (id) =>{
    if(size != null) {
      dispatch(addOption({id:id,size:size}))
      setOpen(true)
    }else{
      toast.warn(`
      Chọn Size trước khi thêm vào giỏ hàng`,{
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    }
  }
  const [nav1,setNav1] = useState ()
  const [nav2,setNav2] = useState ()

  if (isFetching) return <p>Đang lấy thông tin sản phẩm có id {id}</p>;


  return (
    <div id="product-details">
      <div className="container">
        <div className="row" id="product-details__inner">
          <div className="col-lg-7 col-md-12">
            <Slider 
              asNavFor={nav2}
              ref={c=>setNav1(c)}
            >
              {data.imgLg.map(src=>{
                return(
                <div key={src}>
                  <img src={src} alt="" />
                </div>)
              })}
            </Slider>
            <Slider 
                   asNavFor={nav1}
                   ref={c => setNav2(c)}
                   slidesToShow={6}
                   swipeToSlide={true}
                   focusOnSelect={true}
            >
              {data.imgDetail.map(src=>{
                return(
                <div key={src}>
                  <img src={src} alt="" />
                </div>)
              })}
            </Slider>
          </div>
          <div className="col-lg-5 col-md-12">
            <ProductdtInfo  
              product={data}
              handleAddToCart = {handleAddToCart}
              handleSize = {handleSize}
            />
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Productdt;