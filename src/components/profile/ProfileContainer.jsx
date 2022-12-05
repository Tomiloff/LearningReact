import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getMeProfile, getStatus, updateStatus, savePhoto, saveProfile } from "../redux/profile-reducer";
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { compose } from 'redux';


class ProfileContainer extends React.Component  {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.authirizedUserId;
    };
    if (!userId) {
        this.props.router.navigate('/login');
        }
      this.props.getUserProfile(userId);
      this.props.getStatus(userId);
  }

  componentDidUpdate(prevProps) {
		let userId = this.props.router.params.userId;
		
    if (prevProps.router.params.userId !== userId) {
			let userId = 26794;
      if (!userId) {
        this.props.router.navigate('/login');
        }
      
      this.props.getMeProfile(userId);
      this.props.getStatus(userId);
		}
	}

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} isOwner={!this.props.router.params.userId} savePhoto={this.props.savePhoto} saveProfile={this.props.saveProfile}/>
    );
  }
};


const mapStateToProps = (state) => {
  return ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authirizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
  })
};


const withRouter = (Component) => {
	function ComponentWithRouterProp(props) {
		let navigate = useNavigate();
		let params = useParams();
    
		return (
      <Component {...props} router={{ params, navigate }} />
      
    );
	}
	return ComponentWithRouterProp;
};


export default compose(
  connect(mapStateToProps, { getUserProfile, getMeProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  withRouter,
)(ProfileContainer);