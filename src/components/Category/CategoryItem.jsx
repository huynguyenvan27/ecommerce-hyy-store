const CategoryItem = () => {

  return(
    <li class="col-lg-6 category-option d-flex align-items-center">
      <input type="checkbox" name={product.brand} id= {`category-option__${product.brand}`}/>
      <label for= {`category-option__${product.brand}`}>{product.brand}</label>
    </li>
  )
}
export default CategoryItem;