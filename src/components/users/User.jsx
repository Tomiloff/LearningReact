import React from "react";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";
import UserPhoto from "../../assets/images/UserPhoto.png";
import Paginator from "../common/paginator/Paginator";

import styles from "./users.module.css";


const User = ({user, followingInProgress, unfollow, follow}) => {
 

  return (
    <div>
      
     
            <span>
              <div className={styles.userPhoto} >
                <NavLink  to={`/profile/${user.id}`}>
                  <img src={user.photos.small != null ? user.photos.small : UserPhoto} alt="ava" />
                </NavLink>  
              </div>
              <div>
                {user.followed ? 
                  <button disabled={followingInProgress.some(id => id === user.id)} onClick={ () => {
                    // props.toggleFollowingProgress(true, user.id);
                    unfollow(user.id);

                    // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                    //   withCredentials: true
                    // })
                    // usersAPI.unfollow(user.id)
                    //   .then(data => {
                    //     if(data.resultCode === 0) {
                    //       props.unfollow(user.id);
                    //     }

                    //     props.toggleFollowingProgress(false, user.id);
                    //   });


                    
                  
                  }} >Unfollow</button> : 
                    <button disabled={followingInProgress.some(id => id === user.id)} onClick={ () => {
                    // props.toggleFollowingProgress(true, user.id);
                    follow(user.id);

                    // usersAPI.follow(user.id)
                    //   .then(data => {
                    //     if(data.resultCode === 0) {
                    //       props.follow(user.id);
                    //     }

                    //     props.toggleFollowingProgress(false, user.id);
                    //   });

                    
                    
                    }} >Follow</button>}
              </div>
            </span>
            <span>
              <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </span>
              <span>
                <div>{"user.location.country"}</div>
                <div>{"user.location.city"}</div>
              </span>
            </span>
          
    </div>
  );
};


export default User;