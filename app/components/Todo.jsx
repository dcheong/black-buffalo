import React, { Component } from 'react'
import styles from './Home.css'

const propTypes = {
  id: React.PropTypes.number,
  content: React.PropTypes.string,
  closeTodo: React.PropTypes.func
}

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.handleClose = this.handleClose.bind(this)
  }
  handleClose() {
    this.props.closeTodo(this.props.id)
  }
  render() {
    return (
      <div className={styles.todo}>
        <div className={styles.todoContent}>
          { this.props.content }
        </div>
        <div onClick={this.handleClose} className={styles.closeTodo}>
          x
        </div>
      </div>
    )
  }
}

Todo.propTypes = propTypes
