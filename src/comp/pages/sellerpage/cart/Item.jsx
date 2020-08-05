import React from 'react';

import './cart.css';

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="item">
        <div className="item__container"></div>
      </div>
    );
  }
}

export default Item;
