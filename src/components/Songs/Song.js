import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Song({ song }) {
  return <Link to={`/song/${song.title}`}>{song.title}</Link>;
}

Song.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

export default Song;
