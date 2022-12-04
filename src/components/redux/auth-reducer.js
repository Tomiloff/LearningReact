import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../../api/api";


const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";


const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null // if null, then captcha is not required
};
  
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};


export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}});

export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});


export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me()
		if (response.data.resultCode === 0) {
      let {id, email, login} = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
};


export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  
  let response = await authAPI.login(email, password, rememberMe, captcha)
    if(response.data.resultCode === 0) {
      // success, get auth data
      dispatch(getAuthUserData());
    } else {
      if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
      let message = response.data.messages.length > 0 ?
      response.data.messages[0] : "Some error";
      dispatch(stopSubmit("login", {_error: message}));
    }
};


export const getCaptchaUrl = () => async (dispatch) => {
  
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url;

  dispatch(getCaptchaUrlSuccess(captchaUrl));
};


export const logout = () => async (dispatch) => {
  let response = await authAPI.logout()
    if(response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
};


export default authReducer;













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


















