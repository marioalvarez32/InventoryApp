import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: "Luigi and Komi",
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
