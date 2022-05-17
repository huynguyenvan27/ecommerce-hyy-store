import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRegisterMutation } from '../../services/user.service'
import { toast } from 'react-toastify';

export default function Register({func,handleSetFunc}) {
  const [register,{data,isLoading,error}] = useRegisterMutation();
  const [user,setUser] = useState({
    email : "" ,
    name : "", 
    age : "",
    password : ""
    })

  const handleChange = (e) => {
    setUser ({
      ...user,
      [e.target.name] : e.target.value
    })
  }
  useEffect(()=>{
    if(data){
      handleSetFunc(!func)
      toast.success(`Tạo tài khoản thành công`,{
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    }
  },[data])


  const handleError = () => {
    if (error.data.includes(user.email) && user.email){
      return "Tài khoản email đã tồn tại"
    }else if(error.data.includes("Email is invalid") && user.email){
      return "Tài khoản email không hợp lệ"
    }else if(error.data.includes("password") && user.password){
      return "Mật khẩu phải lớn hơn 7 kí tự"
    }else if(error.data.includes("is required")){
      return("Không được để trống")
    }
  }
  const handleRegister = () => {
    register(user)
  }
  return (
      <div className={func? "modal__register block" : "modal__register"}>
        <h3 className="heading-1 text-center">TẠO TÀI KHOẢN</h3>
        {error && (
        <p style={{ color: 'red',fontSize:"1.2rem" }} >
          {error.status === 400
            ? handleError()
            : 'Cannot connect to server!'}
        </p>
        )}  
        <div>
          <input type="text" name='email'  placeholder="Email:" onChange={handleChange}/>
          <input type="text" name='name'  placeholder="Họ và tên:" onChange={handleChange}/>
          <input type="password" placeholder="Mật khẩu:" name="password" onChange={handleChange}/>
          <button type='submit' className="btn--primary" onClick={handleRegister}>TẠO TÀI KHOẢN</button>
        </div>
        <button className="btn--white mt-5 mode-login" onClick={handleSetFunc}>QUAY LẠI ĐĂNG NHẬP</button>
      </div>
  )
}
