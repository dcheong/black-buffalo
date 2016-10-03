import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';

const propTypes = {
  id: React.PropTypes.number,
  content: React.PropTypes.string
}

export default class Todo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.todo}>
        { this.props.content }
      </div>
    );
  }
}

Todo.propTypes = propTypes;
