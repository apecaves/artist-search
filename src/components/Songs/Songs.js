import React from 'react';
import PropTypes from 'prop-types';
import Song from './Song';

function Songs({ songList }) {
  const songItem = songList.map(song => {
    return (
      <li key={song.title}>
        <Song song={song} />
      </li>
    );
  });

  return <ul>{songItem}</ul>;
}

Songs.propTypes = {
  songList: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Songs;
