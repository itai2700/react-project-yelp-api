import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = { color: green };
  
    const stateColor = this.state.color;
  
  this.changeColor = this.changeColor.bind(this);

  function changeColor() {
    const newColor = this.stateColor === this.green ? {yellow} : {green};
    this.setState( {color:newColor} );
  }
  }
  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
      </div>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById('app'))