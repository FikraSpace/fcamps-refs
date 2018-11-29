import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: 120
    }
    this.canvas = React.createRef()
    
  }

  componentDidMount() {
    this.drawTree(this.state.inputValue)
  }

  componentDidUpdate() {
    this.canvas.current.getContext('2d').clearRect(0,0,1000,600)
    this.drawTree(this.state.inputValue)
  }

  drawTree(len) {
    let ctx = this.canvas.current.getContext("2d");
    function draw(startX, startY, len, angle) {
      ctx.beginPath();
      ctx.save();

      ctx.translate(startX, startY);
      ctx.rotate(angle * Math.PI / 180);
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -len);
      ctx.stroke();

      if (len < 10) {
        ctx.restore();
        return;
      }

      draw(0, -len, len * 0.8, -15);
      draw(0, -len, len * 0.8, 15);

      ctx.restore();

    }

    draw(350, 600, len, 0);

  }


  onChange(event) {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="number" value={this.state.inputValue} onChange={this.onChange.bind(this)}/>
        <canvas width="1000px" height="600px" ref={this.canvas} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))