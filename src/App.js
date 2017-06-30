import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Header from  './Header.js';
import MovieDuel from './MovieDuel.js';
import MovieSearch from './MovieSearch.js';
import About from './About.js';
import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
        <div className="App">
          <Header />

          <Route path="/movie-duel" component={ MovieDuel } />
          <Route path="/movie-search" component={ MovieSearch } />
          <Route path="/about"  component={ About } />
        </div>
      </Router>
    );
  }
}

export default App;
