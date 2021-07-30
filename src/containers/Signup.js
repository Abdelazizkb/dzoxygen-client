import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../actions/auth';
import PrimaryButton from '../components/PrimaryButton';
import { FaCheck } from "react-icons/fa";
import Done from '../components/Done';







const Signup = ({ signUp, isAuthenticated }) => {
    const [formData, setFormData] = useState({});

    const [errors, setErrors] = useState({}) 

    const [registred, setRegistred] = useState(false)

    const { email,name,password,re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });










    const handleValidation=()=>{
      let fields = formData;
      let errors = {};
      let formIsValid = true;
    
      //Name
      if(!fields["name"]){
         formIsValid = false;
         errors["name"] = "أدخل إسم المستخدم";
      }
    
      if(typeof fields["name"] !== "undefined"){
         if(!fields["name"].match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors["name"] = "إسم يجب أن يحتوي حروف فقط";
         }        
      }
    
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

     if(!fields["agreement"]){
         formIsValid = false;
          errors["agreement"] = "يرجى منكم الموافقة على شروط الإستعمال";
     }
 
   if(typeof fields["agreement"] !== "undefined"){
      if(!fields["agreement"]){
         formIsValid = false;
         errors["agreement"] = "يرجى منكم الموافقة على شروط الإستعمال";
        }        
    }


     setErrors(errors);
     return formIsValid;
    }
    


    const onSubmit = e => {
        e.preventDefault();

        if(handleValidation()){
          signUp(email,name,password,re_password);
          setRegistred(!registred)
        }
        console.log('error',errors)
    };



    if (isAuthenticated)
        return <Redirect to='/' />;
    
    if(registred)
        return (
           <Done>  تمت عملية التسجيل بنجاح يرجى منكم تفقد بريدكم الإلكتروني 
           لتفعيل حسابكم</Done> 
       ) 

    return (
    <div className="w-full sm:w-96 flex shadow-lg flex-col mx-auto mt-24 self-center bg-cover bg-center justify-content-end bg-white p-6 rounded-4 pt-8 pb-8 mb-20">
        <div className="text-center text-2xl text-bold mb-6">
          <h2> إنشاء حساب
          </h2>
        </div>
        <div className="w-full flex flex-col items-end">
            <input name='email' dir="rtl" lang='ar' className="bg-transparent border-b mx-auto block border-gray-500 w-full my-6 text-gray-500 pb-1" type="email"
                   placeholder="البريد الإلكتروني" onChange={e=>onChange(e)}/>
             <span style={{color: "red"}}>{errors["email"]}</span>

            <input name='name' dir="rtl" lang='ar' className="bg-transparent border-b mx-auto block border-gray-500 w-full my-6 text-gray-500 pb-1" type="text"
                    placeholder="إسم المستخدم" onChange={e=>onChange(e)}/>
            <span style={{color: "red"}}>{errors["name"]}</span>

            <input  name='password' dir="rtl" lang='ar' className="bg-transparent border-b mx-auto block border-gray-500 w-full my-6 text-gray-500 pb-1"  type="password"
                   placeholder="كلمة المرور" onChange={e=>onChange(e)}/> 
            <span style={{color: "red"}}>{errors["password"]}</span>
  
            <input name='re_password'dir="rtl" lang='ar' className="bg-transparent border-b mx-auto block border-gray-500 w-full my-6 text-gray-500 pb-1" type="password"
                   placeholder="تأكيد كلمة المرور " onChange={e=>onChange(e)}/>   
            <span style={{color: "red"}}>{errors["re_password"]}</span>
         
            <div className="flex">
              <span className="flex text-grey">
                <a href="#" className=" no-underline text-teal-500 hover:text-teal-400 mr-1">شروط الإستعمال
                </a>
                <p> الموافقة  على</p> 

              </span>
              <input type="checkbox" className="ml-2 mt-1" name="agreement" value="agree" onChange={e=>onChange(e)}/>
            </div>
            <span className="my-1" style={{color: "red"}}>{errors["agreement"]}</span>

              <span className="w-full mt-6 mb-3 flex justify-center" onClick={e=>onSubmit(e)}>
                 <PrimaryButton text='تسجيل الإشتراك'/>
              </span>
        </div>
        
        <div className=" w-full justify-center flex">
           <Link to='/login'
              className="no-underline mb-1 text-blue-500 text-lg hover:text-teal-400">سجل الدخول
          </Link>
          <p >لديك حساب؟؟
          </p>
        </div>
    </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signUp })(Signup);


