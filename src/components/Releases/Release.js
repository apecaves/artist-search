import React from 'react';
import PropTypes from 'prop-types';
import placeholder from '../../../assets/cover-art-placeholder.jpg';

function Release({ release }) {
  const imgURL = release['cover-art-archive'].front ? `http://coverartarchive.org/release/${release.id}/front` : placeholder;
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
    country: PropTypes.string.isRequired,
    'cover-art-archive': PropTypes.object.isRequired
  }).isRequired
};

export default Release;
