import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import PrimaryButton from '../components/PrimaryButton';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const { email, password } = formData;
    
     
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        login(email, password);
        setInterval( setErrors({"password":"تأكد من المعلومات"}),7000)
       
    };
    

    if (isAuthenticated)
        return <Redirect to='/' />;
    
    return (
    <div className="w-full sm:w-96 mb-64   flex shadow-lg flex-col mx-auto mt-24 self-center bg-cover bg-center justify-content-end bg-white p-6 rounded-4 pt-8 pb-8">
       <div className="text-center text-2xl text-bold mb-6">
          <h2> تسجيل الدخول
          </h2>
       </div>
       <div className="w-full flex flex-col items-end">
          <input name="email" dir="rtl" lang='ar' className="bg-transparent border-b mx-auto block border-gray-500 w-full my-6 text-gray-500 pb-1" type="text"
          placeholder="البريد الإلكتروني" onChange={e=>onChange(e)}/>
          <input name="password"  dir="rtl" lang='ar' className="bg-transparent border-b mx-auto block border-gray-500 w-full my-6 text-gray-500 pb-1" type="password"
          placeholder="كلمة المرور" onChange={e=>onChange(e)}/>
          <span style={{color: "red"}}>{errors["password"]}</span>
          <div className="flex">
              <p className="flex text-grey">
                  <a href="#"  className=" no-underline text-teal-500 hover:text-teal-400 mr-1">شروط الإستعمال
                  </a>
                  <p> الموافقة  على</p>
              </p>
              <input type="checkbox" className="ml-2 mt-1" name="agreement" value="agree"/>
          </div>
          <span className="w-full mt-6 mb-3 flex justify-center" onClick={e=>onSubmit(e)}>
              <PrimaryButton text='تسجيل الدخول'/>
          </span>
        </div>
        <div className=" w-full justify-center flex border-b-2 mb-1">
              <Link to="/reset_password"
                  className="no-underline mb-1 text-blue-500 text-lg hover:text-teal-400">نسيت كلمة المرور ؟
              </Link>
        </div>
        <div className=" w-full justify-center flex">
              <Link to="/signup"
                  className="no-underline mb-1 text-blue-500 text-lg hover:text-teal-400">سجل الأن
              </Link>
              <p >ليس لديك حساب؟؟
              </p>
        </div>
    </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);