import React,{useState,useEffect} from 'react';
import Filter from './Filter';
import PostsList from './PostsList';
 import SecondaryButton from './SecondaryButton';
 import { connect } from 'react-redux';

function MainSection({posts}) {
    
    const [indexOfLastPost, setIndexOfLastPost] = useState(6)
    const addOnclick=6
    const page=posts.slice(0,indexOfLastPost)
    
    return (
        <div className="bg-main  pb-10 ">
           <div className="md:px-16 px-1 py-1 md:py-10 md:flex md:flex-row   "> 

                <div className="h-auto md:hidden    bg-gray-200 mx-6  my-4   p-4  text-right rounded-md   top-10 border border-gray-500 shad shadow-lg "> 
                   <Filter />
                </div> 

                <div className="h-auto md:w-3/5 bg-main p-4  "> 
                   <PostsList posts={page}/> 
                </div>   

                 <div className="h-3/6 hidden md:block md:w-2/5 bg-gray-200 mx-6  my-12 md:p-8  text-right rounded-md  sticky top-10 border border-gray-500 shad shadow-lg "> 
                  <Filter />
                </div> 
          </div> 
          <div className=" flex justify-center" onClick={()=>setIndexOfLastPost(indexOfLastPost+addOnclick)}>
             <SecondaryButton  text="تحميل المزيد" />  
          </div>
        </div>
    );
}


const mapStateToProps = state => ({
    posts: state.post.posts
});



export default connect(mapStateToProps, null) (MainSection);