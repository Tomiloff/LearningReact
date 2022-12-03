import { profileAPI, usersAPI } from "../../api/api";


const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";



const initialState = {
  posts: [
    {id: 1, message: "Привет, как ты?", likesCount: 18},
    {id: 2, message: "Да всё хорошо", likesCount: 20}
  ],
  profile: null,
  status: ""
};
  
const profileReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostText: "",
        posts: [
          ...state.posts,
          {
            id: 5,
            message: action.newPostText,
            likesCount: 0
          }
        ]
      }; 
    
    // case UPDATE_NEW_POST_TEXT:
    //   return {
    //     ...state,
    //     newPostText: action.newText
    //   }; 

    case SET_USER_PROFILE:
    return {
      ...state,
      profile: action.profile
    };
    
    case SET_STATUS:
    return {
      ...state,
      status: action.status
    };
    
    case DELETE_POST:
    return {
      ...state,
      posts: state.posts.filter(post => post.id !== action.postId)
    };
    
    default:
      return state;
  }
};


export const addPostCreator = (newPostText) => ({type: ADD_POST, newPostText});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const setStatus = (status) => ({type: SET_STATUS, status});

export const deletePost = (postId) => ({type: DELETE_POST, postId});
  
  
export const getUserProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
};


export const getMeProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getMeProfile(userId)
    dispatch(setUserProfile(response.data));
};


export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
};


export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
    if(response.data.resultCode === 0)
    dispatch(setStatus(status));
};


export default profileReducer;