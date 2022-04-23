
const DealHot = () =>{

  return(
    <div id="hot-deal">
      <div class="container-fuild">
        <div class="row">
          <div class="deal-info d-flex flex-column text-center justify-content-center col-lg-6 col-md-6 col-sm-12 mb-5">
            <div>
              <h1 class="deal-title">DEAL
                <br/>TRONG NGÀY
              </h1>
              <span class="deal-times ">
                <span class="text-center deal-hour">24</span>
                <span class=" text-center deal-minute">0</span>
                <span class="text-center deal-second">0</span>
              </span>
            </div>
            <div class="deal-name">
              <span>SEGA x PUMA RS-0 -Sonic</span>
              <span class="color--red">SALE 50%</span>
            </div>
            <div class="price-of-deal">
              <span class="price-current"> 1,250,000đ</span>
              <span class="price-old">2,500,000đ</span>
            </div>
            <button class="btn--primary d-flex mx-auto">CHI TIẾT</button>
          </div>
          <div class="deal-shoe col-lg-6 col-md-6 col-sm-12">
            <img src="/image/deal.webp" alt="deal"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DealHot;