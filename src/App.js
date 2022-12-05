import React, { Suspense } from 'react';
import { connect, Provider } from 'react-redux';
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import './App.css';
import Friends from './components/friends/Friends';
import HeaderContainer from './components/header/HeaderContainer';
import Music from './components/music/Music';
import Navbar from './components/navbar/Navbar';
import News from './components/news/dialogs/News';
import Settings from './components/settings/Settings';
import { initializeApp } from './components/redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/preloader/Preloader';
import store from './components/redux/redux-store';


const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'));
const LoginPage = React.lazy(() => import('./components/login/Login'));
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/users/UsersContainer'));


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandleErrors);
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandleErrors);
  }

  render() {  

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar/>
        <div className='app-wrapper-content'>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route exact path="/" element={<Navigate to={'/profile'} /> } />
            <Route path="/dialogs/*" 
                  element= {<DialogsContainer/>}/>
            <Route path="/profile/:userId" 
                  element={<ProfileContainer/>}/>
            <Route path='/profile' 
                  element={<ProfileContainer />}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/music" element={<Music/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/friends" element= {<Friends/>}/>
            <Route path="/users" element= {<UsersContainer />}/>
            <Route path="/login" element= {<LoginPage />}/>
            <Route exact path="*" element={<div>404 NOT FOUND</div> } />
          </Routes>
        </Suspense>
        </div>
      </div>
    );
  }
};


const withRouter = (Component) => {
	function ComponentWithRouterProp(props) {
		return (
      <Component {...props}  />
    );
	}
	return ComponentWithRouterProp;
};


const mapStateToProps = (state) => ({
  initialized: state.app.initialized
}); 


const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);


const SamuraiJSApp = (props) => {
  return(
    <HashRouter>
      <Provider store={store}>
        <React.StrictMode>
          <AppContainer/>
        </React.StrictMode>
      </Provider>
    </HashRouter>  
  )
};


export default SamuraiJSApp;