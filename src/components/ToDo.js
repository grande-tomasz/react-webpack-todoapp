import React from "react";
import style from "./ToDo.css";

export const ToDo = props => <li className={style.ToDo} onClick={() => props.remove(props.id)}>{props.text}</li>;
