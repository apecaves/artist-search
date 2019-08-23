import React from 'react';
import PropTypes from 'prop-types';
import Release from './Release';
import styles from './Releases.css';

function Releases({ releaseList, artistName }) {
  const releaseItem = releaseList.map(release => {
    return (
      <li key={release.id}>
        <Release release={release} artistName={artistName} />
      </li>
    );
  });

  return <ul className={styles.Releases}>{releaseItem}</ul>;
}

Releases.propTypes = {
  releaseList: PropTypes.arrayOf(PropTypes.object).isRequired,
  artistName: PropTypes.string.isRequired
};

export default Releases;
