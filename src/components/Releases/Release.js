import React from 'react';
import PropTypes from 'prop-types';
import placeholder from '../../../assets/cover-art-placeholder.jpg';
import { Link } from 'react-router-dom';
import styles from './Release.css';

function Release({ release, artistName }) {
  const imgURL = release['cover-art-archive'].front
    ? `http://coverartarchive.org/release/${release.id}/front-250`
    : placeholder;

  return (
    <section className={styles.Release}>
      <Link className={styles.Release} to={`/release/${artistName}/${release.title}/${release.id}`}>{release.title}</Link>
      <p>{release.date}</p>
      <p>{release.country}</p>
      <Link to={`/release/${artistName}/${release.title}/${release.id}`}>
        <img src={imgURL} />
      </Link>
    </section>
  );
}

Release.propTypes = {
  release: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    country: PropTypes.string,
    'cover-art-archive': PropTypes.object.isRequired
  }).isRequired,
  artistName: PropTypes.string.isRequired
};

export default Release;

