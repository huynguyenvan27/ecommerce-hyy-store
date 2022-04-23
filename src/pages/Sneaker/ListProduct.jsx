import Card from "../../components/Card/Card"

const ListProduct = () =>{
  const {data,isFetching,error} = useGetAllProductsQuery();
  if(isFetching){
    return <p>loading</p>
  }
  if(error){
    return <p>Opp!</p>
  }
  return(
    <div className="row" id="product">
      {
        data.map(product=>{
          return <Card product={product}/>
        })
      }
    </div>
  )
}

export default ListProduct;