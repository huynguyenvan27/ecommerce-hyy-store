import cartSlice from '../../store/slices/cart.slice';
import './checkout.css'
import ItemCheckout from './ItemCheckout';
import { useSelector } from 'react-redux';
import { selectAllCartItems,selectTotalBill } from '../../store/store';
const Checkout = () => {
  const cart = useSelector(selectAllCartItems)
  console.log(cart)
  let formatter = new Intl.NumberFormat("en-US", {
    currency: "VND",
  });
  const totalBill = useSelector(selectTotalBill)
  console.log(cart);
    return(
      <div className="content-page mb-5">
      <div className="container">
        <div className="link-account mt-5 d-flex justify-content-center">
          <a href="" className="btn btn-link">Thanh toán bằng tài khoản đăng nhập?</a>
        </div>
        <div className="row">
          <div className="col col-lg-6 col-12 mt-5 order-sm-1 order-lg-1 order-1">
            <h1 className="heading-1 line-seperate"> Bước 1: Thông tin khách hàng</h1>
            <form action="">
              <div className="contact-input">
                <label htmlFor="contact-input__name">Họ và tên:</label>
                <input type="text" className="input-className" name="name" id="contact-input__name" />
                
              </div>
              <div className="contact-input">
                <label htmlFor="contact-input__phone">Số điện thoại: </label>
                <input type="number" className="input-className" name="phone" id="contact-input__phone"/>
                
              </div>
              <div className="contact-input d-flex justify-content-between flex-wrap">
                  <select name="city" className="input-className"  required id="city">
                    <option defaultValue="" hidden selected>Chọn tỉnh/thành phố</option>
                  </select>
                  <small></small>
                  <select name="district" className="input-className" required id="district">
                    <option defaultValue="" hidden selected>Chọn quận/huyện</option>
                  </select>
                  <small></small>
                  <select name="ward" className="input-className" required id="ward">
                    <option defaultValue="" hidden selected>Chọn xã/phường</option>
                  </select>
                  <small></small>
              </div>
              <div className="contact-input">
                <label htmlFor="contact-input__text">Địa chỉ:</label>
                <input type="text" className="input-className" name="address" id="contact-input__address"/>
                
              </div>
              <div className="contact-input">
                <label htmlFor="contact-input__message">Ghi chú:</label>
                <textarea name="message" className="input-className" id="contact-input__message" cols="30" rows="3"></textarea>
                
              </div>
            </form>
          </div>
          <div className="col col-lg-6 col-12 mt-5 order-sm-3 order-lg-2 order-3">
            <h1 className="heading-1 line-seperate"> Bước 3: Hoàn tất</h1>
            <div className="column-labels mb-2 d-flex justify-content-between">
              <h3 className="product-details fw-bolder">Sản phẩm</h3>
              <h3 className="product-price fw-bolder">Tổng cộng</h3>
            </div>
            <div id="checkout-cart">
              {
                cart.map(item =>{
                  return(
                    <ItemCheckout 
                      key={item.product.id}
                      product={item.product}
                      quantity={item.quantity}
                      size={item.size}
                     />
                  )
                })
              }
            </div>
            <div className="free-tr d-flex justify-content-between">
              <label className="">Phí vận chuyển</label>
              <label className="product-price color--red">0đ</label>
            </div>
            <div className="totals d-flex justify-content-between">
              <label>Tổng cộng:</label>
              <label className="total-value color--red" id="total-checkout">{formatter.format(totalBill)}đ</label>
            </div>
            <div className=" d-flex justify-content-center align-items-center mt-5">
              <button className="btn--primary" id="shopping">Tiến hành đặt hàng</button>
            </div>
  
          </div>
          <div className="col col-lg-6 col-12 mt-5 order-sm-2 order-lg-3 order-2">
            <h1 className="heading-1 line-seperate"> Bước 2: Chọn phương thức thanh toán</h1>
            <input type="radio" id="payment-ship" name="payment"/>
            <label htmlFor="payment-ship" className="btn-option-pay d-flex align-items-center justify-content-center">
              <i className="bi bi-bag me-4"></i>
              <h1 className="text">Thanh toán khi nhận hàng</h1>
            </label>
            <input type="radio" id="payment-card" name="payment"/>
            <label htmlFor="payment-card" className="btn-option-pay d-flex align-items-center justify-content-center">
              <i className="bi bi-credit-card-2-back me-4"></i>
              <h1 className="text">Thanh toán online</h1>
            </label>
          </div>
        </div>
      </div>
      </div>  
    )

}

export default Checkout;