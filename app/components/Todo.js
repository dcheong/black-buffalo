import React, { Component } from 'react';
import { Link } from 'react-router';

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
      <div>
        { this.props.content }
      </div>
    );
  }
}

Todo.propTypes = propTypes;
