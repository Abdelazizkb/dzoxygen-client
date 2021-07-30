import React,{useEffect} from 'react';
import Post from './Post';

function PostsList({posts}) {


   
    return (
        <div>
              {posts.map((e,i)=>{
                  return <Post post={e}/>
              })}

        </div>
    );
}


export default PostsList

