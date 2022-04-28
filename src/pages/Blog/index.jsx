import './blog.css'

const Blog= () =>{

  return( 
    <div id="list-product">
    <div class="container">
      <div class="row">
        <button class="btn side-filter">DANH MỤC TIN TỨC</button>
        <div class="col-lg-3 col-md-12 col-sm-12 col-12 col" id="filter-product">
          <div class="news-hot">
            <h1 class="heading-1 line-seperate text-center">BÀI VIẾT MỚI NHẤT</h1>
            <div class="news-block d-flex justify-content-between">
              <a href="./blog-detail.html" class="news-img"> 
                <img src="../image/air-jordan-4-bred-black-cement.webp" alt="air-jordan-4-bred-black-cement"/>
              </a>
              <a href="./blog-detail.html" class="news-info">
                <h1 class="name-news">6 Facts ngắn về Air Jordan 4 “Bred” ra mắt vào
                  cuối tuần này</h1>
                <span class="news-tag">Ngày viết:</span>
                <span class="news-time-public">
                  27/12/2021
                </span>
              </a>
            </div>
            <div class="news-block d-flex justify-content-between">
              <a href="./blog-detail.html" class="news-img">
                <img src="../image/591900337269_884858151688470528_o_6388fa8b24f240ceb4ea400884087c2e_57e246a8d7244d5f807907d44b21f0d1_grande.webp" alt="blog"/>
              </a>
              <a href="./blog-detail.html" class="news-info">
                <h1 class="name-news">Đánh giá - ASICS GEL-Nimbus 22</h1>
                <span class="news-tag">Ngày viết:</span>
                <span class="news-time-public">
                  27/12/2021
                </span>
              </a>
            </div>
            <div class="news-block d-flex justify-content-between">
              <a href="./blog-detail.html" class="news-img">
                <img src="../image/fragment-travis-scott-air-jordan-1-retro-high-dh3227-105-6-1_c66fd2c99eea4e6a9b7f986fe2418363_grande.webp" alt="blog"/>
              </a>
              <a href="./blog-detail.html" class="news-info">
                <h1 class="name-news">Fragment design x Travis Scott x Air Jordan 1 High - hình ảnh chính thức!</h1>
                <span class="news-tag">Ngày viết:</span>
                <span class="news-time-public">
                  27/12/2021
                </span>
              </a>
            </div>
            <div class="news-block d-flex justify-content-between">
              <a href="./blog-detail.html" class="news-img">
                <img src="../image/slideshow_1_2d0ac4870c4843b1b65f5e4d163050c9_grande.webp" alt="blog"/>
              </a>
              <a href="./blog-detail.html" class="news-info">
                <h1 class="name-news">Cách chọn giày chính xác khi mua giày online</h1>
                <span class="news-tag">Ngày viết:</span>
                <span class="news-time-public">
                  27/12/2021
                </span>
              </a>
            </div>
          </div>
          <div class="news-filter">
            <h1 class="heading-1 line-seperate text-center">DANH MỤC TIN TỨC</h1>
            <a href="">Bộ sưu tập giày</a>
            <a href="">Đánh giá giày</a>
            <a href="">Phụ kiện phù hợp</a>
            <a href="">Deal đồng giá</a>
          </div>
        </div>        
        <div class="col-lg-9 col-md-12 col-sm-12 col-12 col news-list">
          <h1 class="heading-1 line-sperate text-start">TIN TỨC</h1>
          <div class="news-block d-flex justify-content-between">
            <a href="./blog-detail.html" class="news-img"> 
              <img src="../image/air-jordan-4-bred-black-cement.webp" alt="air-jordan-4-bred-black-cement"/>
            </a>
            <div class="news-info">
              <a href="./blog-detail.html" class="name-news">6 Facts ngắn về Air Jordan 4 “Bred” ra mắt vào
                cuối tuần này</a>
              <span class="news-tag">Ngày viết:</span>
              <span class="news-time-public">
                27/12/2021
              </span>
              <p class="text-16">
                Phương thức tường thuật lại những câu chuyện lịch sử của Michael Jordan thông qua từng thiết kế Air Jordan luôn gợi về một cảm giác lần đầu tiên khám phá ra thiết kế vĩ đại này. Jordan Brand luôn gợi nhớ cho cả thế giới biết rằng Michael vẫn là The G.O.A.T
              </p>
            </div>
          </div>
          <div class="news-block d-flex justify-content-between">
            <a href="" class="news-img">
              <img src="../image/591900337269_884858151688470528_o_6388fa8b24f240ceb4ea400884087c2e_57e246a8d7244d5f807907d44b21f0d1_grande.webp" alt="blog"/>
            </a>
            <div class="news-info">
              <a href="" class="name-news">Đánh giá - ASICS GEL-Nimbus 22</a>
              <span class="news-tag">Ngày viết:</span>
              <span class="news-time-public">
                27/12/2021
              </span>
              <p class="text-16">ASICS GEL-NIMBUS 22 CÓ GÌ MỚI?Khi khui hộp đôi ASICS GEL-Nimbus 22, điều đầu tiên đập ngay vào mắt chính là phần thiết kế...</p>
            </div>
          </div>
          <div class="news-block d-flex justify-content-between">
            <a href="" class="news-img">
              <img src="../image/fragment-travis-scott-air-jordan-1-retro-high-dh3227-105-6-1_c66fd2c99eea4e6a9b7f986fe2418363_grande.webp" alt="blog"/>
            </a>
            <div class="news-info">
              <a href="" class="name-news">Fragment design x Travis Scott x Air Jordan 1 High - hình ảnh chính thức!</a>
              <span class="news-tag">Ngày viết:</span>
              <span class="news-time-public">
                27/12/2021
              </span>
              <p class="text-16">Sau một thời gian dài đồn đoán trong cộng đồng người yêu giày, phiên bản tiếp theo của series giày Travis Scott x Air Jordan...</p>
            </div>
          </div>
          <div class="news-block d-flex justify-content-between">
            <a href="" class="news-img">
              <img src="../image/slideshow_1_2d0ac4870c4843b1b65f5e4d163050c9_grande.webp" alt="blog"/>
            </a>
            <div class="news-info">
              <a href="" class="name-news">Cách chọn giày chính xác khi mua giày online</a>
              <span class="news-tag">Ngày viết:</span>
              <span class="news-time-public">
                27/12/2021
              </span>
              <p class="text-16">I. MỘT SỐ LƯU Ý TRƯỚC KHI CHỌN SIZETrước khi đi vào hướng dẫn cách để chọn size chuẩn nhất khi mua giày online, OSS...</p>
            </div>
          </div>
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link disable" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link active" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
  )
}


export default Blog;