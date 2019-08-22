import React, { Component } from 'react';
import Releases from './Releases';
import { getReleaseList } from '../../services/musicBrainsApi';
import PropTypes from 'prop-types';

export default class ReleasesContainer extends Component {
  static propTypes = {
    match: PropTypes.string.isRequired
  }

  state = {
    releases: [],
    page: 1
  }

  componentDidMount = () => {
    return getReleaseList(this.props.match.params.id)
      .then(({ releases }) => {
        this.setState({ releases });
      });
  }

  render() {
    const { releases } = this.state;

    return (
      <>
        <Releases releaseList={releases}/>
      </>
    );
  }

}
