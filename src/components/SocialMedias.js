import React from 'react'
import { FaFacebookSquare,FaTwitter,FaInstagram } from "react-icons/fa";

import { AiOutlineLinkedin } from "react-icons/ai";



function SocialMedias() {
   
    const style={

        link:{
            marginRight:10,
        }
    }



    return (
        <div >
            <p  dir="rtl" lang='ar' className="hidden md:block mb-1 mr-2">تابعونا</p>
            <div className="flex justify-around my-auto md:my-0 md:justify-start">
               <a href="#" style={style.link}><FaTwitter color="rgba(0, 0, 0, 0.6)" size="30px"/></a>
               <a href="https://www.facebook.com/Aalmni-106584271708008" style={style.link} target="_blank"><FaFacebookSquare color="rgba(0, 0, 0, 0.6)" size="30px"/></a>
               <a href="#" style={style.link}><AiOutlineLinkedin color="rgba(0, 0, 0, 0.6)" size="30px"/></a>
               <a href="#" style={style.link}><FaInstagram color="rgba(0, 0, 0, 0.6)" size="30px"/></a>
            </div>
        </div>
    )
}

export default SocialMedias;