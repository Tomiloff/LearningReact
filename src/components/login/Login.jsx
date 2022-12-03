import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { createField, Input } from "../common/formsControls/FormsControls";
import { login } from "../redux/auth-reducer";
import styles from "./../common/formsControls/FormsControls.module.css";


const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      {/* <div> */}
        {createField("Email", "email", Input, [required])}
        {/* <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]} /> */}
      {/* </div> */}
      {createField("Password", "password", Input, [required], {type: "password"})}
      {/* <div>
      <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]} type={"password"} />
      </div> */}
      {createField(null, "rememberMe", Input, [], {type: "checkbox"}, "remember me")}
      {/* <div>
      <Field component={Input} name={"rememberMe"} type={"checkbox"} /> remember me
      </div> */}
      { error && <div className={styles.formSummaryError}>
        {error}
      </div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
};


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />
  } 

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
};


const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});


export default connect(mapStateToProps, {login}) (Login);











// import React from "react";
// import { connect } from "react-redux";
// import { Field, reduxForm } from "redux-form";
// import { getPermissionToLogin, getAuthUserData } from "../redux/auth-reducer";


// const LoginForm = (props) => {
//   console.log("Rerender");
//   return (
//     <form onSubmit={props.handleSubmit}>
//       <div>
//         <Field placeholder={"Login"} name={"login"} component={"input"} />
//       </div>
//       <div>
//       <Field placeholder={"Password"} name={"password"} component={"input"} />
//       </div>
//       <div>
//       <Field component={"input"} name={"rememberMe"} type={"checkbox"} /> remember me
//       </div>
//       <div>
//         <button>Login</button>
//       </div>
//     </form>
//   )
// };


// const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


// const Login = (props) => {
//   const onSubmit = (formData) => {
//     console.log(formData);
//     props.getPermissionToLogin(formData.login, formData.password);
//   };

//   return (
//     <div>
//       <h1>LOGIN</h1>
//       <LoginReduxForm onSubmit={onSubmit} />
//     </div>
//   )
// };


// export default connect( null, {getPermissionToLogin} ) (Login);
// export default Login;

// const LoginForm = (props) => {
//   console.log("Rerender");
//   return (
//     <form onSubmit={props.handleSubmit}>
//       <div>
//         <Field placeholder={"Login"} name={"login"} component={"input"} />
//       </div>
//       <div>
//       <Field placeholder={"Password"} name={"password"} component={"input"} />
//       </div>
//       <div>
//       <Field component={"input"} name={"rememberMe"} type={"checkbox"} /> remember me
//       </div>
//       <div>
//         <button>Login</button>
//       </div>
//     </form>
//   )
// };


// const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


// class Login extends React.Component {

//   onSubmit = (formData) => {
//     console.log(formData);
//     this.props.getPermissionToLogin(formData.login, formData.password);
//   };


//   render() {
//     return (
//       <div>
//         <h1>LOGIN</h1>
//         <LoginReduxForm onSubmit={this.onSubmit} />
//       </div>
//     )
//   }
// };



// export default connect( null, {getPermissionToLogin, getAuthUserData} ) (Login);