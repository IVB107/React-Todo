import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const listData = [
  {
    name: 'Have an enchilada coma',
    id: 1,
    completed: false
  },
  {
    name: 'Consider going outside.. maybe',
    id: 2,
    completed: false
  },
  {
    name: 'More enchiladas',
    id: 3,
    completed: false
  }
];

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      todoList: listData,
      inputText: ''
    };
  }

  handleUpdateText = e => {
    this.setState({
      inputText: e.target.value
    })
  }

  handleAddItem = e => {
    e.preventDefault()

    const newItem = {
      name: this.state.inputText,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todoList: [...this.state.todoList, newItem],
      inputText: ''
    })
  }

  handleClearList = e => {
    e.preventDefault()

    const newState = {...this.state};
    newState.todoList = [];
    this.setState({
      todoList: newState.todoList
    })
  }

  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <div>
          <TodoList todoList={this.state.todoList}/>
          <TodoForm 
            name={this.state.inputText}
            updateText={this.handleUpdateText}
            submit={this.handleAddItem}
            clear={this.handleClearList}
          />
        </div>
      </div>
    );
  }
}

export default App;
