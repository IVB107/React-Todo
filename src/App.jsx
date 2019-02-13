import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const listData = [
  {
    name: 'Go for a run',
    key: 0,
    completed: false
  },
  {
    name: 'Eat 3 large pizzas',
    key: 1,
    completed: false
  },
  {
    name: 'Livestream myself crying onto my keyboard',
    key: 2,
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
      todoList: listData
    };
  }

  // Event Handlers


  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <div>
          <TodoList todoList={this.state.todoList}/>
          <TodoForm />
        </div>
      </div>
    );
  }
}

export default App;
