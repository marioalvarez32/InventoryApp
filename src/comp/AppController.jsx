import React, { Component } from 'react';

import { AppContext } from './context/ApplicationContext';
import App from './App';

class AppController extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <AppContext>
        <App />
      </AppContext>
    );
  }
}
export default AppController;
