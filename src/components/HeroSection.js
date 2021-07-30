import React from 'react';
import ss from '../img/ss.png'
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import { Link  } from 'react-router-dom';
import { connect } from 'react-redux';

function HeroSection({isAuthenticated}) {

    const authLinks = (
      <Link to="/add_post"
        className="no-underline mb-1 text-blue-500 text-lg hover:text-teal-400"> 
       <PrimaryButton text=' إضافة إعلان '/>
      </Link>  
     );

     const guestLinks = (
            <>
               <Link to="/login"
                   className="no-underline mb-1 text-blue-500 text-lg hover:text-teal-400"> 
                    <PrimaryButton text='تسجيل الدخول '/>
              </Link>   
               <Link to="/signup"
                    className="no-underline mb-1 text-blue-500 text-lg hover:text-teal-400 mx-2"> 
                   <SecondaryButton text='تسجيل الاشتراك'/>
               </Link>  
           </>
          );

    return (
    <div className="lg:flex flex-row justify-around md:px-24 md:py-16  px-6  py-4 ">
      <div className="hidden lg:block">
        <img src={ss} width="630" height="498"/>
      </div>
      <div className="lg:p-10 my-auto">
        <h1 className="text-4xl xl:text-5xl text-center font-semibold">
        «وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا»
        </h1>
        <p className="lg: py-10 px-4 text-center ">
          موقع للبحث عن قارورات الاكسجين لمرضى كورونا عبر مختلف التراب الجزائري
          , متحدون معا  لمحاربة  الجائحة
        </p>
        <div className="flex justify-center">
          {(isAuthenticated)?authLinks:guestLinks}
        </div>
      </div>
    </div>
    );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, null)(HeroSection);