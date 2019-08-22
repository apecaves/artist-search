import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Song({ song, artistName }) {
  return <Link to={`/song/${artistName}/${song.title}`}>{song.title}</Link>;
}

Song.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired,
  artistName: PropTypes.string.isRequired
};

export default Song;
