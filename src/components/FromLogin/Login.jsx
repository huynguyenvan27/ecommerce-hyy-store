import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLoginMutation} from '../../services/user.service';
import { useNavigate } from 'react-router-dom';
export default function Login({modal,handleModal,func,handleSetFunc}) {
  const navigate = useNavigate()

  const [login,{data,error,isLoading}] = useLoginMutation();
  const [user,setUser] = useState({
    email : "",
    password : ""
  })
  const [message,setMessage] = useState("")

  const handleChange = (e) => {
    setUser({
        ...user,
        [e.target.name] : e.target.value
      }
    )
  }
  useEffect(() =>{
    if(data){
      navigate("/users")
      handleModal(!modal)
    }
  },[data])

  const handleLogin = () => {
    login(user)
    setMessage("")
  }
  return (
    <div className={func? "modal__login hide" : "modal__login"}>
      <h3 className="heading-1 text-center">ĐĂNG NHẬP</h3>
      {error && (
      <p style={{ color: 'red',fontSize:"1.2rem" }}>
        {error.status === 400
          ? "Tên tài khoản, khẩu không chính xác"
          : 'Cannot connect to server!'}
      </p>
      )}
      <div>
        <input type="text" placeholder="Email:" name="email" onChange={handleChange}/>
        <input type="password" placeholder="Mật khẩu:" name="password" onChange={handleChange}/>
        <button type='submit' className="btn--primary" onClick={handleLogin}>ĐĂNG NHẬP</button>
      </div>
      <button className="btn--white mt-5 mode-register" onClick={handleSetFunc}>ĐĂNG KÝ MỚI</button>
    </div>
  )
}

