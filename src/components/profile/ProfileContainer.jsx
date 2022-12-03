import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getMeProfile, getStatus, updateStatus } from "../redux/profile-reducer";
import { withAuthRedirect } from '../../hoc/withAuthRedirect'; 
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
    
    // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    //   .then(response => {
    //     this.props.setUserProfile(response.data);
    //   });
    // usersAPI.setUser(userId)
    //   .then(data => {
    //     this.props.setUserProfile(data);
    //   });

      this.props.getUserProfile(userId);
      this.props.getStatus(userId);

      
  }


  // ДЛЯ ПЕРЕХОДА НА СВОЮ СТРАНИЦУ ИЗ ПРОФИЛЯ ДРУГОГО ЧЕЛОВЕКА
  componentDidUpdate(prevProps) {
		let userId = this.props.router.params.userId;
		if (prevProps.router.params.userId !== userId) {
			let userId = 26794;
      if (!userId) {
        this.props.router.navigate('/login');
        }
       
		
      // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			//   .then((response) => {
			// 		this.props.setUserProfile(response.data);
			// 	});


      // usersAPI.setProfile(userId)
      //   .then((data) => {
      //     this.props.setUserProfile(data);
      //   });

      this.props.getMeProfile(userId);
      this.props.getStatus(userId);
		}
	}

  render() {
    // if (!this.props.isAuth) return <Navigate to="/login" /> 

    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    );
  }
};



// const mapStateToProps = (state) => ({
//   profile: state.profilePage.profile,
//   isAuth: state.auth.isAuth
// });

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
		// let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
    
		return (
      <Component {...props} router={{ params, navigate }} />
    );
	}
	return ComponentWithRouterProp;
};


export default compose(
  connect(mapStateToProps, { getUserProfile, getMeProfile, getStatus, updateStatus }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);



// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// const mapStateToPropsForRedirect = (state) => ({
//   isAuth: state.auth.isAuth
// });

// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);
  







// export default connect(mapStateToProps, { getUserProfile, getMeProfile }) (withRouter(AuthRedirectComponent));