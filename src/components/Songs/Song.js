import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Song({ song }) {
  return <p>{song.title}</p>;
}

Song.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

export default Song;
