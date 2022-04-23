import Card from "../../components/Card/Card"
import { Link } from "react-router-dom"
import { useGetAllProductsQuery } from "../../services/product.service"
const ListProduct = () =>{
  const {data,isFetching,error} = useGetAllProductsQuery();
  if(isFetching){
    return <p>loading</p>
  }
  if(data){
    console.log(data);
  }
  if(error){
    return <p>Opp!</p>
  }
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
            <Card key={product.id} product={product} />
          )}
        </div>
      </div>
    </div>
    
  )

}

export default ListProduct;