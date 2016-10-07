import React, { Component } from 'react'
import styles from './Home.css'

const propTypes = {
  add: React.PropTypes.func
}

export default class InputTodo extends Component {
  constructor(props) {
    super(props)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.submitTodo = this.submitTodo.bind(this)
    this.state = { text: '' }
  }
  handleTextChange(e) {
    this.setState({ text: e.target.value })
  }
  submitTodo(e) {
    e.preventDefault()
    this.props.add(this.state.text)
    this.setState({ text: '' })
  }
  render() {
    return (
      <div className={styles.inputTodo}>
        <form onSubmit={this.submitTodo} >
          <input type="text" value={this.state.text} onChange={this.handleTextChange} placeholder="Enter a new item..." />
        </form>
      </div>
    )
  }
}

InputTodo.propTypes = propTypes
