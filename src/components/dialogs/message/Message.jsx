import style from './../Dialogs.module.css';


const Message = ({message, src}) => {
  return (
    <div className={style.messageElement}>
      <img src={src} alt="avatar" />
      <div className={style.message}>{message}</div>
    </div>
  );
};

export default Message;