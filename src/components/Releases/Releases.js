import React from 'react';
import PropTypes from 'prop-types';
import Release from './Release';

function Releases({ releaseList, artistName }) {
  const releaseItem = releaseList.map(release => {
    return (
      <li key={release.id}>
        <Release release={release} artistName={artistName}/>
      </li>
    );
  });

  return <ul>{releaseItem}</ul>;
}

Releases.propTypes = {
  releaseList: PropTypes.arrayOf(PropTypes.object).isRequired,
  artistName: PropTypes.string.isRequired
};

export default Releases;
