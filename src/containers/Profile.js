import React,{useState,useEffect} from 'react'
import UserPost from '../components/UserPost'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

function Profile({posts,user,isAuthenticated}) {
    
    const [myPosts, setMyPosts] = useState([])

    const unMountPosts=(id)=>{
         setMyPosts(
          myPosts.filter(
          e=>{ return (e.id==id )?false:true })
         )
    }

    useEffect(() => {
        const postList=posts.filter(e=>{
           if(e.author_id=user.id)
             return true
           else
             return false   
       })
       setMyPosts(postList)
    }, [posts])


    if(!isAuthenticated)
       <Redirect to="/login" />
    return (
        <div className="min-h-screen text-center"> 

           <h1 className="text-5xl my-5 font-semibold"> ! {(user!=null)&&user.name}  مرحبا  </h1>
           <h2 className="text-2xl font-medium"> لديك ({myPosts.length}) اعلانات </h2>

           <div className="md:w-4/6 w-5/6 mx-auto"  >
              { myPosts.map((e,i)=>{
                    return <UserPost post={e} user={user} key={i} unMountPosts={unMountPosts}/>
              })}  
           </div> 


        </div>

    )
}

const mapStateToProps = state => ({
    posts: state.post.posts,
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated

});

export default connect(mapStateToProps, null)(Profile)
