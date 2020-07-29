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
    console.log(id);
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: '',
    }));
  };

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} remove={this.remove} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">What needs to be done?</label>
          <input id="new-todo" onChange={this.handleChange} value={this.state.text} />
          <button>Add #{this.state.items.length + 1}</button>
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
