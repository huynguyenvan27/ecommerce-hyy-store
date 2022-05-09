import { useFormik } from 'formik';
import ContactForm from '../../components/ContactForm/ContactForm';
import * as Yup from "yup";
import './checkout.css'
import ItemCheckout from './ItemCheckout';
import { useSelector } from 'react-redux';
import { selectAllCartItems,selectTotalBill } from '../../store/slices/cart.slice';




const Checkout = () => {
  const cart = useSelector(selectAllCartItems)
  let formatter = new Intl.NumberFormat("en-US", {
    currency: "VND",
  });
  const totalBill = useSelector(selectTotalBill)

    return(
      <div className="container">
      <div className="content-page mb-5">
        <div className="link-account mt-5 d-flex justify-content-center">
          <a href="" className="btn btn-link">Thanh toán bằng tài khoản đăng nhập?</a>
        </div>
        <div className="row">
          <div className="col col-lg-6 col-12 mt-5">
            <h1 className="heading-1 line-seperate">Thông tin khách hàng</h1>
            <ContactForm />
          </div>
          <div className="col col-lg-6 col-12 mt-5">
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
            </div>
  
          </div>
        </div>
      </div>
      </div>  
    )

}

export default Checkout;