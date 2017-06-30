import React from 'react';
import $ from 'jquery';
import Input from './Input.js';
import ResultsList from './ResultsList.js';
import SearchResult from './SearchResult.js';


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

      console.log("hello", this.state.searchQuery)
      $.ajax({
        url: `https://api.themoviedb.org/3/search/movie?api_key=dec457859cd32502859fced3c3ca8ede&query=${this.state.searchQuery}`,
      })
      .done((data)=> {
        this.setState = ({
          allMovieData: data.results
        })
        console.log("this should be the only ajax call, right?", data.results);
      });
    }
  }

  render() {
    let displayThis;
    if (this.state.allMovieData.length > 0) {
      displayThis = this.state.allMovieData.map((movie) => {
        return (
          <li className="movie-result">
            <div className="movie-poster">
              {/* img tags goes here */}
            </div>
            <div className="movie-info">
              <h1 className="movie-title">Movie Title {this.state.movie.title}</h1>
              <p>Synopsis</p>
            </div>
            <div className="movie-score">
              <h2>SCORE:</h2>
              <h1>X</h1>
            </div>
          </li>
        )
      });

    }


    return (
      <div className="movie-search">
        <Input
          onChangeHandler={this.handleChange.bind((this))}
          onKeyUpHandler={this.handleKeyUp.bind((this))}
          searchQuery={this.state.searchQuery}
        />
          <ul>
            {displayThis}
          </ul>

      </div>
    )
  }
}

export default MovieSearch;
