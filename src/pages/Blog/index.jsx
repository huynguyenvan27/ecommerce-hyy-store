import { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../components/Pagination/Pagination';
import './blog.css'

const Blog= () =>{
  const [collapse,setCollapse] = useState(false)
  return( 
    <div id="list-product">
    <div className="container">
      <div className="row">
        <div className="col filter-collapse">
          <button className="btn side-filter filter-collapse" onClick = {() => setCollapse(!collapse)}>DANH MỤC TIN TỨC</button>
        </div>
        <div className={collapse ? "col-lg-3 col-md-12 col-sm-12 col-12 col panel-collapse mb-3" :"col-lg-3 col-md-12 col-sm-12 col-12 col panel-collapse panel-close"}>
          <div id="filter-product">
            <div className="news-hot">
              <h1 className="heading-1 line-seperate text-center">BÀI VIẾT MỚI NHẤT</h1>
              <div className="news-block d-flex justify-content-between">
                <Link to="/blog-detail" className="news-img"> 
                  <img src="../image/air-jordan-4-bred-black-cement.webp" alt="air-jordan-4-bred-black-cement"/>
                </Link>
                <Link to="/blog-detail" className="news-info">
                  <h1 className="name-news">6 Facts ngắn về Air Jordan 4 “Bred” ra mắt vào
                    cuối tuần này</h1>
                  <span className="news-tag">Ngày viết:</span>
                  <span className="news-time-public">
                    27/12/2021
                  </span>
                </Link>
              </div>
              <div className="news-block d-flex justify-content-between">
                <Link to="/blog-detail" className="news-img">
                  <img src="../image/591900337269_884858151688470528_o_6388fa8b24f240ceb4ea400884087c2e_57e246a8d7244d5f807907d44b21f0d1_grande.webp" alt="blog"/>
                </Link>
                <Link to="/blog-detail" className="news-info">
                  <h1 className="name-news">Đánh giá - ASICS GEL-Nimbus 22</h1>
                  <span className="news-tag">Ngày viết:</span>
                  <span className="news-time-public">
                    27/12/2021
                  </span>
                </Link>
              </div>
              <div className="news-block d-flex justify-content-between">
                <Link to="/blog-detail" className="news-img">
                  <img src="../image/fragment-travis-scott-air-jordan-1-retro-high-dh3227-105-6-1_c66fd2c99eea4e6a9b7f986fe2418363_grande.webp" alt="blog"/>
                </Link>
                <Link to="/blog-detail" className="news-info">
                  <h1 className="name-news">Fragment design x Travis Scott x Air Jordan 1 High - hình ảnh chính thức!</h1>
                  <span className="news-tag">Ngày viết:</span>
                  <span className="news-time-public">
                    27/12/2021
                  </span>
                </Link>
              </div>
              <div className="news-block d-flex justify-content-between">
                <Link to="/blog-detail" className="news-img">
                  <img src="../image/slideshow_1_2d0ac4870c4843b1b65f5e4d163050c9_grande.webp" alt="blog"/>
                </Link>
                <Link to="/blog-detail" className="news-info">
                  <h1 className="name-news">Cách chọn giày chính xác khi mua giày online</h1>
                  <span className="news-tag">Ngày viết:</span>
                  <span className="news-time-public">
                    27/12/2021
                  </span>
                </Link>
              </div>
            </div>
            <div className="news-filter">
              <h1 className="heading-1 line-seperate text-center">DANH MỤC TIN TỨC</h1>
              <Link to="/blog-detail">Bộ sưu tập giày</Link>
              <Link to="/blog-detail">Đánh giá giày</Link>
              <Link to="/blog-detail">Phụ kiện phù hợp</Link>
              <Link to="/blog-detail">Deal đồng giá</Link>
            </div>
          </div>
        </div>        
        <div className="col-lg-9 col-md-12 col-sm-12 col-12 col news-list">
          <h1 className="heading-1 line-sperate text-start">TIN TỨC</h1>
          <div className="news-block d-flex justify-content-between">
            <Link to="/blog-detail" className="news-img"> 
              <img src="../image/air-jordan-4-bred-black-cement.webp" alt="air-jordan-4-bred-black-cement"/>
            </Link>
            <div className="news-info">
              <Link to="/blog-detail" className="name-news">6 Facts ngắn về Air Jordan 4 “Bred” ra mắt vào
                cuối tuần này</Link>
              <span className="news-tag">Ngày viết:</span>
              <span className="news-time-public">
                27/12/2021
              </span>
              <p className="text-16">
                Phương thức tường thuật lại những câu chuyện lịch sử của Michael Jordan thông qua từng thiết kế Air Jordan luôn gợi về một cảm giác lần đầu tiên khám phá ra thiết kế vĩ đại này. Jordan Brand luôn gợi nhớ cho cả thế giới biết rằng Michael vẫn là The G.O.A.T
              </p>
            </div>
          </div>
          <div className="news-block d-flex justify-content-between">
            <Link to="/blog-detail" className="news-img">
              <img src="../image/591900337269_884858151688470528_o_6388fa8b24f240ceb4ea400884087c2e_57e246a8d7244d5f807907d44b21f0d1_grande.webp" alt="blog"/>
            </Link>
            <div className="news-info">
              <Link to="/blog-detail" className="name-news">Đánh giá - ASICS GEL-Nimbus 22</Link>
              <span className="news-tag">Ngày viết:</span>
              <span className="news-time-public">
                27/12/2021
              </span>
              <p className="text-16">ASICS GEL-NIMBUS 22 CÓ GÌ MỚI?Khi khui hộp đôi ASICS GEL-Nimbus 22, điều đầu tiên đập ngay vào mắt chính là phần thiết kế...</p>
            </div>
          </div>
          <div className="news-block d-flex justify-content-between">
            <Link to="/blog-detail" className="news-img">
              <img src="../image/fragment-travis-scott-air-jordan-1-retro-high-dh3227-105-6-1_c66fd2c99eea4e6a9b7f986fe2418363_grande.webp" alt="blog"/>
            </Link>
            <div className="news-info">
              <Link to="/blog-detail" className="name-news">Fragment design x Travis Scott x Air Jordan 1 High - hình ảnh chính thức!</Link>
              <span className="news-tag">Ngày viết:</span>
              <span className="news-time-public">
                27/12/2021
              </span>
              <p className="text-16">Sau một thời gian dài đồn đoán trong cộng đồng người yêu giày, phiên bản tiếp theo của series giày Travis Scott x Air Jordan...</p>
            </div>
          </div>
          <div className="news-block d-flex justify-content-between">
            <Link to="/blog-detail" className="news-img">
              <img src="../image/slideshow_1_2d0ac4870c4843b1b65f5e4d163050c9_grande.webp" alt="blog"/>
            </Link>
            <div className="news-info">
              <Link to="/blog-detail" className="name-news">Cách chọn giày chính xác khi mua giày online</Link>
              <span className="news-tag">Ngày viết:</span>
              <span className="news-time-public">
                27/12/2021
              </span>
              <p className="text-16">I. MỘT SỐ LƯU Ý TRƯỚC KHI CHỌN SIZETrước khi đi vào hướng dẫn cách để chọn size chuẩn nhất khi mua giày online, OSS...</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  )
}


export default Blog;