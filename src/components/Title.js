import React from "react";
import style from "./Title.css";

export const Title = props => <h1 className={style.Title}>{props.text} <span className="counter">{props.counter}</span></h1>;
