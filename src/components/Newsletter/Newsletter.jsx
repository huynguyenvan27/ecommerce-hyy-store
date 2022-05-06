import "./newsletter.css" 
import { useFormik } from 'formik';
const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
}
const Newsletter =() =>{
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, 2));
    },
  });
  return (
    <div id="newsletter">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2 text-center">
            <i className="bi bi-envelope"></i>
            Đăng kí nhận tin
          </div>
          <form onSubmit={formik.handleSubmit} className="newsletter-input d-flex justify-content-between align-items-center col-lg-8">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Nhập email của bạn"
                onChange={formik.handleChange}
                value={formik.values.email}
                />
            <button type="submit" className="btn--primary">ĐĂNG KÝ</button>
          </form>
          <div className="col-lg-2 text-center">
            <i className="bi bi-telephone"></i>
            Hỗ trợ: 0981930183
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter;