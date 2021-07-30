import React,{useState} from 'react';
import {RiDeleteBinLine} from "react-icons/ri"
import userAvatar from "../img/userAvatar.png"
import { connect } from 'react-redux';
import {deletePost} from '../actions/post'
import { loadPost } from '../actions/post';

function UserPost({post,user,unMountPosts,deletePost,loadPost}) {
     const [confirm, setConfirm] = useState(false) 
     const [show, setShow] = useState(false)

     const handleClick=()=>{

      try {
        deletePost(post.id)
      } catch (err) {}
        setShow(false)
        unMountPosts(post.id)
     }

     const popup=(<div className='h-full w-full absolute    flex justify-center items-center'>
                       <div className=" shadow bg-white p-12 justify-center">
                           <p className="font-extrabold text-center">متأكد تريد حذف المنشور ؟</p>
                          
                           <div className="flex justify-between w-5/6 my-6">
                              <button className="h-12 w-32 mr-2 bg-blue-500 text-center text-white" onClick={handleClick}>نعم</button>
                              <button className="h-12 w-32 bg-blue-500 text-center text-white" onClick={()=>{setShow(!show)}}>لا</button>
                           </div>
                       </div>
                 </div>)


    
     
    return (
    <div className='relative my-4 border border-gray-600 border-solid px-4 rounded-md bg-white  shadow-sm  '>
  
      {/*  delete icon*/}
      
      {/*  sec 1  user name +posting date */}
      <div className="w-full flex my-2 justify-between " >
        {(show)&&popup}
        <button title="احذف المنشور" className="text-right block h-auto cursor-pointer" onClick={()=>{setShow(!show)}}
        >
        <RiDeleteBinLine size={30}  />
        </button>
        <div className="flex ">
          <div className="pt-2">
            <p >{user.name}</p>
            <p className="text-gray-400 text-xs text-right"   >اضيف {post.datetime}</p>
          </div>
          <img className="w-16 h-16  rounded-full ml-4  " src={userAvatar}/>
        </div>
      </div>
      {/*  sec 2 ++++ */}
      <div className="flex flex-row my-6">
        <div className="flex flex-col w-1/4 text-center   ">
          <p className="font-medium text-gray-600">السعر</p>
          <p className="font-bold" >{post.price} دج</p>
        </div>
        
        <div className="flex flex-col w-1/4 text-center   border-l-2 border-black">
          <p className="font-medium text-gray-600">الحجم</p>
          <p className="font-bold"> {post.size} لتر</p>
        </div>
        
        <div className="flex flex-col w-1/4 text-center border-l-2 border-black">
          <p className="font-medium text-gray-600">الولاية</p>
          <p className="font-bold" >{post.city}</p>
        </div>
        
        <div className="flex flex-col w-1/4 text-center border-l-2 border-black">
          <p className="font-medium text-gray-600">الدائرة </p>
          <p className="font-bold" >{post.city}</p>
        </div>
      </div>
      {/*  sec 3 description */}
      <div  className="my-6">
        <h2 className="text-right font-medium">
        : معلومات اخرى
        </h2>
        <p className="text-right ">
          {post.description}
        </p>
      </div>
      
      {/*  sec 4 ++++ */}
      <div  className="my-6">
        <h2 className="text-right font-medium">
        : رقم الهاتف
        </h2>
        <p className="text-right ">
          {post.phone}
        </p>
        
        { /*<h2 className="text-right font-medium mt-6">
        : امكانية التوصيل
        </h2>
        <p className="text-right ">
          متوفر
        </p>*/}
        
      </div>
      
      
    </div>
        );
    }
    
export default connect(null, { deletePost ,loadPost})(UserPost);