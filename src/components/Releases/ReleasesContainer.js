import React, { Component } from 'react';
import Releases from './Releases';
import { getReleaseList } from '../../services/musicBrainsApi';
import PropTypes from 'prop-types';

export default class ReleasesContainer extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  state = {
    releases: [],
    page: 1
  }

  componentDidMount = () => {
    const { page } = this.state;
    return getReleaseList(this.props.match.params.id, page)
      .then(({ releases }) => {
        this.setState({ releases });
      });
  }

  handleIncrement = () => {
    const { page } = this.state;
    this.setState({ page: Number.parseInt(page + 1) });
    return getReleaseList(this.props.match.params.id, page + 1)
      .then(({ releases }) => {
        this.setState({ releases });
      });
  };

  handleDecrement = () => {
    const { page } = this.state;
    this.setState({ page: Number.parseInt(page - 1) });
    return getReleaseList(this.props.match.params.id, page - 1)
      .then(({ releases }) => {
        this.setState({ releases });
      });
  };

  render() {
    const { releases } = this.state;

    return (
      <>
        <button onClick={this.handleDecrement}>⬸</button>
        <button onClick={this.handleIncrement}>⤑</button>
        <Releases releaseList={releases}/>
      </>
    );
  }

}
