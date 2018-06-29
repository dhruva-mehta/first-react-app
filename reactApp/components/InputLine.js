import React from 'react'
import ReactDOM from 'react-dom'

export default class InputLine extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <input type='text' value='task'></input>
        <button>Add todo</button>
      </div>
    )
  }
}
