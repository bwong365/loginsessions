import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    session: ''
  }
  
  componentDidMount() {
    fetch('/get-session').then(res => res.json()).then(session => {
      this.setState({
        session
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Congrats, you're logged in!!</h1>
        <p>{this.state.session}</p>
      </div>
    );
  }
}

export default App;
