import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    const { items } = this.props;
    return (
      <ul>
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              console.log('GOT HERE');
              this.props.remove(item.id);
              console.log('ONCLICK: ', item);
            }}
          >
            {item.text}
          </div>
        ))}
      </ul>
    );
  }
}

export default TodoList;
