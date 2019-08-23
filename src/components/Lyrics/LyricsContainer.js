import React, { Component } from 'react';
import Lyrics from './Lyrics';
import { getLyrics } from '../../services/lyricsApi';
import PropTypes from 'prop-types';

export default class LyricsContainer extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  state = {
    lyrics: ''
  };

  componentDidMount = () => {
    return getLyrics(
      this.props.match.params.artistName,
      this.props.match.params.title
    ).then(({ lyrics }) => {
      this.setState({ lyrics });
    });
  };

  render() {
    const { lyrics } = this.state;

    return (
      <>
        <Lyrics lyrics={lyrics} />
      </>
    );
  }
}
