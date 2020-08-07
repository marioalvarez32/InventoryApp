import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
        <Router>
          <App />
        </Router>
      </AppContext>
    );
  }
}
export default AppController;
