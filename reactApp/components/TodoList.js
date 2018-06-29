import React from 'react'
import ReactDOM from 'react-dom'
import Todo from './Todo'

export default class TodoList extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    var list = this.props.todos.map((todo, i)=>{
      return <Todo key={i} index={i} task={todo.taskText} completed={todo.completed}
        xClick={(index) => this.props.todoXClick(index)} toggle={(index) => this.props.toggleTodo(index)}/>
    })
    return (
      <ul>
        {list}
      </ul>
    )
  }
}
