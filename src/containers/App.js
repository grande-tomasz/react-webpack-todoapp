import React from "react";
import uuid from "uuid";
import style from "./App.css";
import { Title } from "../components/Title";
import { ToDoList } from "../components/ToDoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 
      [{
        id: 1,
        text: "clean room"
      }, {
        id: 2,
        text: "wash the dishes"
      }, {
        id: 3,
        text: "feed my cat"
      }]
    };
  }
  addToDo(val) {
    const todo = {
      text: val,
      id: uuid.v4()
    };
    const data = [...this.state.data, todo];
    this.setState({data});
  }
  removeToDo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: remainder});
  }
  render() {
    return (
      <div className={style.ToDoApp}>
        <Title title={`React To Do App [${this.state.data.length}]`} />
        <ToDoList 
          items={this.state.data} 
          remove={this.removeToDo.bind(this)} 
        />
      </div>
    );
  }
}

export default App;
