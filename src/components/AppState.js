import React, {Component} from 'react'

export class AppState extends Component {

  constructor (props) {
    super (props)
  }

  render () {
    return (
      <div className="AppState">
        <p>{`현재 리액트 ${this.props.text}를 공부하고 있습니다. `}</p>
      </div>
    )
  }

}