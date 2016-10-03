import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import Todo from './Todo';

const propTypes = {
  todos: React.PropTypes.array,
  addTodo: React.PropTypes.func,
  removeTodo: React.PropTypes.func
}

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className={styles.container}>
          <img src="/static/img/daruma.png" />
          <h2>Home</h2>
          {
            this.props.todos.map((todo) => <Todo id={todo.id} content={todo.content} />)
          }
        </div>
      </div>
    );
  }
}

Home.propTypes = propTypes;
