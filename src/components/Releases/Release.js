import React from 'react';
import PropTypes from 'prop-types';
import placeholder from '../../../assets/cover-art-placeholder.jpg';
import { Link } from 'react-router-dom';

function Release({ release }) {
  const imgURL = release['cover-art-archive'].front ? `http://coverartarchive.org/release/${release.id}/front` : placeholder;
  return (
    <>
      <Link to={`/release/${release.id}`}>{release.title}</Link>
      <p>{release.date}</p>
      <p>{release.country}</p>
      <Link to={`/release/${release.id}`}>
        <img src={imgURL} />
      </Link>
  
    </>
  );
}

Release.propTypes = {
  release: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    country: PropTypes.string,
    'cover-art-archive': PropTypes.object.isRequired
  }).isRequired
};

export default Release;
