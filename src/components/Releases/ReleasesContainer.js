import React, { Component } from 'react';
import Releases from './Releases';
import { getReleaseList } from '../../services/musicBrainsApi';
import PropTypes from 'prop-types';
import Paging from '../Paging';

export default class ReleasesContainer extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  state = {
    releases: [],
    page: 1,
    totalPages: 0
  }

  componentDidMount = () => {
    const { page } = this.state;
    return getReleaseList(this.props.match.params.id, page)
      .then((res) => {
        this.setState({ releases: res.releases, page: 1, totalPages: Math.ceil(res['release-count'] / 10) });
      });
  }

  handlePageChange = operator => {
    const { page } = this.state;
    this.setState({ page: Number.parseInt(page + operator) });
    return getReleaseList(this.props.match.params.id, page + operator)
      .then((res) => {
        this.setState({ releases: res.releases, totalPages: Math.ceil(res['release-count'] / 10) });
      });
  };

  render() {
    const { releases, totalPages, page } = this.state;

    return (
      <>
        <Paging handlePageChange={this.handlePageChange} totalPages={totalPages} page={page}/>
        <Releases releaseList={releases} artistName={this.props.match.params.artistName}/>
      </>
    );
  }

}
