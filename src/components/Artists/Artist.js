import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Artist({ artist }) {
  return (
    <>
      <Link to="/:artist/:id">{artist.name}</Link>
      {/* <p>{artist.name}</p> */}
    </>
  );
}

Artist.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Artist;
