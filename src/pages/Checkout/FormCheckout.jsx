import React, { useEffect, useState } from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function FormCheckout() {
  const [location,setLocation] = useState([])
  useEffect( ()=>{
    fetch('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
    .then(response => response.json())
    .then(data => setLocation(data))
    }
  ,[])
  const [city,setCity] = useState(null)
  const [district,setDistrict]= useState(null)
  const [commune,setCommune] = useState(null)
  const [message,setMeesage] = useState(false)
  const [message1,setMeesage1] = useState(false)
  const [message2,setMeesage2] = useState(false)
  const handleCity = (e) => {
    setCity(e.target.value)
    setMeesage(false)
  }
  const handleDistict =(e) => {
    setDistrict(e.target.value)
    setMeesage1(false)
  }
  const handleCommune =(e) => {
    setCommune(e.target.value)
    setMeesage2(false)
  }
  const result = location.find(item => item.Name == city)

  const result1 = result?.Districts.find(item => item.Name == district)

  const handleMessage = () => {
    if(!city) {
      setMeesage(true)
    }else{
      setMeesage(false)
    }
    if(!district) {
      setMeesage1(true)
    }else{
      setMeesage1(false)
    }
    if(!commune) {
      setMeesage2(true)
    }else{
      setMeesage2(false)
    }
  }
  return (
    <div>
              <Formik
            initialValues={{ name: '', email: '', address: '', phone: '' }}
            onSubmit={(values, { setSubmitting }) => {
             if(city&&district&&commune){
                  toast.success(`
                  Đặt hàng thành công`,{
                  position: "top-center",
                  autoClose: 3000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined,
                });
             }
            }}
            validationSchema={Yup.object({
              name: Yup.string()
                .min(2, "Điền đầy đủ họ tên")
                .required("Nhập họ và tên !"),
              email: Yup.string()
                .email("Địa chỉ email không hợp lệ")
                .required("Nhập địa chỉ email !"),
              phone: Yup.string()
                .matches(/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/, 'Số điện thoại không hợp lệ')
                .required("Nhập số điện thoại !"),
              address: Yup.string()
                .required("Điền địa chỉ !"),

            })}
        >
            {(formik, isSubmitting) => (
                <Form>
                    <div className="form-group">
                        <label className='form-label' htmlFor="name">Họ và tên :</label>
                        <Field name="name" className={(formik.touched.name && formik.errors.name) ? 'form-control is-invalid' : 'form-control'} type="text" />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="invalid-feedback">{formik.errors.name}</div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label className='form-label' htmlFor="email">Email :</label>
                        <Field name="email" className={(formik.touched.email && formik.errors.email) ? 'form-control is-invalid' : 'form-control'} type="email" />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="invalid-feedback">{formik.errors.email}</div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label className='form-label' htmlFor="phone">Số điện thoại :</label>
                        <Field name="phone" className={(formik.touched.phone && formik.errors.phone) ? 'form-control is-invalid' : 'form-control'} type="phone" />
                        {formik.touched.phone && formik.errors.phone ? (
                            <div className="invalid-feedback">{formik.errors.phone}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                      <select
                         className={message ? 'form-select is-invalid' : 'form-select'}
                         onChange = {(e) => handleCity(e)}
                         id = "city"
                         name = "city"
                         value = {city }
                      >   
                        <option  value={null}>Chọn Tỉnh/thành phố</option>
                        {
                          location.map(item=>{
                            return <option value= {item.Name} key={item.id} >{item.Name}</option>
                          })
                          
                        }
                      </select>
                      {message ? (
                            <div className="invalid-feedback">Chọn Tỉnh/Thành phố</div>
                        ) : null}
                      <select
                         className={message1? 'form-select is-invalid' : 'form-select'}
                         id = "district"
                         name = "district"
                         onChange = {(e) => handleDistict(e)}
                         value = {district}
                      >
                          <option >Chọn Quận/Huyện</option>
                          {
                            result?.Districts.map(item => {
                              return <option value= {item.Name} key={item.id} >{item.Name}</option>
                            })
                          }
                      </select>
                      {message1 ? (
                            <div className="invalid-feedback">Chọn Quận/Huyện</div>
                        ) : null}
                      <select
                         className={message2? 'form-select is-invalid' : 'form-select'}
                         id = "commune"
                         name = "commune"
                         value = {commune}
                         onChange = {(e)=>handleCommune(e)}
                      >
                             <option >Chọn Xã/Phường</option>
                          {
                            result1?.Wards.map(item => {
                              return <option value= {item.Name} key={item.id} >{item.Name}</option>
                            })
                          }
                      </select>
                      {message2 ? (
                            <div className="invalid-feedback">Chọn Xã/Phường</div>
                        ) : null}
                    </div>        
                    <div className="form-group">
                        <label className='form-label' htmlFor="address">Địa chỉ :</label>
                        <Field name="address" className={(formik.touched.address && formik.errors.address) ? 'form-control is-invalid' : 'form-control'} type="text" />
                        {formik.touched.address && formik.errors.address ? (
                            <div className="invalid-feedback">{formik.errors.address}</div>
                        ) : null}
                    </div>
                    

                    <div className="form-group d-flex justify-content-center align-items-center mt-5">
                        <button type="submit" className="btn--primary" onClick={handleMessage} disabled={isSubmitting}>Đặt hàng</button>
                       
                    </div>

                </Form>
            )
            }
        </Formik >
        <ToastContainer style={{fontSize:"1.6rem"}}/>
    </div>
  )
}
