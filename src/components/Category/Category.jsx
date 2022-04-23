import CategoryItem from "./CategoryItem"

const Category = ({product}) =>{
  
  return(
    <div class="category-layout">
      <h1 class="category-title">{product.type}</h1>
      <ul class=" row">
        <li class="col-lg-6 category-option d-flex align-items-center">
          <input type="checkbox" name="Name" id= {`category-option__${brand}`}/>
          <label for= {`category-option__${brand}`}>{options}</label>
        </li>
      </ul>
    </div>
  )
}