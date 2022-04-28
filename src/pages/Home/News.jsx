import { Link } from "react-router-dom";

const News = () =>{
  return(
    <div id="news">
      <div className="container-fuild">
        <h1 className="text-center name-colection">
          <Link to="/blog">TIN TỨC</Link>
        </h1>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 col">
            <Link to="/blog" className="news-block">
              <div className="news-img">
                <img
                  src="/image/air-jordan-4-bred-black-cement.webp"
                  alt="blog"/>
              </div>
              <div className="news-info">
                <span className="news-tag">#Hyy store</span>
                <span className="news-time-public">
                  27/12/2021
                </span>
                <h1 className="name-news">6 Facts ngắn về Air Jordan 4 “Bred” ra mắt vào</h1>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 col">
            <Link to="/blog" className="news-block">
              <div className="news-img">
                <img
                  src="/image/591900337269_884858151688470528_o_6388fa8b24f240ceb4ea400884087c2e_57e246a8d7244d5f807907d44b21f0d1_grande.webp"
                  alt="blog"/>
              </div>
              <div className="news-info">
                <span className="news-tag">#Hyy store</span>
                <span className="news-time-public">
                  27/12/2021
                </span>
                <h1 className="name-news">Đánh giá - ASICS GEL-Nimbus 22</h1>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 col">
            <Link to="/blog" className="news-block">
              <div className="news-img">
                <img
                  src="/image/fragment-travis-scott-air-jordan-1-retro-high-dh3227-105-6-1_c66fd2c99eea4e6a9b7f986fe2418363_grande.webp"
                  alt="blog"/>
              </div>
              <div className="news-info">
                <span className="news-tag">#Hyy store</span>
                <span className="news-time-public">
                  27/12/2021
                </span>
                <h1 className="name-news">Fragment design x Travis Scott x Air Jordan 1 High - hình ảnh chính thức!</h1>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 col">
            <Link to="/blog" className="news-block">
              <div className="news-img">
                <img src="/image/slideshow_1_2d0ac4870c4843b1b65f5e4d163050c9_grande.webp" alt="blog"/>
              </div>
              <div className="news-info">
                <span className="news-tag">#Hyy store</span>
                <span className="news-time-public">
                  27/12/2021
                </span>
                <h1 className="name-news">Cách chọn giày chính xác khi mua giày online</h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="d-block text-center">
          <Link to="/blog" className="btn--primary">Xem thêm</Link>
        </div>

      </div>
    </div>

  )
}

export default News;