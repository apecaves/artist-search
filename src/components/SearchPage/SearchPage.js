import React, { Component } from 'react';

export default class SearchPage extends Component {
  state = {
    text: ''
    // empty array state
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // api call here! 
    // set state for empty array
    console.log(this.state);
  };

  render() {
    const { text } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={text}
          name="text"
          onChange={this.handleChange}
        />
        <button>Search</button>
      </form>
    );
  }
}
