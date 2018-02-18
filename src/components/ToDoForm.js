import React from "react";
import style from "./ToDoForm.css";

export const ToDoForm = props => {
  // need to discuss the difference in executing different props functions
  return <form className={style.ToDoForm} onSubmit={props.handleSubmit}>
    <input id="formValue" type="text" value={props.value} onChange={props.handleChange}/>
    {/* <input type="submit" value="Enter" /> */}
  </form>;
};
