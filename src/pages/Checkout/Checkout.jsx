import { useFormik } from 'formik';
import ContactForm from '../../components/ContactForm/ContactForm';
import * as Yup from "yup";
import './checkout.css'
import ItemCheckout from './ItemCheckout';
import { useSelector } from 'react-redux';
import { selectAllCartItems,selectTotalBill } from '../../store/slices/cart.slice';



// const validate = values => {
//   const errors = {};
//   if (!values.name) {
//     errors.name = 'Required';
//   } else if (values.name.length > 15) {
//     errors.name = 'Must be 15 characters or less';
//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Địa chỉ email không hợp lệ';
//   }

//   if (!values.phone) {
//     errors.phone = 'Required';
//   } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/i.test(values.phone)) {
//     errors.phone = 'Số điện thoại không hợp lệ';
//   }

//   return errors;
// };


const Checkout = () => {
  const cart = useSelector(selectAllCartItems)
  let formatter = new Intl.NumberFormat("en-US", {
    currency: "VND",
  });
  const totalBill = useSelector(selectTotalBill)

    return(
      <div className="content-page mb-5">
      <div className="container">
        <div className="link-account mt-5 d-flex justify-content-center">
          <a href="" className="btn btn-link">Thanh toán bằng tài khoản đăng nhập?</a>
        </div>
        <div className="row">
         
          <div className="col col-lg-6 col-12 mt-5 order-sm-1 order-lg-1 order-1">
            <h1 className="heading-1 line-seperate">Thông tin khách hàng</h1>
            <ContactForm />
          </div>
          <div className="col col-lg-6 col-12 mt-5 order-sm-3 order-lg-2 order-3">
            <h1 className="heading-1 line-seperate">Thông tin đơn hàng</h1>
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
              <label className='form-label'>Phí vận chuyển</label>
              <label  className="product-price color--red">0đ</label>
            </div>
            <div className="totals d-flex justify-content-between">
              <label className='form-label'>Tổng cộng:</label>
              <label className="total-value color--red" id="total-checkout">{formatter.format(totalBill)}đ</label>
            </div>
            <div className=" d-flex justify-content-center align-items-center mt-5">
              {/* <button className="btn--primary" id="shopping" type='submit'>Tiến hành đặt hàng</button> */}
            </div>
  
          </div>
          {/* <div className="col col-lg-6 col-12 mt-5 order-sm-2 order-lg-3 order-2">
            <h1 className="heading-1 line-seperate"> Bước 2: Chọn phương thức thanh toán</h1>
            <input type="radio" id="payment-ship" name="payment"/>
            <label  htmlFor="payment-ship" className="btn-option-pay d-flex align-items-center justify-content-center">
              <i className="bi bi-bag me-4"></i>
              <h1 className="text">Thanh toán khi nhận hàng</h1>
            </label>
            <input type="radio" id="payment-card" name="payment"/>
            <label htmlFor="payment-card" className="btn-option-pay d-flex align-items-center justify-content-center">
              <i className="bi bi-credit-card-2-back me-4"></i>
              <h1 className="text">Thanh toán online</h1>
            </label>
          </div> */}
        </div>
      </div>
      </div>  
    )

}

export default Checkout;