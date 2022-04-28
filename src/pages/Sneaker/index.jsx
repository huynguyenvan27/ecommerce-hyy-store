
import { useCallback, useState } from "react";
import ListProduct from "./ListProduct";
import Category from "../../components/Category/Category";
import { useSelector,useDispatch} from "react-redux";
import { selectAllProducts } from "../../store/slices/product.slice";
import { ToastContainer } from "react-toastify";
import Slide from "react-reveal/Slide"
import { filterBrand, removeBrand,loadData,filterSize } from "../../store/slices/filter.slice";
import Search from "./Search";
import { selecfilterBrand,selectBrand , selectData ,selectfilterSize} from "../../store/slices/filter.slice";
import { selectProductById } from '../../store/slices/product.slice';
const Sneaker = () =>{
  const listBrand = useSelector(selectBrand)
  // console.log(listBrand);
  const dispatch = useDispatch()
  const products = useSelector(selectAllProducts)
  
  const listProduct = useSelector(selecfilterBrand)
  const listSize = useSelector(selectfilterSize)
  
  // dispatch(loadData(products))
  const data = [...listProduct,...listSize]


  // console.log(data);
  // const all = [];
  // if(listSize.length>0){
  //   all = listProduct.filter(item => !listSize.includes(item) )
  // }else{
  //   all.length = 0
  // } 

  //   console.log(all)


  const [kt,setKt] = useState (null)
  const handleSize = (e) => {
    setKt(e)
    dispatch(filterSize(kt))
  }

  // console.log(listSize);



  let brandList = []
  if(products){
    products.forEach(e => {
      if(brandList.includes(e.brand.toLowerCase())){
        return
      }else{
        brandList.push(e.brand.toLowerCase())
      }
    });
  }

  const [brand,setBrand] = useState ({})

  const handleFilterBrand = (e) =>{
    if(e.target.checked){
      setBrand({...brand,[e.target.name] : true})
      dispatch(filterBrand(e.target.name))
    }else{

      dispatch(removeBrand(e.target.name)) 
      setBrand({...brand,[e.target.name] : false})
    }
  }

  const handleSort = () =>{
    
  }

  return(

        <div id="list-product">
        <div className="container-fuild">
          <div className="row"> 
          <div className="col col-lg-3 col-md-12 col-sm-12 col-12" id="filter-product">

            <Slide
              left
              Cascade = {true}
              >
              <Search/>
              <Category list = {brandList} brand={brand} handleFilterBrand={handleFilterBrand} handleSize={handleSize} />
            </Slide>
          </div>
          <div class="col col-lg-9 col-md-12 col-sm-12 col-12">
            
            <ListProduct products={listProduct.length >0 ? listProduct : products} handleSort={handleSort} />
            <ToastContainer 
              position="bottom-right"
              autoClose={3000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover={false}
              style={{ fontSize: "1.5rem" }} 
            />
          </div>

        </div>
        </div>
        </div>
  
  )
}


export default Sneaker;
