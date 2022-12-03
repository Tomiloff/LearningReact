import React from "react";
import { Field } from "redux-form";
import styles from "./FormsControls.module.css";


const FromControl = ({input, meta: {touched, error}, ...props}) => {
  const hasError = touched && error; 

  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>
        {props.children}
      </div>
      {hasError && <span>{error}</span>}
    </div>
  )
};


// export const Textarea = ({input, meta, ...props}) => {
//   const hasError = meta.touched && meta.error; 

//   return (
//     <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
//       <div>
//         <textarea {...input} {...props} />
//       </div>
//       {hasError && <span>{meta.error}</span>}
//     </div>
//   )
// };


export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props;

  return (
    <FromControl {...props}><textarea {...input} {...restProps} /></FromControl>
  )
};




// export const Input = ({input, meta, ...props}) => {
//   const hasError = meta.touched && meta.error; 

//   return (
//     <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
//       <div>
//         <input {...input} {...props} />
//       </div>
//       {hasError && <span>{meta.error}</span>}
//     </div>
//   )
// };


export const Input = (props) => {
  const {input, meta, child, ...restProps} = props;
  return (
    <FromControl {...props}><input {...input} {...restProps} /></FromControl>
  )
};


export const createField = (placeholder, name, component, validators, props = {}, text = "") => (
  <div>
    <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props} />
    {text}
  </div> 
);