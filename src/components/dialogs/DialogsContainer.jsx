// import { addMessageCreator, onMessageChangeCreator } from '../redux/dialogs-reducer';
// import Dialogs from './Dialogs';


// const DialogsContainer = ({store}) => {

//   const state = store.getState();

//   const addMessage = () => {
//     store.dispatch(addMessageCreator())
//   };

//   const onMessageChange = (text) => {
//     const action = onMessageChangeCreator(text);
//     store.dispatch(action);
//   };

//   return <Dialogs dialogsPages={state.dialogsPages} onMessageChangeBody={onMessageChange} sendMessage={addMessage}/>;
// };

// export default DialogsContainer;



import { connect } from 'react-redux';
import { addMessageCreator, onMessageChangeCreator } from '../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


// const DialogsContainer = () => {
//   return (
//     <StoreContext.Consumer> 
//       { store => { 
//         const state = store.getState();

//         const addMessage = () => {
//           store.dispatch(addMessageCreator());
//         };

//         const onMessageChange = (text) => {
//           const action = onMessageChangeCreator(text);
//           store.dispatch(action);
//         }; 
//         return <Dialogs dialogsPages={state.dialogsPages} onMessageChangeBody={onMessageChange} sendMessage={addMessage}/>
//       }
//     }
//     </StoreContext.Consumer>
//   );
// };


const mapStateToProps = (state) => {
  return {
    dialogsPages: state.dialogsPages
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onMessageChangeBody: (text) => {
    //   const action = onMessageChangeCreator(text);
    //   dispatch(action);
    // },
    sendMessage: (newMessageBody) => {
      dispatch(addMessageCreator(newMessageBody));
    }
  };
};


// compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   withAuthRedirect
// )(Dialogs);


// let AuthRedirectComponent = withAuthRedirect(Dialogs);


// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);

// export default DialogsContainer;

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
