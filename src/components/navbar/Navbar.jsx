import { NavLink } from 'react-router-dom';
import FriendsBarContainer from '../friends/friendsBar/FriendsBarContainer';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <div className={styles.bold}>
          <NavLink to='/profile' className={({ isActive }) => 
          isActive ? styles.activeLink : styles.item}>Profile</NavLink>
        </div>
        <div className={styles.bold}>
          <NavLink to='/dialogs' className={({ isActive }) => 
          isActive ? styles.activeLink : styles.item}>Messages</NavLink>
        </div>
        <div className={styles.bold}>
          <NavLink to='/users' className={({ isActive }) => 
          isActive ? styles.activeLink : styles.item}>Users</NavLink>
        </div>
        <div className={styles.bold}>
          <NavLink to='/news' className={({ isActive }) => 
          isActive ? styles.activeLink : styles.item}>News</NavLink>
        </div>
        <div className={styles.bold}>
          <NavLink to='/music' className={({ isActive }) => 
          isActive ? styles.activeLink : styles.item}>Music</NavLink>
        </div>
        <div className={styles.bold}>
          <NavLink to='/settings' className={({ isActive }) => 
          isActive ? styles.activeLink : styles.item}>Settings</NavLink>
        </div>
        <div className={styles.bold}>
          <FriendsBarContainer />
        </div>
      </nav>
  );
};

export default Navbar;