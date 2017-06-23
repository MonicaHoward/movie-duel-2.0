import React from 'react';
import MovieSearch from './MovieSearch.js';

class MovieDuel extends React.Component {
  render() {
    return (
      <div>
        <MovieSearch />
        <MovieSearch />
      </div>
    )
  }
}

export default MovieDuel;
