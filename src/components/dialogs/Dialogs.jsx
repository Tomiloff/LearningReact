import React from 'react';
import AddMessageForm from './AddMessageForm';
import DialogItem from './dialogItem/DialogItem';
import style from './Dialogs.module.css';
import Message from './message/Message';



const Dialogs = ({dialogsPages, sendMessage}) => {

  const dialogElements = dialogsPages.dialogs.map( ({id, name, src}) => {
    return <DialogItem name={name} key={id} id={id} src={src} />
  });

  const messagesElements = dialogsPages.messages.map( ({message, src, id}) => {
    return <Message message={message} src={src} key={id}/>
  });

  const addNewMessage = (values) => {
    sendMessage(values.newMessageBody);
  }
 
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogElements}
      </div>
      <div className={style.messages}>
        {messagesElements}
        <AddMessageForm onSubmit={addNewMessage}/>
      </div>
    </div>
  );
};

export default Dialogs;