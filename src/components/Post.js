import React,{useEffect,useState} from 'react';
import axios from "axios"
import userAvatar from "../img/userAvatar.png"



function Post({post}) {
     const [author, setAuthor] = useState({
         name:""
     })

    const getAuthor=async(post)=>{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/post/post-author/${post.author_id}/`);
        setAuthor(res.data)
    }

    useEffect(() => {
        try {
          getAuthor(post)
        }
        catch(err){console.log("failed to load author")}
    }, [])

    
    return (
    <div className='my-4 border border-gray-600 border-solid p-4 rounded-md bg-white  shadow-sm  '>
        {/*  sec 1 ++++ */}
        <div className="flex flex-row justify-end ">
          <div className="pt-2">
            <p >{author.name}</p>
            <p className="text-gray-400 text-xs text-right">اضيف {post.datetime}</p>
          </div>
          <div>
            <img className="w-16 h-16  rounded-full ml-4  " src={userAvatar}/>
          </div>
        </div>
        {/*  sec 2 ++++ */}
        <div className="flex flex-row my-6">
          <div className="flex flex-col w-1/4 text-center   ">
            <p className="font-medium text-gray-600 break-all">السعر</p>
            <p className="font-bold" >{post.price} دج</p>
          </div>
          <div className="flex flex-col w-1/4 text-center   border-l-2 border-black">
            <p className="font-medium text-gray-600">الحجم</p>
            <p className="font-bold"> {post.size} لتر</p>
          </div>
          <div className="flex flex-col w-1/4 text-center border-l-2 border-black break-all">
            <p className="font-medium text-gray-600">الولاية</p>
            <p className="font-bold" >{post.city}</p>
          </div>
          <div className="flex flex-col w-1/4 text-center border-l-2 border-black">
            <p className="font-medium text-gray-600 break-all">الدائرة </p>
            <p className="font-bold" >{post.city}</p>
          </div>
        </div>
        {/*  sec 3 ++++ */}
        <div  className="my-6">
          <h2 className="text-right font-medium">
          : معلومات اخرى
          </h2>
          <p className="text-right break-all max-w-full">
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
          {/*<h2 className="text-right font-medium mt-6">
          : امكانية التوصيل
          </h2>
          <p className="text-right ">
            متوفر
          </p>*/}
        </div>
      </div>
    );
}

export default Post;