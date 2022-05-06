import Modal from "react-modal/lib/components/Modal";

const FormLogin = () => {
  return (
    <div id="myModal" class="modal">
    <div class="modal-content">
      <div class="close-modal">
        <i class="bi bi-x-square-fill"></i>
      </div>
      <div class="modal__register">
        <h3 class="heading-1 text-center">TẠO TÀI KHOẢN</h3>
        <form action="">
          <input type="text" placeholder="Họ và tên:"/>
          <input type="email" placeholder="Email:"/>
          <input type="password" placeholder="Mật khẩu:" autocomplete="on"/>
          <input type="password" placeholder="Nhập lại mật khẩu:" autocomplete="on"/>
        </form>
        <button class="btn--primary">TẠO TÀI KHOẢN</button>
        <button class="btn--white mt-5 mode-login" onclick="modeLogin()">QUAY LẠI ĐĂNG NHẬP</button>
      </div>
      <div class="modal__login">
        <h3 class="heading-1 text-center">ĐĂNG NHẬP</h3>
        <form action="">
          <input type="email" placeholder="Email:"/>
          <input type="password" placeholder="Mật khẩu:" autocomplete="on"/>
        </form>
        <a href="" class="">Quên mật khẩu?</a>
        <button class="btn--primary">ĐĂNG NHẬP</button>
        <button class="btn--white mt-5 mode-register" onclick="modeRegister()">ĐĂNG KÝ MỚI</button>
      </div>
    </div>
  </div>
  )
}

export default FormLogin;