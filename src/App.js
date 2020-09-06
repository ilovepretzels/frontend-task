import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = {
      dots: [
    {
      "x": 47.037,
      "y": 41.927
    },
    {
      "x": 43.056,
      "y": 42.708
    },
    {
      "x": 39.444,
      "y": 45.104
    },
    {
      "x": 37.685,
      "y": 46.979
    },
    {
      "x": 35.278,
      "y": 50.156
    },
    {
      "x": 36.204,
      "y": 52.448
    },
    {
      "x": 38.889,
      "y": 55.469
    },
    {
      "x": 42.685,
      "y": 57.76
    },
    {
      "x": 45.741,
      "y": 58.75
    },
    {
      "x": 53.981,
      "y": 59.167
    },
    {
      "x": 56.111,
      "y": 56.667
    },
    {
      "x": 57.685,
      "y": 54.375
    },
    {
      "x": 58.704,
      "y": 51.719
    },
    {
      "x": 58.796,
      "y": 48.49
    },
    {
      "x": 57.315,
      "y": 44.844
    },
    {
      "x": 53.796,
      "y": 43.073
    },
    {
      "x": 50.926,
      "y": 42.031
    }
  ],
  dotSelected: null
    };

    this.getNewDot = this.getNewDot.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

componentDidMount() {
  window.addEventListener("keydown", this.handleKeyPress);
}

componentWillUnmount() {
  window.removeEventListener("keydown", this.handleKeyPress)
}

getNewDot(evt) {
  const containerWidth = this.container.current.offsetWidth;
  const containerHeight = this.container.current.offsetHeight;
  const newDot = {
    "x": evt.pageX / containerWidth * 100,
    "y": evt.pageY / containerHeight * 100
  }

  const newDots = [...this.state.dots, newDot];
  this.setState({
    dots: newDots
  });
}

handleKeyPress(evt) {
  const key = evt.keyCode || evt.charCode || evt.which;
  if (key === 46 || key === 8) {
    if (this.state.dotSelected) {
      this.state.dots.splice(this.state.dots.indexOf(this.state.dotSelected), 1);
      this.setState({
        dots: this.state.dots
      });
    }
  }
}

render() {
  let dots = (<div className="imgContainer" ref={this.container} onClick={this.getNewDot}>
    {this.state.dots.map((dot, index) => {
      return <div key={index}
      style={{left: `${dot.x}%`, top: `${dot.y}%`, boxShadow: `${dot === this.state.dotSelected ? "0 0 0 5px rgba(21, 104, 237, 1)" : "0 0 0 5px rgba(240, 194, 12, 1)"}`}}
      className="dot" onClick={(evt) => {
        evt.stopPropagation();
        this.setState({
          dotSelected: dot
        });
      }}></div>
      })}
    </div>);
  return (
    <div className="App">
      {dots}
    </div>
  );
}
}

export default App;
