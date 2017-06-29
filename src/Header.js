import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPage: 'movie duel'
    };
    this.updatePage = this.updatePage.bind(this);
  }

  updatePage(page) {
    this.setState(function () {
      return {
        selectedPage: page
      }
    });
  }

  render() {
    var nav = ['about', 'movie search', 'movie duel'];
    return (
      <div className="header">
        <h1>MOVIE DUEL</h1>
        <ul className="nav">
          {nav.map(function (page) {
            return (
              <li
                key={page}
                onClick={this.updatePage.bind(null, page)}
                style={page === this.state.selectedPage ? {borderBottom: '1px solid white'} : null}>
                {page}
              </li>
            )
          }, this)}
        </ul>
      </div>
    )
  }
}
export default Header;
