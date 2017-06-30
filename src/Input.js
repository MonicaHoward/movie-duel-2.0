import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <form>
        <input
          placeholder="enter a movie title..."
          onChange={this.props.onChangeHandler}
          onKeyUp={this.props.onKeyUpHandler}/>
      </form>
    )
  }
}
export default Input;
