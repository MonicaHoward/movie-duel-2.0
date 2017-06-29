import React, { Component } from 'react';
import Header from  './Header.js';

import MovieDuel from './MovieDuel.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieDuel />
      </div>
    );
  }
}

export default App;
