// import style from './myPosts.module.css';
// import Post from './post/Post';


// const MyPosts = ({posts, newPostText, updateNewPostText, addPost}) => {
  
//   const postsElements = posts.map( ({message, likesCount, id}) => {
//     return <Post message={message} likeCount={likesCount} key={id}/>;
//   });
  
//   const onAddPost = () => {
//     addPost();
//   };

//   const onPostChange = (e) => {
//     const text = e.target.value;
//     updateNewPostText(text);
//   };

//   return (
//     <div className={style.postsBlock}>
//       <h3>My posts</h3>
//       <div>
//         <div>
//           <textarea placeholder='Создайте пост...' onChange={onPostChange} value={newPostText}/>
//         </div>
//         <div>
//         <button onClick={onAddPost}>Add post</button>
//         </div>
//       </div>
//       <div className={style.posts}>
//         {postsElements}
//       </div>
//     </div>
//   );
// };

// export default MyPosts;






import { Field, reduxForm } from 'redux-form';
import style from './myPosts.module.css';
import Post from './post/Post';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/formsControls/FormsControls';
import React, { PureComponent } from 'react';

const maxLength10 = maxLengthCreator(10);

const addNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name={"newPostText"} validate={[required, maxLength10]} placeholder="Введите текст поста" />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
};


const PostReduxForm = reduxForm({form: 'profileAddNewPostForm'})(addNewPostForm);



const MyPosts = React.memo(props => {
  
  const postsElements = props.posts.map( ({message, likesCount, id}) => {
    return <Post message={message} likeCount={likesCount} key={id}/>;
  });

  const onAddPost = (values) => {
    props.addPost(values.newPostText);
  };


  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div>
        <PostReduxForm onSubmit={onAddPost} />
      </div>
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  );
});


// class MyPosts extends PureComponent {


  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps != this.props || nextState != this.state;
  // }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({a: 12});
  //   }, 3000)
  // }

//   render() {

//     console.log("RENDER-MyPosts");
    
//     const postsElements = this.props.posts.map( ({message, likesCount, id}) => {
//       return <Post message={message} likeCount={likesCount} key={id}/>;
//     });
  
//     const onAddPost = (values) => {
//       this.props.addPost(values.newPostText);
//     };

//      return (
//     <div className={style.postsBlock}>
//       <h3>My posts</h3>
//       <div>
//         <PostReduxForm onSubmit={onAddPost} />
//       </div>
//       <div className={style.posts}>
//         {postsElements}
//       </div>
//     </div>
//   );
//   }
// };



export default MyPosts;