import React from 'react';
import Input from './Input.js';
import ResultsList from './ResultsList.js'
import SearchResult from './SearchResult';




class MovieDuel extends React.Component {
  render() {
    return (
      <div className="movie-duel">

      <div className="duel">
        <Input />
        <ResultsList>
          <SearchResult />
        </ResultsList>
      </div>

      <div className="duel">
        <Input />
        <ResultsList>
          <SearchResult />
        </ResultsList>
      </div>

      </div>
    )
  }
}

export default MovieDuel;
