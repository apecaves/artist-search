import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';
import styles from './Artists.css';

function Artists({ artistList }) {
  const artistItem = artistList.map(artist => {
    return (
      <li key={artist.id}>
        <Artist artist={artist}/>
      </li>
    );
  });

  return <ul className={styles.Artists}>{artistItem}</ul>;
}

Artists.propTypes = {
  artistList: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Artists;
