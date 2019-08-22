import React from 'react';
import PropTypes from 'prop-types';
import Release from './Release';

function Releases({ releaseList }) {
  const releaseItem = releaseList.map(release => {
    return (
      <li key={release.id}>
        <Release release={release}/>
      </li>
    );
  });

  return <ul>{releaseItem}</ul>;
}

Releases.propTypes = {
  releaseList: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Releases;
