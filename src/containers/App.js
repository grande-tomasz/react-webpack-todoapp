import React from "react";
import uuid from "uuid";
import style from "./App.css";
import { Title } from "../components/Title";
import { ToDoForm } from "../components/ToDoForm";
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
      }],
      value: ""
    };
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.addToDo(this.state.value);
    this.setState({value: ""});
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
        <Title text="To Do App" counter={this.state.data.length} />
        <ToDoForm 
          value={this.state.value}
          handleChange={this.handleChange.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
        />
        <ToDoList 
          items={this.state.data} 
          remove={this.removeToDo.bind(this)} 
        />
      </div>
    );
  }
}

export default App;
