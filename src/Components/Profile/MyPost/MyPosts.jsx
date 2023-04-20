import React from "react";
import c from './MyPosts.module.css';
import Post from "./Posts/Post";


const MyPosts = () => {
    let posts = [
        {mes: 'Hi, how are you', id: 1, likesCount: 12},
        {mes: 'Hi, im fine what about you?', id:2, likesCount:100},
         {mes: 'What are you doing?', id:3, likesCount: 2},
         {mes: 'I am going to learn React', id:4, likesCount: 15}
        ]
 

    let postsElements = posts
    .map (p =><Post message={p.mes} likesCount={p.likesCount}/>
    )
    return(
        <div className={c.postsBlock}>
            <h3>My posts </h3>
             <div>
                 <div>
              <textarea></textarea>
                 </div>
                 <div>
              <button>Add post</button>
              <button>Remove</button>
              </div>
             </div>
               <div className={c.posts}>
                 {postsElements}
                 </div>
       </div>

    )
    
}

export default MyPosts;