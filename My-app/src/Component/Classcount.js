import React, { Component } from 'react';

class Classcount extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: 0
     };
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate() {
    console.log('Component updated');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  decrement = () => {
    if (this.state.count > 0) {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
    }
  };

  render() {
    return (
      <div>
        <h1>Class Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}


export default Classcount;
