import { stopSubmit } from "redux-form";
import { authAPI } from "../../api/api";
import { getAuthUserData } from "./auth-reducer";


const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";


const initialState = {
  initialized: false
};
  
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };

    default:
      return state;
  }
};


export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});


export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise])
    .then( () => {
      dispatch( initializedSuccess() );
    })
};




export default appReducer;













// import { authAPI } from "../../api/api";


// const SET_USER_DATA = "SET_USER_DATA";
// const SET_PERMISSION_TO_LOGIN = "SET_PERMISSION_TO_LOGIN";

// const initialState = {
//   id: null,
//   email: null,
//   login: null,
//   isAuth: false
// };
  
// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_USER_DATA:
//       return {
//         ...state,
//         ...action.data,
//         isAuth: true
//       };

//       case SET_PERMISSION_TO_LOGIN:
//       return {
//         ...state,
//         isAuth: true
//       };

//     default:
//       return state;
//   }
// };


// export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});

// export const setPermissionToLogin = () => ({type: SET_PERMISSION_TO_LOGIN});


// export const getAuthUserData = () => (dispatch) => {
//   authAPI.me()
// 		.then((data) => {
// 			if (data.resultCode === 0) {
//         let {id, email, login} = data.data;
//         dispatch(setAuthUserData(id, email, login));
//       }
// 		});
// };



// export const getPermissionToLogin = (email, password) => (dispatch) => {
//   authAPI.logIn(email, password)
//     .then(response => {
//       if(response.data.data.resultCode === 0) {
//         dispatch(setPermissionToLogin());
//       }
//     })
// };



// export default authReducer;


















