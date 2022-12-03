import { NavLink } from 'react-router-dom';
import style from './FriendsBar.module.css';

const FriendsBar = ({friends}) => {

  const friend = friends.map( ({src, name, id}) => {
    return (
    <div className={style.friend} key={id}>
      <img src={src} alt="Ava" />
      <p>{name}</p>
    </div>
    )
  });

  return (
    <div className={style.friendsTitle}>
      <NavLink to='/friends' className={({ isActive }) => 
          isActive ? style.activeLink : style.item}>Friends</NavLink>
      <div className={style.friendsBar}>
      {friend}
    </div>
    </div>
  );
};

export default FriendsBar;