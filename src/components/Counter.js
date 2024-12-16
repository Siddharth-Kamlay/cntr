import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    increment = ()=>{
        this.setState({
            count : this.state.count+1
        },
        ()=>console.log('Call ',this.state.count)
    )
        console.log(this.state.count)
    }
    decrement = ()=>{
        this.setState({
            count : this.state.count-1
        },
        ()=>console.log('Call dec',this.state.count)
    )
        console.log('dec',this.state.count)
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>In</button>
        <button onClick={this.decrement}>De</button>
      </div>
    )
  }
}
