import React, { PropTypes } from 'react';

const Search = ({ isDisabled, handleSearch }) => (
  <div className="search">
    <input
      type="search"
      disabled={isDisabled}
      placeholder="Github username"
      onKeyUp={handleSearch}
    />
  </div>
);

Search.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
export default Search;
