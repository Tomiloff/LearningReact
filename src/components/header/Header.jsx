import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import React from 'react';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src='https://nebula.wsimg.com/obj/RkIxNEFDQ0NFRTkxNDlDMkYyQkM6NTg2ZDAxOTc4NWUwZDM4OTQ1MWU0MDRmM2I1Yzc1Zjk6Ojo6OjA=' />

      <div className={styles.loginBlock}>
        {props.isAuth ? 
          <div>{props.login} - <button onClick={props.logout}>Log out</button></div> : 
          <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;