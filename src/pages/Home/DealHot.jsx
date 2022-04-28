
const DealHot = () =>{

  return(
    <div id="hot-deal">
      <div className="container-fuild">
        <div className="row">
          <div className="deal-info d-flex flex-column text-center justify-content-center col-lg-6 col-md-6 col-sm-12 mb-5">
            <div>
              <h1 className="deal-title">DEAL
                <br/>TRONG NGÀY
              </h1>
              <span className="deal-times ">
                <span className="text-center deal-hour">24</span>
                <span className=" text-center deal-minute">0</span>
                <span className="text-center deal-second">0</span>
              </span>
            </div>
            <div className="deal-name">
              <span>SEGA x PUMA RS-0 -Sonic</span>
              <span className="color--red">SALE 50%</span>
            </div>
            <div className="price-of-deal">
              <span className="price-current"> 1,250,000đ</span>
              <span className="price-old">2,500,000đ</span>
            </div>
            <button className="btn--primary d-flex mx-auto">CHI TIẾT</button>
          </div>
          <div className="deal-shoe col-lg-6 col-md-6 col-sm-12">
            <img src="/image/deal.webp" alt="deal"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DealHot;