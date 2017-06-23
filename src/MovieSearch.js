import React from 'react';

class MovieSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      movieSearch: ''
    };
  }
  handleChange(evt) {
    this.setState({
      movieSearch: evt.target.value
    })
  }

  render() {

    return (
      <form className="movie-search-component">
        <input
          type="text"
          className="movie-input"
          onChange={(evt) => this.handleChange(evt)}
          value={this.state.movieSearch}>
        </input>
        {this.setState.movieSearch}

      </form>
    )
  }
}

export default MovieSearch;
