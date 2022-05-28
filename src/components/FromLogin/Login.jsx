import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLoginMutation} from '../../services/user.service';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
export default function Login({modal,handleModal,func,handleSetFunc}) {
  const navigate = useNavigate()

  const [login,{data,error,isLoading}] = useLoginMutation();

  useEffect(() =>{
    if(data){
      navigate("/users")
      handleModal(!modal)
    }
  },[data])
  useEffect(()=>{
    {error &&  (
      toast.success(`Tên đăng nhập hoặc mật khẩu khẩu không chính xác`,{
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    )}
  },[error])
  const {register,handleSubmit,formState:{errors},reset} = useForm()
  const onSubmit = (data) => {
    console.log(data);
    login({
      email : data.email,
      password :data.password
    })
    reset()
  }
  return (
    <div className={func? "modal__login hide" : "modal__login"}>
      <h3 className="heading-1 text-center">ĐĂNG NHẬP</h3>
      <form onSubmit={handleSubmit(onSubmit)}>

        {errors.email?.type === "required" && <p className='text-danger'>Nhập địa chỉ email !</p>}  
        {errors.email?.type === "pattern" && <p className='text-danger'>Email chưa đúng định dạng</p>}  
        <input 
          type="text" 
          placeholder="Email:"
          name="email" 
          {...register("email",{required:true,pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g})}
          
        />
        
        {errors.password?.type === "required" && <p className='text-danger'>Nhập mật khẩu</p>}
        {errors.password?.type === "minLength" && <p className='text-danger'>Mật khẩu phải có độ dài lớn hơn 8 kí tự</p>}
        <input 
          type="password" 
          placeholder="Mật khẩu:" 
          name="password" 
          {...register ("password",{required:true,minLength:8})}
        />
        
        <button type='submit' className="btn--primary" >ĐĂNG NHẬP</button>
      </form>
      <button className="btn--white mt-5 mode-register" onClick={handleSetFunc}>ĐĂNG KÝ MỚI</button>
    </div>
  )
}

