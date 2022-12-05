import { connect } from 'react-redux';
import { addMessageCreator, onMessageChangeCreator } from '../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


const mapStateToProps = (state) => {
  return {
    dialogsPages: state.dialogsPages
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(addMessageCreator(newMessageBody));
    }
  };
};


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
