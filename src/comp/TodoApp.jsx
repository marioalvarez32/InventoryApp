import React, { Component } from 'react';
import TodoList from './TodoList.jsx';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: '',
    };
  }

  remove = (id) => {
    const { items } = this.state;

    const newItems = items.filter((item) => {
      return item.id !== id;
    });

    this.setState({
      items: newItems,
    });
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    const { text } = this.state;
    e.preventDefault();
    if (text.length === 0) {
      return;
    }
    const newItem = {
      text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: '',
    }));
  };

  render() {
    const { text, items } = this.state;
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={items} remove={this.remove} />
        <form onSubmit={this.handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="new-todo">What needs to be done?</label>
          <input id="new-todo" onChange={this.handleChange} value={text} />
          <button type="submit">Add #{items.length + 1}</button>
        </form>
      </div>
    );
  }
}

export default TodoApp;
//   ReactDOM.render(
//     <TodoApp />,
//     document.getElementById('todos-example')
//   );
