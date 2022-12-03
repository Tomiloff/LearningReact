// import {addPostCreator, updateNewPostTextCreator} from '../../redux/profile-reducer';
// import MyPosts from './MyPosts';


// const MyPostsContainer = ({store}) => {

//   const state = store.getState();
  
//   const newAddPost = () => {
//     store.dispatch(addPostCreator());
//   };

//   const onPostChange = (text) => {
//     const action = updateNewPostTextCreator(text);
//     store.dispatch(action);
//   };

//   return (
//     <MyPosts updateNewPostText={onPostChange} addPost={newAddPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
//   );
// };

// export default MyPostsContainer;










// import StoreContext from '../../../StoreContext';
import { connect } from 'react-redux';
import {addPostCreator, updateNewPostTextCreator} from '../../redux/profile-reducer';
import MyPosts from './MyPosts';


// const MyPostsContainer = () => {

//   return (
//     <StoreContext.Consumer> 
//       { store => {
//         const state = store.getState();

//         const newAddPost = () => {
//           store.dispatch(addPostCreator());
//         };
      
//         const onPostChange = (text) => {
//           const action = updateNewPostTextCreator(text);
//           store.dispatch(action);
//         };

//         return <MyPosts updateNewPostText={onPostChange} addPost={newAddPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
//       }
//     }  
//     </StoreContext.Consumer>
//   );
// };

// export default MyPostsContainer;


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // updateNewPostText: (text) => {
    //   const action = updateNewPostTextCreator(text);
    //   dispatch(action);
    // },
    addPost: (newPostText) => {
      dispatch(addPostCreator(newPostText));
    }
  };
};


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);


export default MyPostsContainer;