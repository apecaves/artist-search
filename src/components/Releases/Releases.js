import React from 'react';
import PropTypes from 'prop-types';
import Release from './Release';

function Releases({ releaseList }) {
  const releaseItem = releaseList.map(release => {
    return (
      <li key={Release.id}>
        <Release release={release}/>
      </li>
    );
  });

  return <ul>{releaseItem}</ul>;
}

Releases.propTypes = {
  releaseList: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Releases;
