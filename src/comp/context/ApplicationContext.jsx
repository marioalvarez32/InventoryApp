/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';

const context = React.createContext();
const ContextConsumer = context.Consumer;
const ContextProvider = context.Provider;
class AppContext extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: '',
    };
  }

  render() {
    const { children } = this.props;
    return <ContextProvider value={this.state}>{children}</ContextProvider>;
  }
}

export { ContextConsumer, AppContext };
