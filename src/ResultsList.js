import React from 'react';

class ResultsList extends React.Component {
  render() {
    return(
      <ul>
        {this.props.children}
      </ul>
    )
  }
}
export default ResultsList;
