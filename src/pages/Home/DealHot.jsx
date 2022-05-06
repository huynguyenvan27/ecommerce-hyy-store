import { useState,useEffect,useRef } from "react";
const DealHot = () =>{

  const countDate = new Date("August 17, 2050 00:00:00").getTime();
  const currentTime = new Date().getTime();
  const gap = countDate - currentTime
  
  const [timer,setTimer] = useState(countDate - currentTime)

  const millisecond = 1;
  const second = millisecond * 1000;
  const minutes = second * 60;
  const hour = minutes * 60;
  const day = hour * 24;

  
  const textHour = Math.floor((gap % day) / hour);
  const textMinutes = Math.floor((gap % hour) / minutes);
  const textSecond = Math.floor((gap % minutes) / second);


  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(countDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDate])


  // console.log(textHour,textMinutes,textSecond);
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
                
                <span className="text-center deal-hour">{textHour}</span>
                <span className=" text-center deal-minute">{textMinutes}</span>
                <span className="text-center deal-second">{textSecond}</span>
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