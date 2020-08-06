import React, { Component } from 'react';
// import SellerPage from './pages/sellerpage/SellerPage';
import Sigin from './Signin';

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    return (
      <div className="full-height">
        <Sigin />
      </div>
    );
  }
}

export default App;
