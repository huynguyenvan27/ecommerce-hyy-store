import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import Login from './Login';
import Register from './Register';
import './formlogin.css'

const FormLogin = ({modal,handleModal}) => {
  const [func,setFunc] = useState(false)
  const handleSetFunc = () => {
    setFunc(!func)
  }
  return (
    <div id="myModal" className={modal? "modal lock" : "modal"}>
      <div className="modal-content">
        <div className="close-modal">
          <i className="bi bi-x-square-fill"  onClick={handleModal}></i>
        </div>
          <Login modal={modal} handleModal={handleModal} func={func} handleSetFunc={handleSetFunc}/>
          <Register func={func} handleSetFunc={handleSetFunc}/>
      </div>
    </div>
  )
}

export default FormLogin;