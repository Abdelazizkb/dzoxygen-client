import React from 'react'
import SocialMedias from './SocialMedias'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="w-full h-32 sm:h-28 bg-white shadow flex flex-col justify-around">
            <div className="w-full flex justify-around">
                 <div className="flex flex-col">
                    <Link>الأسئلة الشائعة</Link>
                    <Link>شروط الاستخدام</Link>
                    <Link>طلب مساعدة </Link>
                 </div>    
                 <SocialMedias />     
            </div>
            <div className="w-full flex justify-center">
                <p className="text-gray-600">Copyright All rights reserved | developed by Aalmni team</p>
            </div>
        </div>
    )
}

export default Footer
