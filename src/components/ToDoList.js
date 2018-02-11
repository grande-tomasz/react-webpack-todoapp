import React from "react";
import style from "./ToDoList.css";

export const ToDoList = props => {
  var reactItems = props.items.map(item =><li key={item.id} onClick={() => props.remove(item.id)}>{item.text}</li>);
  
  return <ul className={style.ToDoList}>{reactItems}</ul>;
};
