import React, { useEffect } from 'react'
import './user.css'
import { useDispatch,useSelector } from 'react-redux';
import { selectUser } from '../../store/slices/user.slice';
import { logout } from '../../store/slices/user.slice';
import Loading from '../../components/Loading/Loading';
import { useGetUserQuery } from '../../services/user.service';
import { useNavigate } from 'react-router-dom';
export default function User() {
  const user = useSelector(selectUser)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {data,isLoading,error} = useGetUserQuery()
  const handleLogout = () => {
    dispatch(logout());
    navigate("/")
  }
  return (
    <div id="user">
      {isLoading?
      <Loading/>
      :<>
          <h1 className='text-center mb-4'>Thông tin tài khoản</h1>
          <div className="container">
            <p className='text'>Email: {data.email}</p>
            <p className='text'>Tên: {data.name}</p>
            <p className='text'>Số điện thoại: {data.age}</p>
            <button className='btn--primary' onClick={handleLogout}>
              Đăng xuất
            </button>
          </div>
      </>
          }
    </div>
  )
}

