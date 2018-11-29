import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

  constructor(props){
    super(props)
    this.canvas = React.createRef()
  }

  componentDidMount() {
    let ctx = this.canvas.current.getContext('2d')
    ctx.lineWidth = 30
    ctx.strokeStyle = '#f00'
    ctx.rect(100, 100, 100, 100)
    ctx.stroke()
  }

  render() {
    return (
      <div>
        <canvas width="1000" height="600" ref={this.canvas}></canvas>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))