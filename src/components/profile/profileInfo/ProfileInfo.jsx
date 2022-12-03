import Preloader from '../../common/preloader/Preloader';
import style from './ProfileInfo.module.css';
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = ({profile, status, updateStatus}) => {

  if (!profile) {
    return <Preloader />
  }
  
  return (
    <div>
      {/* <div>
        <img src='https://gorod-kurort-anapa.ru/img/stati/21_velikie-plyazhi-velikoy-rossii.jpg' />
      </div> */}
      <div className={style.descriptionBlock}>
        <img src={profile.photos.large} />
        <h2>{profile.fullName}</h2>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        <h3>{profile.aboutMe}</h3>
        <p>В поисках работы: {profile.lookingForAJob ? "да" : "нет"}</p>
        <h3>Мои контакты</h3>
        <p>facebook: {profile.contacts.facebook ? profile.contacts.facebook : "нет"}</p>
        <p>website: {profile.contacts.website ? profile.contacts.website : "нет"}</p>
        <p>vk: {profile.contacts.vk ? profile.contacts.vk : "нет"}</p>
        <p>youtube: {profile.contacts.youtube ? profile.contacts.youtube : "нет"}</p>
        <p>github: {profile.contacts.github ? profile.contacts.github : "нет"}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;