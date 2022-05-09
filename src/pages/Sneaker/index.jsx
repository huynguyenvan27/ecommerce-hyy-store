
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import ListProduct from "./ListProduct";
import Category from "../../components/Category/Category";
import { useSelector,useDispatch} from "react-redux";
import { selectAllProducts } from "../../store/slices/product.slice";
import { ToastContainer } from "react-toastify";
import Slide from "react-reveal/Slide"
import {reset,filterBrand, removeBrand,sortAsc,sortDes,loadData,sortAz,sortZa } from "../../store/slices/filter.slice";
import Search from "./Search";
import {selectSort,selecfilterBrand,selectBrand,selectfilterSize ,selectMultipleFilter,selectSize,selectSearch,selectString} from "../../store/slices/filter.slice";
import { useLocation } from "react-router-dom";

const Sneaker = () =>{
  const listBrand = useSelector(selectBrand)
  const dispatch = useDispatch()
  const products = useSelector(selectAllProducts)
  const listProductByBrand = useSelector(selecfilterBrand)
  const listProductBySize = useSelector(selectfilterSize)
  const filter = useSelector(selectMultipleFilter)
  const listSize = useSelector(selectSize)
  const listProductBySearch = useSelector(selectSearch)
  const sort = useSelector(selectSort)
  const search = useSelector(selectString)

  // reset state
  const {location} = useLocation()
  useEffect(()=>{
    dispatch(reset())
  },[location])

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

  // xử lý lọc brand
  const handleFilterBrand = (e) =>{
    if(e.target.checked){
      dispatch(filterBrand(e.target.name))
      setBrand({...brand,[e.target.name] : true})
    }else{

      dispatch(removeBrand(e.target.name)) 
      setBrand({...brand,[e.target.name] : false})
    }
  }


  // Lọc data
  const  data = () => {
    if(search){
      return listProductBySearch
    }else if(listProductByBrand.length>0 && listSize.length == 0){
      return listProductByBrand
    }else if(listProductBySize.length>0 && listProductByBrand.length == 0){
      return listProductBySize
    }else {
      return filter
    }
  };
  const result = data() 
 
  const items = [...products]
  const [value,setValue] = useState(null)
  const handleSort = (e) => {
    setValue(e.target.value)
      if(e.target.value == 1 ){
        dispatch(sortAsc(items))
      }else if(e.target.value == 2){
        dispatch(sortDes(items))
      }else if(e.target.value == 3){
        dispatch(sortAz(items))
      }else if(e.target.value == 4) {
        dispatch(sortZa(items))
      }else{
        dispatch(loadData(items))
      }
    }
    const final = sort.length > 0 ? sort : products
  return(
        <div id="list-product">
        <div className="container-fuild">
          <div className="row"> 
          <button class="btn side-filter">BỘ LỌC SẢN PHẨM</button>
          <div className="col col-lg-3 col-md-12 col-sm-12 col-12" id="filter-product">
            <Slide
              left
              Cascade = {true}
              >
              <Search/>
              <Category list = {brandList} brand={brand} handleFilterBrand={handleFilterBrand} />
            </Slide>
          </div>
          <div class="col col-lg-9 col-md-12 col-sm-12 col-12">
            {
              data().length == 0 && (listSize.length >0 || listBrand.length >0) ? 
              <h1>Không có sản phẩm nào hiển thị</h1> 
              :<>
             <ListProduct products={(result.length>0? result : final)} handleSort={handleSort} value={value}/>
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
            <Pagination/>
            </>
            }
          </div>

        </div>
        </div>
        </div>
  
  )
}


export default Sneaker;
