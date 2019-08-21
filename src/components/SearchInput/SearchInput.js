import React from 'react';
import PropTypes from 'prop-types';

function SearchInput({ text }) {
  return (
    <form>
      <input type="text" value={text} name={text} placeholder="make dynamic later"></input>
    </form>
  );

}

SearchInput.propTypes = {
  text: PropTypes.string.isRequired
};

export default SearchInput;
