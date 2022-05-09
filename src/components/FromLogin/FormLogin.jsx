import { useState } from 'react'
import { useNavigate } from "react-router";
import { useSigninMutation } from '../../services/user.service'
import './formlogin.css'

const FormLogin = ({modal,handleModal}) => {
  const [func,setFunc] = useState(false)
  const handleSetFunc = () => {
    setFunc(!func)
  }


  // const [signin] = useSigninMutation();
  // const navigate = useNavigate();

  // const [user, setUser] = useState({
  //     username: "",
  //     password: "",
  // });

  // const handleChange = (e) => {
  //     setUser({
  //         ...user,
  //         [e.target.name]: e.target.value,
  //     });
  // };

  // const handleSubmit = (e) => {
  //     e.preventDefault();

  //     signin(user)
  //         .then(() => {
  //             navigate("/home");
  //         })
  //         .catch(() => {});
  // };

  return (
    <div id="myModal" className={modal? "modal lock" : "modal"}>
    <div className="modal-content">
      <div className="close-modal" onClick={handleModal}>
        <i className="bi bi-x-square-fill"></i>
      </div>
      <div className={func? "modal__register block" : "modal__register"}>
        <h3 className="heading-1 text-center">TẠO TÀI KHOẢN</h3>
        <form action="">
          <input type="text" placeholder="Họ và tên:"/>
          <input type="email" placeholder="Email:"/>
          <input type="password" placeholder="Mật khẩu:" autoComplete="on"/>
          <input type="password" placeholder="Nhập lại mật khẩu:" autoComplete="on"/>
        </form>
        <button className="btn--primary">TẠO TÀI KHOẢN</button>
        <button className="btn--white mt-5 mode-login" onClick={handleSetFunc}>QUAY LẠI ĐĂNG NHẬP</button>
      </div>
      <div className={func? "modal__login hide" : "modal__login"}>
        <h3 className="heading-1 text-center">ĐĂNG NHẬP</h3>
        <form action="">
          <input type="email" placeholder="Email:"/>
          <input type="password" placeholder="Mật khẩu:" autoComplete="on"/>
        </form>
        <a href="" className="">Quên mật khẩu?</a>
        <button className="btn--primary">ĐĂNG NHẬP</button>
        <button className="btn--white mt-5 mode-register" onClick={handleSetFunc}>ĐĂNG KÝ MỚI</button>
      </div>
    </div>
  </div>
  )
}

export default FormLogin;