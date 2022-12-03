import { NavLink } from 'react-router-dom';
import style from './../Dialogs.module.css';


const DialogItem = ({name, id, src}) => {
  return (
    <div className={style.dialog}>
      <img src={src}/>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;