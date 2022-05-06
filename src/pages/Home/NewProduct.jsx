import Card from "../../components/Card/Card"
import { Link } from "react-router-dom"
const ListProduct = ({data}) =>{

  return(
    <div id="list-product">
      <div className="container-fuild">
        <h1 className="text-center name-colection">
          <Link to="/sneaker">
            GIÀY MỚI
          </Link>
        </h1>
        <div className="row responsive">
          {data.map(product=>
            <div className="col col-lg-2 col-md-4 col-sm-6 col-6" key={product.id}>
              <Card  product={product} />
            </div>
          )}
        </div>
      </div>
    </div>
    
  )

}

export default ListProduct;