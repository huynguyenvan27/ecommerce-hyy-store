
import './contact.css'
import ContactForm from '../../components/ContactForm/ContactForm';
const Contact = () =>{

  return( 
    <div className="content-page">
    <h1 className="text-center heading-page">Chào mừng đến với Hyy store</h1>
    <div className="container">
      <div className="row">
        <div className="col col-lg-6 col-12">
          <h1 className="heading-1 line-seperate">STORE</h1>
          <p className="text">
            <a href="https://goo.gl/maps/3ZgBBednrBUQfaWc6" >Store 1: Số 9a, 44 Trần Thái Tông</a>
          </p>
          <p className="text">
            <a href="https://goo.gl/maps/BY7bJQ8ZdkEM9r2b9" >Store 2: Số 27, 30 Trương Định</a>
          </p>
          <div className="contact-img">
            <img src="../image/store-1.jpg" alt=""/>
          </div>
        </div>
        <div className="col col-lg-6 col-12 mt-md-5 mt-lg-0 mt-sm-5 mt-5">
         
          <h1 className="heading-1 line-seperate">Thông tin liên hệ:</h1>
          <ContactForm />
        </div>

      </div>
    </div>
    <div className="contact-map container-fuild">
      <h1 className="heading-1 text-center">
        Địa chỉ
      </h1>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9229690516377!2d105.7874095148835!3d21.035767985994564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab49dd21ac4d%3A0xe95b1cd57e261798!2zOSBUcuG6p24gVGjDoWkgVMO0bmcsIEThu4tjaCBW4buNbmcsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1644380244639!5m2!1svi!2s" style={ { height:"450px" ,border:"0" , loading:"lazy" }}></iframe>
      </div>
    </div>

  </div>
  )
}


export default Contact;