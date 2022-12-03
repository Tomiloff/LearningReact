import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, requestUsers } from "../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import { usersAPI } from "../../api/api";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from "../redux/users-selectors";


class UsersContainer extends React.Component {

  componentDidMount() {

    // this.props.getUsersThunkCreator();

    const {currentPage, pageSize} = this.props;

    this.props.requestUsers(currentPage, pageSize);



    // this.props.toggleIsFetching(true);

    // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
    //   .then(data => {
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsers(data.items);
    //     this.props.setTotalUsersCount(data.totalCount);
    //   });
  }

  onPageChanged = (pageNumber) => {
    const {pageSize} = this.props;
    this.props.setCurrentPage(pageNumber);
    this.props.requestUsers(pageNumber, pageSize);


    // this.props.setCurrentPage(pageNumber);
    // this.props.toggleIsFetching(true);

    // usersAPI.getUsers(pageNumber, this.props.pageSize)
    //   .then(data => {
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsers(data.items);
    //   });
  }

  render() {
    return (
      <> 
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount} 
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}/>
      </>
    )
  }; 
};


// const mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress
//   }
// };



const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
  
};



// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followActionCreator(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowActionCreator(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersActionCreator(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageActionCreator(pageNumber));
//     },
//     setTotalUsersCount: (totelCount) => {
//       dispatch(setUsersTotalCountActionCreator(totelCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingActionCreator(isFetching));
//     }
//   }
// };


// const withRedirect = withAuthRedirect(UsersContainer);

// export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers}) (withRedirect);
// МОЖНО ЕЩЁ ТАК ЗАПИСАТЬ:
// export default withAuthRedirect(connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers}) (UsersContainer));


export default compose(
  connect(mapStateToProps, {follow, unfollow, setCurrentPage, requestUsers}),
  // withAuthRedirect
)(UsersContainer);