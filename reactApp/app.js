import React from 'react'
import ReactDOM from 'react-dom'

var dummyData = ['Come to SF', 'Master React', '???', 'Profit']

class Todo extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li>
        <button>X</button>
        {this.props.task}
      </li>
    )
  }
}

class TodoList extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    var list = dummyData.map((todo)=>{
      return <Todo task={todo}/>
    })
    return (
      <ul>
        {list}
      </ul>
    )
  }
}
ReactDOM.render(<TodoList />, document.getElementById('root'));
