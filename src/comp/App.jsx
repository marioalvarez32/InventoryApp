import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SignIn from './Signin';
import SellerPage from './pages/sellerpage/SellerPage';

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="full-height">
        <BrowserRouter>
          <Route path="/" component={SignIn} />
          <Route exact path="/SellerPage" component={SellerPage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
