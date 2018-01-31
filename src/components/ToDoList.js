import React from "react";

export const ToDoList = props => 
{
  var reactItems = props.items.map(function(item) {
    return <li 
      key={item.id} 
      // onClick={props.remove(item.id)}
    >{item.text}</li>;
  });
  return (
    <ul className = {"itemsList"}>{reactItems}</ul>
  );
};
