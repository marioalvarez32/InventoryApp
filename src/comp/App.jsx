import React, { Component } from 'react';
import SignIn from './Signin';

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <SignIn />
      </div>
    );
  }
}

export default App;
