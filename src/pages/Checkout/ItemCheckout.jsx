

const ItemCheckout = ({product,quantity,size}) => {
  let formatter = new Intl.NumberFormat("en-US", {
    currency: "VND",
  });
  return (
    <div className="product d-flex justify-content-between">
    <label className="product-name">{product.name}</label>
    <label>Size:{size}</label>
    <label className="product-quantity mx-3">x{quantity}</label>
    <label className="product-price color--red">{formatter.format(product.price)} đ</label>
  </div>
  )
}

export default ItemCheckout;