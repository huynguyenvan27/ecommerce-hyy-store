import CategoryItem from "./CategoryItem"
import "./category.css"
import Slider from "react-rangeslider"
import 'react-rangeslider/lib/index.css'
import { useState } from "react"
import CategorySize from "./CategorySize"
import { removeSize, selectBrand, selectSize } from "../../store/slices/filter.slice"
import { useSelector,useDispatch } from "react-redux"
import { removeBrand ,removeALlBrand} from "../../store/slices/filter.slice"
const Category = ({ list ,handleFilterBrand}) => {
  const [horizontal,setHorizontal] = useState(0)
  const  handleChangeHorizontal = value => {
    setHorizontal(value)
  };
  // let formatter = new Intl.NumberFormat("en-US", {
  //   currency: "VND",
  // });
  const htmlFormatprice = value => {
    if(value == 0){
      return "Mặc định"
    }
    else if(value<= 2 && value>0){
      return `Nhỏ hơn 2 triệu`
    }else if(value>2 &&value<=5 ){
      return "Từ 2 đến 5 triệu"
    }else if(value>5 && value<=8){
      return "Từ 5 đến 8 triệu"
    }else{
      return "Trên 8 triệu"
    }
  }

  // const dispatch = useDispatch()
  // const listBrand = useSelector(selectBrand)
  // const handleRemoveBrand = (item) =>{
  //   dispatch(removeBrand(item))
  // }
  return (
    <div className="filter-block">
    <div class="filter-product">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h1 class="category-title">LỌC</h1>
      {/* {listBrand.length >0 ?
        <button class="btn--primary" onClick={()=>dispatch(removeALlBrand())}>Bỏ lọc</button>
        : ""
      }
    </div>
    <div class="btn-add-block">
      {listBrand.length >0 ? listBrand.map(item=>{
        return (
          <button class="btn btn-outline-danger me-2" key={item} onClick={()=>handleRemoveBrand(item)}>
            <i class="bi bi-x-circle"></i>
            <label htmlFor="category-option__added">{item}</label>
          </button>
        )
      }):""
      } */}

      </div>
    </div>
    <div className="category-product">

      <div className="category-layout">
        <h1 className="category-title">Thương hiệu</h1>
        <ul className=" row">
          {list.map(brand => {
            return <CategoryItem key={brand} brand={brand} handleFilterBrand={handleFilterBrand} />
          })
          }
        </ul>
      </div>
      <div className="category-layout">
        <h1 className="category-title">Giá thành</h1>
        <Slider 
          min={0}
          max={12}
          htmlFormat={htmlFormatprice}
          value={horizontal}
          onChange={handleChangeHorizontal}
        />
        <div className='value'
          style={{fontSize:"1.2rem"}}
        >{htmlFormatprice((horizontal))}</div>
      </div>
      <CategorySize/>
    </div>
      <div className="category-product d-flex flex-column">
          <h1>Danh mục sản phẩm</h1>
          <a className="category-title" href=""> Giày dành cho Nam</a>
          <a className="category-title" href="">Giày dành cho Nữ</a>
          <a className="category-title" href="">Giày đá bóng</a>
          <a className="category-title" href="">Giày chạy bộ</a>
      </div>
      </div>
  )
}

export default Category;