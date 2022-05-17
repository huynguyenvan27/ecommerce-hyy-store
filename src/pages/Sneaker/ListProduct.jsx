import Card from "../../components/Card/Card"
import LayoutPage from "./LayoutPage"
import Fade from 'react-reveal/Fade';
const ListProduct = ({products ,handleSort,value}) => {

 
    
  return(
    <>
    <LayoutPage data={products} handleSort = {handleSort} value={value}/>
    <div className="row" id="product">
      {
        products.map(product=>{
          return <div className="col col-lg-4 col-md-4 col-sm-6 col-6" key={product.id} >
            <Fade>
              <Card   product={product}/>
            </Fade>
          </div>
        })
      }
    </div>
    </>
  )
}

export default ListProduct;