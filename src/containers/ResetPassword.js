
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetPassword } from '../actions/auth';
import PrimaryButton from '../components/PrimaryButton';
import { FaCheck } from "react-icons/fa";
import Done from '../components/Done';


const ResetPassword = ({ resetPassword,isAuthenticated }) => {
    const [Confirmed, setConfirmed] = useState(false) 
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({}) 


    const {email} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleValidation=()=>{
        let fields = formData;
        let errors = {};
        let formIsValid = true;
      

        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "أدخل البريد الإلكتروني";
        }
      
        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');
      
           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "يرجى منكم إدخال بريد إلكتروني حقيقي";
            }
       }     
       
       setErrors(errors);
       return formIsValid;
       
      }





    const onSubmit = e => {
        e.preventDefault();
        if(handleValidation()){
            resetPassword(email);
            setConfirmed(!Confirmed)
        }

    };

    if (isAuthenticated)
        return <Redirect to='/' />;
        
    if(Confirmed)
        return (
        <Done>
             يرجى منكم تفقد بريدكم الإلكتروني
            لتفعيل حسابكم
        </Done>
       ) 
    return (
   <div className="w-full sm:w-96 mb-96   flex shadow-lg flex-col mx-auto mt-24 self-center bg-cover bg-center justify-content-end bg-white p-6 rounded-4 pt-8 pb-8">
        <div className="text-center text-2xl text-bold mb-6">
          <h2>  
              إسترجاع كلمة المرور
          </h2>
        </div>
        <div className="w-full flex flex-col items-end">
            <input name="email" dir="rtl" lang='ar' className="bg-transparent border-b mx-auto block border-gray-500 w-full my-6 text-gray-500 pb-1" type="email"
                   placeholder="البريد الإلكتروني" onChange={e=>onChange(e)} required/>
             <span style={{color: "red"}}>{errors["email"]}</span>

              <span className="w-full mt-6 mb-3 flex justify-center" onClick={e=>onSubmit(e)}>
                 <PrimaryButton text='تأكيد'/>
              </span>
        </div>

    </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { resetPassword })(ResetPassword);


