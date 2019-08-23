import React, { Component } from 'react';
import { getArtists } from '../../services/musicBrainsApi';
import Artists from '../Artists/Artists';
import Paging from '../Paging';

export default class HomePage extends Component {
  state = {
    text: '',
    artists: [],
    page: 1,
    totalPages: 0
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    const { text, page } = this.state;
    event.preventDefault();
    return getArtists(text, page)
      .then(({ artists, count }) => {
        this.setState({ artists, page: 1, totalPages: Math.ceil(count / 10) });
      });
  };

  handlePageChange = operator => {
    const { text, page } = this.state;
    this.setState({ page: Number.parseInt(page + operator) });
    return getArtists(text, page + operator)
      .then(({ artists, count }) => {
        this.setState({ artists, totalPages: Math.ceil(count / 10) });
      });
  };

  render() {
    const { text, artists, totalPages, page } = this.state;

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
        <Paging handlePageChange={this.handlePageChange} totalPages={totalPages} page={page}/>
        <Artists artistList={artists} />
      </>
    );
  }
}
