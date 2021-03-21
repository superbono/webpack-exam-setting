import React,{Component} from 'react'
import '../src/style.css'
import Image from '../asset/image_test.png'
import {AppState} from './AppState'

export class App extends Component {

  constructor (props) {
    super (props)
    this.state = {
      text : 'state'
    }
  }

  render () {
    return (
      <div className="App">
        <h1>hello!</h1>
        <img src={Image}></img>
        <hr></hr>
        <AppState 
          text = {this.state.text}
        />
      </div>
    )
  }

}
