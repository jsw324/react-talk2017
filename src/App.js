import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import Container from './Container';

class App extends Component {
  componentDidMount() {
    // get data
  }

  render() {
    return (
      <div className="App">
        <Container />
      </div>
    );
  }
}

export default connect()(App);
