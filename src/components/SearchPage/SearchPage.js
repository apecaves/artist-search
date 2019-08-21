import React, { Component } from 'react';
import { getArtists } from '../../services/musicBrainsApi';
import Artists from '../Artists/Artists';

export default class SearchPage extends Component {
  state = {
    text: '',
    artists: []
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    const { text } = this.state;
    event.preventDefault();
    return getArtists(text)
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
        <Artists artistList={artists}/>
      </>
    );
  }
}
