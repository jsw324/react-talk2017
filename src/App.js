import React, { Component } from 'react';
import logo from './palm-beach-tech.png';
import './App.css';
import { connect } from 'react-redux';

import Container from './Container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4>Welcome Palm Beach Tech!</h4>
        </div>
        <br/>
        <br />
        <Container />
      </div>
    );
  }
}

export default connect()(App);
