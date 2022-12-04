import { reduxForm } from "redux-form";
import { createField } from "../../common/formsControls/FormsControls";
import style from './ProfileInfo.module.css';


const ProfileDataForm = ({handleSubmit, profile, error}) => {
  return (
    <form onSubmit={handleSubmit}>
       <div>
        <button>Сохранить</button>
        { error && <div className={style.formSummaryError}>
        {error}
        </div>}
      </div>
      <div>
        <b>fullName</b> {createField("fullName", "fullName", "Input", [])}
      </div>
      <div>
        <b>В поисках работы:</b> {createField("", "lookingForAJob", "Input", [], {type: "checkbox"})}
      </div>
      <div>
        <b>Skils:</b> {createField("Skilss", "lookingForAJobDescription", "textarea", [], )}
      </div>
      <div>
        <b>About me::</b> {createField("About me..", "aboutMe", "textarea", [], )}
      </div>
      <div>
         <h3>Мои контакты</h3> {Object.keys(profile.contacts).map(key => {
          return (
            <div key={key} className={style.contact}>
              <b>{key}: {createField(key, "contacts." + key, "Input", [], )}</b>
            </div>
          )
         })}
      </div>
    </form>
  )
};


const ProfileDataFormReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm);


export default ProfileDataFormReduxForm;