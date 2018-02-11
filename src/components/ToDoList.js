import React from "react";
import style from "./ToDoList.css";
import { ToDo } from "./ToDo";

export const ToDoList = props => {
  var reactItems = props.items.map(item => <ToDo key={item.id} id={item.id} remove={props.remove} text={item.text} />);
  
  return <ul className={style.ToDoList}>{reactItems}</ul>;
};
