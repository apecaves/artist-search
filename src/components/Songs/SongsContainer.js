import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Songs from './Songs';
import { getSongList } from '../../services/musicBrainsApi';

export default class SongsContainer extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  state = {
    songs: []
  };

  componentDidMount = () => {
    return getSongList(this.props.match.params.id)
      .then(({ songs }) => {
        this.setState({ songs });
      });
  };

  render() {
    const { songs } = this.state;

    return (
      <>
        <h1>Songs from {this.props.match.params.releaseName}</h1>
        <Songs songList={songs} artistName={this.props.match.params.artistName}/>
      </>
    );
  }
}
