// import reportWebVitals from './reportWebVitals';
// import store from './components/redux/redux-store';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import StoreContext from './StoreContext';


// const root = ReactDOM.createRoot(document.getElementById('root'));

// const rerendeEntireTree = (state) => {
//   root.render(
//     <React.StrictMode>
//       <App state={state} dispatch={store.dispatch.bind(store)}  store={store}/>
//     </React.StrictMode>
//   );
// };

// rerendeEntireTree(store.getState());

// store.subscribe( () => {
//   const state = store.getState();
//   rerendeEntireTree(state);
// });


// reportWebVitals();


import reportWebVitals from './reportWebVitals';
import store from './components/redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import SamuraiJSApp from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <SamuraiJSApp/>
);


// const rerendeEntireTree = (state) => {
//   root.render(
//     <Provider store={store}>
//       <React.StrictMode>
//         <App/>
//       </React.StrictMode>
//     </Provider>
//   );
// };

// rerendeEntireTree(store.getState());

// store.subscribe( () => {
//   const state = store.getState();
//   rerendeEntireTree(state);
// });


reportWebVitals();
