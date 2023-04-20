import React from "react";
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import c from './Profile.module.css';


const Profile = () => {
    return(
        <div>
          <ProfileInfo />
          <MyPosts/>
      </div>
    )
    
}

export default Profile