import React, { Component } from 'react';

import './sellerpage.css';
import Toolbar from './toolbar/Toolbar';
import Cart from './cart/Cart';
import Summary from './summary/Summary';

class SellerPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="seller-page">
        <div className="seller-page__container">
          <div className="seller-page__content-left">
            <div className="seller-page__toolbar">
              <Toolbar />
            </div>
            <div className="seller-page__cart">
              <Cart />
            </div>
            <div className="seller-page__options"></div>
          </div>
          <div className="seller-page__content-right">
            <div className="seller-page__summary">
              <Summary />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SellerPage;
