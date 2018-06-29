import React from 'react'
import ReactDOM from 'react-dom'

export default class Todo extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li>
        <button>X</button>
        {this.props.completed ? <strike>{this.props.task}</strike> : this.props.task}
      </li>
    )
  }
}
