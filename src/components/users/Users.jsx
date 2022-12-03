import React from "react";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";
import UserPhoto from "../../assets/images/UserPhoto.png";
import Paginator from "../common/paginator/Paginator";
import User from "./User";

import styles from "./users.module.css";


const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

  return (
    <div>
      {/* <div>
        {pages.map( page => {
          return (
            <span className={props.currentPage === page && styles.selectedPages} onClick={(e)=> {props.onPageChanged(page);}}> {page} </span>
          );
        })}
      </div> */}
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize} />
      <div>
      {
        users.map( user => <User key={user.id} user={user} follow={props.follow} unfollow={props.unfollow} followingInProgress={props.followingInProgress} />)
      }
      </div>
    </div>
  );
};


export default Users;