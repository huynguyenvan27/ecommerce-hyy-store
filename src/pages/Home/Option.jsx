import { Link } from "react-router-dom";

const Option = () =>{
  
  return(
    <div id="option-sex">
      <div className="container-fuild">
        <div className="row">
          <Link to="/sneaker" className="col-lg-6 col-12 col option-sex-item">
            <img src="/image/men.jpg" alt="Giày nam"/>
            <h1>Giày nam</h1>
          </Link>
          <Link to="/sneaker" className="col-lg-6 col-12 col option-sex-item">
            <img src="/image/women.jpg" alt="Giày nữ"/>
            <h1>Giày nữ</h1>
          </Link>
        </div>
      </div>
    </div>
    )
}

export default Option;