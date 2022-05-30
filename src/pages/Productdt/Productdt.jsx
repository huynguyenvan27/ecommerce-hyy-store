import ProductdtInfo from "./ProductdtInfo";
import { useDispatch} from "react-redux";
import Fade from 'react-reveal/Fade';
import { myContext  } from "../../App";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../services/product.service";
import { addOption ,addWishList} from "../../store/slices/cart.slice";
import Slider from "react-slick"
import './productdt.css'
import { useState ,useCallback,useContext} from "react";
import Loading from "../../components/Loading/Loading";

const Productdt = () =>{

  // const {open} = useContext(myContext);
  const {setOpen} = useContext(myContext);
  const {size,setSize} = useContext(myContext);

  const dispatch = useDispatch()
  const { id } = useParams();
  const { isFetching, data } = useGetProductByIdQuery({ id });

  
  const handleAddToCart = (id) =>{
    if(size != null) {
      dispatch(addOption({id:id,size:size}))
      setOpen(true)
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

  const handleAddToWishList = (id) =>{
      dispatch(addWishList(id))
      toast.success(`
      Đã thêm sản phẩm vào yêu thích`,{
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }

  const [nav1,setNav1] = useState ()
  const [nav2,setNav2] = useState ()

  if (isFetching) return <Loading/>


  return (
    <div id="product-details">
      <div className="container">
        <Fade>
          <div className="row" id="product-details__inner">
            <div className="col-lg-6 col-md-12">
                <Slider 
                  asNavFor={nav2}
                  ref={c=>setNav1(c)
                  }
                  infinite= {true}
                  arrows={false}
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
                    slidesToShow={5}
                    infinite= {false}
                    slidesToScroll={1}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    arrows={false}
                    centerMode = {true}
                    centerPadding= {true}
                    >
                {data.imgDetail?.map(src=>{
                  return(
                    <div key={src} >
                    <img src={src} alt="" />
                  </div>)
                })}
              </Slider>
            </div>
            <div className="col-lg-6 col-md-12">
                <ProductdtInfo  
                  product={data}
                  handleAddToCart = {handleAddToCart}
                  handleWishList = {handleAddToWishList}
                  />
            </div>
          </div>
        </Fade>
      </div>
      <ToastContainer style={{fontSize : "1.6rem"}}/>
    </div>
  )
}

export default Productdt;