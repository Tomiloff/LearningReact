import { connect } from 'react-redux';
import FriendsBar from './FriendsBar';


const mapStateToProps = (state) => {
  return {
    friends: state.sideBar.friends
  };
};


const FriendsBarContainer = connect(mapStateToProps) (FriendsBar);


export default FriendsBarContainer;