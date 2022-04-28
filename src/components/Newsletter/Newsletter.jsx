import "./newsletter.css" 
const Newsletter =() =>{
  return (
    <div id="newsletter">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2 text-center">
            <i className="bi bi-envelope"></i>
            Đăng kí nhận tin
          </div>
          <div className="newsletter-input d-flex justify-content-between align-items-center col-lg-8">
            <input type="text" placeholder="Nhập email của bạn"/>
            <button className="btn--primary">ĐĂNG KÝ</button>
          </div>
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