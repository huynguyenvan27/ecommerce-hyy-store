import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLogupMutation } from '../../services/user.service'
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

export default function Register({func,handleSetFunc}) {
  const [logup,{data,isLoading,error}] = useLogupMutation();
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

  const {register,handleSubmit,formState:{errors}} = useForm()

  // useEffect(()=>{
  //   if (error){
  //     console.log(error);
  //     {error.data.includes('todo-list.users index: email_1 dup key')  &&  (
  //       toast.success(`Email đã được sử dụng`,{
  //         position: "top-center",
  //         autoClose: 1000,
  //         hideProgressBar: true,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       })
  //     )}
  //   }
  // },[error])
  const look =   {
    email : "kt3@gmail.com" ,
    name : "dfasdfasdfasdf", 
    age : "12",
    password : "fasdfasdfasdfasdf"
    };

  const onSubmit = (data) => {
    logup({
      email: data.email,
      password : data.password,
      name : data.name
    })
 
  }


  return (
      <div className={func? "modal__register block" : "modal__register"}>
        <h3 className="heading-1 text-center">TẠO TÀI KHOẢN</h3>
       
        <form onSubmit = {handleSubmit(onSubmit)}>
          {errors.email?.type === "required" && <p className='text-danger'>Nhập địa chỉ email !</p>}  
          {errors.email?.type === "pattern" && <p className='text-danger'>Email chưa đúng định dạng</p>}  
          <input 
            type="text" 
            name='email'  
            placeholder="Email:" 
            {...register("email",{required:true,pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g})}
            />
          {errors.name?.type === "required" && <p className='text-danger'>Nhập tên tài khoản</p>}
          <input 
            type="text" 
            name='name'  
            placeholder="Họ và tên:" 
            {...register("name",{required:true})}
          />
          {errors.password?.type === "required" && <p className='text-danger'>Nhập mật khẩu</p>}
          {errors.password?.type === "minLength" && <p className='text-danger'>Mật khẩu phải có độ dài lớn hơn 8 kí tự</p>}
          <input 
            type="password" 
            placeholder="Mật khẩu:" 
            name="password" 
            {...register ("password",{required:true,minLength:8})}
            />
          <button type='submit' className="btn--primary">TẠO TÀI KHOẢN</button>
        </form>
        <button className="btn--white mt-5 mode-login" onClick={handleSetFunc}>QUAY LẠI ĐĂNG NHẬP</button>
      </div>
  )
}
