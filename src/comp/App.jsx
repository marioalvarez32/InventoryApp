import React, { Component } from 'react';
import TodoApp from './TodoApp';

class App extends Component {
  constructor() {
    super();

    // this.state = {
    //   value: 'Mario or Komi',
    //   login: 'test',
    // };
  }

  render() {
    // const { value, login } = this.state;

    return (
      <TodoApp />
      // <div className="home">
      //   <h1>Hello World </h1>
      //   <h1>{value}</h1>
      //   <div>{login}</div>
      // </div>
    );
  }
}

export default App;
