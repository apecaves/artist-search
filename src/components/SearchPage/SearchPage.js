import React, { Component } from 'react';
import { getArtists } from '../../services/musicBrainsApi';
import Artists from '../Artists/Artists';

export default class SearchPage extends Component {
  state = {
    text: '',
    artists: [],
    page: 1
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    const { text, page } = this.state;
    event.preventDefault();
    return getArtists(text, page).then(({ artists }) => {
      this.setState({ artists, page: 1 });
    });
  };

  handleIncrement = () => {
    const { text, page } = this.state;
    this.setState({ page: Number.parseInt(page + 1) });
    return getArtists(text, page + 1)
      .then(({ artists }) => {
        this.setState({ artists });
      });
  };

  handleDecrement = () => {
    const { text, page } = this.state;
    this.setState({ page: Number.parseInt(page - 1) });
    return getArtists(text, page - 1)
      .then(({ artists }) => {
        this.setState({ artists });
      });
  };

  render() {
    const { text, artists } = this.state;

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
        <button onClick={this.handleDecrement}>⬸</button>
        <button onClick={this.handleIncrement}>⤑</button>
        <Artists artistList={artists} />
      </>
    );
  }
}
