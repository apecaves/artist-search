import React from 'react';
import PropTypes from 'prop-types';

function Release({ release }) {
  const imgURL = `http://coverartarchive.org/release/${release.id}/front`;
  return (
    <>
      <p>{release.title}</p>
      <p>{release.date}</p>
      <p>{release.country}</p>
      <img src={imgURL} />
    </>
  );
}

Release.propTypes = {
  release: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
  }).isRequired
};

export default Release;
