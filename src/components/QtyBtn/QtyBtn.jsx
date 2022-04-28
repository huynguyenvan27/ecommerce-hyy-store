
import './QtyBtn.css'
const QtyBtn = ({handleDecrease,handleIncrease,product,quantity,size}) =>{
  return(
    <div className="sneaker-quantity">
      <button className="btn btn-light btn-down" onClick={()=>handleDecrease({id:product.id,size:size})} >
        <i className="bi bi-dash"></i>
      </button>
      <input className="sneaker-quantity__value align-middle" type="number" name="quantity" value={quantity}/>
      <button className="btn btn-light btn-up" onClick={()=>handleIncrease({id:product.id,size:size})}>
        <i className="bi bi-plus"></i>
      </button>
    </div>
  )
}

export default QtyBtn;