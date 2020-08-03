import React, { Component } from 'react';

import './sellerpage.css';

class SellerPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="seller-page">
        <div className="seller-page__container">
          <div className="seller-page__content-left">
            <div className="seller-page__toolbar"></div>
            <div className="seller-page__cart"></div>
            <div className="seller-page__options"></div>
          </div>
          <div className="seller-page__content-right">
            <div className="seller-page__summary"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SellerPage;
