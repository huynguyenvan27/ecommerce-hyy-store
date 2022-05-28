import React from 'react';
import { Formik, Field, Form } from 'formik';
import './contactFrom.css'
import * as Yup from 'yup';

const ContactForm = () => {

    return (
        <Formik
            initialValues={{ name: '', email: '', address: '', phone: '',message: '' }}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values)
                setTimeout(() => {
                    setSubmitting(false);
                }, 1000);
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
                .required("Điền địa chỉ!"),
              message: Yup.string()
                .required("Điền ghi chú!"),
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
                        <label className='form-label' htmlFor="address">Địa chỉ :</label>
                        <Field name="address" className={(formik.touched.address && formik.errors.address) ? 'form-control is-invalid' : 'form-control'} type="text" />
                        {formik.touched.address && formik.errors.address ? (
                            <div className="invalid-feedback">{formik.errors.address}</div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label className='form-label' htmlFor="message">Ghi chú :</label>
                        <Field name="message"  as="textarea" rows={3} cols={10} className={(formik.touched.message && formik.errors.message) ? 'form-control is-invalid' : 'form-control'} type="text"/>
                        {formik.touched.message && formik.errors.message ? (
                            <div className="invalid-feedback">{formik.errors.message}</div>
                        ) : null}
                    </div>

                    <div className="form-group d-flex justify-content-center align-items-center mt-5">
                        <button type="submit" className="btn--primary" disabled={isSubmitting}>Gửi thông tin</button>
                       
                    </div>

                </Form>
            )
            }
        </Formik >
    );
};
export default ContactForm;