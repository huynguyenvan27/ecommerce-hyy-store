import Slider from "react-slick";

const Policy = () =>{
  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 992,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
          }
        },
      {
        breakpoint: 600,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        }
      },
        ]
  };


  return (
    <div id="policy">
      <div className="container">
        <Slider {...settings}>
          <div className="policy-layout d-flex justify-content-center col-lg-3">
            <div className="policy-img">
              <img src="/image/Vector.svg" alt="Free ship"/>
            </div>
            <div className="policy-title">
              <h1>FreeShip</h1>
              <p>Với đơn hàng từ 1 triệu trở lên</p>
            </div>
          </div>
          <div className="policy-layout d-flex justify-content-center col-lg-3">
            <div className="policy-img">
              <img src="/image/info_img_2_home 1.svg" alt="Free ship"/>
            </div>
            <div className="policy-title">
              <h1>Dễ dàng thanh toán</h1>
              <p>Kết hợp thanh toán điện tử</p>
            </div>
          </div>
          <div className="policy-layout d-flex justify-content-center col-lg-3">
            <div className="policy-img">
              <img src="/image/info_img_3_home 1.svg" alt="Free ship"/>
            </div>
            <div className="policy-title">
              <h1>Đổi trả hoàn tiền</h1>
              <p>15 ngày đổi trả miễn phí</p>
            </div>
          </div>
          <div className="policy-layout d-flex justify-content-center col-lg-3">
            <div className="policy-img">
              <img src="/image/Shape.svg" alt="Free ship"/>
            </div>
            <div className="policy-title">
              <h1>Hỗ trợ trực tuyến</h1>
              <p>Luôn luôn online 24/7</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Policy;