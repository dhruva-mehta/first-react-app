import React from 'react'
import ReactDOM from 'react-dom'

export default class Todo extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li>
        <button onClick={() => this.props.xClick(this.props.index)}>X</button>
        {this.props.completed ? <span onClick={() => this.props.toggle(this.props.index)}><strike>{this.props.task}</strike></span>
        : <span onClick={() => this.props.toggle(this.props.index)}>{this.props.task}</span>}
      </li>
    )
  }
}
