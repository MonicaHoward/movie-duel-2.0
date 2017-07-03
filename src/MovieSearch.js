import React from 'react';
import $ from 'jquery';
import Input from './Input.js';
// import ResultsList from './ResultsList.js';
// import SearchResult from './SearchResult.js';


class MovieSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      allMovieData: [],
      searchQuery: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      searchQuery: evt.target.value
    })

  }

  handleKeyUp(evt) {
      if (evt.keyCode === 13) {
        console.log("observing", this.state.searchQuery);
        $.ajax({
          url: `https://api.themoviedb.org/3/search/movie?api_key=dec457859cd32502859fced3c3ca8ede&query=${this.state.searchQuery}`,
        })
        .done((data) => {
          this.setState({
            allMovieData: data.results
          })
          console.log("this should be the only ajax call, right?",data);
        });
      }
    }

  render() {
    return (
      <div className="movie-search">
        <Input
          onChangeHandler={this.handleChange.bind((this))}
          onKeyUpHandler={this.handleKeyUp.bind((this))}/>

      </div>
    )
  }
}

export default MovieSearch;
