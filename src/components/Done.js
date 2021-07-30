import React from 'react'
import { Link } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";

function Done({children}) {
    return (
        <div className="w-full mb-96 pt-14 mx-auto flex justify-center items-center">
         <div className="relative w-80 bg-white rounded-lg py-8 shadow-lg flex flex-col items-center justify-center" >
            <Link exact to="/" className="w-8 ml-auto mt-2 absolute right-0 top-0">
              <i className="material-icons text-gray-500 hover:text-gray-700"> X</i>
            </Link>
            <div className="w-16 h-16  rounded-full flex justify-center items-center text-white" 
                style={{backgroundImage: "linear-gradient(to right, #4facfe 0%,#4ad5ff 100%)"}}>
               <FaCheck />
            </div>
            <p className="text-blue-400 text-2xl font-bold mt-4">شكرا</p>
            <p className="text-lg text-center text-gray-600 mt-1">
              {children}
            </p>
           <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
              style={{backgroundImage: "linear-gradient(to right, #4facfe 0%,#4ad5ff 100%)"}}
            >
                   تابع
            </Link>
         </div>
      </div>
    )
}

export default Done
