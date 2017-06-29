import React, { Component } from 'react';

import Header from  './Header.js';
import MovieDuel from './MovieDuel.js';
import About from './About.js';
import './App.css';

class App extends Component {
  render() {
    return (
      // <Router>
        <div className="App">
          <Header />
            {/* <Link to="/movie-duel"> */}
              <MovieDuel />
            {/* </Link>
            <Link to="/about"> */}
              <About />
            {/* </Link>
            <Route path="/movie-duel" component={ MovieDuel } />
            <Route path="/movie-search" component={ MovieSearch } />
            <Route path="/about"  component={ About } /> */}
        </div>
      // </Router>

    );
  }
}

export default App;
