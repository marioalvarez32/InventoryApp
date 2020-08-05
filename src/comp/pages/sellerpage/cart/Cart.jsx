import React from 'react';
import BaseTable, { Column } from 'react-base-table';

import 'react-base-table/styles.css';
import './cart.css';
class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          delete: '',
          image: '',
          product: 'testing product',
          price: '$12.12',
          quantity: '1',
          size: '10',
          total: '$12.12',
        },
        {
          delete: '',
          image: '',
          product: 'testing product',
          price: '$12.12',
          quantity: '1',
          size: '10',
          total: '$12.12',
        },
        {
          delete: '',
          image: '',
          product: 'testing product',
          price: '$12.12',
          quantity: '1',
          size: '10',
          total: '$12.12',
        },
        {
          delete: '',
          image: '',
          product: 'testing product',
          price: '$12.12',
          quantity: '1',
          size: '10',
          total: '$12.12',
        },
        {
          delete: '',
          image: '',
          product: 'testing product',
          price: '$12.12',
          quantity: '1',
          size: '10',
          total: '$12.12',
        },
        {
          delete: '',
          image: '',
          product: 'testing product',
          price: '$12.12',
          quantity: '1',
          size: '10',
          total: '$12.12',
        },
        {
          delete: '',
          image: '',
          product: 'testing product',
          price: '$12.12',
          quantity: '1',
          size: '10',
          total: '$12.12',
        },
      ],
      columns: [
        { key: 'delete', dataKey: 'delete', title: '', width: 150 },
        { key: 'image', dataKey: 'image', title: '', width: 150 },
        { key: 'product', dataKey: 'product', title: 'Product', minWidth: 300 },
        { key: 'price', dataKey: 'price', title: 'Price', width: 200 },
        { key: 'quantity', dataKey: 'quantity', title: 'Quantity', width: 200 },
        { key: 'size', dataKey: 'size', title: 'Size', width: 200 },
        { key: 'total', dataKey: 'total', title: 'Total', width: 150 },
      ],
      width: 0,
      height: 0,
    };
  }

  componentDidMount() {
    let tableContainer = document.getElementById('table-wrapper');

    if (tableContainer) {
      this.setState({
        width: tableContainer.offsetWidth,
        height: tableContainer.offsetHeight,
      });
    }
  }

  render() {
    const { width, height, data, columns } = this.state;
    return (
      <div className="cart">
        <div className="cart__container">
          <div id="table-wrapper" className="cart__table-wrapper">
            <BaseTable columns={columns} data={data} width={width} height={height}></BaseTable>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
