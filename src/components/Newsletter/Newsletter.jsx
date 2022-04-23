import "./newsletter.css" 
const Newsletter =() =>{
  return (
    <div id="newsletter">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-2 text-center">
            <i class="bi bi-envelope"></i>
            Đăng kí nhận tin
          </div>
          <div class="newsletter-input d-flex justify-content-between align-items-center col-lg-8">
            <input type="text" placeholder="Nhập email của bạn"/>
            <button class="btn--primary">ĐĂNG KÝ</button>
          </div>
          <div class="col-lg-2 text-center">
            <i class="bi bi-telephone"></i>
            Hỗ trợ: 0981930183
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter;