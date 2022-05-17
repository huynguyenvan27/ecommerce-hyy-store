import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function BlogDetail() {
  const [collapse,setCollapse] = useState(false)
  return (
    <div id="list-product">
    <div class="container">
      <div class="row">
        <div className="col filter-collapse">
          <button button class="btn side-filter" onClick = {() => setCollapse(!collapse)}>DANH MỤC TIN TỨC</button>
        </div>
        <div className={collapse ? "col-lg-3 col-md-12 col-sm-12 col-12 col panel-collapse mb-3" :"col-lg-3 col-md-12 col-sm-12 col-12 col panel-collapse panel-close"} >
          <div id="filter-product">
            <div class="news-hot">
              <h1 class="heading-1 line-seperate text-center">BÀI VIẾT MỚI NHẤT</h1>
              <div class="news-block d-flex justify-content-between">
                <a href="" class="news-img"> 
                  <img src="/image/air-jordan-4-bred-black-cement.webp" alt="air-jordan-4-bred-black-cement"/>
                </a>
                <a href="" class="news-info">
                  <h1 class="name-news">6 Facts ngắn về Air Jordan 4 “Bred” ra mắt vào </h1>
                  <span class="news-tag">Ngày viết:</span>
                  <span class="news-time-public">
                    27/12/2021
                  </span>
                </a>
              </div>
              <div class="news-block d-flex justify-content-between">
                <a href="" class="news-img">
                  <img src="/image/591900337269_884858151688470528_o_6388fa8b24f240ceb4ea400884087c2e_57e246a8d7244d5f807907d44b21f0d1_grande.webp" alt="blog"/>
                </a>
                <a href="" class="news-info">
                  <h1 class="name-news">Đánh giá - ASICS GEL-Nimbus 22</h1>
                  <span class="news-tag">Ngày viết:</span>
                  <span class="news-time-public">
                    27/12/2021
                  </span>
                </a>
              </div>
              <div class="news-block d-flex justify-content-between">
                <a href="" class="news-img">
                  <img src="/image/fragment-travis-scott-air-jordan-1-retro-high-dh3227-105-6-1_c66fd2c99eea4e6a9b7f986fe2418363_grande.webp" alt="blog"/>
                </a>
                <a href="" class="news-info">
                  <h1 class="name-news">Fragment design x Travis Scott x Air Jordan 1 High - hình ảnh chính thức!</h1>
                  <span class="news-tag">Ngày viết:</span>
                  <span class="news-time-public">
                    27/12/2021
                  </span>
                </a>
              </div>
              <div class="news-block d-flex justify-content-between">
                <a href="" class="news-img">
                  <img src="/image/slideshow_1_2d0ac4870c4843b1b65f5e4d163050c9_grande.webp" alt="blog"/>
                </a>
                <a href="" class="news-info">
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
        </div>        
        <div class="col-lg-9 col-md-12 col-sm-12 col-12 col">
          <div class="news-detail">
            <h1 class="heading-blog text-start">6 Facts ngắn về Air Jordan 4 “Bred” ra mắt vào cuối tuần này</h1>
            <p>Ngày viết: 27/12/2021</p>
            <img src="/image/air-jordan-4-bred-black-cement.webp" alt="air-jordan-4-bred-black-cement"/>
            <p class="text">
              Phương thức tường thuật lại những câu chuyện lịch sử của Michael Jordan thông qua từng thiết kế Air Jordan luôn gợi về một cảm giác lần đầu tiên khám phá ra thiết kế vĩ đại này. Jordan Brand luôn gợi nhớ cho cả thế giới biết rằng Michael vẫn là The G.O.A.T (The Greatest of All Time – Vận động viên bóng rổ vĩ đại nhất mọi thời đại).
              <br/>
              Những điều này đã vô tình khiến cho hình tượng về Jordan và các mẫu giày của ông liên tục được biết đến ở mọi thế hệ, thông qua kiểu dáng, logo và tất nhiên là những facts – những sự thật xoay quanh đôi giày, những phát hiện trong quá trình thiết kế cũng như sự ảnh hưởng đến lịch sử hình thành và phát triển của không chỉ riêng đôi giày mà còn đối với thương hiệu Jumpman
              <br/>
              Sau đây, hãy cùng điểm qua 6 sự thật bên lề của Air Jordan 4:
            </p>
            <ol>
              <li>
                <strong>Air Jordan 4 là thiết kế thứ 2 của phù thủy Tinker Hatfield trong dòng Air Jordan.</strong>
                <img src="/image/jordan-4-tinker-hatfield-sketch-1988-1989.webp" alt="jordan-4-tinker-hatfield-sketch-1988-1989"/>
                <p class="text">Michael Jordan đã từng muốn rời bỏ The Swoosh sau mùa giải 1986-1987 với phiên bản Air Jordan 2. Lúc bấy giờ, Tinker Hatfield được giao nhiệm vụ thiết kế cho Michael Jordan phiên bản Air Jordan thứ 3, với hi vọng nếu thành công, Mike sẽ ở lại với thương hiệu. Và Tinker đã thành công, phần còn lại trở thành lịch sử của thương hiệu.</p>
              </li>
              <li>
                <strong>Khoảnh khắc của Air Jordan 4 mang tên “The Shot”.</strong>
                <img src="/image/air-jordan-4-bred-1989-the-shot-craig-ehlo.webp" alt="air-jordan-4-bred-1989-the-shot-craig-ehlo"/>
                <p class="text">Michael Jordan đã từng muốn rời bỏ The Swoosh sau mùa giải 1986-1987 với phiên bản Air Jordan 2. Lúc bấy giờ, Tinker Hatfield được giao nhiệm vụ thiết kế cho Michael Jordan phiên bản Air Jordan thứ 3, với hi vọng nếu thành công, Mike sẽ ở lại với thương hiệu. Và Tinker đã thành công, phần còn lại trở thành lịch sử của thương hiệu.</p>
              </li>
              <li>
                <strong>Air Jordan 4 đã suýt có thể sở hữu họa tiết vảy sơn trên phần midsole.</strong>
                <img src="/image/air-jordan-4-bred-black-cement.webp" alt="air-jordan-4-bred-black-cement"/>
                <p class="text">Bản sample gốc của Air Jordan 4 hồi năm 1989 cho thấy phiên bản này đã có thể được trang bị bộ đế với họa tiết sơn vảy trên phần đế giày, hoặc chí ít đây sẽ là một phát hành song song với màu đế đen trơn như hiện tại. Ý tưởng này không thành công nhưng trở thành tiền đề cho một số chi tiết của Air Jordan 8 – ra mắt lần đầu vào năm 1993.</p>
              </li>
              <li>
                <strong>Biệt danh thực sự của Air Jordan 4 “Bred” đã từng là “Black Cement”.</strong>
                <img src="/image/air-jordan-4-black-red-splatter-1989-sample.webp" alt="air-jordan-4-black-red-splatter-1989-sample"/>
                <p class="text">Trước khi cách gọi “Bred” trở nên phổ biến như hiện tại, phiên bản này được biết đến dưới biệt danh “Black Cement”. Đúng vậy, nó sở hữu trùng biệt danh với phiên bản Air Jordan 3 kinh điển kia. Và nhiều người đã lầm tưởng rằng “Black Cement” được dùng cho Air Jordan 3 để ám chỉ phần họa tiết Elephant Print màu Xám/Đen đặc trưng. Nhưng thực chất, từ “Cement” được dùng cho Air Jordan 4 để ám chỉ tông màu xám được dùng ở một phần đế ngoài và lót viền của đôi giày.</p>
              </li>
              <li>
                <strong>Lần release vào cuối tuần này sẽ đánh dấu lần thứ 5 tái xuất của Air Jordan 4 “Bred”.
                </strong>
                <img src="/image/jordan-4-bred-2008-countdown-pack.webp" alt="jordan-4-bred-2008-countdown-pack"/>
                <p class="text">
                  Ra mắt lần đầu tiên vào năm 1989, Air Jordan 4 được retro lần đầu tiên vào năm 1999 trong hộp giày màu bạc và vẫn còn logo Nike Air hiện diện sau gót. Tận đến năm 2008, phiên bản này trở lại lần thứ 2 trong BST Countdown Pack cùng phiên bản Air Jordan 19, lần này phía sau gót là logo Jumpman. Lần tiếp theo sau CDP là năm 2012, đôi giày như một bản remake của phiên bản 2008, với form giày kiểu mới. Lần cuối cùng và cũng là lần sắp đến vào ngày 04.05 đánh dấu sự trở lại của đôi giày trong hình hài nguyên thủy nhất.
                </p>
              </li>
              <li>
                <strong>Air Jordan 4 “Bred” xuất hiện trong những nền văn hóa chính thống thông qua nghệ sĩ hiphop.</strong>
                <img src="/image/air-jordan-4-bred-jay-z-photo-1989.webp" alt="air-jordan-4-bred-jay-z-photo-1989"/>
                <p class="text">
                Không ai khác ngoài Jay-Z. Lúc còn trẻ chàng rapper Brooklyn này đã diện phiên bản Air Jordan 4 trong MV ca nhạc đầu tiên sản xuất bởi cố vấn âm nhạc Jaz-O “Hawaiian Sophie”. Một bức ảnh polaroid ghi lại hình ảnh của Jay-Z trong tư thế ngồi xổm, đang flexing với dây chuyền vàng bự chà bá và tất nhiên là không thể thiếu đôi Air Jordan 4 “Black Cement” rất thời thượng. Bức ảnh này được chụp bởi trợ lý phục trang của đài NBC, xuất hiện trên Internet trong nhiều năm liền. Tác giả của bức ảnh cuối cùng cũng đã được retailer Concepts tìm ra.
                </p>
              </li>
            </ol>
          </div>
          <div class="blog-navigation d-flex justify-content-between">
            <Link to='/blog-detail' class="blog-navigation-left">
              <i class="bi bi-arrow-left"></i>
              <span>Bài trước</span>
            </Link>
            <Link to='/blog-detail' class="blog-navigation-right">
              <span>Bài sau</span>
              <i class="bi bi-arrow-right"></i> 
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
