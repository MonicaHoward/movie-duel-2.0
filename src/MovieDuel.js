import React from 'react';


class Input extends React.Component {
  render() {
    return (
      <form>
        <input
          placeholder="enter a movie title..."/>
      </form>
    )
  }
}
class SearchResult extends React.Component {
  render() {
    return (
      <li className="movie-result">
        <div className="movie-poster">
          {/* img tags goes here */}
        </div>
        <div className="movie-info">
          <h1 className="movie-title">Movie Title</h1>
          <p>Synopsis</p>
        </div>
        <div className="movie-score">
          <h2>SCORE:</h2>
          <h1>X</h1>
        </div>
      </li>
    )
  }
}
class ResultsList extends React.Component {
  render() {
    return(
      <ul>
        {this.props.children}
      </ul>
    )
  }
}

class MovieDuel extends React.Component {
  render() {
    return (
      <div>
        <Input />
        <ResultsList>
          <SearchResult />
        </ResultsList>
      </div>
    )
  }
}

export default MovieDuel;
