import Preloader from '../../common/preloader/Preloader';
import style from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import UserPhoto from "../../../assets/images/UserPhoto.png";
import { useState } from 'react';
import ProfileDataFormReduxForm from './ProfileDataForm';


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    const promise = saveProfile(formData);
    promise.then(
      () => {
        setEditMode(false);
      }
    )
  };
  
  return (
    <div>
      <div className={style.descriptionBlock}>
        <img src={profile.photos.large || UserPhoto} className={style.mainPhoto} />
        {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        {editMode ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} /> : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner} />}
      </div>
    </div>
  );
};


const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return (
    <div>
      <div>
        {isOwner && <button onClick={goToEditMode}>Редактировать</button>}
      </div>
      <div>
        <h2>{profile.fullName}</h2>
      </div>
      <div>
        <b>В поисках работы:</b> {profile.lookingForAJob ? "да" : "нет"}
      </div>
        {profile.lookingForAJob &&
          <div>
            <b>Skils:</b> {profile.lookingForAJobDescription}
          </div>
        }
      <div>
          <b>About me:</b> {profile.aboutMe}
      </div>
      <div>
         <h3>Мои контакты</h3> {Object.keys(profile.contacts).map(key => {
          return (
            <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
          )
         })}
      </div>
    </div>
  )
};


const Contact = ({contactTitle, contactValue}) => {
  return (
    <div>
      <b>{contactTitle}</b>: {contactValue ? contactValue : "нет"}
    </div>
  )
};


export default ProfileInfo;