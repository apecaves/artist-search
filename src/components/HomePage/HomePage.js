import React, { Component } from 'react';
import { getArtists } from '../../services/musicBrainsApi';
import Artists from '../Artists/Artists';

export default class HomePage extends Component {
  state = {
    text: '',
    artists: [],
    page: 1,
    totalPages: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    const { text, page } = this.state;
    event.preventDefault();
    return getArtists(text, page)
      .then(({ artists }) => {
        this.setState({ artists, page: 1 });
      });
  };


  handlePageChange = (operator) => {
    const { text, page } = this.state;
    this.setState({ page: Number.parseInt(page + operator) });
    return getArtists(text, page + operator)
      .then(({ artists, count }) => {
        this.setState({ 
          artists: artists,
          totalPages: Math.ceil(count / 10)
        });
      });
  };

  render() {
    const { text, artists, totalPages } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={text}
            name="text"
            onChange={this.handleChange}
          />
          <button>Search</button>
        </form>
        <button onClick={() => this.handlePageChange(-1)} disabled={this.state.page === 1}>⬸</button>
        <button onClick={() => this.handlePageChange(1)} disabled={this.state.page === totalPages}>⤑</button>
    
        <Artists artistList={artists} />
      </>
    );
  }
}
