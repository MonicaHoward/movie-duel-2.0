import React from 'react';
import MovieSearch from './MovieSearch.js';

class MovieDuel extends React.Component {
  render() {
    return (
      <div>
        <MovieSearch
          className="movie-search"/>
        <MovieSearch
          className="movie-search"/>
      </div>
    )
  }
}

export default MovieDuel;
