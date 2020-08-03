import React, { Component } from 'react';
import SellerPage from './pages/SellerPage';

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    return (
      <div className="full-height">
        <SellerPage />
      </div>
    );
  }
}

export default App;
