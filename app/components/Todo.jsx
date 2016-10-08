import React, { Component } from 'react'
import styles from './Home.css'

const propTypes = {
  todo: React.PropTypes.object,
  closeTodo: React.PropTypes.func
}

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.handleClose = this.handleClose.bind(this)
  }
  handleClose() {
    const todo = this.props.todo
    this.props.closeTodo(todo.id)
  }
  render() {
    const todo = this.props.todo
    return (
      <div className={styles.todo}>
        <div className={styles.todoContent}>
          { todo.content }
        </div>
        <div onClick={this.handleClose} className={styles.closeTodo}>
          x
        </div>
        <div className={styles.todoParams}>
          more content
        </div>
      </div>
    )
  }
}

Todo.propTypes = propTypes
