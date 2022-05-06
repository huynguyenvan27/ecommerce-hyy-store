import Card from "../../components/Card/Card"
import Fade from "react-reveal/Fade"
import LayoutPage from "./LayoutPage"
const ListProduct = ({products}) => {


    
  return(
    <Fade
      bottom
      Cascade = { true}
     >
    <LayoutPage data={products}/>
    <div className="row" id="product">

   
      {
        products.map(product=>{
          return <div className="col col-lg-4 col-md-4 col-sm-6 col-6" key={product.id} >
           <Card   product={product}/>
          </div>
        })
      }
    </div>
    </Fade>
  )
}

export default ListProduct;