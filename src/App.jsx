import React, { Component } from 'react';

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {};
  }

  // Event Handlers


  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <div className="form-container">

        </div>
      </div>
    );
  }
}

export default App;
