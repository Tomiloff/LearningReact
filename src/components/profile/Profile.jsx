// import MyPostsContainer from './myPosts/MyPostsContainer';
// import profile from './Profile.module.css';
// import ProfileInfo from './profileInfo/ProfileInfo';


// const Profile = ({store}) => {
//   return (
//     <div>
//       <ProfileInfo />
//       <MyPostsContainer store={store}/>
//     </div>
//   );
// };

// export default Profile;



import MyPostsContainer from './myPosts/MyPostsContainer';
import profile from './Profile.module.css';
import ProfileInfo from './profileInfo/ProfileInfo';


const Profile = (props) => {

  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} savePhoto={props.savePhoto} saveProfile={props.saveProfile} />
      <MyPostsContainer/>
    </div>
  );
};

export default Profile;
