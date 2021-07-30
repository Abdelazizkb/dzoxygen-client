
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetPasswordConfirm } from '../actions/auth';
import PrimaryButton from '../components/PrimaryButton';

const ResetPasswordConfirm = ({match, resetPasswordConfirm, isAuthenticated }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({});
    const uid = match.params.uid;
    const token = match.params.token;
    const [errors, setErrors] = useState({}) 
    const {re_password, password } = formData;



    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });



    const handleValidation=()=>{
        let fields = formData;
        let errors = {};
        let formIsValid = true;
      
        if(!fields["password"]){
            formIsValid = false;
            errors["password"] = "أدخل كلمة المرور";
        }
     
        if(typeof fields["password"] !== "undefined"){
           if(fields["password"].length<6){
              formIsValid = false;
              errors["password"] = "كلمة المرور من 6 إحرف على الأفل";
            }        
        }
  
       if(!fields["re_password"]){
           formIsValid = false;
            errors["re_password"] = "تأكيد كلمة المرور";
        }
   
      if(typeof fields["re_password"] !== "undefined" && typeof fields["password"] !== "undefined"){
          if(fields["password"].localeCompare(fields["re_password"])){
             formIsValid = false;
             errors["re_password"] = "كلمة المرور غير متطابقة";
            }        
        }
  
       setErrors(errors);
       return formIsValid;
      }
      



    const onSubmit = e => {
        e.preventDefault();
        if(handleValidation()){
            resetPasswordConfirm(uid,token,re_password, password);
            setRequestSent(!requestSent)
        }
    };





    if (isAuthenticated ||requestSent )
        return <Redirect to='/' />;
    
    return (
    <div className="w-full sm:w-96 mb-72   flex shadow-lg flex-col mx-auto mt-24 self-center bg-cover bg-center justify-content-end bg-white p-6 rounded-4 pt-8 pb-8">
        <div className="text-center text-2xl text-bold mb-6">
          <h2>  
              تغيرر كلمة المرور
          </h2>
        </div>
        <div className="w-full flex flex-col items-end">
            <input name="password" dir="rtl" lang='ar' className="bg-transparent border-b mx-auto block border-gray-500 w-full my-6 text-gray-500 pb-1" type="password"
                   placeholder=" كلمة المرور" onChange={e => onChange(e)}/>
             <span style={{color: "red"}}>{errors["password"]}</span>

            <input name="re_password" dir="rtl" lang='ar' className="bg-transparent border-b mx-auto block border-gray-500 w-full my-6 text-gray-500 pb-1" type="password"
                   placeholder=" تأكيد كلمة المرور " onChange={e => onChange(e)}/>       
             <span style={{color: "red"}}>{errors["re_password"]}</span>

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


export default connect(mapStateToProps, { resetPasswordConfirm })(ResetPasswordConfirm);


