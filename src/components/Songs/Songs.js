import React from 'react';
import PropTypes from 'prop-types';
import Song from './Song';

function Songs({ songList, artistName }) {
  const songItem = songList.map(song => {
    return (
      <li key={song.title}>
        <Song song={song} artistName={artistName}/>
      </li>
    );
  });

  return <ul>{songItem}</ul>;
}

Songs.propTypes = {
  songList: PropTypes.arrayOf(PropTypes.object).isRequired,
  artistName: PropTypes.string.isRequired
};

export default Songs;
