import React from "react";

export const ToDoList = props => {
  var reactItems = props.items.map(item =><li key={item.id} onClick={() => props.remove(item.id)}>{item.text}</li>);
  
  return <ul className="itemsList">{reactItems}</ul>;
};
