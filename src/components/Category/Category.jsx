import CategoryItem from "./CategoryItem"
import "./category.css"
import 'react-rangeslider/lib/index.css'
import CategorySize from "./CategorySize"
import { Link } from "react-router-dom"
const Category = ({ list ,handleFilterBrand}) => {

  return (
    <div className="filter-block">
    <div class="filter-product">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h1 class="category-title">LỌC</h1>
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
      <CategorySize/>
    </div>
      <div className="category-product d-flex flex-column">
          <h1>Danh mục sản phẩm</h1>
          <Link to = "#" className="category-title" href=""> Giày dành cho Nam</Link>
          <Link to = "#" className="category-title" href="">Giày dành cho Nữ</Link>
          <Link to = "#" className="category-title" href="">Giày đá bóng</Link>
          <Link to = "#" className="category-title" href="">Giày chạy bộ</Link>
      </div>
      </div>
  )
}

export default Category;