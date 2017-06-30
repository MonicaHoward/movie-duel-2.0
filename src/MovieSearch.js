import React from 'react';
import Input from './Input.js';
import ResultsList from './ResultsList.js';
import SearchResult from './SearchResult.js';

class MovieSearch extends React.Component {
  render() {
    return (
      <div className="movie-search">
        <Input />
        <ResultsList>
          <SearchResult />
        </ResultsList>
      </div>
    )
  }
}

export default MovieSearch;
