import React,{Component} from 'react'
import '../src/style.css'
import Image from '../asset/image_test.png'

export class App extends Component {

  constructor (props) {
    super (props)
  }

  render () {
    return (
      <div>
        <h2>hello!</h2>
        <img src={Image}></img>
      </div>
    )
  }

}
