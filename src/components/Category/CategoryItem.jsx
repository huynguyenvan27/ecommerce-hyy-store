const CategoryItem = ({brand,handleFilterBrand}) => {

  return(
    <li className="col-lg-6 category-option d-flex align-items-center">
      <input type="checkbox" name={brand} id= {`category-option__${brand}`} checked={brand.name} onChange={handleFilterBrand}/>
      <label htmlFor= {`category-option__${brand}`}>{brand}</label>
    </li>
  )
}
export default CategoryItem;