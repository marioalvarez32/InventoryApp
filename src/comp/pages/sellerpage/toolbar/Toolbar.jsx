import React from 'react';
import { TextField } from '@material-ui/core';

import './toolbar.css';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="toolbar">
        <div className="toolbar__container">
          <div className="toolbar__controls"></div>
          <div className="toolbar__title">Seller Page</div>
          <div className="toolbar__tools">
            <div></div>
            <div></div>
            <TextField id="item-search" type="string" label="Search" variant="outlined" />
          </div>
        </div>
      </div>
    );
  }
}

export default Toolbar;
