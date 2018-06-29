import React from 'react'
import ReactDOM from 'react-dom'
import Todo from './Todo'

export default class TodoList extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    var list = this.props.todos.map((todo, i)=>{
      return <Todo key={i} task={todo.taskText} completed={todo.completed}/>
    })
    return (
      <ul>
        {list}
      </ul>
    )
  }
}
