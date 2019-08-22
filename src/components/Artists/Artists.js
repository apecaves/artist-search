import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

function Artists({ artistList }) {
  const artistItem = artistList.map(artist => {
    return (
      <li key={artist.id}>
        <Artist artist={artist}/>
      </li>
    );
  });

  return <ul>{artistItem}</ul>;
}

Artists.propTypes = {
  artistList: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Artists;
