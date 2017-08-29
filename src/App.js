import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import Header from './Header';
import InputForms from './InputForms';

class App extends Component {
  componentDidMount() {
    // get data
  }

  render() {
    return (
      <div className="App">
        <Header />
        <InputForms />
      </div>
    );
  }
}

export default connect()(App);
