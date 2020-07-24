import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: 'Mario or Komi',
    };
  }

  render() {
    return (
      <div className="home">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
