import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
        <Switch>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/seller">
            <SellerPage />
          </Route>

          {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
          <Route path="/">
            <SellerPage />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
