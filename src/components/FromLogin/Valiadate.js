import React from 'react'

export default function Valiadate({values}) {
  
  let errors = {}

  if(!values.email){
    errors.email = "Nhập địa chỉ email !"
  }else if(!/\S+@\S+\.\S+/.test(values.email)){
    errors.email = "Địa chỉ email không hợp lệ !"
  }

  if(!values.name.trim()){
    errors.name = "Nhập tên tài khoản !"
  }

  if(!values.password) {
    errors.password = "Nhập mật khẩu !"
  }else if (values.password.length < 6) {
    errors.password = 'Mật khẩu phải có độ dài lớn hơn 6 kí tự !';
  }

  if (!values.password2) {
    errors.password2 = 'Nhập lại mật khẩu !';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Mật khẩu không đúng !';
  }

  return errors;
}
