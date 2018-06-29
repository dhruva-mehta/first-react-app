import React from 'react'
import ReactDOM from 'react-dom'

export default class InputLine extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      typedText: ''
    }
  }

  handleTyping(event) {
    event.preventDefault();
    this.setState({typedText: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submit(this.state.typedText)
    this.setState({typedText:''})
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.typedText} onChange={(event) => this.handleTyping(event)}></input>
        <button onClick={(event) => this.handleSubmit(event)}>Add todo</button>
      </div>
    )
  }
}
