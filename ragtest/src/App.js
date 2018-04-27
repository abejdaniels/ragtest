import React, { Component } from 'react';
import './App.css';
// import {Grid, Jumbotron } from 'react-bootstrap';
import BlockLoad from './components/BlockLoad';

class App extends Component {

  render() {
    return (
      <div id="body">
        <h1 id="title">EOS 10 Most Recent Blocks</h1>
        <div id="main">
          <div className="block">
            <p className="blockText">Block</p>
            <div className="blockContext"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
