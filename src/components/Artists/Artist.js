import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Artist({ artist }) {
  return (
    <>
      <Link to={`/artist/${artist.name}/${artist.id}`}>{artist.name}</Link>
    </>
  );
}

Artist.propTypes = {
  artist: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Artist;
