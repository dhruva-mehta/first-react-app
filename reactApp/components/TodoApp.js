import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './TodoList'
import InputLine from './InputLine'

var dummyData = [
  { taskText: "Come to SF", completed: true },
  { taskText: "Master React", completed: false },
  { taskText: "???", completed: false },
  { taskText: "Profit", completed: false }
]

export default class TodoApp extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.setState({todos: dummyData})
  }

  render() {
    return (
      <div>
        <InputLine />
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}
