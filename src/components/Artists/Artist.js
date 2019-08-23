import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Artist.css';

function Artist({ artist }) {
  return (
    <section >
      <Link className={styles.Artist} to={`/artist/${artist.name}/${artist.id}`}>{artist.name}</Link>
    </section>
  );
}

Artist.propTypes = {
  artist: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Artist;
