// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
// import DialogsContainer from './components/dialogs/DialogsContainer';
// import Friends from './components/friends/Friends';
// import Header from './components/header/Header';
// import Music from './components/music/Music';
// import Navbar from './components/navbar/Navbar';
// import News from './components/news/dialogs/News';
// import Profile from './components/profile/Profile';
// import Settings from './components/settings/Settings';


// const App = ({state, dispatch, store}) => {
//   return (
//     <BrowserRouter>
//       <div className='app-wrapper'>
//         <Header/>
//         <Navbar state={state}/>
//         <div className='app-wrapper-content'>
//         <Routes>
//           <Route path="/dialogs/*" 
//                  element= {<DialogsContainer store={store} />}/>
//           <Route path="/profile" 
//                  element={<Profile store={store}/>}/>
//           <Route path="/news" element={<News/>}/>
//           <Route path="/music" element={<Music/>}/>
//           <Route path="/settings" element={<Settings/>}/>
//           <Route path="/friends" element= {<Friends/>}/>
//         </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;



import React, { Suspense } from 'react';
import { connect, Provider } from 'react-redux';
import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
// import DialogsContainer from './components/dialogs/DialogsContainer';

import Friends from './components/friends/Friends';
import HeaderContainer from './components/header/HeaderContainer';
// import LoginPage from './components/login/Login';
import Music from './components/music/Music';
import Navbar from './components/navbar/Navbar';
import News from './components/news/dialogs/News';
// import ProfileContainer from './components/profile/ProfileContainer';
import Settings from './components/settings/Settings';
// import UsersContainer from './components/users/UsersContainer';
import { initializeApp } from './components/redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/preloader/Preloader';
import store from './components/redux/redux-store';

const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'));
const LoginPage = React.lazy(() => import('./components/login/Login'));
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/users/UsersContainer'));



// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className='app-wrapper'>
//         <HeaderContainer/>
//         <Navbar/>
//         <div className='app-wrapper-content'>
//         <Routes>
//           <Route path="/dialogs/*" 
//                  element= {<DialogsContainer/>}/>
//           <Route path="/profile/:userId" 
//                  element={<ProfileContainer/>}/>
//           <Route path='/profile' 
//                  element={<ProfileContainer />}/>
//           <Route path="/news" element={<News/>}/>
//           <Route path="/music" element={<Music/>}/>
//           <Route path="/settings" element={<Settings/>}/>
//           <Route path="/friends" element= {<Friends/>}/>
//           <Route path="/users" element= {<UsersContainer />}/>
//           <Route path="/login" element= {<LoginPage />}/>
//         </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
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
          </Routes>
        </Suspense>
        </div>
      </div>
    );
  }
};



const withRouter = (Component) => {
	function ComponentWithRouterProp(props) {
		// let location = useLocation();
		// let navigate = useNavigate();
		// let params = useParams();
    
		return (
      <Component {...props}  />
    );
	}
	return ComponentWithRouterProp;
};


const mapStateToProps = (state) => ({
  initialized: state.app.initialized
}); 



// export default compose(
//   withRouter,
//   connect(mapStateToProps, { initializeApp })
// )(App);



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



// export default connect(null, { getAuthUserData }) (App);