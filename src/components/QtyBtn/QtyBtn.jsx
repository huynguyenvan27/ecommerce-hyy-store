

const QtyBtn = () =>{
  return(
    <div class="sneaker-quantity">
      <button class="btn btn-light btn-down" >
        <i class="bi bi-dash"></i>
      </button>
      <input class="sneaker-quantity__value align-middle" type="number" name="quantity" value="1" min="1" max="10"/>
      <button class="btn btn-light btn-up">
        <i class="bi bi-plus"></i>
      </button>
    </div>
  )
}

export default QtyBtn;