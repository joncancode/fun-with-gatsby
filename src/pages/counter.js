import React from "react"
import Link from 'gatsby-link'

class Counter extends React.Component {
    constructor() {
        super()
        this.state = { count: 0 }
      }
    
      render() {
        return (
          <div>
            <Link to="/">Link back to start</Link>
            <h1>Counter</h1>
            <p>current count: {this.state.count}</p>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>
              plus
            </button>
            <button onClick={() => this.setState({ count: this.state.count - 1 })}>
              minus
            </button>
          </div>
        )
      }
    }

export default Counter
