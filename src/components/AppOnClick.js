import React, {Component} from 'react'


export class AppOnClick extends Component {

  constructor (props) {
    super(props)
    this.state = {
      number : this.props.num
    }
  }

  handleClick = (e) => {
    let count = this.state.number
    this.setState ( () => {
      return {
        number : count + 1
      }
    })
  }

  render () {
    return (
      <div className="AppOnClick">
        <span> {` ${this.state.number} `} </span>
        <button
          onClick={this.handleClick}
        >
          클릭해주세요
        </button>
      </div>
    )
  } 

} 